function gerarTabela(){
	let myObj;

	let requisitar = new XMLHttpRequest();
	requisitar.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
				
			let txt = '';
			myObj = JSON.parse(this.responseText);
				
				 txt += '<table border="1"> <tr> <th>Nome</th> <th>ID</th> <th>Nome do usuário</th> <th>Cidade</th> <th>Nome da empresa</th> </tr>';
				
			for (let x in myObj) {
				txt += `<tr><td>${myObj[x].name}</td> <td>${myObj[x].id}</td><td>${myObj[x].username}</td><td>${myObj[x].address.city}</td> <td>${myObj[x].company.name}</td>  </tr>`;
			}

				 txt += '</table>';
				 document.getElementById('tabela').innerHTML = txt;
					  
		}
	};
	requisitar.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
	requisitar.send();
}

function alterarUsu(){
				
	var myObj;
	var idAlteracao = parseInt(document.getElementById('id').value);
				
	let requisitar = new XMLHttpRequest();
	requisitar.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
					
			myObj = JSON.parse(this.responseText);
				
			myObj.name = document.getElementById('nome').value;
			myObj.username = document.getElementById('nomeUsu').value;
			myObj.address.city = document.getElementById('cidade').value;
			myObj.company.name = document.getElementById('nomeEmpresa').value;
			limparCampos();
			$('#alerta').show();
		}
	};
	requisitar.open('PATCH', 'https://jsonplaceholder.typicode.com/users/'+idAlteracao, true);
	requisitar.send(myObj);
}
		
function limparCampos()
{
	document.getElementById('nome').value = '';
	document.getElementById('nomeUsu').value = '';
	document.getElementById('cidade').value = '';
	document.getElementById('nomeEmpresa').value = '';
	document.getElementById('id').value = '';
}