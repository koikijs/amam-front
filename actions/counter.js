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
    client.get('http://chaus.herokuapp.com/apis/amam/absents', function(data, response) {
      var promises = [];
      var hrefList = data.items.map(item => item.member.href)
      var hrefSet = new Set();
      for(let href of hrefList) {
        hrefSet.add(href);
      }
      for(let href of hrefSet) {
        const url = 'http://chaus.herokuapp.com' + href
        promises.push(new Promise(function(resolve) {
          client.get(url, function(data, response) {
            //console.log(item, data);
            resolve({
              href,
              "icon"  : data.icon,
              "name"  : data.name,
              "group" : data.group.id
            });
          })
        }))
      }
      Promise.all(promises).then(memberMaster => {
        var members = []
        for(let item of data.items) {
            members.push(memberMaster.filter(member => member.href == item.member.href).pop())
        }
        dispatch(receiveAbsents(members));
        //console.log(values);
      });
    })
  }
}

export function postAbsent() {
  var Client = require('node-rest-client').Client;
  var client = new Client();
  return dispatch => {
    var absent = { data : {"member":"sideroad",
                           "date":"2015-03-23",
                           "stat":"paid",
                           "start":"09:00",
                           "end":"17:30",
                           "reason":"BadCondition"
                          },
                   headers : { "Content-Type": "application/json" }
                 }
    client.post('http://chaus.herokuapp.com/apis/amam/absents', absent, function(data, response) {
      console.log(33);
      dispatch(getAbsents());
    });
  }
}

function receiveAbsents(items) {
  return {
    type: RECEIVE_ABSENTS,
    items: items
  }
}
