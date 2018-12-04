//alert("Un mensaje de prueba");
var edadString;
function fn_btn_push(){
  var sexo = document.getElementsByName("sexo");
  var selectedGender;



  for(var i = 0; i < sexo.length; i++) {
    if(sexo[i].checked)
      selectedGender = sexo[i].value;
  }


  alert(selectedGender);


}


function lista(){
  alert("entra");
  var edad = document.getElementById("edad");
  edadString =  edad.options[edad.selectedIndex].value.toString();
  alert(edadString);

}
