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
console.log(HoyEs, ElMesEs);

function ValidarFechaDia(ValidacionFecha, EventoDia){
    if (ElMesEs == '10' && HoyEs =='11' ){
        console.log('entre');
        this.ValidacionFecha = true;
        this.EventoDia = 1;
        console.log(this.EventoDia, this.ValidacionFecha);

    }
    else if (ElMesEs == 10 && HoyEs == 12 ){
        this.ValidacionFecha = true;
        this.EventoDia = 2;
        }
    else if (ElMesEs == 10 && HoyEs == 13 ){
        this.ValidacionFecha = true;
        this.EventoDia = 3;
        }
    else{
        this.ValidacionFecha = false;
        this.EventoDia = 0;
    }
}

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
            console.log(listo)
            if (listo == true){
                $('#Anuncio2').html(Anuncio2);
                $('#Hora2').html(Hora2);
            }
            else{
                console.log('entro')
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

ValidarFechaDia(ValidacionFecha, EventoDia);

console.log(this.EventoDia, this.ValidacionFecha);

window.onload = function MostrarAnuncios(){
    if (this.ValidacionFecha == true) {
        AnunciosStand1();
        AnunciosStand2();
    }
    else {
        $('#Anuncio1').html("La expo industrial de C. Del U. ha finalizado.");
        $('#Stand1').html("¡Muchas gracias por visitarnos!");
        $('#Anuncio2').html("Atte: La facultad de Ciencia y Tecnologia de UADER C. Del U.");
        $('#Stand2').html("Esperamos haya disfrutado el evento.");
    }
}