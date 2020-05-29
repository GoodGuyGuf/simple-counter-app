class Countdown{
    constructor(){
        this.div = document.createElement("div");
        this.div.id = "countdownContainer";
        document.body.appendChild(this.div);

        this.logo = document.createElement("h1");
        this.logo.id = "countdownLogo";
        this.logo.innerHTML = "Countdown";
        this.div.appendChild(this.logo);

        this.initialNumber = document.createElement("h2"); // initial number h3
        this.initialNumber.id = "initialNumber";
        this.initialNumber.innerHTML = 0;
        this.div.appendChild(this.initialNumber);

        this.initialNumberContainer = document.createElement("div"); // initial number div
        this.initialNumberContainer.id = "initialNumberContainer";
        document.body.appendChild(this.initialNumberContainer);

        this.initialNumberHeader = document.createElement("h3"); // initial number h3
        this.initialNumberHeader.id = "initialNumberHeader";
        this.initialNumberHeader.innerHTML = "Input a number value to count down from:";
        this.initialNumberContainer.appendChild(this.initialNumberHeader);
        
        this.initialNumberForm = document.createElement("form"); // initial number form
        this.initialNumberForm.innerHTML = `<input type="text" name="initialNumber"/>`;
        this.initialNumberContainer.appendChild(this.initialNumberForm);

        this.endingNumberContainer = document.createElement("div"); // ending number div
        this.endingNumberContainer.id = "endingNumberContainer";
        document.body.appendChild(this.endingNumberContainer);

        this.endingNumberHeader = document.createElement("h3"); // ending number h3
        this.endingNumberHeader.id = "endingNumberHeader";
        this.endingNumberHeader.innerHTML = "Input a number value where the timer will stop:";
        this.endingNumberContainer.appendChild(this.endingNumberHeader);

        this.endingNumberForm = document.createElement("form"); // ending number form
        this.endingNumberForm.innerHTML = `<input type="text" name="endingNumber"/>`;
        this.endingNumberContainer.appendChild(this.endingNumberForm);
        
        this.submitButton = document.createElement("button");
        this.submitButton.id = "countdownSubmit";
        this.submitButton.innerHTML = "Submit";
        document.body.appendChild(this.submitButton);

        this.endingNumber = document.createElement("h3"); // initial number h3
        this.endingNumber.id = "initialNumber";
        this.endingNumber.innerHTML = this.endingNumber.value;

        this.handleCountdown();
    }

    // handleOnKeyChange = () => {
        
    // }

    // handleCountdown = () => {
    //     this.submitButton.addEventListener("click", () => {
    //         if (this.initialNumber.value !== "" && typeof(parseInt(this.initialNumber.value)) === Number && parseInt(this.initialNumber.value) > parseInt(this.endingNumber.value)){
    //             if (this.endingNumber.value !== "" && typeof(parseInt(this.endingNumber.value)) === Number){
    //                 const startTimer = setInterval(() => {
    //                     this.initialNumber.innerHTML = parseInt(this.initialNumber.value) - 1;
    //                 }, 1000)

    //                 if (parseInt(this.initialNumber.value) === parseInt(this.endingNumber.value)){
    //                     clearInterval(startTimer);
    //                 }
    //             }
    //         } else {
    //             const error = document.createElement("p");
    //             error.id = "countdownError";
    //             error.innerHTML = "Both input fields cannot be empty and they must have a number."
    //             document.body.appendChild(error);
    //         }
    //     })
    // }
}