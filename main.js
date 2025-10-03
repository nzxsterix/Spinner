const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const immagine = document.getElementById('immagine');
const musica = document.getElementById('musica');
const spinner = document.getElementById('spinner');

// click su avvia pedro (pulsante start)
startBtn.addEventListener("click", () => {


    //mostra lo spinner
    spinner.classList.remove("d-none")

    //se ho premuto start, disabilito il pulsante di start
    startBtn.disabled = true;

    //aspettiamo con un setTimeOut() finto caricamento del brano

    setTimeout(() => {
        
        //rimuovo lo spinner
        spinner.classList.add("d-none")

        //ruotare immagine
        immagine.classList.add("rotate")

        //far partire la musica
        musica.play();

        //abilitare il bottone di stop
        stopBtn.disabled = false;

        //cambiare il testo del bottone start in "Playing"
        startBtn.innerHTML = '<span role="status" id="spinner" class="spinner-border spinner-border-sm text-light d-none"></span>⇝Playing';

    }, 3000);
})


// click su arresta pedro (pulsante stop)
stopBtn.addEventListener("click", () => {


    //fermare l animazione dell immagine
    immagine.classList.remove("rotate")
    

    //fermare il brano e riportarla all inizio
    musica.pause();
    musica.currentTime = 0;

    //abilitare il bottone di start
    startBtn.disabled = false;


    //disabilitare il bottone di stop quindi se stesso
    stopBtn.disabled = true;

    //ripristinare la scritta da "Playing" a "Start"

    //startBtn.innerHTML = '<span role="status" id="spinner" class="spinner-border spinner-border-sm text-light d-none"></span>▶ Start';
    startBtn.querySelector("span").classList.add("d-none");
    startBtn.lastChild.textContent = "▶ Start";
        
})


