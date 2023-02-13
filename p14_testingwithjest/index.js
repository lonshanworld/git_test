function sum(a, b) {
    return a + b;
}
// module.exports = sum;

function substract(a, b) {
    return a - b;
}

function capitalizefunc(array){
    return array[0].toUpperCase() + array.substring(1);;
}

function reversestring(str){
    return str.split("").reverse().join("");
}

function caesarCipher(arr){
    let newarr = [];
    for(let a = 0; a < arr.length; a++){
        let num = arr[a].charCodeAt();
        num = num+1;
        let newvalue = String.fromCharCode(num);
        newarr.push(newvalue);
    }
    let value = newarr.join("");
    return value;
}

function analyzeArray(numarr){
    let minvalue = Math.min(...numarr);
    let maxvalue = Math.max(...numarr);
    let leng = numarr.length;
    let avg = numarr.reduce((sum,number) => (sum += number)) / leng;
    return {
        average : avg,
        min : minvalue,
        max : maxvalue,
        length : leng
    };
}


exports.sum = sum;
exports.substract = substract;
exports.capitalizefunc = capitalizefunc;
exports.reversestring = reversestring;
exports.caesarCipher = caesarCipher;
exports.analyzeArray = analyzeArray;