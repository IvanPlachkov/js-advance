function solve(arr) {
    let product = {};
    for (let i = 0; i < arr.length; i++) {
        let [townName, productName, productPrice] = arr[i].split(' | ');
        productPrice = Number(productPrice);
        if (!product.hasOwnProperty(productName)) {
            product[productName] = {};
        }


        product[productName][townName] = productPrice;
    }
    let result = [];

    for (const key in product) {
        let sortedTown = Object.entries(product[key]).sort((a, b) => a[1] - b[1])
        let cheapestTown = sortedTown[0];
        result.push(`${key} -> ${cheapestTown[1]} (${cheapestTown[0]})`)
    }
    return result.join('\n')
} console.log(solve(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10']))