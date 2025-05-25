function multiplyby5(num){
    return num*5
}
multiplyby5.power = 2
console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai =   createUser("chai", 25)
const tea = new createUser("tea", 250)

tea.printMe()


