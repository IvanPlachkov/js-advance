// _______________SETUP EXAMPLE __________________________________________
// function endGame() {
//     let avengers = [
//         'Iron man',
//         'Cptain America',
//         'Thor', 
//     ];
//     function asemble(avengers) {
//             let enemy = 'Thanost';
//             console.log('Avengers , asble!');
//             console.log(avengers.join(', '));
//             console.log(`Lets kil ${enemy}`);
//         }
//     asemble(avengers);

// }
// endGame();

//____________________ MOdify to use clasure ________________________________
function endGame() {
    let avengers = [
        'Iron man',
        'Cptain America',
        'Thor', 
    ];
    function asemble() {
            let enemy = 'Thanost';
            console.log('Avengers , asble!');
            console.log(avengers.join(', '));
            console.log(`Lets kil ${enemy}`);
        }
  return asemble;

}
let finalAct = endGame();
finalAct();