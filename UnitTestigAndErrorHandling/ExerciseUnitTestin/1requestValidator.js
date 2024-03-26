function solve(httpObj) {
validateMethod(httpObj);
validateUri(httpObj);
validateMessage(httpObj);
validateVersion(httpObj);
return httpObj;

function validateMessage(httpObj) {
    let propName = 'message';
    let messageRegex = /^[^<>\\&']*$/;
    if(httpObj[propName] === undefined || !messageRegex.test(httpObj[propName])){
        throw new Error('Invalid request header : invaid Message');
    }
}

function validateVersion(httpObj) {
    let propName = 'version';
    let validVersion = [' HTTP/0.9 ',' HTTP/1.0' , 'HTTP/1.1' , 'HTTP/2.0'];
    if(httpObj[propName] === undefined || 
        !validVersion.includes(httpObj[propName])) {
            throw new Error('Invalid request header : invaid version')
        }
}

    function validateUri(httpObj) {
        let propName = 'uri';
        let uriRegexx = /^\*|*$^[a-zA-Z0-9.]+$/
        if(httpObj[propName] === undefined || !uriRegexx.test(httpObj[propName])){
            throw new Error('Invalid request header : invali URI')
        }
    }

function validateMethod(httpObj){
    let validMethods = ['GET', 'POST','DELETE','CONNECT'];
    let propName = 'method';

    if (httpObj[propName] === undefined || 
    !validMethods.includes(httpObj[propName])) {

        throw new Error('Invalid request header : invaid Method')
    }
}
}

try{
    console.log(solve({

        method: 'OPTIONS',
        
        uri: 'git.master',
        
        version: 'HTTP/1.1',
        message: '-recursive'
    }
    ))
}catch (e){
    console.log(e.message);
}