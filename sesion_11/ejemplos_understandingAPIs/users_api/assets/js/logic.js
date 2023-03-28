const apiUserURL = "https://jsonplaceholder.typicode.com/users";

async function getUserData() {
  const resUser_Data = await fetch(apiUserURL);
  const transformUser_Data = await resUser_Data.json();
  return transformUser_Data;
}
async function showUserData() {
  const user = await getUserData();
  const dataUserTemplate = `
    <div class="user">
      <h3>${user.id}</h3>
      <p>${user.name}</p>
    </div>
  `;

const dataUserSection = document.querySelector(".data_user")
  if (dataUserSection) {
    dataUserSection.innerHTML = dataUserTemplate;
  } else {
    console.error("Could not find element 'user'");
  }
}

showUserData();
