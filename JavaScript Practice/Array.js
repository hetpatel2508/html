let arr=[1,true,"het",null,undefined]
console.log(arr);
// arr[arr.length-1]=25

let arr1=[2,4,7,8,10,11]
console.log(arr1);
console.log(arr1.shift());      //it remove first element and return that first returened element

console.log(arr1);
console.log(arr1.unshift(99));   //it add element in start and return total element number 
console.log(arr1);

arr1.pop();
arr1.push(17);
console.log(arr1);


// delete arr1[2]
// console.log(arr1);


let t=arr1.sort();
console.log(t);

arr1.reverse();
console.log(arr1);

let temp=arr1.join(" ` ")
console.log(temp);

let a=[1,2,3];
let b=[4,5,6];
console.log(a.concat(b));


let t8=Array.from(a);
console.log(t8);

let l=arr.forEach((element,index,value) => {
    console.log(element+" "+index+" "+value);
    return element+1;
});
console.log(l); //ahi forEach ma return na tay atle map vapray

let n=a.map((value,index,arr)=>{
    console.log(value+" "+index+" "+arr);
    return value+value;
})

console.log(n)

let het=[1,2,3,5,2,1]
let hett=het.reduce((h1,h2)=>{
    return h1+h2;
})

console.log(hett)