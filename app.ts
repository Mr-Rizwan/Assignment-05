// 1.write a program to find maximum number between two numbers

var num1:any=prompt("Enter 1st Number")
var num2:any=prompt("Enter 2nd NUmber")
if(num1>num2){
    console.log("1st Number is Maximum:",num1)
}
else{
    console.log("2nd Number is Maximum:",num2)
}


// 2.write a program to find maximum number between three numbers

var num1:any=prompt("Enter 1st number")
var num2:any=prompt("Enter 2nd Number")
var num3:any=prompt("Enter 3rd Number")
if((num1>num2)&&(num1>num3)){
    console.log("1st Number is Maximum:",num1)
}
else if((num2>num1)&&(num2>num3)){
    console.log("2nd Number is Maximum:",num2)
}
else{
    console.log("3rd Number is Maximum:",num3)
}



//3.write a program to check whether the number is positive, negative or zero

var num:any=prompt("Enter the Number")
if(num>0){
    console.log("Number is Positive:",num)
}
else if(num<0){
    console.log("Number is Negative:",num)
}
else {
    console.log("Number is zero:",num)
}



//4.write a program to check the number is divided by 5 , 11 or not

var num:any = prompt("Enter the Number");
if (num % 5 == 0) {
    console.log("Number Divided by 5");
}
else if (num % 11 == 0) {
    console.log("Number is Divided by 11");
}
else {
    console.log("Number is not Divided by 5 and 11");
}




//5.write a program to check whether the number is even or odd


var num:any=prompt("Enter the Number")
if(num%2==0){
    console.log("Number is Even:",num)
}
else{
    console.log("Number is Odd:",num)
}




//6.write a program to check whether this is leap year or not

var year:any=prompt("Enter The Year")
if(year%4==0){
    console.log("This is Leap Year:",year)
}
else{
    console.log("This is not Leap Year:",year)
}




//7.write a program to check whether this is alphabet or not

var alph:any=prompt("Enter The Alphabet")
if(((alph>='a')&&(alph<='z'))||((alph>='A')&&(alph='Z'))){
    console.log("This is Alphabet:",alph)
}
else{
    console.log("This is not Alphabet:",alph)
}




//8.write a program to check whether the alphabet is vowel or not

var a:any=prompt("Enter the Alphabet")
if((a=='a')||(a=='e')||(a=='i')||(a=='o')||(a=='u')){
    console.log("Alphabet is Vowel:",a)
}
else if((a=='A')||(a=='E')||(a=='I')||(a=='O')||(a=='U')){
    console.log("Alphabet is Vowel:",a)
}
else if(((a>='a')&&(a<='z'))||((a>='A')&&(a='Z'))){
    console.log("Alphabet is Constant:",a)
}
else{
    console.log("This is not Alphabet:",a)
}




//9.write a program to input any character to check whether this is alphabet or digit or special character

var a:any=prompt("Enter a character")
if(((a>='a')&&(a<='z'))||((a>='A')&&(a='Z'))){
    console.log("This is Alphabet:",a)
}
else if((a<Infinity)&&(a> -Infinity)){
    console.log("This is Digit")
}
else{
    console.log("This is Special Character")
}





//10.write a program to input a character to check whether the alphabet is lower case or uppeer case

var a:any=prompt("Enter the Alphabet")
if((a>='a')&&(a<='z')){
    console.log("This is Lower Case Alphabet:",a)
}
else if((a>='A')&&(a<='Z')){
    console.log("This is Upper Case Alphabet:",a)
}
else{
    console.log("This is not Alphabet:",a)
}




//11.write a program to input week number to check the week day

var week:any=prompt("Enter Week Number(1-7)")
if(week==1){
    console.log("Monday")
}
else if(week==2){
    console.log("Thusday")
}
else if(week==3){
    console.log("Wednesday")
}
else if(week==4){
    console.log("Thusday")
}
else if(week==5){
    console.log("Friday")
}
else if(week==6){
    console.log("Saturday")
}
else if(week==7){
    console.log("Sunday")
}
else{
    console.log("You Don't enter Week Number")
}





//12.write a program to input month number to check the days of month

var a:any=prompt("Enter Month Number(1-12)")
if(a==2){
    console.log("February has 28/29 days")
}
else if((a==1)||(a==3)||(a==5)||(a==7)||(a==8)||(a==10)||(a==12)){
    console.log("It has 31 Days")
}
else if((a==4)||(a==6)||(a==9)||(a==11)){
    console.log("It has 30 Days")
}
else{
    console.log("You Don't Enter Month Number ")   
}




//13.write a program to count total number of notes in given amount





//14.write a program to input angles to check triangle is valid or not

var a:any=prompt("Enter Angles")
if(a==180){
    console.log("Triangle is Valid")
}
else{
    console.log("Triangle is not Valid")
}




//15. write a program to input sides of triangle to check triangle is valid or not

var a:any=prompt("Enter side a")
var b:any=prompt("Enter side b")
var c:any=prompt("Enter side c")
var d:any= parseInt(a)
var e:any= parseInt(b)
var f:any= parseInt(c)
var total:any=d+e+f
if(total==180){
    console.log("Triangle is Valid")
}
else{
    console.log("Triangle is not Valid")
}





//16.write a program to check whether the triangle is equilateral, isosceles or scalene triangle

var d: any = prompt("Enter Angle a")
var e: any = prompt("Enter Angle b")
var f: any = prompt("Enter Angle c")
var a: any = parseInt(d)
var b: any = parseInt(e)
var c: any = parseInt(f)
var sum: any = a + b + c
if (sum == 180) {
    if ((a == b) && (b == c) && (c == a)) {
        console.log("Triangle is Equilateral")
    }

    else if ((a != b) && (a != c) && (b != c)) {
        console.log("Triangle is scalene")
    }
    
    else{
        console.log("Triangle is Isosceles")
    }
}
else {
    console.log("Triangle is not Valid")
}






//17.write a program to find all roots of a quadratic equation








//18.write a program to calculate profit or loss

var a:any=prompt("Enter Buying Cost")
var b:any=prompt("Enter Selling Cost")
if(b>a){
    console.log("Profit")
}
else{
    console.log("Loss")
}






//19.write a program to input the marks of five subjects and calculate persentage and grade

var a:any=prompt("Enter Physics Marks")
var b:any= prompt("Enter Chemistery Marks")
var c:any=prompt("Enter Math Marks")
var d:any=prompt("Enter Urdu Marks")
var e:any=prompt("Enter English Marks")
var total:any=prompt("Enter Total")
var phy:any=parseInt(a)
var chem:any=parseInt(b)
var math:any=parseInt(c)
var urdu:any=parseInt(d)
var eng:any=parseInt(e)
var marks:any=phy+chem+math+urdu+eng
var a:any=(marks/total)*100
if(a>=90){
    console.log("Your Grade is A")
}
else if((a>=80)&&(a<90)){
    console.log("Your Grade is B")
}
else if((a>=70)&&(a<80)){
    console.log("Your Grade is C")
}
else if((a>=60)&&(a<70)){
    console.log("Your Grade is D")
}
else if((a>=40)&&(a<60)){
    console.log("Your Grade is E")
}
else{
    console.log("Your Grade is F")
}








//20.write a program to input basic selary of an employand calculate its gros salary

var basic:any=parseInt(prompt("Enter Basic Salary"))
var hra:any=(20/100)*basic;
var da:any=(80/100)*basic;
var hraa:any=(25/100)*basic;
var daa:any=(90/100)*basic;
var hraaa:any=(30/100)*basic;
var daaa:any=(95/100)*basic;
if(basic<=10000){
    var salary:number=basic+hra+da
    console.log("Your Gross Salary is:",+salary)
}
else if(basic<=20000){
    var salarytwo=basic+hraa+daa
    console.log("Your Gross Salary is:",salarytwo)
}
else{
    var salarythree=basic+hraaa+daaa
    console.log("Your Gross Salary is:",salarythree)
}









//21.write a program to input electricity unit charges and calculate electricity bill
 
var bill:any=parseInt(prompt("Enter Total Units:"))
if(bill<=50){
    var add=0.50*bill
    
    var firstBill=add+((20/100)*add)
    console.log("Your total Bill is:",firstBill)
}
else if((bill>50)&&(bill<=150)){
    var adda=0.75*bill
    var billTwo=adda+((20/100)*adda)
    console.log("Your Total Bill is:",billTwo)
}
else if((bill>151)&&(bill<250)){
    var add=1.20*bill
    var billThree=add+((20/100)*add)
    console.log("Your Total Bill is:",billThree)
}
else{
    var add=1.50*bill
    var billfour=add+((20/100)*add)
    console.log("Your Total Bill is:",billfour)
}

