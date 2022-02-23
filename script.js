const calc = {
    total:  0,
    add(a) {
        this.total += a;
        return this;
    },
    mul(a) {
        this.total *= a;
        return this;
    },
    sub(a) {
        this.total -= a;
        return this;
    },
}

const result = calc.add(10).mul(5).sub(30).add(10);

console.log(result.total)