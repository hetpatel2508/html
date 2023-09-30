let obj={
    het: 75, shubh:60, yuvraj:85, deep: 35
}

let arr=[2,4,6,8,9]


for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

console.log(" ");
console.log(" ");

for(let a in obj)
{
    console.log(a+" "+obj[a]);
}

console.log(" ");

for(let a of arr)
{
    console.log(a);
}

console.log(" ");
console.log(" ");

let a=5;
let i=1;

while(i<=a)
{
    console.log(i);
    i++;
}

console.log(" ");
console.log(" ");

let j=1;

do
{
    console.log(j);
    j++;

}while(j<=a)
console.log(" ")
console.log(' ')

arr.forEach((element,index) => {
    console.log(element+" "+index);
});