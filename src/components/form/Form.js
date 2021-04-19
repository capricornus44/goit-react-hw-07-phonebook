import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { addContact } from '../../redux/phonebook/actions/contact-action';
import 'react-toastify/dist/ReactToastify.css';
import './Form.scss';

const initState = {
  name: '',
  number: '',
};

class Form extends Component {
  state = {
    ...initState,
  };

  handlerChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  handlerSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const { contacts } = this.props;
    const isExists = contacts.find(contact => contact.name === name);

    if (isExists) {
      toast.error('This contact is already exist');

      return this.setState({ ...initState });
    }

    this.props.addContact(name, number);
    this.setState({ ...initState });
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <form className="form" onSubmit={this.handlerSubmit}>
          <label className="form_label">
            Name
            <input
              className="form_input"
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              placeholder="John Smith"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handlerChange}
            />
          </label>
          <label className="form_label">
            Number
            <input
              className="form_input"
              type="tel"
              name="number"
              value={number}
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{3})"
              placeholder="+48-796-287-373"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              required
              onChange={this.handlerChange}
            />
          </label>
          <button type="submit" className="form_button">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = {
  addContact,
};

Form.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
  filter: PropTypes.string.isRequired,
  addContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
