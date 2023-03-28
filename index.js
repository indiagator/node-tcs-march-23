
//----- Entry Point -----

let k = 89;

console.log('hello tcs'); // javascript code

/**gdfgg
 * gdfgd
 * gfdg
 * dsgf
 * gfdgd
 * gfdgd
 * gdfg
 */

var $df = 12; // base10 integer number
var someHex = 0xff; // hexadecimal number
var someBinary = 0b01010111; // base 2 number
var someDecimal = .786 // base 10 decimal number 
var someBankAmnt = 56_000_000_000_000; // another representation of large numbers

console.log(Math.sqrt($df));
console.log(Math.sqrt($df)/0);

console.log( 78 + '56'); // concatenation
console.log( 78 + Number.parseInt('56'));
let now = new Date();
console.log(now.toISOString());
//console.log(_gh.length);

var c = 't'; // string with a single character
var c1 = ''; //string with no characters
var _gh = 'some string'; // string
var escStr = "first line \n second \t line";

console.log(_gh.length);

console.log(c.length);
console.log(c1.length);
console.log(escStr);


var testStr = "a quick brown fox, jumped over, the little lazy dog!"

console.log(testStr.substring(-4));
console.log(testStr.slice(-4));

var splitStr = testStr.split('e');
console.log(splitStr);
console.log(testStr.endsWith('!'));

console.log(testStr.concat(' ?'));

var newStr = `New String and ${ 8+9 }`; // will be used when we go to web templates
console.log(newStr);



var testN = null;
var testN2 = undefined;
var testN3 = null;
var testN3;

console.log(testN);
console.log(testN2);
console.log(testN3);
//console.log(testN4);

console['log'];

$df = new Date();
console.log( typeof $df );
$df.cfgd = 'test value'; // I took an object type variable then added a new data member
console.log($df.cfgd);

var testNum = 67;
testNum.testProp = 'someValue'; // you can't assign properties to a primitive data holding variable

//$df[cfgd];


console.log(isNaN('Hello world'));c

console.log(globalThis.Lock);

var testObj1 = {    prop1 : 23,  // this is not only a class definition but also initialization at the same time
                    prop2 : 45, 
                    prop3 : 'hello tcs', 
                    prop4 : true,
                    prop5 : { x : 67, y : 78}
                };

testObj1.prop6 = { a :78, b : 89 };

var testObj2 = { a :78, b : 89 };

console.log(testObj1.prop6 == testObj2);

console.log(testObj1.prop6);
//console.log(testObj1.prop7);
//console.log(fdskjgfhds);

console.log('hello'/78)

{
    let j = 78;
}

console.log(j);

if('hello'/78)
{
    console.log('case 1');
}
else
{
    console.log('case 2');
}

var a = 8; //primitive data
var b = 8; //primitive data

console.log(a == b);

var testArr1 = [ 45,'hello string', {x:78}, true ]; // arrays in js are heterogenous
console.log(testArr1);

testArr1.testProp = 56;

console.log(testArr1);

console.log(testArr1[2]);

console.log(testArr1);

//---- over ---





