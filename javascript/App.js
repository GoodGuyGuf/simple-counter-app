class App{
    constructor(){
        this.div = document.createElement("div");
        this.div.id = "logoContainer";
        document.body.appendChild(this.div);

        this.logo = document.createElement("h1");
        this.logo.id = "counterLogo";
        this.logo.innerHTML = "Counter";
        this.div.appendChild(this.logo)

        new Counter;
        new Countdown;
        new Timer;
    }

}