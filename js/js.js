
function gerarTabela(){
let myObj;

requisitar = new XMLHttpRequest();
requisitar.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
		let txt = '';
		let myObj = JSON.parse(this.responseText);
		
		
		 txt += '<table border="1"> <tr> <th>Nome</th> <th>ID</th> <th>Nome do usuário</th> <th>Cidade</th> <th>Nome da empresa</th> </tr>'
        
		for (let x in myObj) {
            txt += `<tr><td>${myObj[x].name}</td> <td>${myObj[x].id}</td><td>${myObj[x].username}</td><td>${myObj[x].address.city}</td> <td>${myObj[x].company.name}</td>  </tr>`;
        }

         txt += '</table>'
         document.getElementById('tabela').innerHTML = txt;
			  
    }
};
requisitar.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
requisitar.send();
}

function alterarUsu(){
	
	let myObj;

requisitar = new XMLHttpRequest();
requisitar.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
		let myObj = JSON.parse(this.responseText);
		
		
		let idAlteracao = document.getElementById("id").value;
		
		for (let x in myObj) {
            if(idAlteracao == myObj[x].id)
			{
				myObj[x].name = document.getElementById("nome").value;
				myObj[x].username = document.getElementById("nomeUsu").value;
				myObj[x].address.city = document.getElementById("cidade").value;
				myObj[x].company.name = document.getElementById("nomeEmpresa").value;
				
				$('#alerta').show();
			}				
        }
		
    }
};
requisitar.open('PATCH', 'https://jsonplaceholder.typicode.com/users', true);
requisitar.send(myObj);
}