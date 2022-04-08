let x=Math.floor(Math.random()*700)+101;
console.log(x);

let y=Math.floor(Math.random()*689)+110;
console.log(y);

let z=Math.floor(Math.random()*667)+115;
console.log(z);

bArr=new Array();


//store array
bArr.push(x,y,z);

console.log(bArr);
//without sorting
console.log(Math.max(...bArr));
console.log(Math.min(...bArr));


/*let min=200;

let max =0;

for(num in bArr)
{
    if(num > max)
    {
      max=num;
    }


    if(num < min)
    {
        min=num;
    }
}

console.log("Largest element is "+max+ "Lowest element is "+ min);*/