
let stocks = {
    Fruit: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
};

let isShopOpen = false;


// PROMISES


let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if(isShopOpen) {
            setTimeout(() => {
                resolve(work())
            }, time)
        }
        else {
            reject(console.log('Our shop is closed'))
        }
    })
};

order(2000, () => {
    console.log(`${stocks.Fruit[0]} was selected`)
})
.then(() => {
        return order(0000, () => {console.log('Production has started')})
})
.then(() => {
    return order(4000, () => {console.log('The machine has started')})
})
.catch(() => {
    console.log('The customer left')
})
.catch(() => {
    console.log('This is a test')
})
.finally(() => {
    console.log('The day has ended')
})
