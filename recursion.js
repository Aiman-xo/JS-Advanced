let str1 = 'Bridgeon';

function reverse(i, str) {
    if (i === str.length) {
        return '';
    }
    return reverse(i + 1, str) + str[i];

}

console.log(reverse(0, str1));