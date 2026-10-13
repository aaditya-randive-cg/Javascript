/*//for loop
//question1
let arr=[28,32,25,40,35]
let count=0
for(let i=0;i<arr.length;i++){
    if(arr[i]>30){
        count=count+1
    }    
}
console.log(count)

// //question2
// let number="2927"
// for(i=0;i<=number;i++){
    
// }

//question3
for(i=1;i<=100;i++){
    if(i%3==0 && i%5==0 && i%7!=0){
        console.log(i)
    }
}

//question4
let x="javascript"
let result=""
for(let i=0;i<x.length;i++){
    if(x[i]!="a"||"e"||"i"||"o"||"u"){
        result=result+i
    }
}
console.log(result)

//question5
let arr=



//question6
let a=27
for (i=1;i<=27;i++){
    if(i*i==i)
}

// question7
let a=1
for()


//continue
//question1
for(let i=1;i<=30;i++){ 
    if(i%4==0){
        continue
    }
     console.log(i)
}

//question2
arr=[0,29,36,43,-110,-24,]
count=0
for(let i=0;i<arr.length;i++){
    if(arr[i]>=0){
        count=count+arr[i]
    }
}
console.log(count)

//question3
let string="Hello World"
for(let i=0;i<string.length;i++){
    if(string[i]==" "){
        continue
    }
    console.log(string[i])
}

//question4
for (i = 1; i <= 12; i++) {
    console.log(6 * i)
    if ((6 * i) % 5 == 0) {
        continue
    }
}

//question5
arr = [12, 18, 25, 15, 30, 17, 22]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 18) {
        continue
    }
    console.log(arr[i])
}


//reverse loop
//question1
for (let i = 50; i >= 0; i--) {
    if (i % 3 == 0 && i % 9 != 0) {
        console.log(i)
    }
}
//question2
let ln = 0;
let arr = [12, 45, 7, 23, 56, 89, 34]
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > ln && arr[i] < 50) {
        ln = arr[i]
    }
}
console.log(ln)
//question3
let num="2729"
let mul=1
for(let i=0;i<num.length;i++){
    if(num[i]%2!=0){
        mul*=num[i]
    }
}
console.log(mul)

//question4
let string="Programming"
let rstring = ""
for(let i=string.length-1;i>=0;i--){
    rstring+=string[i]
}
console.log(rstring)
//question5


//question6
let string="1221"
let rstring = ""
for(let i=string.length-1;i>=0;i--){
    rstring+=string[i]
}
if (string===rstring){
    console.log("palindrome")
}else{
    console.log("not")
}
*/
//question7
let arr=[32,28,41,19,35,27,38]
for(let i=arr.length-1;i=0;i++){
    console.log(arr[i])
}
