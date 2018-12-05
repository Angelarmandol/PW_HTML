//alert("Un mensaje de prueba");
var edadString;
var sexo;
var name;
var apellido;
var telefono;
var selectedSex;
var ready = true;










function fn_btn_push() {
  sexo = document.getElementsByName("sexo");
  name = document.getElementsByName("nombre")[0].value;
  apellido = document.getElementsByName("apellido")[0].value;
  telefono = document.getElementsByName("telefono")[0].value;

  for(var i = 0; i < sexo.length; i++) {
    if(sexo[i].checked)
      selectedSex = sexo[i].value;
  }


  if(name.toString().length==0){
    document.getElementById("nm").style.backgroundColor = '#FF0000';
    ready=false;
  }

  if(apellido.toString().length==0){
    document.getElementById("ap").style.backgroundColor = '#FF0000';
    ready=false;
  }



  if(telefono.toString().length==0){
    document.getElementById("tl").style.backgroundColor = '#FF0000';
    ready=false;
  }

  if(edadString==undefined){
    document.getElementById("edad").style.backgroundColor = '#FF0000';
    ready=false;
  }

  if(selectedSex==null){
    document.getElementById("sx").style.backgroundColor = '#FF0000';
    ready=false;
  }


  if(ready){
    alert("todo listo");

      agregar(name,apellido,telefono,edadString,selectedSex);

  }else {
    alert("falta algo");
    ready=true;
  }



}
function lista(){

  var edad = document.getElementById("edad");
  edadString =  edad.options[edad.selectedIndex].value.toString();

}

function doWhite(id){
  document.getElementById(id.toString()).style.backgroundColor = '#FFFFFF';
}

function doBacgroundColor(id){
  document.getElementById(id.toString()).style.backgroundColor = '#2970CA';
}



