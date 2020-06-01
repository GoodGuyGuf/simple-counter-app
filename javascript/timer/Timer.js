class Timer{
    constructor(){
        this.div = document.createElement("div");
        this.div.id = "TimerContainer";
        this.div.innerHTML = `<h1>Timer</h1>`;
        document.body.appendChild(this.div);

        this.time = document.createElement("h2");
        this.time.id = "time";
        this.time.innerHTML = 0;
        this.div.appendChild(this.time);

        this.startButton = document.createElement("button");
        this.startButton.id = "timerStart";
        this.startButton.innerHTML = "Start";
        this.div.appendChild(this.startButton);

        this.pauseButton = document.createElement("button");
        this.pauseButton.id = "timerPause";
        this.pauseButton.innerHTML = "Pause";
        this.div.appendChild(this.pauseButton);

        this.resetButton = document.createElement("button");
        this.resetButton.id = "timerReset";
        this.resetButton.innerHTML = "Reset";
        this.div.appendChild(this.resetButton);
    }
}