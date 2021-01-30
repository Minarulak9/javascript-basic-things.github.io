// one START here=>
let inputText = document.querySelector(".text_input");
let alertbtn = document.querySelector(".alert");
let writeBtn = document.querySelector(".write");
let saveBtn = document.querySelector(".save");
let alertSavedBtn = document.querySelector(".alert-saved");
let clear = document.querySelector(".clear");
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
  alert(inputText.value);
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
  alert(data);
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

// four is End here...
// five START here=>
let password = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "~",
  "!",
  "@",
  "#",
  "$",
  "&",
  "/",
  "-",
  "+",
  "?",
]; //this is password list array
let savedPassword = []; //here your used password saved
let generatePass = (arr) => {
  //thsi fuction generate a randome index upto password array lenght
  let randomIndex = () => {
    return Math.floor(Math.random() * arr.length);
  };
  let pass = "";
  let i = 0;
  while (i < 14) {
    pass += password[randomIndex()];
    i++;
  }
  return pass;
};
let generateBtn = document.querySelector(".generate");
let passList = document.querySelector(".password-list");
createEle();
generateBtn.addEventListener("click", () => {
  createEle();
});
function createEle() {
  let li = document.createElement("li");
  let input = document.createElement("input");
  let btn = document.createElement("button");
  input.classList.add("pass");
  input.value = generatePass(password);
  input.setAttribute("readonly", "readonly");
  btn.classList.add("copy-btn");
  btn.innerHTML = "Copy";
  passList.appendChild(li);
  li.appendChild(input);
  li.appendChild(btn);
}
passList.addEventListener("click", (e) => {
  //copy btn working (copy the text,saved to the localstorage)
  if (e.target.className == "copy-btn") {
    e.target.parentElement.firstElementChild.select();
    document.execCommand("copy");
    let savedData = localStorage.getItem("savedPass");
    if (savedData == null) {
      savedPassword = [];
      savedPassword.push(e.target.parentElement.firstElementChild.value);
      localStorage.setItem("savedPass", JSON.stringify(savedPassword));
    } else {
      savedPassword = JSON.parse(savedData);
      if (
        savedPassword.indexOf(e.target.parentElement.firstElementChild.value) ==
        -1
      ) {
        savedPassword.push(e.target.parentElement.firstElementChild.value);
        localStorage.setItem("savedPass", JSON.stringify(savedPassword));
      }
    }
    let lis = Array.from(e.target.parentElement.parentElement.children);
    lis.forEach((li) => {
      li.lastElementChild.innerText = "Copy";
    });
    e.target.innerText = "Copied";
  }
});
let savedPassBtn = document.querySelector(".saved");
let savedPassCon = document.querySelector(".saved-pass");
savedPassBtn.addEventListener("click", () => {
  savedPassCon.style.display = "block";
  updateSavedPass();
});
window.addEventListener("click", (e) => {
  let section = document.querySelector("#five");
  let con = document.querySelector(".five");
  let close = document.querySelector(".five .close").firstElementChild;
  let ul = document.querySelector(".password-list");
  if (
    e.target == section ||
    e.target == close ||
    e.target == con ||
    e.target == ul
  ) {
    savedPassCon.style.display = "none";
  }
});
function updateSavedPass() {
  //update saved password
  let savedData = localStorage.getItem("savedPass");
  if (savedData == null) {
    savedPassword = [];
  } else {
    savedPassword = JSON.parse(savedData);
    var ul = document.querySelector(".saved-list");
    ul.innerHTML = "";
    savedPassword.forEach((pass) => {
      let li = document.createElement("li");
      let span = document.createElement("span");
      let deleteBtn = document.createElement("button");
      deleteBtn.innerText = "delete";
      span.innerText = pass;
      deleteBtn.className = "delete copy-btn";
      ul.appendChild(li);
      li.appendChild(span);
      li.appendChild(deleteBtn);
    });
  }
}
savedPassCon.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    savedPassword = JSON.parse(localStorage.getItem("savedPass"));
    savedPassword.splice(
      savedPassword.indexOf(e.target.parentElement.firstElementChild.innerText),
      1
    );
    localStorage.setItem("savedPass", JSON.stringify(savedPassword));
    let ul = document.querySelector(".saved-list");
    e.target.parentElement.style.backgroundColor = "white";
    e.target.parentElement.style.color = "white";
    e.target.style.backgroundColor = "white";
    e.target.style.color = "white";
    setTimeout(() => {
      ul.removeChild(e.target.parentElement);
    }, 300);
  }
});
// five is End here...
// six START here=>
const quizes = [
  {
    question: "Which of the following is correct about features of JavaScript?",
    opt1: "JavaScript is a lightweight, interpreted programming language.",
    opt2: "JavaScript is designed for creating network-centric applications.",
    opt3: "JavaScript is complementary to and integrated with Java.",
    opt4: "All of the above.",
    ans: "opt4",
  },
  {
    question:
      "Which of the following function of Number object returns a string value version of the current number?",
    opt1: " toString()",
    opt2: "toFixed()",
    opt3: "toLocaleString()",
    opt4: "toPrecision()",
    ans: "opt1",
  },
  {
    question:
      " Which of the following function of Array object joins all elements of an array into a string?",
    opt1: "map()",
    opt2: "split()",
    opt3: "join()",
    opt4: "concat()",
    ans: "opt3",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    opt1: "<js>",
    opt2: "<script>",
    opt3: "<javascript>",
    opt4: "<scripting",
    ans: "opt2",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    opt1: "msgBox('Hello World')",
    opt2: "msg('Hello World')",
    opt3: "alertBox('Hello World')",
    opt4: "alert('Hello World')",
    ans: "opt4",
  },
  {
    question: "How do you create a function in JavaScript?",
    opt1: "let myFunction = function(){----}",
    opt2: "function:myFunction(){----}",
    opt3: "function myFunction(){----}",
    opt4: "Both 'a' and 'c'",
    ans: "opt4",
  },
  {
    question: "How do you call a function named 'myFunction'?",
    opt1: "myFunction()",
    opt2: "calling myFunction()",
    opt3: "call function myFunction()",
    opt4: "myFunction call()",
    ans: "opt1",
  },
  {
    question: "How to write an IF statement in JavaScript?",
    opt1: "if i=5",
    opt2: "if i==5 then",
    opt3: "if(i==5)",
    opt4: "if (i=5) then",
    ans: "opt3",
  },
  {
    question: "How does a WHILE loop start?",
    opt1: "while(i>10)",
    opt2: "while i=1 to 10",
    opt3: "while{i==10}",
    opt4: "while(i>10;i++)",
    ans: "opt1",
  },
  {
    question: "How can you add a comment in a JavaScript?",
    opt1: "#this is a comment",
    opt2: "//this is a commnet",
    opt3: "<!--this is a comment-->",
    opt4: "^^this is a comment",
    ans: "opt2",
  },
  {
    question: "Which type of JavaScript language is?",
    opt1: "Object-Oriented",
    opt2: "Object-Based",
    opt3: "Assembly-language",
    opt4: "High-level",
    ans: "opt2",
  },
  {
    question:
      " When interpreter encounters an empty statements, what it will do ?",
    opt1: "Shows a warning",
    opt2: "Prompts to complete the statement",
    opt3: "Throws an error",
    opt4: "Ignores the statements",
    ans: "opt4",
  },
  {
    question: "The 'function' and ' var' are known as?",
    opt1: "Keywords",
    opt2: "Data types",
    opt3: "Declaration statements",
    opt4: "Prototypes",
    ans: "opt3",
  },
  {
    question:
      "In the JavaScript, which one of the following is not considered as an error?",
    opt1: "Syntax error",
    opt2: "Missing of semicolons",
    opt3: "Division by zero",
    opt4: "Missing of Bracket",
    ans: "opt3",
  },
  {
    question: "Which one of the following is an ternary operator?",
    opt1: "?",
    opt2: "??",
    opt3: "!",
    opt4: "+",
    ans: "opt1",
  },
];
let currentQuestion = 0;
const question = document.querySelector(".question");
const options = document.querySelectorAll(".option");
const submit = document.querySelector(".submit-quize");
const score = document.querySelector(".score");
const opt = document.querySelectorAll("input[type ='radio']");
const resetQuize = document.querySelector(".reset_quize");
const loadQuestion = () => {
  let quize = quizes[currentQuestion];
  question.textContent =
    currentQuestion + 1 + "/" + quizes.length + ": " + quize.question;
  options[0].textContent = quize.opt1;
  options[1].textContent = quize.opt2;
  options[2].textContent = quize.opt3;
  options[3].textContent = quize.opt4;
};
const endQuize = () => {
  const rightq = document.querySelector(".right");
  const wrongq = document.querySelector(".wrong");
  const tottalScore = document.querySelector(".tottal_score");
  const persentage = ((right / quizes.length) * 100).toFixed(2);
  submit.setAttribute("disabled", "disabled");
  score.style.display = "block";
  rightq.textContent = `your right ans is: ${right} `;
  wrongq.textContent = `your wrong ans is: ${wrong} `;
  tottalScore.textContent = `your tottal score is: ${persentage} %`;
  rightq.style.color = "green";
  wrongq.style.color = "red";
};
let right = 0,
  wrong = 0;
const checkQuize = () => {
  opt.forEach((option) => {
    if (option.checked) {
      let quize = quizes[currentQuestion];
      if (quize.ans == option.id) {
        right++;
      } else {
        wrong++;
      }
    }
  });
};
loadQuestion();
submit.addEventListener("click", () => {
  checkQuize();
  if (currentQuestion == quizes.length - 1) {
    endQuize();
  }
  if (currentQuestion < quizes.length - 1) {
    currentQuestion++;
    loadQuestion();
  }
  opt.forEach((option) => {
    option.checked = false;
  });
});
resetQuize.addEventListener("click", () => {
  currentQuestion = 0;
  submit.removeAttribute("disabled");
  loadQuestion();
  score.style.display = "none";
});

let mainHeading = document.querySelector(".main_heading");
mainHeading.addEventListener("click", () => {
  window.scrollTo(0, 3600);
});
// six is End here...
// seven START here=>
let pendingCon = document.querySelector(".pending");
let doneCon = document.querySelector(".done");
// make active container
doneCon.addEventListener("click", () => {
  doneCon.style.height = "300px";
  pendingCon.style.height = "100px";
  doneCon.style.boxShadow = "2px 2px 25px -10px";
  pendingCon.style.boxShadow = "none";
});
// make active container
pendingCon.addEventListener("click", () => {
  pendingCon.style.height = "300px";
  doneCon.style.height = "100px";
  pendingCon.style.boxShadow = "2px 2px 25px -10px";
  doneCon.style.boxShadow = "none";
});

const addBtn = document.querySelector(".add-todo");
const userInput = document.querySelector(".user-input");
let todos = [];
// create todo obj
class Todo {
  constructor(todo, isComplete) {
    this.todo = todo;
    this.isComplete = isComplete;
  }
}
const saveTodo = () => {
  //save todos(data) to localstorage
  let savedTodo = localStorage.getItem("saved-todo");
  if (savedTodo == null) {
    todos = [];
  } else {
    todos = JSON.parse(savedTodo);
  }
  todos.push(new Todo(userInput.value, false));
  localStorage.setItem("saved-todo", JSON.stringify(todos));
};
const updateTodoList = () => {
  //list updating on reload and fetch data to localstorage
  let savedTodo = localStorage.getItem("saved-todo");
  if (savedTodo == null) {
    todos = [];
  } else {
    todos = JSON.parse(savedTodo);
  }
  todos.forEach((elm) => {
    if (!elm.isComplete) {
      pendingCon.innerHTML += `<li><span class="todo">${elm.todo}</span>
                    <div>
                        <button class="complete"><img class="right" src="./img/right.png" alt=""></button>
                        <button class="delete"><img class="del"src ="./img/delete.png" alt=""></button>
                    </div>
                </li>`;
    } else {
      doneCon.innerHTML += `<li><span class="todo">${elm.todo}</span>
                    <div>
                        <button class="complete"><img class="right" src="./img/right.png" alt=""></button>
                        <button class="delete"><img class="del"src ="./img/delete.png" alt=""></button>
                    </div>
                </li>`;
    }
  });
};
updateTodoList();
const createTodoList = () => {
  //create todo fuction (UI)
  let li = document.createElement("li");
  let span = document.createElement("span");
  let div = document.createElement("div");
  let rightBtn = document.createElement("button");
  let delBtn = document.createElement("button");
  let imgRight = document.createElement("img");
  let imgDel = document.createElement("img");
  span.textContent = userInput.value;
  rightBtn.className = "complete";
  delBtn.className = "delete";
  imgRight.className = "right";
  imgDel.className = "del";
  imgRight.src = "./img/right.png";
  imgDel.src = "./img/delete.png";
  pendingCon.appendChild(li);
  li.appendChild(span);
  li.appendChild(div);
  div.appendChild(rightBtn);
  div.appendChild(delBtn);
  rightBtn.appendChild(imgRight);
  delBtn.appendChild(imgDel);
};
const removingTodo = (element) => {
  // for better user exprieance.....create some animation before removing
  element.style.height = "0px";
  element.style.padding = "0px";
  element.style.margin = "0px";
  element.style.overflow = "hidden";
};
const addingTodo = (element) => {
  // for better user exprieance.....create some animation before adding
  element.style.height = "auto";
  element.style.padding = "8px";
  element.style.margin = "0 0 8px 0";
};
const deleteTodo = (e) => {
  let savedData = localStorage.getItem("saved-todo");
  if (savedData == null) {
    todos = [];
  } else {
    todos = JSON.parse(savedData);
  }
  if (e.target.className == "delete" || e.target.className == "del") {
    let currentElement = "";
    e.target.className == "del"
      ? (currentElement =
          e.target.parentElement.parentElement.parentElement.firstElementChild)
      : (currentElement =
          e.target.parentElement.parentElement.firstElementChild);
    let del = "";
    todos.forEach((elm, index) => {
      if (elm.todo == currentElement.textContent) {
        del = index;
      }
    });
    todos.splice(del, 1);
    localStorage.setItem("saved-todo", JSON.stringify(todos));
    removingTodo(currentElement.parentElement);
    setTimeout(() => {
      currentElement.parentElement.remove();
    }, 300);
  }
};
const toggleTodo = (e) => {
  let savedData = localStorage.getItem("saved-todo");
  if (savedData == null) {
    todos = [];
  } else {
    todos = JSON.parse(savedData);
  }
  if (e.target.className == "complete" || e.target.className == "right") {
    let currentElement = "";
    e.target.className == "right"
      ? (currentElement =
          e.target.parentElement.parentElement.parentElement.firstElementChild)
      : (currentElement =
          e.target.parentElement.parentElement.firstElementChild);
    let elemIndex = "";
    todos.forEach((ele, index) => {
      if (ele.todo == currentElement.textContent) {
        elemIndex = index;
      }
    });
    if (todos[elemIndex].isComplete) {
      todos[elemIndex].isComplete = false;
    } else {
      todos[elemIndex].isComplete = true;
    }
    localStorage.setItem("saved-todo", JSON.stringify(todos));
    if (
      currentElement.parentElement.parentElement.classList.contains("pending")
    ) {
      removingTodo(currentElement.parentElement);
      setTimeout(() => {
        let complete = document.adoptNode(currentElement.parentElement);
        doneCon.appendChild(complete);
        addingTodo(currentElement.parentElement);
      }, 300);
    } else {
      removingTodo(currentElement.parentElement);
      setTimeout(() => {
        let complete = document.adoptNode(currentElement.parentElement);
        pendingCon.appendChild(complete);
        addingTodo(currentElement.parentElement);
      }, 300);
    }
  }
};
addBtn.addEventListener("click", () => {
  // add button working
  saveTodo();
  createTodoList();
  userInput.value = "";
});
userInput.addEventListener("keypress", (e) => {
  // enter to click add button
  if (e.keyCode == 13) {
    addBtn.click();
  }
});
pendingCon.addEventListener("click", (e) => {
  // deleting todo
  // complete todo
  deleteTodo(e);
  toggleTodo(e);
});
doneCon.addEventListener("click", (e) => {
  // deleting todo
  // uncompleting todo
  deleteTodo(e);
  toggleTodo(e);
});
// seven  is End here...
// eight START here=>
let userProfile = [
  {
    img: "./img/man (2).svg",
    userName: "Minarulak",
    about:
      "sit amet consectetur, adipisicing elit. Cumque necessitatibus accusantium, voluptate mollitia facilis ipsum in",
  },
  {
    img: "./img/user.svg",
    userName: "Rahul sharma",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa veniam nam, accusamus magni voluptd labore tempore rem delectus quam.",
  },
  {
    img: "./img/man.svg",
    userName: "Bijay singh",
    about:
      "sit amet consectetur, adipisicing elit. Cumque necessitatibus accusantium, voluptate mollitia facilis ipsum in",
  },
  {
    img: "./img/user.svg",
    userName: "Adittaya",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa veniam nam, accusamus magni voluptd labore tempore rem delectus quam.",
  },
];
const slidingBox = document.querySelector(".sliding-box");
const userImg = document.querySelector(".user-img");
const userName = document.querySelector(".name");
const aboutUser = document.querySelector(".about");
let slidingNumber = 0;
userImg.src = userProfile[slidingNumber].img;
userName.textContent = userProfile[slidingNumber].userName;
aboutUser.textContent = userProfile[slidingNumber].about;
const slidingRight = document.querySelector(".right-arrow");
const slidingLeft = document.querySelector(".left-arrow");
slidingRight.addEventListener("click", () => {
  if (slidingNumber < userProfile.length-1) {
    slidingNumber++;
  }else{
    slidingNumber = 0
  }
  slidingBox.style.transform = "translateX(-100%)"
  slidingBox.style.visibility="hidden"
  setTimeout(() => {
    slidingBox.style.transform = "translateX(100%)"
    userImg.src = userProfile[slidingNumber].img;
    userName.textContent = userProfile[slidingNumber].userName;
    aboutUser.textContent = userProfile[slidingNumber].about;
    setTimeout(() => {
      slidingBox.style.visibility="visible"
      slidingBox.style.transform = "translateX(0)"
    }, 300);
  }, 300);
});
slidingLeft.addEventListener("click", () => {
  if (slidingNumber!==0) {
    slidingNumber--;
  }else{
    slidingNumber = 3
  }
  slidingBox.style.transform="translateX(100%)"
  slidingBox.style.visibility="hidden"
  setTimeout(() => {
    slidingBox.style.transform="translateX(-100%)"
    userImg.src = userProfile[slidingNumber].img;
    userName.textContent = userProfile[slidingNumber].userName;
    aboutUser.textContent = userProfile[slidingNumber].about;
    setTimeout(() => {
      slidingBox.style.transform="translateX(0)"
      slidingBox.style.visibility="visible"
    }, 300);    
  }, 300);
});
