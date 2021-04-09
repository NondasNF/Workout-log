     // Função responsável por inserir linhas na tabela
     function Evento() {
        
        var tempoVal = document.getElementById("myInput").value;
        
        var tipoVal = document.getElementById("tipoAtv").value;
      
        var dataVal = document.getElementById("dataAtv").value;
      

        var table = document.getElementById("tableAtv");
 
        // Captura a quantidade de linhas já existentes na tabela
        var numOfRows = table.rows.length;
        // Insere uma linha no fim da tabela.
        var newRow = table.insertRow(numOfRows);

        var p1 = new clonebutton();
        newCell = newRow.insertCell('0');
        newCell.innerHTML = tempoVal;
        newCell = newRow.insertCell('1');
        newCell.innerHTML = tipoVal;
        newCell = newRow.insertCell('2');
        newCell.innerHTML = dataVal;
        newCell = newRow.insertCell('3');
        newCell.innerHTML = dataVal;
    } 