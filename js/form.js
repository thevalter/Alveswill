(function(){
    Parse.initialize("VM9AJOTKLPWVOOJ7Ygo3YY4iKtvm8yERtFTkeK2B", "3NEtkqVDMnJ9RLpk7qz22yEaEfjMJXxU6LMiE0K5"); 
    Parse.serverURL = "https://parseapi.back4app.com/";
})();

function createParseContato(e){

       let contato = Parse.Object.extend("contato");
       contato = new contato();
       contato.set("nome", document.getElementById('nome').value);
       contato.set("assunto", document.getElementById('assunto').value);
       contato.set("email", document.getElementById('email').value);
       contato.set("telefone", document.getElementById('tel').value);

       let nome = document.getElementById('nome').value;
       let assunto = document.getElementById('assunto').value;
       let email = document.getElementById('email').value;
       let tel = document.getElementById('tel').value;
    
        if (nome && assunto && email && tel != "") {
            contato.save();
            document.getElementById('formulario').style.display = "none";
            document.getElementById('show-formulario').style.display = "flex";
            document.getElementById('text').innerHTML = `Hello ${document.getElementById('nome').value}, Thank you for your choice, we will contact you shortly`;
    
                setTimeout( () =>{
                    document.getElementById('show-formulario').style.display = "none";
                    document.getElementById('formulario').style.display = "flex";
                    document.getElementById('nome').value = "";
                    document.getElementById('assunto').value = "";
                    document.getElementById('email').value = "";
                    document.getElementById('tel').value = "";
                }, 5000);
                
        }
}

document.querySelector('.btn-submit').addEventListener("click", function(e){
    e.preventDefault();
    createParseContato();
});




    
