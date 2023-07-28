console.log("users js");

async function deleteOneUser(userId) {
  await fetch(`api/users/${userId}`, { method: "DELETE" })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

async function changeRole(userId) {
  await fetch(`api/users/premium/${userId}`, { method: "POST" })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
