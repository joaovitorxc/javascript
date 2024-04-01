function dados(){
    const ds = [
                {id:1,login:"ringo",senha:"1234",email:"ringo@gmail.com"},
                {id:1,login:"paul",senha:"2222",email:"paul@gmail.com"},
                {id:1,login:"lennon",senha:"3344",email:"lennon@gmail.com"}
    ]
 
    return ds

}

function login(user,password){

    const usuarios = dados()

for(let i=0;usuarios.length;i++){
    if(user == usuarios.login && password == usuarios.senha){
        console.log("Voce logou")
        break
    }
  }
}

function logar(){
    let lg = document.getElementById("login").value
    let sn = document.getElementById("senha").value

    login(lg,sn)
}
