const watch = (step)=> {
    let delay = step
    return function tick()  { setTimeout( () => {
        console.log(`${delay} after ${delay} ms`)
        delay+=step
        setTimeout(tick, delay)
    }, step)}
}

watch(1000)();

