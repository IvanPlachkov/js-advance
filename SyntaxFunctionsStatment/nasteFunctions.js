function solve(m,n) {
    function square(num){
        return num * num
    }
    return Math.sqrt(square(m) + square(n))
}
console.log(solve(3,4))