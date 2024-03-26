let name = 'Pesho';
let sayHeelo = () => {
    console.log('Hello');
}
sayHeelo();
console.log(name);

//module.exports = 'Gosho'
module.exports = {
    getName: ()=> name,
    sayHeelo
}