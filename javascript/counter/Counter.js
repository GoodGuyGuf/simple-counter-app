class Counter{
    constructor(){
        this.counter = document.createElement("h2");
        this.counter.id = "counter";
        this.counter.innerHTML = 0;
        document.body.appendChild(this.counter);

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

        this.handleIncrement();
        this.handleDecrement();
    }

    handleIncrement = () => {
        this.counterIncrement.addEventListener("click", () => {
            this.counter.innerHTML = parseInt(this.counter.innerHTML) + 1;
        })
    }

    handleDecrement = () => {
        this.counterDecrement.addEventListener("click", () => {
            this.counter.innerHTML = parseInt(this.counter.innerHTML) - 1;
        })
    }
}