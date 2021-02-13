const counter = () => {
    let count = 0
    return () => {
        count++;
        console.log(count)
    }
}

const increase = counter();
increase();
increase();

