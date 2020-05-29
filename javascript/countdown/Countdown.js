class Countdown{
    constructor(){
        this.div = document.createElement("div");
        this.div.id = "countdownContainer";
        document.body.appendChild(this.div);

        this.logo = document.createElement("h1");
        this.logo.id = "countdownLogo";
        this.logo.innerHTML = "Countdown";
        this.div.appendChild(this.logo);

        this.initialNumberContainer = document.createElement("div"); // initial number div
        this.initialNumberContainer.id = "initialNumberContainer";
        document.body.appendChild(this.initialNumberContainer);

        this.initialNumber = document.createElement("h3"); // initial number h3
        this.initialNumber.id = "initialNumber";
        this.initialNumber.innerHTML = "Input a number value to count down from:";
        this.initialNumberContainer.appendChild(this.initialNumber);

        this.initialNumberForm = document.createElement("form"); // initial number form
        this.initialNumberForm.innerHTML = `<input type="text" name="initialNumber"></input><input type="submit" value="Submit"></input>`;
        this.initialNumberContainer.appendChild(this.initialNumberForm);

        this.endingNumberContainer = document.createElement("div"); // ending number div
        this.endingNumberContainer.id = "endingNumberContainer";
        document.body.appendChild(this.endingNumberContainer);

        this.endingNumber = document.createElement("h3"); // ending number h3
        this.endingNumber.id = "endingNumber";
        this.endingNumber.innerHTML = "Input a number value where the timer will stop:";
        this.endingNumberContainer.appendChild(this.endingNumber);

        this.endingNumberForm = document.createElement("form"); // ending number form
        this.endingNumberForm.innerHTML = `<input type="text" name="endingNumber"></input><input type="submit" value="Submit"></input>`;
        this.endingNumberContainer.appendChild(this.endingNumberForm);
        
    }
}