

import $ from 'jquery';

export function getUsers(callback){
  $.post("http://localhost:5000/api/getUsers")
    .then(result => {
      return callback(result)
    })
}

// iterates 'no_of_warns' in the player table
export function warnUser(username, callback) {
  $.post(
    "http://localhost:5000/api/warn",
    {
      username: username
    }
  ).then(result => {
    return callback(result);
  })
}

// sets banned to 1 in the player table
export function banUser(username, callback) {
  $.post(
    "http://localhost:5000/api/ban",
    {
      username: username
    }
  ).then(result => {
    return callback(result);
  })
}

// sets banned to 0 in the player table
export function unbanUser(username, callback) {
  $.post(
    "http://localhost:5000/api/unban",
    {
      username: username
    }
  ).then(result => {
    return callback(result);
  })
} 