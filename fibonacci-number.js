
const fibonacci = (position) => {  
    if(position <= 0)
        return 0;
    else if(position === 1)
        return 1;

    return fibonacci(position-1) + fibonacci(position-2);
}

console.log(fibonacci(7));