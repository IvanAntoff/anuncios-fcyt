/// Armar un JSON con las actividades, dividir la barra de anuncios en 3 partes, stand, anuncio, hora.
/// Onelemntid ir imprimiendo la data en las distintas partes de la barra.
/// si fecha = 11-10-19 mostrar "dia 1", sino si fecha = 12 - 10 - 19 mostrar "dia 2" sino si fecha = 13 - 10 -19
/// mostrar "dia 3", sino mostrar "Evento finalizado muchas gracias en div ID=TituloMedio"

/// para el JSON, si fecha = fecha JSON y hora < hora  JSON mostrar actividad.

/// Configurar one signal.

/// configurar updates.

/// configurar instalador.

/// barra de anuncios de WP.
/*
strDate = '"2019-10-02T02:40:00.000Z"';
var jsonDate = JSON.parse(strDate);
var date = new Date(jsonDate);
console.log(date);

var strDate1 = JSON.stringify(date1);
var strDate2 = JSON.stringify(date2);

var jsonDate1 = JSON.parse(strDate1);
var jsonDate2 = JSON.parse(strDate2);

var date1 = new Date(jsonDate1);
var date2 = new Date(jsonDate2);
*/

const database = require('../database/database');
let ObjectDB = database.getEvents();
let Linea = '';
//console.log(ObjectDB)

function ImprimirEventos(ObjectDB){
    for (i = 0; i < ObjectDB.length; i++) {
          console.log(ObjectDB[i])
          console.log('...................................')
      //        Linea += DB[i] + "<br>";
      }
//      document.getElementById("TaVolatil").innerHTML = text; 
}

ImprimirEventos(ObjectDB)