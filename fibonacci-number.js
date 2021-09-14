
const fibonacci = (position) => {
    let a = 0, b = 1, temp = 0;

    if(position === 0)
        return 0;
    else if(position === 1)
        return 1;

    for(let i = 2; i <= position; i++){
        temp = a+b;
        a = b;
        b = temp;
    }

    return temp;
}

console.log(fibonacci(0));