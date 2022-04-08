let x = 7;

let y=8;

let z=9;

let a=-5;

let b=6;

let c =-4;

bArr=new Array();
bArr.push(x,y,z,a,b,c);
console.log(bArr);



fl=0

for(i=0;i<bArr.length-2;i++)
{
    for(j=i+1;j<bArr.length-1;j++)
    {
        for(k=j+1;k<bArr.length;k++)
        {
            if(bArr[i]+bArr[j]+bArr[k]==0)
            {
                console.log(bArr[i]);
                console.log(bArr[j]);
                console.log(bArr[k]);

                fl=0;
            }
        }
    }
}

if(fl==1)
{
    console.log("Not Aa");
}