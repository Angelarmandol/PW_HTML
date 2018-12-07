
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
var lista=[];




usuario.once("value", function(snapshot) {
  snapshot.forEach(function(child) {
    lista.push({a:child.val().nombre,b:child.val().apellido,c:child.val().telefono,d:child.val().sexo,e:child.val().edad});
  });
});





function t(x){return document.getElementById(x);}


function mostrar(){
  t('u').innerHTML='';
  for(var i=0,m;m=lista[i];i++)
    t('u').innerHTML+='<tr align="center">'+'<td>'+lista[i].a+'</td>'+'<td>'+lista[i].b+'</td>'+'<td>'+lista[i].c+'</td>'+'<td>'+lista[i].d+'</td>'+'<td>'+lista[i].e+'</td>'+'  </tr>'+'<br />';
/*
  <tr>
  <td>Jill</td>
  <td>Smith</td>
  <td>50</td>
  </tr>
*/
}


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


