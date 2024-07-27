// when user write there name in lower case letter or wirte there name
//  first character in small in other name upper case this code will
//  write the name of user in first chaeacter in upper case remaning 
// name lower case

var name = prompt("Write your name!");
var slice =name.slice(0,1);
var uper = slice.toUpperCase();
var slicelow = name.slice(1,name.lenght);
var low = slicelow.toLowerCase();
var fuln = uper + low;
alert("Hello" +" "+ fuln);



// this is for selecting character for tweet

var tweet = prompt("write your twite here upto 140 character");
var count = tweet.length;
var remaning = (140 - count);
var slice = tweet.slice(0,140);
alert("you write "+count + " character you have remaning "+remaning+" character "+ slice)


// this is function in java script
function move(money, perbottel){
    console.log("move forward");
        console.log("move forward");
        console.log("move forward");
        console.log("move forward");
        console.log("move forward");
        console.log("move forward");
         var cost = calcbottel(money, perbottel);
        console.log("Buy " +cost+" milk");
        console.log("move back");
           console.log("move back");
           console.log("move back");
           console.log("move back");
           console.log("move back");
        return calcchange(money, perbottel);
    
    }
    
    
    function calcbottel(startingmoney, costperbottel){
    
        var calc =Math.floor(startingmoney / costperbottel);
        return calc;
    }
    function calcchange(fmoney, costbottel){
    var change = fmoney % costbottel;
        return change;
    }
    console.log("Hello khan there is " +move(4, 1.5) +" remaning change");



    // this is love calculater
    prompt("write your name ");
prompt("write your X name ");
var scoure = Math.random()*100;
scoure = Math.floor(scoure);
console.log("your love scoure is "+ (scoure +1));



// this is if else statement
prompt("write your name ");
prompt("write your X name ");
var scoure = Math.random()*100;
scoure = Math.floor(scoure) +1;
if(scoure<=100 && scoure>=70){
   alert("your love scoure is "+ scoure +"%"+" you love each other like khan loves khan"); 
}
if(scoure<70 && scoure>=50){
    alert("your love scoure is "+ (scoure +1) +"%"+" your love is good"); 
}
else{
    alert("your love scoure is "+ (scoure +1) +"%"); 
}

// if statement for finding leap year

function khan(year){
    if (year % 4===0){
        if (year % 100===0){
            if (year % 400===0){
                return "this is leap year";
           }
            else {
                return "this is not leap year";
            }
        }
        else{
            return "this is leap year";
        }
        return "this is leap year";
    }
    else{
        return "this is not leap year";
    }
}
khan(2025);


// this is array in java script
var nam = ["bashir", "naqeeb", "fayaz", "hamad", "luqman"];

function rendom() {
    var rendpeople = nam.length;

var rend = Math.floor(Math.random() * rendpeople);
    var rendomperson = nam[rend];
    return rendomperson + " will buy a lunch";
}
rendom();



// this is empty array putting value

function func(n) {
    const arr = [];
    if(n===1){
     arr.push(0);
     console.log(arr);
    }
   
     if(n===2){
     arr.push(0, 1);
     console.log(arr);
    }
    else{
       arr.push(0, 1);
     console.log(arr);
   
     for (let i = 2; i < n; i++) {
      arr[i] = arr[i-1]+ arr[i-2];
    //   OR this both are use for same logic
    // arr.push(arr[arr.length -2] + arr[arr.length -1]);
      
     }
    }
     return (arr);
   }
   arr = func(100);
   console.log(arr);




//    object and constrictor function
function BellBoy(name, experience, lenguage){
    this.name =name;
    this.experience= experience;
    this.lenguage = lenguage;
   }
   var khan = new BellBoy("bashir", 2, "pashto");
   console.log(khan);
   
   
//    object in javascript
var khan = {
    name: bashir,
    experience: 2,
    lenguage: pashto,
}
console.log (khan.name);


// javascript switch statementr
function khan(n){
    switch(n){
    case 10:
     console.log("this is first case");
     break;
   
    case 1:
     console.log("this is second case");
     break;
    case 11:
     console.log("this is last case");
     break;
    default: console.log("this is defauly case");
   }
   }
   khan(111);

// OR THIS
var n = 111;
 switch(n){
 case 10:
  console.log("this is first case");
  break;

 case 1:
  console.log("this is second case");
  break;
 case 11:
  console.log("this is last case");
  break;
 default: console.log("this is defauly case");
}
