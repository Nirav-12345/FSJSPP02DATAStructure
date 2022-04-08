let x=Math.floor(Math.random()*70)+11;
console.log(x);

let y=Math.floor(Math.random()*68)+11;
console.log(y);

let z=Math.floor(Math.random()*66)+11;
console.log(z);

bArr=new Array();


//storted array
bArr.push(x,y,z);

console.log(bArr);

for(i=0;i<10;i++)
{
    for(j=0;j<10-i-1;j++)
    {
        if(bArr[j] > bArr[j+1])
        {
            temp=bArr[j];
            bArr[j]=bArr[j+1];
            bArr[j+1]=temp;
        }
    }
}

console.log("Sorted order is "+bArr);

console.log(Math.max(...bArr));
console.log(Math.min(...bArr));