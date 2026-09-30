function isPrime(num){
    if(!Number.isInteger(num) || num < 1){
        return false
    }
    let count = 0
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            count++
        }
    }
    if(count !== 2){
        return false
    }
    return true
}

module.exports = {
    isPrime: isPrime
}
