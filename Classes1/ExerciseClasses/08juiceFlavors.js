function solve(juiceArr) {
    let juicesAmount = new Map();
    let juicesBottles = new Map();

    for (let index = 0; index < juiceArr.length; index++) {
        let [juiceName, amount] = juiceArr[index].split(' => ')
        amount = Number(amount);

        if (!juicesAmount.has(juiceName)) {
            juicesAmount.set(juiceName, 0)
        }

        let totalAmount = juicesAmount.get(juiceName) + amount;
        if (totalAmount >= 1000) {
            if (!juicesBottles.has(juiceName)) {
                juicesBottles.set(juiceName, 0)
            }
            let newBottels = Math.trunc(totalAmount / 1000)
            let totalBottels = juicesBottles.get(juiceName) + newBottels;

            juicesBottles.set(juiceName, totalBottels)
        }
        juicesAmount.set(juiceName, totalAmount % 1000);


    }
    return [...juicesBottles]
        .map(([key, value]) => `${key} => ${value}`)
        .join('\n');


} console.log(solve(['Kiwi => 234',

    'Pear => 2345',

    'Watermelon => 3456',

    'Kiwi => 4567',

    'Pear => 5678',

    'Watermelon => 6789']))