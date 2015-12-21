var pets = ['cat','dog','rat'];

for(var petIdx in pets)
{
    pets[petIdx] = pets[petIdx]+'s';
}
console.log(pets);