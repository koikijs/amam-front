import { RECEIVE_ABSENTS } from '../actions/counter'

export default function absents(state = {items: []}, action) {
  switch (action.type) {
    case RECEIVE_ABSENTS:
      console.log(444);
      return Object.assign({}, state, {
        items: action.items
      })
    default:
      return state
  }
}
