function hammingWeight (number) {
    let num = number;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    let weight = 0;
    for(const result of binary) {
        if (result == 1) {
            weight +=1;
        }
    }
    console.log(weight);
}
console.log(hammingWeight(10));