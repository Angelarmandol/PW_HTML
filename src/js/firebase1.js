alert("inicia firebASE0");
var edadString;
var sexo;
var name;
var apellido;
var telefono;
var selectedSex;
var ready = true;

var config = {
  apiKey: "AIzaSyAnP_KyiedLt30QmsZMucbeIRFchQzI_tk",
  authDomain: "desarrollowenangel.firebaseapp.com",
  databaseURL: "https://desarrollowenangel.firebaseio.com",
  projectId: "desarrollowenangel",
  storageBucket: "desarrollowenangel.appspot.com",
  messagingSenderId: "349934742708"
};

firebase.initializeApp(config);
var myFirebase = firebase.database().ref();
var usuario = myFirebase.child("usuarios");





usuario.once("value", function(snapshot) {
  snapshot.forEach(function(child) {
    console.log(child.key+": "+child.val());
  alert(child.key+": "+child.val().nombre);
  });
});



function agregar(a,b,c,d,e){


  alert("iniciapush");

  usuario.push({
    "nombre":a,
    "apellido":b,
    "telefono":c,
    "sexo":d,
    "edad":e
  });


}


