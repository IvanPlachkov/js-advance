function solve(arr){
    herosArr = [];
for (let i = 0; i < arr.length; i++) {
   let [name,level,item]= arr[i].split(' / ');
   level = Number(level);
   item = item !== undefined ? item.split(', ') : []; 
    herosArr.push({name:name,level:level,item:item});
}
return JSON.stringify(herosArr);

}console.log(solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']))
