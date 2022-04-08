let x=45;
let flag=0;
bArr=new Array();
for(i=2; i<=x; i++)
{


    if(x%i==0)
    {
        flag=0;

        for(j=2;j<=i/2;j++)
        {
            if(i%j==0)
            {
                flag=1
            }
        }

        if (flag==0)

{

    //bArr.push(i);
//console.log(bArr);
    console.log("prime",i);
    //StoreArray
    bArr.push(i);
    console.log(bArr);

}    }
}
 

