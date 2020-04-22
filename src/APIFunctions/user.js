import $ from 'jquery';

export function isAuthenticated() {
  let token;
  if (window.localStorage) {
    if (
      window.localStorage.getItem("jwt") &&
      window.localStorage.getItem("jwt-expire") > Date.now()
    ) {
      token = window.localStorage.getItem("jwt");
    } else {
      token = "";
    }
  } else {
    token = "";
  }
  return token;
}

// Only call this function in a protected route to get the current user
export function currentUser() {
  let token = window.localStorage.getItem("jwt");
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload).user.username;
}

export function currentUserEmail() {
  let token = window.localStorage.getItem("jwt");
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload).user.email;
}

export function loginUser(username, password, callback) {
  $.post("http://localhost:5000/api/login", {
    username: username,
    password: password,
  }).then((result) => {
    if (result.token) {
      localStorage.setItem("jwt", result.token);
      localStorage.setItem("jwt-expire", Date.now() + 2 * 60 * 60 * 1000);
      window.location.reload(false);
    } else if (result.banned) {
      return callback('userBanned');
    } else if (result.error) {
      return callback('passwordError');
    } else {
      return callback('usernameError');
    }
  });
}

export function registerUser(username, password, email, admin, callback) {
  $.post(
    "http://localhost:5000/api/register",
    {
      username: username,
      email: email,
      password: password,
      admin: admin
    },
    (data) => {
      console.log(data);
    }
  ).then((result) => {
    if (result.token) {
      localStorage.setItem("jwt", result.token);
      localStorage.setItem("jwt-expire", Date.now() + 2 * 60 * 60 * 1000);
      window.location.reload(false);
    }
    else if (result.usernameError) {
      return callback('usernameError');
    }
    else if (result.emailError) {
      return callback('emailError');
    }
    else if (result.adminError) {
      return callback('adminError');
    }
  });
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

export function dailyReward(callback) {
  let user = currentUser();
  $.post(
    "http://localhost:5000/api/last_login",
    {
      username: user
    }
  ).then(result => {
    return callback(result);
  })
}

export function updateLogin(callback) {
  let user = currentUser();
  $.post(
    "http://localhost:5000/api/update_login",
    {
      username: user
    }
  ).then(result => {
    return callback(result);
  })
}

export function updateCredit(user, amount, callback) {
  $.post(
    "http://localhost:5000/api/update_credit",
    {
      username: user,
      amount: amount
    }
  ).then(result => {
    return callback(result);
  })
}

export function getCredit(user, callback) {
  $.post(
    "http://localhost:5000/api/get_credit",
    {
      username: user
    }
  ).then(result => {
    return callback(result);
  })
}

export function changeUser(userInfo, callback) {
  $.post(
    "http://localhost:5000/api/change-user",
    {
      userInfo: userInfo
    }
  ).then(result => {
    if (result.token) {
      localStorage.setItem("jwt", result.token);
      localStorage.setItem("jwt-expire", Date.now() + 2 * 60 * 60 * 1000);
      window.location.reload(true);
    }
    else if (result.passwordError) {
      return callback('passwordError');
    }
    else if (result.usernameError) {
      return callback('usernameError');
    }
    else if (result.emailError) {
      return callback('emailError');
    }
  });
}

export function deleteUser(user, callback) {
  $.post(
    "http://localhost:5000/api/delete-user",
    {
      user: user
    }
  ).then(result => {
    if (result.token) {
      localStorage.removeItem("jwt");
      localStorage.removeItem("jwt-expire");
      window.location.reload(false);
    }
    else if (result.passwordError) {
      return callback('passwordError');
    }
  });
}

export async function checkValidAdmin(username, callback) {
  $.post(
    "http://localhost:5000/api/check_admin",
    {
      username: username
    }
  ).then(result => {
    return callback(result);
  });
}