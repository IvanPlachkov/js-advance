function solve(area, vol, input) {
let cordinatesArr = JSON.parse(input);
let resultArr = [];
for (const codinates of cordinatesArr) {
    let resultObj={
        area: area.call(codinates),
        volume : vol.call(codinates)
    };

    resultArr.push(resultObj)
    console.log(resultObj);
}

}
 function area() {
 return Math.abs(this.x * this.y);
};
  function vol() {
 return Math.abs(this.x * this.y * this.z);
}; 

       

solve(area, vol, '[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]')