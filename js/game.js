const usernamegame = document.querySelector(".usernamegame");
const url = "http://localhost:3000";

const { data } = await axios.get(`${url}/users`);
const currentUser = data[data.length - 1];
usernamegame.innerHTML = currentUser.name;
