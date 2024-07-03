document.addEventListener('DOMContentLoaded', function(){
    
    //definindo variaveis
    let timerInterval;
    let seconds = 0;
    let isRunning = false;


    //Obtendo elementos do DOM
    const timerElement = document.getElementById('timer');
    const startStopBtn = document.getElementById('startStopBtn');
    const resetBtn = document.getElementById('resetBtn');


    //Funcao - atualiza exibicao do cronometro
    function updateTimer(){
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainigSeconds = seconds % 60;

        timerElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainigSeconds).padStart(2, '0')}`;
    };

    //Iniciar timer
    function startTimer(){
        timerInterval = setInterval(function() {
            seconds++;
            //console.log(seconds);
            updateTimer();
        }, 1000);

        isRunning = true;
        startStopBtn.textContent = 'Pausar';
    }


    function pauseTimer(){
        clearInterval(timerInterval);

        isRunning = false;
        startStopBtn.textContent = 'Continuar';
    }


    function resetTimer(){
        clearInterval(timerInterval);
        seconds = 0;
        isRunning = false;
        updateTimer();
        startStopBtn.textContent = 'Iniciar';

    }

    //Evento clicar em iniciar/pausar
    startStopBtn.addEventListener('click', function(){
        if (isRunning){
            pauseTimer();
        } else {
            startTimer();
        }
    });

    resetBtn.addEventListener('click', function(){
        resetTimer();
    });

});