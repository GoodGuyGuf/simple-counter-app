class Countdown{
    constructor(){
        this.div = document.createElement("div");
        this.div.id = "countdownContainer";
        document.body.appendChild(this.div);

        this.logo = document.createElement("h1");
        this.logo.id = "countdownLogo";
        this.logo.innerHTML = "Countdown";
        this.div.appendChild(this.logo);

        this.IntervalSpeed = document.createElement("h6");
        this.IntervalSpeed.id = "IntervalSpeed";
        this.IntervalSpeed.innerHTML = "The countdown timer decrements every 1 second.";
        this.div.appendChild(this.IntervalSpeed);

        this.initialNumber = document.createElement("h2"); // initial number h3
        this.initialNumber.id = "initialNumber";
        this.initialNumber.innerHTML = 0;
        this.div.appendChild(this.initialNumber);

        this.pauseButton = document.createElement("button");
        this.pauseButton.id = "pauseButton";
        this.pauseButton.innerHTML = "Pause";
        this.div.appendChild(this.pauseButton);

        this.formContainer = document.createElement("div"); // initial number div
        this.formContainer.id = "formContainer";
        this.formContainer.innerHTML = `
        <form>
            <h3 id='initialNumberHeader'>Input a number value to count down from:</h3>
            <input id="initialNumberInput" type="number" placeholder="Initial Number" required/>

            <h3 id='endingNumberHeader'>Input a number value where the timer will stop:</h3>
            <input id="endingNumberInput" type="number"placeholder="Ending Number" required/>

            <br/>
            <br/>

            <input type='submit' value='Submit'/>
        </form>
        `
        document.body.appendChild(this.formContainer);

        this.initialNumberInput = document.getElementById("initialNumberInput");
        this.endingNumberInput = document.getElementById("endingNumberInput");

        this.handleOnChange();
        // this.handleCountdown();
    }

    handleOnChange = () => {
        this.initialNumberInput.addEventListener("keyup", () => {
            this.initialNumber.innerHTML = document.getElementById("initialNumberInput").value;
        })

        this.endingNumberInput.addEventListener("keyup", () => {
            this.endingNumber = document.getElementById("endingNumberInput").value
        })
    }

    // handleCountdown = () => {
    //     this.submitButton.addEventListener("click", event => {
    //         event.preventDefault();
            
    //         const startTimer = setInterval(() => {
    //             this.initialNumber.innerHTML = parseInt(this.initialNumber.innerHTML) - 1;
    //             // if (this.initialNumberForm.value == this.endingNumberForm.value){
    //             //     clearInterval(startTimer);
    //             // }
    //         }, 1000)
                    
    //         this.pauseButton.addEventListener("click", () => {
    //             clearInterval(startTimer)
    //         })
    //     })
    // }
}