// one START here=>
let inputText = document.querySelector(".text_input");
let alertbtn = document.querySelector(".alert");
let writeBtn = document.querySelector(".write");
let saveBtn = document.querySelector(".save");
let alertSavedBtn = document.querySelector(".alert-saved");
let clear = document.querySelector(".clear");
let alertData = (data) => {
  alert(data);
};
let writeData = (data, elm) => {
  elm.innerText += " " + data;
};
let save = (data) => {
  localStorage.setItem("text", data);
};
let clearDiv = (elm) => {
  elm.innerText = "";
};
alertbtn.addEventListener("click", () => {
  alertData(inputText.value);
});
writeBtn.addEventListener("click", () => {
  let div = document.querySelector(".empty-div");
  writeData(inputText.value, div);
});
saveBtn.addEventListener("click", () => {
  save(inputText.value);
});
alertSavedBtn.addEventListener("click", () => {
  let data = localStorage.getItem("text");
  alertData(data);
});
clear.addEventListener("click", () => {
  let div = document.querySelector(".empty-div");
  clearDiv(div);
});
// One is End here...
// Two START here=>
let hideBox = document.querySelector(".hide-box");
let hideText = document.querySelector(".hide-text");
let changeText = document.querySelector(".change-text");
let hideBoxFun = (box) => {
  box.classList.toggle("box-remove");
};
let hideTextFun = (elm) => {
  elm.classList.toggle("remove-h");
};
let changeTextFun = (elm) => {
  let text = prompt("Enter your new Text");
  if (text) {
    return text;
  }
  return elm.textContent;
};
hideBox.addEventListener("click", () => {
  let div = document.querySelector(".box");
  let res = hideBox.textContent == "Show box" ? "Hide box" : "Show box";
  hideBox.textContent = res;
  hideBoxFun(div);
});
hideText.addEventListener("click", () => {
  let text = document.querySelector(".h");
  let res = hideText.textContent == "Show text" ? "Hide text" : "Show text";
  hideText.textContent = res;
  hideTextFun(text);
});
changeText.addEventListener("click", () => {
  let text = document.querySelector(".h");
  text.innerHTML = changeTextFun(text);
});
// tow is End here...
// three START here=>
let animate = document.querySelector(".animate");
let changeColor = document.querySelector(".clr-change");
animate.addEventListener("click", () => {
  let box = document.querySelector(".inside-box");
  box.classList.add("inside-box-animation");
  setTimeout(() => {
    box.classList.remove("inside-box-animation");
  }, 2000);
});
changeColor.addEventListener("click", () => {
  let randomColor = () => {
    return Math.floor(Math.random() * 256);
  };
  let box = document.querySelector(".inside-box");
  box.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
});
// three is End here...
// four START here=>
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}
let showMsg = (msg) => {
  //show error masseges
  let p = document.querySelector(".msg");
  p.innerHTML = msg;
  p.classList.add("show-msg");
  setTimeout(() => {
    p.classList.remove("show-msg");
  }, 2000);
};
let data = [];
let authUser = () => {};
// login funtion------------------
let login = document.querySelector(".login");
login.addEventListener("click", () => {
  let username = document.querySelector("#username").value.trim();
  let pass = document.querySelector("#password").value.trim();
  if (username && pass) {
    let users = localStorage.getItem("data");
    if (users != null) {
      data = JSON.parse(users);
      for (let i = 0; i < data.length; i++) {
        if (data[i].username == username && data[i].password == pass) {
          loginSucsess("login sucsessfuly done");
          return;
        } else if (data[i].username == username && data[i].password != pass) {
          loginFaild("password is incurect");
          return;
        }
      }
      loginFaild("you don't have account.. please create new account");
    } else {
      loginFaild("you don't have account.. please create new account");
    }
  } else {
    showMsg("please fill the form");
  }
});
function loginSucsess(msg) {
  let loginPage = document.querySelector(".login-page");
  let profilePage = document.querySelector(".profile-page");
  let username = document.querySelector("#username");
  let pass = document.querySelector("#password");
  let nameEle = document.querySelector(".user-name");
  let passEle = document.querySelector(".user-password");
  showMsg(msg);
  loginPage.classList.add("hide");
  profilePage.classList.remove("hide");
  nameEle.innerHTML = `user name is : ${username.value.trim()}`;
  passEle.innerHTML = `user password is : ${pass.value.trim()}`;
  username.value = "";
  pass.value = "";
}
function loginFaild(msg) {
  showMsg(msg);
}
function storeData(username, pass) {
  let users = localStorage.getItem("data");
  if (users == null) {
    data.push(new User(username, pass));
  } else {
    data = JSON.parse(users);
    data.push(new User(username, pass));
  }
  localStorage.setItem("data", JSON.stringify(data));
}

// loging out function-------------------
let logOut = document.querySelector(".log-out");
logOut.addEventListener("click", () => {
  let loginPage = document.querySelector(".login-page");
  let profilePage = document.querySelector(".profile-page");
  showMsg("loged out.....");
  loginPage.classList.remove("hide");
  profilePage.classList.add("hide");
});
// password show function----------
let showPass = document.querySelector(".show-pass");
showPass.addEventListener("click", () => {
  let pass = document.querySelector("#password");
  if (pass.getAttribute("type") == "password") {
    pass.setAttribute("type", "text");
    showPass.innerHTML = "hide password";
  } else {
    pass.setAttribute("type", "password");
    showPass.innerHTML = "show password";
  }
});

// create new account function-------------
let createNew = document.querySelector(".create-new");
createNew.addEventListener("click", () => {
  let username = document.querySelector("#username").value.trim();
  let pass = document.querySelector("#password").value.trim();
  if (username && pass) {
    let users = localStorage.getItem("data");
    if (users == null) {
      createAccount();
    } else {
      data = JSON.parse(users);
      for (let i = 0; i < data.length; i++) {
        if (data[i].username == username) {
          showMsg("username is allredy taken");
          return;
        }
      }
      createAccount();
    }
  } else {
    showMsg("please fill the form");
  }
});
function createAccount() {
  let username = document.querySelector("#username");
  let pass = document.querySelector("#password");
  storeData(username.value.trim(), pass.value.trim());
  showMsg("account created sucsesfuly done");
  let loginPage = document.querySelector(".login-page");
  let profilePage = document.querySelector(".profile-page");
  loginPage.classList.add("hide");
  profilePage.classList.remove("hide");
  let nameEle = document.querySelector(".user-name");
  let passEle = document.querySelector(".user-password");
  nameEle.innerHTML = `user name is : ${username.value.trim()}`;
  passEle.innerHTML = `user password is : ${pass.value.trim()}`;
  username.value = "";
  pass.value = "";
}
