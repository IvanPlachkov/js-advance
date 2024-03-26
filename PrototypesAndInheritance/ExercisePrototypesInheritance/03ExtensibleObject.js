function extensibleObject() {
    // create prototype obj
   let proto = {};
   //create extensibleObject with prototype proto
   let extObj = Object.create(proto);// suzdavame nov obekt sus neshtata ot purviq proto v slu4aq prazen
   //add extend function to extenibleObjext
   extObj.extend = function(template){
    //iterate keys of template obj
    for(const key in template){
        if(typeof template[key] === 'function') {
            // if template obj property is function  - > add to protoype
            let proto = Object.getPrototypeOf(this);
            proto[key] = template[key]
            // if tempate obj property is not function -> add extensible obj
        }else{
            this[key] = template[key]
        }
    }
   }
    return extObj;
}
const myObj = extensibleObject(); 
const template = {

    extensionMethod: function () {},
    
    extensionProperty: 'someString'
    
    }
    
    myObj.extend(template);
    console.log(myObj)