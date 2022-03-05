var a = [1,2,3,4]

const c = function myFunctionMax(a){
    return b = Math.max(...a);
}

//console.log(c(a))


// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function myFunctionPosition(a, n){
    b = a.split('');
    for(let i = 0; i<=b.length; i++){
        if(i+1 == n) return b[i]
    }
}

// oooorrrrr

function myFunctionOtherPosition(a, n){
    return a[n-1]
}

var str_1 = ['This', 'is', 11, 'clock'] + '';//
var str_2 = String(['This', 'is', 11, 'clock']);
console.log(str_1);
console.log(str_2);

//his,is,11,clock
//This,is,11,clock 


//EJERCICIO 5
//- Remove first n characters of string

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
function myFunctionSplit(a){
    b = a;
    nuevo = ''
    for( let i = 0; i<b.length;i++){
        if(i==3){
            for(let j = i; j<b.length;j++){
                nuevo = nuevo+b[j]
            }
            break
        }
    }
    return nuevo
}
console.log(myFunctionSplit('1234')) // Funciona
//OtraForma de Acerlo

function myFunctionReplace(a){ //esto no funciona
    b = a.split('');
    //console.log(b.length)
    for( let i = 0; i<b.length;i++){
        console.log(i)
        if(i===3){break;}
        b.shift() //
    }
    // console.log(b.length)
    if(b.length == 1){
        return b.toString()
    }
    return b.toString().replace(/,/g,"")
}

console.log(myFunctionReplace('90901234'))

///O de otra manera mas facil usando slice
function myFunctionSliceOther(a){
    return a.slice(3)
}
console.log(myFunctionSliceOther('asdf'))// funciona



///
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
function myFunctionExtractLast(str){
	nuevo = ''
  for(let i = 0; i<str.length;i++){
    //console.log(i)
   if(i>=str.length-3){
       nuevo = nuevo + str[i]
   }
  }
  str = nuevo
  return str
}
console.log(myFunctionExtractLast('abcdefg'))//Funciona

//O de esta otra forma usando slice
function myFunctionSliceLast(str){
    return str.slice(-3)
}
console.log(myFunctionSliceLast('12345'))//Funciona




// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
function myFunctionFirtTerms(a){
    nuevo = ''
    for(let i= 0; i<a.length;i++){
        if(i<3){
            nuevo = nuevo + a[i]
        }
    }
    return nuevo
}
console.log(myFunctionFirtTerms('12345'))//Funciona

//Tambien se puede con slice
function myFuncionFirstTermsSlice(a){
    return a.slice(0,3)
}
console.log(myFuncionFirstTermsSlice('opopop'))


///EJERCICIO  8
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

//usando el slice()
function myFunctionMitad(a){
    return a.slice(0,a.length/2)
}
console.log(myFunctionMitad('12345678'))//Funciona


function myFunctionMitadPropia(a){
    nuevo = ''
    for(let i=0; i<a.length/2;i++){
        nuevo = nuevo + a[i]
    }
    return nuevo
}
console.log(myFunctionMitadPropia('asdf'))//Funciopna


///EJERCICIO 9
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
function myFunctionCop9(a){
    return a.slice(0,-3)
}
console.log(myFunctionCop9('12345'))

function myFunctionProp9(a){
    nuevo = ''
    for(let i= 0; i<a.length-3;i++){
        nuevo = nuevo + a[i]
    }
    return nuevo
}
console.log(myFunctionProp9('asd'))


//EJERCICIO 10
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

function myFunctionCop10(a,b){
    return b*a/100
}


//EJERCICIO 11 
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order
function myFunction2(a,b,c,d,e,f){
    return Math.pow(((((a+b)-c)*d)/e),f)
}

//EJERCICIO 12
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
function myFunction(a) {
    return a % 2 === 0
}

//EJERCICIO 13

// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

function myFunctionProp13(b,a){
    count =0
    for(let i = 0; i<a.length; i++){
      if(a[i] === b){
        count++
      }
    }
      return count
  }
  console.log(myFunctionProp13('n','Hola como estan, son unos locos'))

  // Returns an empty array
''.split(''); // returns []

// Returns an array with an empty string
''.split() // returns [""]

function myFunctionCop13(a, b) {
    return b.split(a).length-1
  }
console.log(myFunctionCop13('?', 'how many times does the character ? occur in? this sentence??'))


//EJERCICIO 14
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false


function myFunctionCop14(a) {
   
    return a-Math.floor(a)===0
 }

 //EJERCICIO 15

// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

function myFunctionCop15(a, b) {
    return a < b ? a / b : a * b
  }


//REPASOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
//*************************             INDEXOF      ************** */
//Encontrar todas las apariciones de un elemento
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
// Copy to Clipboard
// Encontrar si un elemento existe en la matriz o no y actualizar la matriz
function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('La nueva colección de vegetales es: ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' ya existe en la colección de verduras.');
    }
}


var veggies = ['patata', 'tomate', 'chiles', 'pimientoverde'];

updateVegetablesCollection(veggies, 'espinaca');
// La nueva colección de verduras es : patata, tomate, chiles, pimientoverde, espinaca
updateVegetablesCollection(veggies, 'espinaca');
// La espinaca ya existe en la colección de verduras.


//EJERCICIO 16 
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
function myFunctionProp16(a, b){
    return a.includes(b)? b+a:a +b
}
console.log(myFunctionProp16('cheese', 'e'))

//otra forma es usar el metodo indexOf()
function myFunctionCop16(a, b) {
    return a.indexOf(b) === -1 ? a + b : b + a
}
console.log(myFunctionCop16('Hola','s'))

//EJERCICIO 17

// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
function myFunctionCop17(a){
    return Number(a.toFixed(2))
}
console.log(myFunctionCop17(4.57869))


//EJERCICIO 18

// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function myFunctionProp18(a){
    return a.toString().split('').map(Number)
  }
  console.log(myFunctionProp18(15))
  
  
  
  function myFunctionCop18( a ) {
    const string = a + '';
    const strings = string.split('');
    return strings.map(digit => Number(digit))
  }
  console.log(myFunctionCop18(1545))


// EJERCICIO 19
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc


function myFunctionCop19(a, b) {
    const func = x => x.replace('%','');
    const first = func(a);
    const second = func(b).split('').reverse().join('');
    return first.charAt(0).toUpperCase() + first.slice(1) + second;
}
console.log(myFunctionCop19('java', 'tpi%rcs'))
console.log(myFunctionCop19('c%ountry', 'edis'))

//Mi manera de resolverlo
function myFunctionProp19(a, b){
    const func = (x)=>{
        return x.replace('%','')
    }
    //const func = x => x.replace('%','');
    nuevoB = func(b).split('').reverse().join('')
    nuevoA = func(a)
    str = nuevoA+nuevoB
    return str.replace(str[0], str[0].toUpperCase())
}


console.log(myFunctionProp19('java', 'tpi%rcs'))
console.log(myFunctionProp19('c%ountry', 'edis'))

//EJERCICIO 20
//sin terminar
function myFunction(a){
    count = 0
    for(let i = 1; i<=a;i++){
      if(a%i === 0 && a/i === 1 && count === 1){
        return a
        count++
      }else if(i === a){
        a++
      }
    }
  }
  console.log()