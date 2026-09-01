function agregarTabla() {

  var nombreClase=document.getElementById("nombreClase").value;
  var superclases=document.getElementById("superclases").value;
  var subclases=document.getElementById("subclases").value;
  var listaResp=document.getElementsByName("responsabilidad");
  var listaColab=document.getElementsByName("colaborador");
  var listaPensa=document.getElementsByName("pensamiento");
  var listaProp=document.getElementsByName("propiedad");
  var filas="";
  var i,colap,resp,pensa,prop;

  for (i=0;i<listaResp.length;i++){
    resp = listaResp[i].value;
    
    colab="";
    if (listaColab[i]){
      colab=listaColab[i].value;
    }

    pensa="";
    if (listaPensa[i]){
      pensa=listaPensa[i].value;
    }

    prop="";
    if (listaProp[i]){
      prop=listaProp[i].value;
    }

    filas=filas+"<tr>";
    filas=filas+"<td>"+resp+"</td>";
    filas=filas+"<td>"+colab+"</td>";
    filas=filas+"<td>"+pensa+"</td>";
    filas=filas+"<td>"+prop+"</td>";
    filas=filas+"</tr>";
  }

  var block=document.createElement("div");
  var html="";

  html=html+'<button type="button" onclick="this.parentElement.remove()">Eliminar</button>';
  html=html+'<table border="5">';
  html=html+'<tr><td colspan="4"><strong>Nombre de la clase:</strong> '+nombreClase+'</td></tr>';
  html=html+'<tr><td colspan="4"><strong>Superclases:</strong> '+superclases+'</td></tr>';
  html=html+'<tr><td colspan="4"><strong>Subclases:</strong> '+subclases+'</td></tr>';
  html=html+'<tr>';
  html=html+'<th>Responsabilidades</th>';
  html=html+'<th>Colaboradores</th>';
  html=html+'<th>Pensamiento en objetos</th>';
  html=html+'<th>Propiedad</th>';
  html=html+'</tr>';
  html=html+filas;
  html=html+'</table>';

  block.innerHTML=html;

  var contenedor=document.getElementById("cajaTablas");
  contenedor.appendChild(block);
  var tablaPrincipal=document.getElementById("tabla");
  var inputs=tablaPrincipal.getElementsByTagName("input");
  var j;

  for (j=0;j<inputs.length;j++){
    inputs[j].value="";
  }
}
document.getElementById("Agregar").addEventListener("click", agregarTabla);

function imprimirPDF() {
  window.print();
}