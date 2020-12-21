//let 변수 , const 상수, var(=let) 변수

/*
1) String (문자열 저장)
    const what ="jimin";

2) Boolean ( T or F 저장 )
    const what = true;

3) Number (숫자저장)
    const what = 22;

4) Float (소숫점까지 저장)
    const what = 44.78;
*/
//코드 전체 한방에 주석처리하기 => Ctrl + /
//alert('Hello, World!');
//console.log('Im Working. Im JS. LOVE U. Fuck U');
/*
// <배열> : []
const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun",true];
console.log(daysOfWeek);//(8) ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', true]
console.log(daysOfWeek[2]); //배열중 3번째 문자 출력하라.

// <리스트> : {}
const jiminInfo={
    name :"jimin",
    age:23,
    gender:"Female",
    isStudent:true,
    favMovies:["about time","big short"],
    favFood:[
        {name:"kimch", patty:false},
        {name:"cheese burger", patty:true}
    ]
}
console.log(jiminInfo.age);//23출력
jiminInfo.age=56;
console.log(jiminInfo.age);//56출력

console.log(jiminInfo.favMovies);//(2) ['about time', 'big short']

console.log(jiminInfo.favFood[0]);//{name: 'kimch', patty: false}
console.log(jiminInfo.favFood[0].name);//kimch

console.log(console);
console.log(jiminInfo);*/
// 여기까지 1)Theory End

/*
//1차 함수
function sayHello1(inPut){
    console.log(inPut);
    console.log('hello! :D');
    console.log (inPut, 'hello!:)');//jimin hello!:)
}
sayHello1("jimin");

//2차 함수 
function sayHello2(name, age){
    console.log ("hello!", name, 'you have', age,"years of age");//hello! jessica you have 45 years of age
}
sayHello2("jessica",45);

//3차 함수
function sayHello3(name, age){
    console.log ("hello!" + name + 'you have' + age + "years of age");//hello!elinyou have90years of age
}
sayHello3("elin",90);

//4차 함수
function sayHello4(name, age){
    console.log (`hello! ${name} you are ${age} years old`);//hello! jeck you are 90 years old
}
sayHello4("jeck",90);

// "" (따옴표 = String)   
//'' (싱글따옴표 = String)
//`` (백틱 )

//5차 함수
function sayHello5(name, age){
    console.log (`hello! ${name} you are ${age} years old`);//hello! JIMIN you are 24 years old
    return 7;
}
const greetJimin = sayHello5("JIMIN",24); //greetJimin는 sayHello5함수의 Return값이다. 

console.log(greetJimin); //undefined - 정의 되지 않음(return값을 줘야 그 리턴값이 출력되는 것이다.!)
*/

/*
//Object 객체를 만들어보자
const calculator={
    plus :function(a,b){
        return a+b;
    },
    minus:function(a,b){
        return a-b;
    },
    multiply :function(a,b){
        return a*b;
    },
    division :function(a,b){
        return a/b;
    },
    square :function(a,b){ //Math.pow(a, b); = a의 b승
        return a**b;
    }
}
//Math.pow(a, b); = a의 b승
// Math.round(86.96); = 86.96의 반올림
// Math.ceil(86.96); = 86.96의 올림
// Math.floor(86.96); = 86.96의 내림
// Math.sqrt(25); = 25의 제곱근 5*5 즉 5도출

const plusResult = calculator.plus(5,5);//result라는 상수에 5+5 =10이 저장됨
const minusResult = calculator.minus(80,10);//result라는 상수에 80-10=70이 저장됨
const multiResult = calculator.multiply(5,5);//result라는 상수에 5*5 =25이 저장됨
const diviResult = calculator.division(50,5);//result라는 상수에 50/5 =10이 저장됨
const squreResult = calculator.square(5,2);//result라는 상수에 5의 2제곱 =5*5 =25이 저장됨 

console.log(plusResult);//10도출
console.log(minusResult);//70도출
console.log(multiResult);//25도출
console.log(diviResult);//10도출
console.log(squreResult);//25도출
*/

/*
//ID와 CLASS선택자를 CSS말고 JS에서 해보기
// #은 ID선택자 , .은 CLASS선택자 
//DOM = Document Object Module = title을 Dom객체라고 함.

const title =document.getElementById("title");
console.log(title);
title.innerHTML="Hi! From JS";
title.style.color="red";
document.title="I own you now";


const zz=document.querySelector("#title");//querySelector는 노드의 첫번째 자식을 반환함 (ID로 찾을때는 #)
const yy=document.querySelector(".title");//querySelector는 노드의 첫번째 자식을 반환함 (CLASS로 찾을때는 .)

zz.innerHTML="querySelector사용을 성공!"
zz.style.color="blue";
document.title="I am winner";

*/

/*
//windo 이벤트가 다양하게 존재한다. submit, resize 등등
const title=document.querySelector("#title");
const BASE_COLOR="Blue";
const OTHER_COLOR="Black";

// 1)resize
function handleResize(){
    console.log(" I have been reized");
}
window.addEventListener("resize",handleResize); //resize이벤트가 발생할때 handleResize함수를 호출해라 (handleResize()이렇게 적으면 이벤트발생전부터 바로 실행되어버림) 

// 2)click
function handleClick(){
    title.style.color="pink";
}
window.addEventListener("click",handleClick)

// 3)mouseenter
function handleMouseenter(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){ //&& And ,|| Or
        title.style.color=OTHER_COLOR;
        console.log("IF문 작동");
    }else{
        title.style.color=BASE_COLOR;
        console.log("Else문 작동");
    }
    
}

function init(){
    title.style.color=BASE_COLOR;
    title.addEventListener("mouseenter",handleMouseenter)
}
init();//함수 바로 실행

*/

const title=document.querySelector("#title");
const CLICKED_CLASS="clicked";

function handleClick1(){
    const hasClass=title.classList.contains(CLICKED_CLASS);
    console.log(hasClass);
    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
    }else{
        title.classList.add(CLICKED_CLASS);
    }
}
function handleClick2(){
    title.classList.toggle(CLICKED_CLASS);
}
//toggle(String [,force]) -> 토글함수는 클래스가 그곳에 있는지 없는지 체크해서 있으면 Add or Remove해줌
//handleClick1()와 handleClick2()는 같은 함수 toggle함수가 훨씬 더 SEXY
function init(){
    title.addEventListener("click",handleClick2);
}
init();


