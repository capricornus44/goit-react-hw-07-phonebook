import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterContact } from '../../redux/phonebook/actions/contact-action';
import './Filter.scss';

const Filter = ({ filter, filterContact }) => {
  return (
    <div className="filter_container">
      <label className="filter_label">
        Filter
        <input
          className="filter_input"
          type="text"
          name="filter"
          placeholder="Find contacts by name"
          value={filter}
          onChange={filterContact}
        />
      </label>
    </div>
  );
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = {
  filterContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    }).isRequired,
  ),
  filter: PropTypes.string.isRequired,
  filterContact: PropTypes.func.isRequired,
};
