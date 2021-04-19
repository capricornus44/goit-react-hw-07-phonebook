import { combineReducers } from "redux"
import { items, filter } from "../reducers/contact-reducer"

export default combineReducers({
  items,
  filter,
})
