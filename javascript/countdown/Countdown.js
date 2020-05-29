class Countdown{
    constructor(){
        this.div = document.createElement("div");
        this.div.id = "countdownContainer";
        document.body.appendChild(this.div);

        this.logo = document.createElement("h1");
        this.logo.id = "countdownLogo";
        this.logo.innerHTML = "Countdown";
        this.div.appendChild(this.logo)
    }
}