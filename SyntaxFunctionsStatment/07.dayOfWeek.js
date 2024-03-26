function solve(day) {
    let result = 0;
    switch (day) {
        case 'Monday':
              result=1
            break;
            case 'Thusday':
              result=2
            break;
            case 'Wensday':
              result=3
            break;
            case 'Thursday':
              result=4
            break;
            case 'Friday':
              result=5
            break;
            case 'Saturday':
              result=6
            break;
            case 'Sunday':
              result=7
            break;
    
        default:
            result = "Error"
            break;
    }
    console.log(result);
}solve('Monday')
solve('Friday')
solve('Invalid')