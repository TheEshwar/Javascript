function debounce() {
    let timer; 
    return (...args) =>{
        clearTimeout(timer)
        timer = setTimeout(() => {
            console.log('setting timeout debounce()');
        }, 500);
    }
}

