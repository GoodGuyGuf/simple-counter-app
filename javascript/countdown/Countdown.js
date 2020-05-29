class Countdown{
    constructor(){
        this.div = document.createElement("div");
        this.div.id = "countdownContainer";
        document.body.appendChild(this.div);

        this.logo = document.createElement("h1");
        this.logo.id = "countdownLogo";
        this.logo.innerHTML = "Countdown";
        this.div.appendChild(this.logo);

        this.initialNumberContainer = document.createElement("div");
        this.initialNumberContainer.id = "initialNumberContainer";
        document.body.appendChild(this.initialNumberContainer);

        this.initialNumber = document.createElement("h3");
        this.initialNumber.id = "initialNumber";
        this.initialNumber.innerHTML = "Input a number value to count down from:";
        this.initialNumberContainer.appendChild(this.initialNumber);

        this.endingNumberContainer = document.createElement("div");
        this.endingNumberContainer.id = "endingNumberContainer";
        document.body.appendChild(this.endingNumberContainer);

        this.endingNumber = document.createElement("h3");
        this.endingNumber.id = "endingNumber";
        this.endingNumber.innerHTML = "Input a number value where the timer will stop:";
        this.endingNumberContainer.appendChild(this.endingNumber);
        
    }
}