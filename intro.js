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
