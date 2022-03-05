let stocks = {
    fruit: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
};






// CALLBACK FUNCITONS, AND CALLBACK HELL

let order = (fruitName, callProduction) => {

    setTimeout(() => {
        console.log(`${stocks.fruit[fruitName]} was selected`)

        callProduction();
    }, 2000)

}

let production = () => {
    setTimeout(() => {
        console.log('production has started')
        setTimeout(() => {
            console.log('Water and Ice have been added')
            setTimeout(() => {
                console.log('The machine has started')
                setTimeout(() => {
                    console.log('serve ice cream')
                }, 2000)
            }, 1000)
        }, 1000)
    }, 2000)
}

order(0, production);