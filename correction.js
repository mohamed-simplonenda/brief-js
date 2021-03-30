// exrcice 1
function inverse (a,b) {
    let c=a; a=b ; b=c;
    return "a="+a + "b="+b;
}



console.log('ex1' ,inverse(2,3));
// exercice 2

   let Nom = "toto";
   let Age =30;
   let Homme = true;
 
console.log('ex2' ,Nom,Age,Homme)


// exercice 3
function addition (a,b) {
    return a+b;

}
console.log('ex3' ,addition(4,5));

// exercice 4
function minuteToSecond (a) {
    return a*60;

}
console.log('ex4' ,minuteToSecond(4));
// exercice 5
function increment (a) {
    return a+1;

}
console.log('ex5' ,increment(4));
// exercice 6
function getSurface (a,b) {
    return a*b/2;

}
console.log('ex6' ,getSurface(8,2));
// exercice 7
function reverse_a_number(n)
{
	return n.split("").reverse().join("");
}
console.log('ex7' ,reverse_a_number("HELLO"));
// exercice 8
function getSurface (a,b,c) {
    return Math.max(a, b, c);

}
console.log('ex8',Math.max(1, 3, 2));
// exercice 9
var tableau = ['1', '2' ,'3'];
var first = tableau[0];
console.log('ex9',first);
// exercice 10
function reste (x,y) {
   
return y % x;
    

}

console.log('ex10',reste(3,1));
// exercice 11
function testNum(a,b) {
    let result;
    if (a+b < 100) {
      result = 'true';
    } else {
      result = 'false';
    }
    return result;
  }
  
  console.log('ex11',testNum(5,125));

  // exercice 12
  function heureSeconde(a) {
    return a*3600;

}
console.log('ex12' ,heureSeconde(5));
// exercice 13
function checkNbr(a) {
    let result;
    if (a <= 0) {
      result = 'true';
    } else {
      result = 'false';
    }
    return result;
  }
  
  console.log('ex13',checkNbr(-5));
  // exercice 14
  function isEqual(a,b) {
    let result;
    if (a == b) {
      result = 'true';
    } else {
      result = 'false';
    }
    return result;
  }
  
  console.log('ex14',isEqual(-5,15));
   // exercice 15
   function isDivisible(a) {
    let result;
    if (a % 5 ==0) {
      result = 'true';
    } else {
      result = 'false';
    }
    return result;
  }
  
  console.log('ex15',isDivisible(16));
// exercice 16
function hmTos(a,b) {
    return a*3600+b*60;

}
console.log('ex16' ,hmTos(1,10));
// exercice 17

var tab=[1,2,3,4,5];
      for(var i=0;i< tab.length-1;i++)
          tab.push(tab.splice(-2-i,1)[0]);
          
          console.log('ex17',tab);

// exercice 18

var tableau = ['1', '2' ,'3'];
var last = tableau[tableau.length-1];
console.log('ex18',last);
// exercice 19
function isEqual(a,b) {
    let result;
    if (a === b) {
      result = 'true';
    } else {
      result = 'false';
    }
    return result;
  }
  
  console.log('ex19',isEqual("15",15));
  // exercice 20
  function checkNbr(a) {
    let result;
    if (a.length==0 ){
      result = 'true';
    } else {
      result = 'false';
    }
    return result;
  }
  
  console.log('ex20',checkNbr(""));

