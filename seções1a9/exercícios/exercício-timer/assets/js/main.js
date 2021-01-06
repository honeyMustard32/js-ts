function escapeGlobalScope () {
    function getTimeFromSeconds (seconds) {
        const time = new Date(seconds * 1000);
        return time.toLocaleTimeString('pt-Br', {
            hour12: false,
            timeZone: 'GMT',
        });
    };

    const clock = document.querySelector('.timer');
    const startButton = document.querySelector('.start');
    const stopButton = document.querySelector('.stop');
    const restartButton = document.querySelector('.restart');
    let secs = 0;
    let timer;

    function startTimer() {
        timer = setInterval(function () {
            secs++;
            clock.innerHTML = getTimeFromSeconds(secs);
        }, 1000);
    };

    // console.log(getTimeFromSeconds(10));
    // startButton.addEventListener('click', function (e) {
    //     e.preventDefault;
    //     clock.classList.remove('pausado');
    //     clearInterval(timer);
    //     startTimer();
    // })

    // stopButton.addEventListener('click', function (e) {
    //     e.preventDefault;
    //     clock.classList.add('pausado');
    //     clearInterval(timer)
    // })

    // restartButton.addEventListener('click', function (e) {
    //     e.preventDefault;
    //     clearInterval(timer);
    //     clock.classList.remove('pausado')
    //     clock.innerHTML = '00:00:00';
    //     secs = 0;
    // })

    //tornando essa forma dos botões mais simples
    //dessa forma se quisermos criar outro botão basta adicionar outro if
    //o código fica mais simples
    document.addEventListener('click', function(e) {
        const element = e.target;
        
        if (element.classList.contains('start')) {
            clock.classList.remove('pausado');
            clearInterval(timer);
            startTimer();    
        }

        if (element.classList.contains('stop')) {
            clock.classList.add('pausado');
            clearInterval(timer)    
        }

        if (element.classList.contains('restart')) {
            clearInterval(timer);
            clock.classList.remove('pausado')
            clock.innerHTML = '00:00:00';
            secs = 0;    
        }
    })
}
escapeGlobalScope();
