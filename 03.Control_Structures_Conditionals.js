// if 
// question1
let number=27
if(number%5==0){
    console.log("Divisible by 5");
};

//question2
let age=8;
if(age>60){
    console.log("SENIOR CITIZEN")
}

// question3
let number=10000000000;
if(number>100){
    console.log("Big Number")
}

//question4
let temper=30;
if(temper<10){
    console.log("Very Cold")
}

// question5
let marks=100;
if(marks==100){
    console.log("Perfect Score")
}

// question6
let number=9;
if(number<0){
    console.log("Negative");
};

// question7
let input=""
if(input==""){
    console.log("No input")
}

// question8
let year=2024;
if(year%100==0){
    console.log("Century Year")
}

//question9
let number=9;
if(number>0 && number%2==0){
    console.log("PositiveEven")
};

//question10
let marks=98;
if(marks>=35 && marks<=100){
    console.log("Valid Mark")
}

//if else
//question1
let number=9
if(number%2==0){
    console.log("even")
}else{
    console.log("odd")
}

// question2
let person=81
if(person>18){
    console.log("Eligible")
}else{
    console.assertlog("NotEligible")
}

//question3
let number=7;
if(number>0){
    console.log("Positive")
}else{
    console.log("negative")
}

//question4
let marks=36;
if(marks>35){
    console.log("Pass")
}else{
    console.log("Fail")
}

//question5
let string="string";
if(string="string"){
    console.log("not uppercase")
}else{
    console.log("uppercase")
}

//question6
let number=27;
if(number%3==0){
    console.log("Divisible")
}else{
    console.log("NotDivisible")
}

//question7
let password="admin124";
if(password=="adimn124"){
    console.log("log in successful")
}else{
    console.log("incorret password")
}

//question8
let year=2026;
if(year%4==0){
    console.log("leap")
}else{
    console.log("noleapyear")
}

// question9
let number2=27;
let number1=29;
if(number1>number2){
    console.log("Number1 is greater")
}else{
    console.log("Number2 is greater")
}

//question10
let number=27;
if(number>0){
    console.log("Positive")
}else if(number<0){
    console.log("Negative")
}else{
    console.log("0")
}

// if else if if 
// qusetion1
let month=9;
if(month==12 || moonth==1 || month==2){
    console.log("Winter")
}else if(month==9 || month==10 || month==11){
    console.log("autumn")
}else{
    console.log("Summer")
}

//question2
let income=8000000;
if(income<300000){
    console.log("Notex")
}else if(income==300000 && income<700000){
    console.log("5%tax")
}else if(income==700000 && income<1000000){
    console.log("10%tax")
}else{
    console.log("15%tax")
}

//question3
let score=97
if(score>=90){
    console.log("outstandin")
}else if(score>=70 && score<=89){
    console.log("good")
}else if(score>=40 && score<=69){
    console.log("average")
}else{
    console.log("i")
}

//question4
let speed=20;
if(speed>80){
    console.log("fast")
}else if(speed==80 && speed>=40){
    console.log("Normal")
}else{
    console.log("short")
}

//question5
let height=156;
if(height>170){
    console.log("Tall")
}else if(height>=150 && height<=170){
    console.log("Avergae")
}else{
    console.log("short")
}

//question6
day=2
if(day==1 || day==2 || day==3 || day==4 || day==5){
    console.log("weekday")
}else if(day===6  || day===7){
    console.log("weekend")
}

//question7
let unit=77
if(unit===0 && unit<50){
    per=2
    console.log(bill*unit)
}else if(unit===51 && unit<150){
    per=4
    console.log(bill*unit)
}else{
    per=6
console.log(bill*per)
}

//question8
perc=100;
if(perc>=90){
    console.log("Excellent")
}else if(perc>=75 && perc<=89){
    console.log("good")
}else if(perc>50 && perc<=74){
    console.log("Satisfactory")
}else{
    console.log("poor")
}

//question9
mark1=75
mark2=74
mark3=73
if(mark1>mark2 && mark1>mark3){
    console.log("Mark1 ")
}else if  (mark2>mark1 && mark2>mark3){
    console.log("mark2")
}else{
    console.log("mark3")
}

// question10
let number=27;
if(number>0){
    if(number%2==0){
        console.log("Positive Even")
    }
    else{
        console.log("Positive odd")
    }
    
}
else if  (number<0){
    if(number%2!==0){
        console.log("negative odd")
    }
    else{
        console.log("negative even")
    }
}
else{
    console.log("0")
}

//nested if 
//question1
let number=29
if(number>10){
    if(number%3==0){
        console.log("greater 10 divisibl3")
    }
}

//question2
let age=6
if(age>=18){
    voteid="yes"
    if(voteid==true){
        console.log("canvote")
    }
}

//question3
let score=40
if(score>=40){
    if(score>=80){
        console.log("passed with distinction")
    }
}

//question4
let atmpin=7777
if(atmpin=="7777"){
    
}                                           


//question5
let year=2016
if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            console.log("leap")
        }
    }
}

//question6
let email="abc@.com"


//question7
let cart=100
let premium=true
if(cart>=1000){
    if(premium==true){
        disscount=cart*20/100
        cart=cart-cart*20/100
    }
    else{
        disscount=cart*10/100
        cart=cart-cart*10/100
    }
}
console.log(disscount)

//question8
let number=7
if(number>0){
    if(number%2==0){
        if(number%4==0){
            console.log("positive even and divisible by 4")
        }
    }
}

//question9
let age=9
let graduaction="bca"
let experience=1
if(age>21 && age<30){
    if(graduaction=="bca"){
        if(experience>=2){
            console.log("eligible")
        }
    }
}



//question10
let attendence="present"
let mark=44
let externalmark=44
if(attendence="present"){
    if(mark>=30){
        if(externalmark>=35){
            console.log("eligible")
        }
    }
}

//switch 
let month=8


// let marks = 35;
// let result = marks > 35 ? "Passed" : marks === 35 ? "Just Passed" : "Failed";
// console.log(result);   // Output: Just Passed



//ternary
//question1
let number=9
let  result=number%7==0? "Dvisible 7" : "not divisible by 7"
console.log(result)

//question2
let temperature=27
let result=temperature>=30?"hot day":"pleasant day"
console.log(result) 

//question3
let 
