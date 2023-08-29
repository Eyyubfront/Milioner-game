const userNameInput = document.querySelector(".userNameInput");
const form = document.querySelector("#form");
const userNameButton = document.querySelector(".stratrt");
const url = "http://localhost:3000";
let userName = "";

userNameInput.addEventListener("keyup", (e) => {
  userName = e.target.value;
});

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   usernamegame.innerText = userName;
// });

const { data } = await axios.get(`${url}/users`);


const setUser = () => {
  if (userName.trim()) {
    const isSingle = data.filter(
      (user) => user.name.trim().toLowerCase() === userName.trim().toLowerCase()
    );

    if (!isSingle.length) {
      axios.post(`${url}/users`, { name: userName });
      window.location.href = "game.html";
    } else {
      alert("bele bir istifadeci var");
    }
  } else {
    alert("istifadeci adi bos buraxila bilmez");
  }

  userNameInput.value = "";
};

userNameButton.addEventListener("click", (e) => {
  e.preventDefault();
  setUser();
});
