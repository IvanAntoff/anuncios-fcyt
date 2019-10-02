/// Armar un JSON con las actividades, dividir la barra de anuncios en 3 partes, stand, anuncio, hora.
/// Onelemntid ir imprimiendo la data en las distintas partes de la barra.
/// si fecha = 11-10-19 mostrar "dia 1", sino si fecha = 12 - 10 - 19 mostrar "dia 2" sino si fecha = 13 - 10 -19 
/// mostrar "dia 3", sino mostrar "Evento finalizado muchas gracias en div ID=TituloMedio"

/// para el JSON, si fecha = fecha JSON y hora < hora  JSON mostrar actividad.

/// Configurar one signal.

/// configurar updates.

/// configurar instalador.

/// barra de anuncios de WP.

let FechaHoraUsuario = new Date()
let RelojUsuario = String;
let FechaUsuario = String;
let AñoUsuario = String;
let MesUsuario = String;
let DiaUsuario = String;
let HoraUsuario = String;
let MinUsuario = String;

let duda = String;

duda = 21;

FechaUsuario = (FechaHoraUsuario.getDate() + "/" + (FechaHoraUsuario.getMonth() +1) + "/" + FechaHoraUsuario.getFullYear());
RelojUsuario = (FechaHoraUsuario.getHours() + ":" + FechaHoraUsuario.getMinutes());
HoraUsuario = (FechaHoraUsuario.getHours());

console.log(FechaUsuario);
console.log(RelojUsuario);

function UbicarProximo (){
}

$.get('data.json')
  .done(function( data ) {
     var content = JSON.parse(data);
     console.log(content)
     alert(content[0].Budget)
  });

  