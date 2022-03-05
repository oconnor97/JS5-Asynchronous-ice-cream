console.log('1')
console.log('2')
console.log('3')


setTimeout(() => {
    console.log('callback 2 fired');
}, 5000)

setTimeout(() => {
    console.log('callback 1 fired');
}, 2000);

console.log('4')
console.log('5')
console.log('6')