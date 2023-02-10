

console.log("----Array Methods----")
let student=['vinoth','rahul','ramesh','vishva']
let student2=['sathish','jeeva']
console.log("1.Concat()")
let student3=student.concat(student2)
console.log(student)
console.log(student2)
console.log(student3)

console.log("2.Constructor")
let a=['a','b']
let b=a.constructor;
console.log(b)
console.log("3.copyWithin()")
let alpha=['a','b','c','d','e','f']
console.log(alpha.copyWithin(0,1,4))
// b c d d e f  
console.log(alpha)
console.log(alpha.copyWithin(0,2))

console.log("4.Entires()")
let fruits=['mango','orange']
let f=fruits.entries();
for (let x of f){
    console.log(x)
}

console.log("5.forEach()")
let taste=['sweet','bitter','sour']
taste.forEach(taste =>
    console.log(taste))

console.log("6.every()")
let numb=[4,5,6,7,8]
const numb1=numb.every(function(a){
    return a<=5;
})
console.log(numb1);
const numb2=numb.every(function(a){
    return a>=3;
})
console.log(numb2);

console.log("7.fill()")
let c=alpha.fill("i",2,5);
console.log(c)
console.log("8.filter()")
let numb4=numb.filter(function(a){
    return a>5;
})
console.log(numb4);
console.log("9.find()")
let fd=taste.find(test =>
    {
      return  test==='sour'
    })
console.log(fd)

let fd1=taste.find(test =>
    {
      return  test==='chilli'
    })
console.log(fd1)

console.log("10.reduce()")
let numb6=numb.reduce((a,b)=>a+b)
console.log(numb6)

console.log("11.findIndex()")
let taste3=taste.findIndex(function(a){
    return a=="sweet"})
console.log(taste3)

console.log("12.from()")
let st="vinoth"
const st2=Array.from(st)
console.log(st2)

console.log("13.includes()")

let taste4=taste.includes(function(a)
{return a=="sweet"})
console.log(taste4)

console.log("14.indexOf()")

let student4=student.indexOf("vinoth");
console.log(student4)

console.log("15.isArray")
let student5=Array.isArray(student);
console.log(student5)

console.log("16.join")
let student6=student.join(",")
console.log(student6)

console.log("17.Keys()")
let txt="";
let fruits1=Object.keys(fruits)
for(let x of fruits1){
    txt +=x+ "<br>"
}
console.log(txt)

console.log("18.lastIndexOf()")
let txt2="hello this is String"

let last=txt2.lastIndexOf('g')
let last1=txt2.lastIndexOf('s')
console.log(last1)
console.log(last);

console.log("19.Length")
let  len=alpha.length;
console.log(len);

console.log("20.map()")
let numb7=[1,2,3,4,5]
let numb8=numb7.map(function(a) 
{ 
    return a*2;
})
console.log(numb8)
console.log("21.pop()")
numb7.pop()
console.log(numb7)

console.log("22.push()")
numb7.push(5,8)
console.log(numb7)

console.log("23.Prototype")
let arr =[];

function dis(n){
    this.arr=n;
}
let arr1=new dis([1,2,3])
console.log(arr1)

let arr2=new dis([4,5,6])
console.log(arr2)

console.log("24.ReduceRight()")
let numb11=numb7.reduceRight(function(a,b){
    return b-a;
})
console.log(numb11)
console.log("25.Reverse()")

let numb12;
numb12=numb7.reverse();
console.log(numb12)

console.log("26.Shift()")

let d=['v','i','n','o','t','h'];
let d1=d.shift();
console.log(d1);
console.log(d);

console.log("27.UnShift()")

let d2=['i','n','o','t','h'];
d2.unshift('v');
console.log(d2);


console.log("28.Slice()")
let d3=d2.slice(0,4);
console.log(d3);

console.log("29.some()")
let numb15=[2,4,6,8]
let h=numb15.some(function(a)
{return a>1
})

console.log(h)
console.log("30.sort()")

//Sorting
let numb13;
let nu10;
nu10 = [2,5,1,4,7,9];
numb13=nu10.sort((a,b)=>a-b)
console.log(numb13)
console.log("Sort Reverse :")


let numb14;
numb14=numb7.sort((a,b)=>
 b-a
)
console.log(numb14);

console.log("31.Splice()")
let word1=['hi','hello','hey','any','every',"one"]
let word2=word1.splice(1,3)
let word3=['hi','hello','hey','any','every',"one"]
let word4=word3.splice(2,3,"you","are","the")
console.log(word1)

console.log(word3)

console.log("32.toString()")
let word5=['we','are','tringers']
let word6=word5.toString()
console.log(word5)
console.log(word6)

console.log("33.ValuesOf()")
let word7=word6.valueOf()
let word8=word7
console.log(word8)
console.log(word7)
