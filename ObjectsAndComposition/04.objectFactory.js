function objFactory(library,orders) {
    const result = [];
    for (let i = 0; i < orders.length; i++) {
        const obj = orders[i].template;
        orders[i].parts.forEach((part) => {
          console.log(part)
            obj[part] = library[part]
          
        });
       result.push(obj)
       
    }
    return result;
} 
const library = {
    print:function () {
        console.log(`${this.name} is printing a page`);
    },
    scan:function (){
     console.log(`${this.name} is scanning a documen`);
    },
    play:function(artist,track){
        console.log(`${this.name}is playing &#39;${track}&#39,by ${artist}`);
    },
};
const  orders = [{
    template: {name: "ACME Printer"},
    parts:['print']
  }, {
    template: {name : "Intech Scanner"}, 
    parts:['scan']
  },{
    template: {name: "ComTron Copier"},
    parts:['scan','print']
  }, {
    template:{name: "Boombox Stereo"},
    parts:['play']
  
  } 
]
  const products = objFactory(library,orders);
  console.log(products);