function  solve(ticketArr, sortingCriteia) {
    class Ticket{
        constructor(destination,price,status){
            this.destination = destination;
            this.price = price;
            this.status  =status;
        }
        compareTo(other, criteria){
                if(typeof this[criteria] === 'string'){
                    return this[criteria].localeCompare(other[criteria]);
                }else {
                    return this[criteria] - other[criteria];
                }
        }
    }
let tickets = [];
    for (let index = 0; index < ticketArr.length; index++) {
        let[destination,price,status] = ticketArr[index].split('|');
        price = Number(price);
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket)
    }
    tickets.sort((a,b)=> a.compareTo(b,sortingCriteia));
    return tickets;
   
}
console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination' ));