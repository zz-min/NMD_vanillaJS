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
