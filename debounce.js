function debounce(func, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        },
        delay
        );
    }
}

function saveInput(){
    count++;
    console.log(count);
}

let count = 0;
const debounceFunc = debounce(() => saveInput(),3000);

debounceFunc();
debounceFunc();
debounceFunc();

