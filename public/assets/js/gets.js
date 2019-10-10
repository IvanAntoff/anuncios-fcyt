//Obtenemos la fecha del sistema.
let FechaSistema= new Date();

//Obtenemos el dia.
let HoyEs = FechaSistema.getDate();

//Obtenemos el mes.
let ElMesEs = (FechaSistema.getMonth()+1);

//Obtenemos el la hora y la formateamos.
let LaHoraEs = (FechaSistema.getHours()+':'+FechaSistema.getMinutes());

//Validamos la fecha del evento - 11, 12, 13.
let ValidacionFecha = false;

//Dia 11/10 = 1, 12/10 = 2, 13/10 = 3.
let EventoDia = 0;

//variables para almacenar datos de los anuncios.
let Hora1 = '';
let Anuncio1 = '';
let Hora2 = '';
let Anuncio2 = '';

//Dias en los que se realizara el evento.
const Dia1 = '18';
const Dia2 = '19';
const Dia3 = '20';

// Esta funcion verifica si el usuario se encuentra en uno de los 3 dias del evento.
// De ser asi almacena el dia correspondiente en una variable (EventoDia), de ser falso, EventoDia sera igual a 0.
function ValidarFechaDia(ValidacionFecha, EventoDia){
    if (ElMesEs == '10' && HoyEs == Dia1 ){
        this.ValidacionFecha = true;
        this.EventoDia = 1;
    }
    else if (ElMesEs == 10 && HoyEs == Dia2 ){
        this.ValidacionFecha = true;
        this.EventoDia = 2;
        }
    else if (ElMesEs == 10 && HoyEs == Dia3 ){
        this.ValidacionFecha = true;
        this.EventoDia = 3;
        }
    else{
        this.ValidacionFecha = false;
        this.EventoDia = 0;
    }
}


// Si la funcion ValidarFechaDia fue previamente ejecutada, y la misma retorno como positiva la ValidacionFecha, junto con el EventoDia
// Esta funcion recorrera el json con los datos de presentaciones buscando todos aquellos que correspondan al EventoDia respectivo
// Y mostrara el evento (del stand 1) mas cercano (en cuestion de horario) al usuario.

function AnunciosStand1(){
    let i = 0;
    let listo = false;
    if (this.EventoDia == 1) {
        $.getJSON('assets/database/data.json',function(data){
            let objetoDB = data.events;     
            for (i = 0; i < objetoDB.length; i++) {
                if (objetoDB[i].stand == 1 && objetoDB[i].hora >= LaHoraEs) {
                    Anuncio1 = objetoDB[i].msg;
                    Hora1 = objetoDB[i].hora;
                    listo = true;
                }
            }
            if (listo == true){
                $('#Anuncio1').html(Anuncio1);
                $('#Hora1').html(Hora1);
            }
            else {
                $('#Anuncio1').html('Cierre del dia 1');
                $('#Hora1').html(' ');
            }
        });
    }
    else if (this.EventoDia == 2) {
        $.getJSON('assets/database/data.json',function(data){
            let objetoDB = data.events;     
            for (i = 0; i < objetoDB.length; i++) {
                if (objetoDB[i].stand == 1 && objetoDB[i].hora >= LaHoraEs) {
                    Anuncio1 = objetoDB[i].msg;
                    Hora1 = objetoDB[i].hora;
                    listo = true;
                }
            }
            if (listo == true){
                $('#Anuncio1').html(Anuncio1);
                $('#Hora1').html(Hora1);
            } 
            else {
                $('#Anuncio1').html('Cierre del dia 1');
                $('#Hora1').html(' ');
            }
        });
    }
    else if (this.EventoDia == 3) {
        $.getJSON('assets/database/data.json',function(data){
            let objetoDB = data.events;     
            for (i = 0; i < objetoDB.length; i++) {
                if (objetoDB[i].stand == 1 && objetoDB[i].hora >= LaHoraEs) {
                    Anuncio1 = objetoDB[i].msg;
                    Hora1 = objetoDB[i].hora;
                    listo = true;
                }
            }
            if (listo == true){
                $('#Anuncio1').html(Anuncio1);
                $('#Hora1').html(Hora1);
            }
            else {
                $('#Anuncio1').html('Cierre del dia 1');
                $('#Hora1').html(' ');
            }
        });
    } else {
        $('#Anuncio1').html("El evento esta proximo a finalizar...");
        $('#Hora1').html(" ");
    }
}

// Al igual que la funcion anterior, si la funcion ValidarFechaDia fue previamente ejecutada, y la misma retorno como positiva la ValidacionFecha, junto con el EventoDia
// Esta funcion recorrera el json con los datos de presentaciones buscando todos aquellos que correspondan al EventoDia respectivo
// Y mostrara el evento (del stand 2) mas cercano (en cuestion de horario) al usuario.

function AnunciosStand2(){
    let i = 0;
    let listo = false;
    if (this.EventoDia == 1) {
        $.getJSON('assets/database/data.json',function(data){
            let objetoDB = data.events;     
            for (i = 0; i < objetoDB.length; i++) {
                if (objetoDB[i].stand == 2 && objetoDB[i].hora >= LaHoraEs) {
                    Anuncio2 = objetoDB[i].msg;
                    Hora2 = objetoDB[i].hora;
                    listo = true;
                }
            }
            if (listo == true){
                $('#Anuncio2').html(Anuncio2);
                $('#Hora2').html(Hora2);
            }
            else{
                $('#Anuncio2').html('Cierre del dia 1');
                $('#Hora2').html(' ');
            }
        });
    }
    else if (this.EventoDia == 2) {
        $.getJSON('assets/database/data.json',function(data){
            let objetoDB = data.events;     
            for (i = 0; i < objetoDB.length; i++) {
                if (objetoDB[i].stand == 2 && objetoDB[i].hora >= LaHoraEs) {
                    Anuncio2 = objetoDB[i].msg;
                    Hora2 = objetoDB[i].hora;
                    listo = true;
                }
            }
            if (listo == true){
                $('#Anuncio2').html(Anuncio1);
                $('#Hora2').html(Hora1);
                }
            else {
            $('#Anuncio2').html('Cierre del dia 2');
            $('#Hora2').html(' ');
            }
        });
    }
    else if (this.EventoDia == 3) {
        $.getJSON('assets/database/data.json',function(data){
            let objetoDB = data.events;     
            for (i = 0; i < objetoDB.length; i++) {
                if (objetoDB[i].stand == 2 && objetoDB[i].hora >= LaHoraEs) {
                    Anuncio2 = objetoDB[i].msg;
                    Hora2 = objetoDB[i].hora;
                    listo = true;
                }
            }
            if (listo == true){
                $('#Anuncio2').html(Anuncio2);
                $('#Hora2').html(Hora2);
            }
            else {
                $('#Anuncio2').html('Cierre del dia 3');
                $('#Hora2').html(' ');
            }
        });
    } else {
        $('#Anuncio2').html("Gracias por acompañarnos.");
        $('#Hora2').html(" ");
    }
}

window.onload = function MostrarAnuncios(){
    
    ValidarFechaDia(ValidacionFecha, EventoDia);

    if (this.ValidacionFecha == true) {
        AnunciosStand1();
        AnunciosStand2();
    }
    else if (ElMesEs == '10' && HoyEs < Dia1 ){
        $('#Stand1').html("Visitanos en la Expo Concepcion 2019.");
        $('#Anuncio1').html("Los dias 18, 19 y 20 de Octubre.");
        $('#Stand2').html("¿Donde?:");
        $('#Anuncio2').html('<p>La misma estara emplazada en las instalaciones del Puerto de Concepción del Uruguay.</p><p><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13462.015859042987!2d-58.2226956!3d-32.4859569!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4902ed6dc4edc01f!2sExpo%20Concepcion%202019!5e0!3m2!1ses-419!2sar!4v1570246267352!5m2!1ses-419!2sar" width="100%" height="200" frameborder="0" style="border:0;" allowfullscreen=""></iframe></p>');
    }
    else {
        $('#Anuncio1').html("La expo industrial de C. Del U. ha finalizado.");
        $('#Stand1').html("¡Muchas gracias por visitarnos!");
        $('#Anuncio2').html("Atte: La facultad de Ciencia y Tecnologia de UADER C. Del U.");
        $('#Stand2').html("Esperamos haya disfrutado el evento.");
    }
}