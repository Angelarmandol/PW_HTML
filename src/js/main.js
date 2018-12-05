//alert("Un mensaje de prueba");
var edadString;
var sexo;
var name;
var apellido;
var telefono;
function fn_btn_push() {
  sexo = document.getElementsByName("sexo")[0].value;
  name = document.getElementsByName("nombre")[0].value;
  apellido = document.getElementsByName("apellido")[0].value;
  telefono = document.getElementsByName("telefono")[0].value;


  alert("1");
  alert(name);
  alert("2");
  alert(apellido);
  alert("3");
  alert(telefono);
  alert("4");
  alert(edadString);
  alert("5");
  alert(sexo);


}
function lista(){
  alert("entra");
  var edad = document.getElementById("edad");
  edadString =  edad.options[edad.selectedIndex].value.toString();

}
