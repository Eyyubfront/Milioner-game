const usernamegame = document.querySelector(".usernamegame");
const url = "http://localhost:3000";

const { data } = await axios.get(`${url}/users`);
const currentUser = data[data.length - 1];
usernamegame.innerHTML = currentUser.name;

const questions1 = document.querySelectorAll(".questions1");
const questions2 = document.querySelectorAll(".questions2");
const questions3 = document.querySelectorAll(".questions3");
const questions4 = document.querySelectorAll(".questions4");

questions1.forEach((question) => {
  question.onclick = () => {
    alert("duzdu");
  };
});


questions2.forEach((question) => {
  question.onclick = () => {
    alert("eror:ABŞ");
  };
});



questions3.forEach((question) => {
  question.onclick = () => {
    alert("eror:ABŞ");
  };
});



questions4.forEach((question) => {
  question.onclick = () => {
    alert("eror:ABŞ");
  };
});
