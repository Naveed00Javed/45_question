let current_users: string[] = ["Naveed", "admin", "Junaid", "Rayan", "Faheem"];
let new_users: string[] = ["Shafiq", "Mazhar", "Faisal", "admin", "Waqar"];

new_users.forEach((newUser) => {
  if(
    current_users.some(
        (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    )

  ) {
    console.log(`${newUser} wil need to enter a new username.`);
  } else {
    console.log(`this username ${newUser} is available.`);
  }









});