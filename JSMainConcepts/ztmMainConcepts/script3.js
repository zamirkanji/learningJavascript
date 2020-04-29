let database = [
  {
    username: "Runninthruda6ix",
    password: "withmywoes"
  },
  {
    username: "Bob",
    password: "WoWisthebest"
  },
  {
    username: "Sam",
    password: "coloradoismyhome"
  },
  {
    username: "Braedon",
    password: "kratedandconstipated"
  }
];

let newsFeed = [
  {
    username: "Bob",
    timeline: "I'm playing WoW!"
  },
  {
    username: "Braedon",
    password: "I'm playing Tarkov!"
  },
  {
    username: "Sam",
    password: "I just moved to colorado!"
  }
];

function isUserValid(checkUser, checkPass) {
  for (i = 0; i < database.length; i++) {
    if (database[i].username === checkUser && database[i].password === checkPass) {
      return true; //stops when one is true instead of going through all 0-3 usernames/passwords
    }
  }
  return false; //if none are true, return false
}

function checkCredentials(checkUser, checkPass) {
  if (isUserValid(checkUser, checkPass)) { //if it returned true
    console.log(newsFeed);
  } else {
    alert("Sorry! Wrong username and password!");
  }
}

let checkUserName = prompt("What is your username?");
let checkPassword = prompt("What is your password?");

checkCredentials(checkUserName, checkPassword);

// checkUser and checkPass in checkCredentials are two paramaters being defined
// checkUserName and checkPassword are arguments used to match the parameters