function dados (){

      const ds = [
                      {id:1,login:"joao",senha:"12345",email:"joao@gmail.com"},
                      {id:2,login:"vitor",senha:"54321",email:"vitor@gmail.com"},
                      {id:3,login:"ringo",senha:"22222",email:"ringo@gmail.com"}
      ]
     
      const dados =  JSON.stringify(ds)

      localStorage.setItem("nome", dados)



      return dados
    }

    function removerbd(){

        localStorage.removeItem("nome")
    }



