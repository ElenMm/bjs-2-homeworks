//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];

    return (...args) => {
        const hash = md5(args);
        const objectInCache = cache.find((item) => item.hash === hash)

        if (objectInCache) {
            console.log("Из кеша:" + objectInCache.value);
            return "Из кеша: " + objectInCache.value;
        }

        if (cache.length >= 5) {
            cache.shift();
        }

        const result = func(...args);
        cache.push({
            hash: hash,
            value: result
        });
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;

    function wrapper(...args) {
        wrapper.allCount ++;
        
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        if (!timeoutId) {
            wrapper.count ++;
            func.call(this, ...args);
        } 

        timeoutId = setTimeout(() => {
            func.apply(this, args);
            wrapper.count ++;
        }, delay);
    }
    return wrapper;
}
