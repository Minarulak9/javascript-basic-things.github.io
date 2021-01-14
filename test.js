let user = [
  {
    name: "minarulak",
    pass: "mak4256",
  },
  {
    name: "rocky",
    pass: "mak56",
  },
];
let authUser = (username, pass) => {
  for (i = 0; i < user.length; i++) {
    if (user[i].name == username && user[i].pass == pass) {
      console.log(username + "loged in......");
      return;
    }
  }
  console.log("incorect username and password");
};
let arr = [2,100,100,200,500,25,652,6546,54,54,2,145,356]
let mak= []
arr.forEach(ele=>{
  if (!mak.includes(ele)) {
    mak.push(ele)
  }
})
console.log(mak);
