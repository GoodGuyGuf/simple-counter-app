class Timer{
    constructor(){
        this.div = document.createElement("div");
        this.div.id = "TimerContainer";
        this.div.innerHTML = `<h1>Timer</h1>`;
        document.body.appendChild(this.div);
    }
}