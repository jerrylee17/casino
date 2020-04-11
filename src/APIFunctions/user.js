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
