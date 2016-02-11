export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const RECEIVE_ABSENTS = 'RECEIVE_ABSENTS'

export function increment() {
  return {
    type: INCREMENT_COUNTER
  }
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  }
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState()

    if (counter % 2 === 0) {
      return
    }

    dispatch(increment())
  }
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, delay)
  }
}

export function getAbsents() {
  var Client = require('node-rest-client').Client;
  var client = new Client();
  return dispatch => {
    client.get('http://amam-api.herokuapp.com/absents', function(data, response) {
      var promises = []
      for(let item of data.items) {
        promises.push(new Promise(function(resolve) {
          client.get('http://amam-api.herokuapp.com' + item.member.href), function(data, response) {
            resolve(data.items)
          }
        }))
      }
      Promise.all([true, promises]).then(values => {
        console.log(values);
        dispatch(receiveAbsents(values));
      });
    })
  }
}

function receiveAbsents(items) {
  return {
    type: RECEIVE_ABSENTS,
    items: items
  }
}
