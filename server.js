// console.log("welcome")
// var a = 1234
// console.log(a)
// console.log(typeof (a))
// var b = "abcd"
// console.log(b)
// console.log(typeof (b))
// var c = 'ojdhjbd'
// console.log(c)
// console.log(typeof (c))
// var d = `gdhjc`
// console.log(d)
// console.log(typeof (d))
// var e = true
// console.log(e)
// console.log(typeof (e))
// var f = false
// console.log(f)
// console.log(typeof (f))
// var g;
// console.log(g)
// var h="4tyj90&&((*"
// console.log(h)
// console.log(typeof(h))
// var a=20;
// var b=10;
// console.log(a+b)
// var addition= a+b
// console.log(addition)
// var c=09678
// var d="hsfbnxba"
// console.log(c+d)
// var str= c+d
// console.log(str)
// console.log(c===d)

// var c=d
// console.log(c)
// var sub= a-b
// console.log(sub)
// var check = c===d
// console.log(check)

// console.log(a=b)

// var a;
// var b=1234;
// console.log(a && b)   // if a  is there then only print b
// console.log(a || b)   // print a or b

// var c = "jxbzx";
// var d = 987;
// console.log(c && d)


//  conditional statements 

// if-else
// switch

// if-else statement 

// if(condition){
//     block of code
// }
// else(condition){
//     block of code

// }

// Q . make driving licence website 
// 1. allow user for dl if their age is above 18
// 2. if user age is 18 then allow him for learning licence
// 3. if user age is below 18 then dont allow for dl
// 4. if user age is above 80 then dont allow for dl 

// var age = 81;

// if (age >80){
//     console.log("you are over age")
// }
// else if(age ==18){
//     console.log("you are allowed for learning l")
// }
// else if(age >18){
//     console.log("you are allowed for driving l")
// }
// else{
//     console.log("you are under age")
// }

// switch statements

// var name = "d";
// switch (name) {
//     case "a":
//         console.log("you are a");
//         break;
//     case "b":
//         console.log("you are b");
//         break;
//     case "c":
//         console.log("you are c");
//         break;
//     default:
//         console.log("name is different from abc")
// }



// var age = 18;
// switch (tru) {
//     case (age > 80):
//         console.log("you are over age");
//         break;
//     case (age == 18):
//         console.log("you are allowed for learning license");
//         break;
//     case (age > 18):
//         console.log("you are allowed for driving license");
//         break;
//     default:
//         console.log("you are under age")
// }

// var age = 5;
// switch (true) {
//     case age > 80:
//         console.log("not allow- overage");
//         break;
//     case age == 18:
//         console.log("allow for LL");
//         break;
//     case age > 18:
//         console.log("allow");
//         break;
//     default:
//         console.log("not allow-underage");

// }
// -------------------------------------------------------------------------
// var number= 233;
// if(number % 2==0){
//     console.log("number is even")
// }else{
//     console.log("number is odd")
// }

// var number=233;
// switch(true){
//     case number%2==0:
//         console.log("even number")
//         break;
//     case number%2!=0:
//         console.log("odd number")
//         break;
// }

// --------------------------------------------------
// var number1=5;
// var number2=10;
// if(number1>number2){
//     console.log("number1 is large")
// }
// else{
//     console.log("number2 is large")
// }

// var number1=5;
// var number2=10;
// switch(true){
//     case(number1>number2):
//     console.log("number1 is big")
//     break;
//     case(number1<number2):
//     console.log("number2 is big")
//     break;
//     case(number1===number2):
//     console.log("numbers are equal")
//     break;

// }
// -----------------------------------------------

// var x=15;
// var y=20;
// var z=40;
// if(x>y && x>z){
//     console.log("x is greater")
// }else if(z>x && z>y){
//     console.log("z is greater")
// }
// else{
//     console.log("y is greater")
// }

// var number1 = 15;
// var number2 = 20;
// var number3 = 40;
// switch (true) {
//     case number1 > number2 && number1 > number3:
//         console.log("number1 is greater")
//         break;
//     case number2 > number1 && number2 > number3:
//         console.log("number2 is greater")
//         break;
//     case number3 > number1 && number3 > number2:
//         console.log("number3 is greater")
//         break;
// }



// ------------------------------------------------

// var number=10;
// if(number<5 || number>25){
//     console.log("number is not present");
// }
// else if(number>=5 || number<=25){
//     console.log("number is present");
// }
// else{
//     console.log("number is not present");
// }



// var number = 10;
// var min = 5;
// var max = 25;
// switch (true) {
//     case (number >= min && number <= max):
//         console.log("number is present in range")
//         break;
//     default:
//         console.log("number is  not present in range")
//         break;
// }
// -----------------------------------------

// functions

// function add(){
//     var a=2;
//     var b=3;
//     console.log(a+b)
// }add();

// function sub(){
//     var a=1;
//     var b=3;
//     console.log(a-b)
// }
// sub();

// let m=fun(45);
// let res="the res is " + fun(45);

// var a=2;
// var b=4;
// function res(firstpara, secondpara){
//     console.log(firstpara*secondpara)
// }
// res(a,b)


// var a=2;
// var b=4;
// function res(firstpara, secondpara){
//     return firstpara * secondpara;
// }
// var ad=res(a,b);
// console.log(ad);

// var a=876;
// var b=9876;
// function greaternum( firstnumber,secondnumber){
//     if(firstnumber>secondnumber){
//         console.log("firstnumber is greater") ;
//         return ;
//     }
//     else{
//         console.log("secondnumber is greater");
//         return ;
//     }

// }
// greaternum(a,b)


// var num= -1;
// function check(number){
//     if(num>0){
//         console.log
//     }
// }


// var a=2;
// var b=4;
// function greater(a,b){
//     var bigger;
//     if (a>b){
//         bigger =a;
//     }
//     else{
//         bigger = b;
//     }
//     bigger = bigger*2;
//     return bigger;
// }
// var res= greater(a,b);
// console.log(res);

// var number= 233;
// if(number % 2==0){

// var num1=4;
// var num2=6;
// function gret(firstnum, secondnum){
//     var res;
//     if(num1>num2){
//         console.log("num1 is greater")
//         return num1
//     }
//     else{
//         console.log("num2 is greater")
//         return num2
//     }
// }
// gret(num1,num2)


// var x=15;
// var y=20;
// var z=40;
// function check(firstnum,secondnum,thirdnum){
//     if(x>y && x>z){
//         console.log("x is greater")
//         return
//     }else if(z>x && z>y){
//         console.log("z is greater")
//         return
//     }
//     else{
//         console.log("y is greater")
//         return
//     }
// }check(x,y,z)

// var number=10;
// function check(number){
//     var res;
//     if(number<5 || number>25){
//        res="number is not in range";
//     }
//     else if(number>=5 || number<=25){
//         res="number is  in range";
//     }
//     else{

//         res=number;
//     }
//     return res;
// }
// var print=check(number);
// console.log(print);


// var d= 2;
// function check(a){
//     var res;
//     if(d %2==0){
//         console.log("even");
//         return a;
//     }else{
//         console.log("odd");
//     }

// }
// check(d);

// write a function to print numbers fro 1 to 10
// var rengeStart=1;
// var rangeEnd =10;
// var num;
// function check(){
//     while(rangeStart<rangeEnd){
//         console.log (rangeStart);
//         rangeStart++;
//     }
// }
//  var num=1;
// if (num=rangeStart && num<=rengeEnd ){
//  console.log(num)
// }

// --------------------------

// 1- a=1; 1<10 true ; a++ = 1+1 = 2 end 
// 2- a=2 ; 2<10 true; a++ = 2+1 =3 end
// -------------------------


// var rangeStart=1;
// var rangeEnd =10;
// var num=1;
// while(num<=rangeEnd){
//     console.log(num);
//     num++;
// }

// for(var a= rangeStart; a<=rangeEnd /2; a++){
//     console.log(a);

// }

// var rangeStart=10;
// var rangeEnd=20;
// function printnum(start, end){
//     for(var a=start; a<=end;a+=3){
//         console.log(a)
//     }
// }
// printnum(rangeStart,rangeEnd)
// -----------------------------------
// var rangeStart=1;
// var rangeEnd=100;
var numcount=0;
function printeven() {
    for (var a = 10; a <= 20; a++) {
        if (a % 2 == 1) {
            console.log(a)
            // console.count(a % 2 == 0)
            numcount++
        }
    }
return numcount;

}
var b = printeven()
console.log(numcount)


function findodd(start,end){
    var count=0;
    for(var i=start; i<=end; i++){
        if(i%2==0){
            count++
        }
    }
    return count;
}
var even=findodd(1,10)
console.log(even)


