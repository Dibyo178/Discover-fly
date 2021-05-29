
//  First class plus...

document.getElementById('first increase').addEventListener('click',function(){
   const inputPlusFirstCount =document.getElementById('first-count');
   const bookPlusCount=parseInt(inputPlusFirstCount.value);
   const bookPlusNewCount=bookPlusCount + 1;
   inputPlusFirstCount.value=bookPlusNewCount;
   const bookPlusTotal= bookPlusNewCount*150;
document.getElementById('first-total').innerText=bookPlusTotal;
})

// First class minus...

document.getElementById('first decrease').addEventListener('click',function(){
   const inputMinusFirstCount=document.getElementById('first-count');
   const bookMinusCount=parseInt(inputMinusFirstCount.value);
   const bookMinusNewCount=bookMinusCount-1;
   inputMinusFirstCount.value=bookMinusNewCount;
   const bookMinusTotal= bookMinusNewCount*150;
   document.getElementById('first-total').innerText=bookMinusTotal;
})





// Economy class plus...

document.getElementById('economy-increase').addEventListener('click',function(){
   const inputEconomyPlusCount=document.getElementById('economy-count');
   const economyPlusCount=parseInt(inputEconomyPlusCount.value);
   const economyPlusNewCount=  economyPlusCount+1;
   inputEconomyPlusCount.value=economyPlusNewCount;

   const  economyPlusTotal= economyPlusNewCount*100;

   document.getElementById('economy-total').innerText=economyPlusTotal;

   // console.log(inputEconomyCount.value)
})

// Economy class plus...

document.getElementById('economy-decrease').addEventListener('click',function(){
   const inputEconomyMinusCount =document.getElementById('economy-count');
   const economyMinusCount=parseInt(inputEconomyMinusCount.value);
   const economyMinusNewCount=economyMinusCount-1;
   inputEconomyMinusCount.value=economyMinusNewCount;
   const economyMinusTotal=economyMinusNewCount*100;
   document.getElementById('economy-total').innerText=economyMinusTotal;
})

