const defaultUsers = [
  { name: "Ahmad" },
  { name: "Ali" },
  { name: "Sara" },
  { name: "Lana" }
];

const results = document.getElementById("results");
const searchBar = document.querySelector(".searchbar");
const clearButton = document.querySelector(".clearbutton");

if (localStorage.getItem("users") === null) {
  localStorage.setItem("users", JSON.stringify(defaultUsers));
}

function renderUsers(usersArray) {
  results.innerHTML = "";
  if (usersArray.length === 0) {
    const notfound = document.createElement("p");
    notfound.textContent = "No results found";
    notfound.style.textAlign = "center"; 
    results.appendChild(notfound);
    return;
  }

  for (let i = 0; i < usersArray.length; i++) {
    const element = usersArray[i];

    const div = document.createElement("div");
    const div2 = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("p");
    const button = document.createElement("button");

    div.className = "card";
    div2.className = "cardleft";
    name.textContent = element.name;
    
    button.innerHTML = `<i class="fa-solid fa-x"></i> Delete`;
    button.className = "delete-btn";
    
    img.src = "/img/profile.png";

    div2.appendChild(img);
    div2.appendChild(name);
    div.appendChild(div2);
    div.appendChild(button);
    results.appendChild(div);

    button.addEventListener("click", () => {
      let currentUsers = JSON.parse(localStorage.getItem("users"));
      let newUsersArray = [];

      for (let j = 0; j < currentUsers.length; j++) {
        if (currentUsers[j].name !== element.name) {
          newUsersArray.push(currentUsers[j]);
        }
      }

      localStorage.setItem("users", JSON.stringify(newUsersArray));

      if (searchBar.value === "") {
        renderUsers(newUsersArray);
      } else {
        triggerSearch();
      }
    });
  }
}

function triggerSearch() {
  const searchValue = searchBar.value.toLowerCase();
  const allUsers = JSON.parse(localStorage.getItem("users"));
  let matchedUsers = [];

  for (let i = 0; i < allUsers.length; i++) {
    const userName = allUsers[i].name.toLowerCase();
    
    if (userName.includes(searchValue)) {
      matchedUsers.push(allUsers[i]);
    }
  }
  
  renderUsers(matchedUsers);
}

searchBar.addEventListener("input", () => {
    localStorage.setItem("lastSearch", searchBar.value);
  triggerSearch();
});

clearButton.addEventListener("click", () => {
  searchBar.value = "";
  localStorage.removeItem("lastSearch");
  const allUsers = JSON.parse(localStorage.getItem("users"));
  renderUsers(allUsers);
});
const savedSearchWord = localStorage.getItem("lastSearch");
if (savedSearchWord) {
  searchBar.value = savedSearchWord;
  triggerSearch();
} else {
  const initialUsers = JSON.parse(localStorage.getItem("users"));
  renderUsers(initialUsers);
}
