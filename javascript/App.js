class App{
    constructor(){
        this.div = document.createElement("div");
        this.div.id = "logoContainer";
        document.body.appendChild(this.div);

        this.logo = document.createElement("h1");
        this.logo.id = "logo";
        this.logo.innerHTML = "Counter";
        this.div.appendChild(this.logo)

        this.counterDecrementContainer = document.createElement("div");
        this.counterDecrementContainer.id = "counterDecrementContainer";
        document.body.appendChild(this.counterDecrementContainer);

        this.counterDecrement = document.createElement("button");
        this.counterDecrement.id = "decrement";
        this.counterDecrement.innerHTML = "-";
        this.counterDecrementContainer.appendChild(this.counterDecrement);

        this.counterIncrementContainer = document.createElement("div");
        this.counterIncrementContainer.id = "counterIncrementContainer";
        document.body.appendChild(this.counterIncrementContainer);

        this.counterIncrement = document.createElement("button");
        this.counterIncrement.id = "increment";
        this.counterIncrement.innerHTML = "+";
        this.counterIncrementContainer.appendChild(this.counterIncrement);
    }
}