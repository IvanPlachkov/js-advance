function solve(arr) {
    let productCatalog = {};
    for (let i = 0; i < arr.length; i++) {
        let [productName, price] = arr[i].split(' : ');
        price = Number(price);
        let initial = productName[0].toUpperCase();

        if (productCatalog[initial] === undefined) {
            productCatalog[initial] = {};

        }
        productCatalog[initial][productName] = price;
    }
    let result = [];
    let initialSorted = Object.keys(productCatalog).sort((a, b) => a.localeCompare(b));
    for (const key of initialSorted) {

        let product = Object.entries(productCatalog[key]).sort((a, b) => a[0].localeCompare(b[0]))

        result.push(key)
        let productsAsString = product.map(x => `  ${x[0]}: ${x[1]}`).join('\n');
        result.push(productsAsString)
    }
    return result.join('\n')

} console.log(solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']))