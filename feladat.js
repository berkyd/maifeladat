//1.feladat:
let tomb=[];
for(let i = 0;i<10;i++)
{
    tomb[i]=Math.floor(Math.random()*100)
}
tomb.sort();
console.log(tomb)
//2.feladat:
let tomb2=[]
for(let x = 0;x<20;x++)
{
    tomb[x] =
    {
        nev: 'Cirmos ${x}',
        eletkor: Math.round(2+Math.random()*8)
    }
}
for(let h = 0;h<tomb2.length;h++)
{
    if(tomb2[h].eletkor==2)
    {
        console.log(tomb2[h])
    }
}