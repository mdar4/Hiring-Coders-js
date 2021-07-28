function fatora(n) {
    return (n === 0) || (n === 1) ? 1 : (n * fatora(n -1));
}
console.log(fatora(3))