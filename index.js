class Countdown {
    constructor (futureDate) {
        this.futureDate = futureDate
    }

    get _actualDate() {
        return new Date();
    }

    get _futureDate() {
        return new Date(this.futureDate);
    }

    get _timeDif() {
        return this._futureDate.getTime() - this._actualDate.getTime ();
    }

    get days() {
        return Math.floor (this._timeDif / (24*60*60*1000));
    }

    get hours() {
        return Math.floor (this._timeDif / (60*60*1000));
    }

    get minutes() {
        return Math.floor (this._timeDif / (60*1000));
    }

    get seconds() {
        return Math.floor (this._timeDif / 1000);
    }

    get total() {
        const days = this.days < 10 ? "0" + this.days : this.days;
        const hours = this.hours % 24 < 10 ? "0" + (this.hours % 24) : this.hours % 24;
        const minutes = this.minutes % 60 < 10 ? "0" + (this.minutes % 60) : this.minutes % 60;
        const seconds = this.seconds % 60 < 10 ? "0" + (this.seconds % 60) : this.seconds % 60;
        return [days, hours, minutes, seconds];
    } 

}

const tempoParaEvento = new Countdown("05 october 2022 22:00:00 GMT-0300")

const tempos = document.querySelectorAll ('.time');

function mostrarTempo (){
    tempos.forEach ((tempo, index) => {
        tempo.innerHTML = tempoParaEvento.total[index];
    }) 
}
mostrarTempo ();
setInterval (mostrarTempo, 1000)
