let user = [
    {
        name:"minarulak",
        pass:"mak4256"
    },
    {
        name:"rocky",
        pass:"mak56"
    }
]
let authUser=(username,pass)=>{
   for(i=0;i<user.length;i++){
        if (user[i].name == username && user[i].pass == pass) {
            console.log(username + "loged in......");
            return;
        }
    }
    console.log("incorect username and password");
}
let user =[{
    name:"minarulak",
    pass:"mak4256"
}]
localStorage.setItem("data",JSON.stringify(user))