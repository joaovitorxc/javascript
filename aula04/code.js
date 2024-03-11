function banco() {
    const ds = [

            {id:1,login:"ringo",senha:"12345",email:"ringo@gmail.com",fone:"4455-7788"},
            {id:2,login:"paul",senha:"22222",email:"paul@gmail.com",fone:"3344-7788"},
            {id:3,login:"john",senha:"33333",email:"john@gmail.com",fone:"4444-7788"}
    
    ]

    const dados = JSON.stringify(ds)

    localStorage.setItem(dados)

    return dados 


}

function cadCliente(){
let id = document.getElementById("id").value
let lg = document.getElementById("login").value
let sn = document.getElementById("senha").value
let em = document.getElementById("email").value
let fn = document.getElementById("fone").value

let meuId = parseInt(id)

const ds = {id:meuId,login:lg,senha:sn,email:em,fone:fn}

alert(ds)

}