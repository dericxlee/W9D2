class Clock{
    constructor(){
        this.date = new Date();
        this.hour = this.date.getHours();
        this.minute = this.date.getMinutes();
        this.second = this.date.getSeconds();
        setInterval(tick.bind(this), 1000)
    }

    printTime(){
        return `${this.hour}:${this.minute}:${this.second}`
    }

    tick(){
        this.second++
        if(this.second === 60){
            this.second = 0
            this.minute++
        }
        
        if(this.minute === 60){
            this.minute = 0
            this.hour++
        }

        if(this.hour === 24){
            this.hour = 0;
        }

        return this.printTime()
    }
}