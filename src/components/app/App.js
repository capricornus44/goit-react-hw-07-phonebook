import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { ToastContainer } from 'react-toastify';
import { storageContact } from '../../redux/phonebook/actions/contact-action';
import Form from '../form/Form';
import Filter from '../filter/Filter';
import ContactList from '../contactList/ContactList';
import './App.scss';

class App extends Component {
  state = {
    animation: false,
  };

  componentDidMount() {
    this.setState(state => ({
      animation: !state.animation,
    }));

    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.props.storageContact(JSON.parse(savedContacts));
    }
  }

  componentDidUpdate(prevProps) {
    const { contacts } = this.props;
    if (prevProps.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    return (
      <div className="app_container">
        {/* APPLICATION TITLE */}
        <CSSTransition
          in={true}
          appear={true}
          classNames="title_slider"
          timeout={500}
          unmountOnExit
        >
          <h1 className="app_title">Phonebook</h1>
        </CSSTransition>

        {/* APPLICATION FORM */}
        <section className="section">
          <Form />
        </section>

        {/* CONTACTS FILTER */}
        <CSSTransition
          in={this.props.contacts.length > 1}
          classNames="filter_animation"
          timeout={250}
          unmountOnExit
        >
          <section className="section">
            <Filter />
          </section>
        </CSSTransition>

        {/* CONTACTS LIST */}
        <ContactList />

        {/* ALERT NOTIFICATION */}
        <ToastContainer autoClose={2500} position="top-right" type="error" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});
const mapDispatchToProps = {
  storageContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
