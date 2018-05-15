var myObj;


requisitar = new XMLHttpRequest();
requisitar.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
		txt = "";
		myObj = JSON.parse(this.responseText);
		
		
		txt += "<table border='1'> <tr> <th>Nome</th> <th>ID</th> <th>Nome do usuário</th> <th>Cidade</th> <th>Nome da empresa</th> </tr> "
        
		for (var x in myObj) {
            txt += "<tr><td>" + myObj[x].name + "</td> <td>" + myObj[x].id + "</td><td>" + myObj[x].username + "</td><td>" + myObj[x].address.city + "</td> <td>" + myObj[x].company.name + "</td>  </tr>";
        }

        txt += "</table>"
        document.getElementById("tabela").innerHTML = txt;
			  
    }
};
requisitar.open("GET", 'https://jsonplaceholder.typicode.com/users', true);
requisitar.send(); 

