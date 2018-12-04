//alert("Un mensaje de prueba");

function fn_btn_push(){
  var sexo = document.getElementsByName("sexo");
  var selectedGender;

  for(var i = 0; i < sexo.length; i++) {
    if(sexo[i].checked)
      selectedGender = sexo[i].value;
  }

  alert(selectedGender);
}
