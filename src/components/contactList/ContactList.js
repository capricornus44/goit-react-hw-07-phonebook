import { connect } from "react-redux"
import PropTypes from "prop-types"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import SingleContact from "../singleContact/SingleContact"
import "./ContactList.scss"

const ContactList = ({ contacts }) => {
  return (
    <TransitionGroup component="ul" className="contact_list">
      {contacts.map(({ id }) => (
        <CSSTransition key={id} classNames="list_item" timeout={250}>
          <SingleContact id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}
const mapStateToProps = (state) => {
  const { items, filter } = state.contacts
  const normalizedFilter = filter.toLowerCase()

  const getMatchingContact = items.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter))
  return {
    contacts: getMatchingContact,
  }
}

export default connect(mapStateToProps)(ContactList)

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
}
