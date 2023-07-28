console.log("users js");

function deleteOneUser(userId) {
  fetch(`api/users/${userId}`, { method: "DELETE" })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function changeRole(userId) {
  fetch(`api/users/premium/${userId}`, { method: "POST" })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
