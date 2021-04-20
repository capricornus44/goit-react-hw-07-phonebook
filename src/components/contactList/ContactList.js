import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { getFilteredContact } from '../../redux/phonebook/selectors/contact-selectors';
import SingleContact from '../singleContact/SingleContact';
import './ContactList.scss';

const ContactList = ({ contacts }) => {
  return (
    <TransitionGroup component="ul" className="contact_list">
      {contacts.map(({ id }) => (
        <CSSTransition key={id} classNames="list_item" timeout={250}>
          <SingleContact id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

const mapStateToProps = state => {
  return {
    contacts: getFilteredContact(state),
  };
};

export default connect(mapStateToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
};
