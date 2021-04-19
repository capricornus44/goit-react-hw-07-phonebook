import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/phonebook/actions/contact-action';
import './SingleContact.scss';

const SingleContact = ({ name, number, deleteContact }) => {
  return (
    <li className="contact">
      <h4>{name}</h4>
      <p className="contact_number">{number}</p>
      <button className="delete_button" type="button" onClick={deleteContact}>
        <i className="fa fa-trash" aria-hidden="true" />
      </button>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const contact = state.contacts.items.find(
    contact => contact.id === ownProps.id,
  );
  return { ...contact };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteContact: () => dispatch(deleteContact(ownProps.id)),
});

SingleContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleContact);
