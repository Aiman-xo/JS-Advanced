function memo() {
    let cache = {}

    return function (a, b) {
        let key = `${a},${b}`;
        if (key in cache) {
            console.log('fetching from cache...' + cache[key]);
            return cache[key];
        }
        console.log('calculating...');
        let result = a + b;

        cache[key] = result;
        console.log(result);

    }
}

let o = memo();
o(2, 3);
o(2, 3);
o(2, 3);