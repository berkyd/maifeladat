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