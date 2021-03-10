class Observer {
    constructor() {
        this.subscribers = [];
    }

    subscribe(fn) { // passed function in subscribe method. this function will execute with data from broadcast
        this.subscribers.push(fn);
    }

    unsubscribe(fn) { // remove function from subscribers array
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== fn);
    }

    broadcast(data) {
        this.subscribers.forEach(subscriber => subscriber(data));
    }
}

const textArea = document.querySelector('#text');
const counter = document.querySelector('#counter');

const wordObserver = new Observer
wordObserver.subscribe((value) => counter.innerHTML = value.length);
textArea.addEventListener('keyup', () => wordObserver.broadcast(textArea.value));



