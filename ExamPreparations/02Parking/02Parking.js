class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];

    }
    addCar(carMOodel, carNUmber) {
        if (this.vehicles.length >= this.capacity) {
            throw new Error('Not enough parking space.');
        }
        let car = {
            carMOodel,
            carNUmber,
            payed: false,
        };
        this.vehicles.push(car);
        return `The ${carMOodel}, with a registration number ${carNUmber}, parked`
    }
    removeCar(carNUmber) {
        let currentCar = this.findCar(carNUmber)
        if (!currentCar) {
            throw new Error('the car,your loking for , is not found')
        }
        if (!currentCar.payed) {
            throw new Error(`${carNUmber} needs to pay before leving theparking lot.`)
        }
        this.vehicles = this.vehicles.filter(x => x.carNUmber != currentCar.carNUmber);
        return `${carNUmber} left the parking lot`
    }
    pay(carNUmber) {
        let currentCar = this.findCar(carNUmber)

        if (!currentCar) {
            throw new Error(`${carNUmber} is not in the parking lot`);
        }

        if (currentCar.payed) {
            throw new Error(`${carNUmber} driver has alredy payed his ticket`);
        }
        currentCar.payed = true;
        return `${carNUmber} driver successfullly payd for his stay`
    }
    getStatistics(carNUmber) {
        if (!carNUmber) {
            return this.getFullStatistick();
        }
        let car = this.findCar(carNUmber)
        return this.carReport(car)
    }
    getFullStatistick() {
        let result = [];
        result.push(`The Parking lot has ${this.capacity - this.vehicles.length} empty spots left`)
        let sortedVehicles = this.vehicles
            .slice()
            .sort((a, b) => a.carMOdel.localeCompare(b.carMOdel))
            .forEach(car => {
                result.push(this.carReport(car))
            });
        return result.join('\n')
    }
    carReport(car) {
        return `${car.carMOdel} == ${car.carNUmber} - ${car.payed ? 'Has Payed' : 'Not Payed'}`;
    }


    findCar(carNUmber) {
        return this.vehicles.find(x => x.carNUmber == carNUmber);

    }


}
const parking = new Parking(12);
console.log(parking.addCar('Volvo vs40', 'Tx3691CA'));
console.log(parking.getStatistics());
console.log(parking.pay('Tx3691CA'));
console.log(parking.removeCar('Tx3691CA'));