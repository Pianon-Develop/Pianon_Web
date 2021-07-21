let _={
    throttling(fn, wait){
        let endTime = +new Date
        return function() {
            if(+new Date - endTime < wait){
                return;
            }
            fn.apply(this, arguments)
            endTime = +new Date
        }
    }
}