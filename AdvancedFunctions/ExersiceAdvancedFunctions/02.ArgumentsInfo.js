function solve(...params) { 
    // hold types
        let occurences = {};
        // array to hold result
        let result = [];
        params.forEach(el => {
            //2.get param type
            let type = typeof(el);
            //2a push into result arr
            result.push(`${type}: ${el}`)
            //incrase type count in ccurances obj
            occurences[type] = occurences[type] !== undefined
             ? ++occurences[type]
             : 1;
        })
        //4 get occrences keys (`string,''number`,'...etc')
        let sortedKeys = Object.keys(occurences)
        .sort((a,b) => occurences[b] - occurences[a]);

        sortedKeys.forEach(key => result.push(`${key} = ${occurences[key]}`));
        result.forEach(el => {
            console.log(el);
        })
        //return result.join('\n');
}
solve('cat',22, 42, function () { console.log('Hello world!'); } );