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
    console.log('save input');
}

const debounceFunc = debounce(() => saveInput(),3000);

debounceFunc();
debounceFunc();
debounceFunc();