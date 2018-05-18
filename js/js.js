function gerarTabela(){
    let myObj;

    let requisitar = new XMLHttpRequest();
    requisitar.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
				
            let txt = '';
            myObj = JSON.parse(this.responseText);
				 txt += '<table border="1"  class="table"> <tr> <th scope="col">Nome</th> <th scope="col">ID</th> <th scope="col">Nome do usuário</th> <th scope="col">Cidade</th> <th scope="col">Nome da empresa</th> </tr>';
				
            for (let x in myObj) {
                txt += `<tr><td>${myObj[x].name}</td> <td>${myObj[x].id}</td><td>${myObj[x].username}</td><td>${myObj[x].address.city}</td> <td>${myObj[x].company.name}</td> <td> <button  type="hidden" onclick="editarP(${myObj[x].id});" >Alterar</button></td>  </tr>`;
            }

				 txt += '</table>';
				 document.getElementById('tabela').innerHTML = txt;
					  
        }
    };
    requisitar.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    requisitar.send();
}

function alterarUsu(){
				
    let myObj;
    let idAlteracao = parseInt(document.getElementById('id').value);
				
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
		
function limparCampos(){
	
    document.getElementById('nome').value = '';
    document.getElementById('nomeUsu').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('nomeEmpresa').value = '';
    document.getElementById('id').value = '';
}

function editarP(botao){
	
    bId = botao;
    sessionStorage.setItem('bId', bId);
    location.href='alterarUsu.html';
}

function preecherCampos()
{
    let myObj;
    let idAlteracao = parseInt(document.getElementById('id').value);
	
    let requisitar = new XMLHttpRequest();
    requisitar.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
		
            myObj = JSON.parse(this.responseText);
				
            document.getElementById('nome').value = myObj.name;
            document.getElementById('nomeUsu').value = myObj.username;
            document.getElementById('cidade').value = myObj.address.city; 
			document.getElementById('nomeEmpresa').value =  myObj.company.name;
			   
        }
    };
    requisitar.open('GET', 'https://jsonplaceholder.typicode.com/users/'+idAlteracao, true);
    requisitar.send();
}