
//window.onload=start;
document.addEventListener('DOMContentLoaded', start);

    function cambiarColorLuzSemaforo(id, prender){
        var color ='';
        if(prender==true) color=id;
        document.getElementById(id)
        .style.backgroundColor=color;
    }


    var estado =0;
    function onClickBotonCambiar(){
        console.log(estado);

        switch(estado){
        case 0:
        cambiarColorLuzSemaforo('red', true);
        cambiarColorLuzSemaforo('yellow', !true);
        cambiarColorLuzSemaforo('green', !true);
        break;

        case 1:
        cambiarColorLuzSemaforo('red', true);
        cambiarColorLuzSemaforo('yellow', true);
        cambiarColorLuzSemaforo('green', !true);
        break;

        case 2:
        cambiarColorLuzSemaforo('red', !true);
        cambiarColorLuzSemaforo('yellow', !true);
        cambiarColorLuzSemaforo('green', true);
        break;

        case 3:
        cambiarColorLuzSemaforo('red', !true);
        cambiarColorLuzSemaforo('yellow', true);
        cambiarColorLuzSemaforo('green', !true);
        break;

        default:
        cambiarColorLuzSemaforo('red', !true);
        cambiarColorLuzSemaforo('yellow', !true);
        cambiarColorLuzSemaforo('green', !true);
        break;
                }

        estado++;
        //if(estado>3) estado=0;
        estado &=3;
    }


    function textoBotonAuto(texto){
        document.querySelector('#boton-auto').innerHTML = texto;
    }
    textoBotonAuto('MODO AUTOMÁTICO');


    function ocultarBotonManual(ocultar){
        document.querySelector('#boton-cambiar').style.display = ocultar? 'none':'block';
        textoBotonAuto(ocultar? 'MODO MANUAL':'MODO AUTOMÁTICO');
    }


    var modoAutomatico=false;
    function onClickBotonAuto(){
        modoAutomatico=!modoAutomatico;
        console.log(modoAutomatico);
        if(modoAutomatico){
            refIntervalAuto=setInterval(onClickBotonCambiar,1000);
            //document.querySelector('#boton-cambiar').style.display='none';
            ocultarBotonManual(true);
        }
        else{
            clearInterval(refIntervalAuto);
            //document.querySelector('#boton-cambiar').style.display='block';
            ocultarBotonManual(false);
        }
    }


    function start(){
    cambiarColorLuzSemaforo('red', true);
    cambiarColorLuzSemaforo('yellow', true);
    cambiarColorLuzSemaforo('green', true);
    }