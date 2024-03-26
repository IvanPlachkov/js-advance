function solve(arr){
        for (let i = 0; i < arr.length; i++) {
        arr.sort().join('\n');
        console.log(`${i+1}.${arr[i]}`) ;       
    }
  
}solve(["John",

"Bob",

"Christina",

"Ema"]);