/**
 * Cart Reducer
 * @param  {Object} state
 * @param  {Object} action
 */
const CartReducer = (state = {
  loading: false,
  data: {}
}, action) => {
  switch (action.type) {
    case 'REQUEST_ADD_TO_CART':
      return Object.assign({}, state, {loading: true})
      break
    case 'RECEIVE_ADD_TO_CART':
      return Object.assign({}, state, {loading: false})
      break
    case 'REQUEST_CART':
      return Object.assign({}, state, {loading: true})
      break
    case 'RECEIVE_CART':
      return Object.assign({}, state, {
        loading: false,
        data: action.payload
      })
      break
    default:
      return state
  }
}
export default CartReducer