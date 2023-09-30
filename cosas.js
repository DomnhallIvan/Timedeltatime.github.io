
function Reloj_instantaneo() {
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    if(hora >= 12)
    {
        console.log(`Son las ${hora} horas pm`);
        console.log(`Con ${minutos} minutos `);
        console.log(`Y ${segundos} segundos `);
    }
    else
    {
        console.log(`Son las ${hora} horas am`);
        console.log(`Con ${minutos} minutos `);
        console.log(`Y ${segundos} segundos `);
    }
    
  }

  setInterval(function () {
    Reloj_instantaneo();
  }, 1000);

 

