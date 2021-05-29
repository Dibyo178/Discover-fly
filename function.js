//  use function first class..

// document.getElementById('first increase').addEventListener('click',function(){
//     handleFirstBook(true);
//  })
 
 
 
//  document.getElementById('first decrease').addEventListener('click',function(){
//     handleFirstBook(false);
//  })
 
 function handleFirstBook(isFirstIncrease){
    const inputFirstCount=document.getElementById('first-count');
    const bookCount=parseInt(inputFirstCount.value);
    let bookNewCount=bookCount;
    // const bookMinusNewCount=bookMinusCount-1;
    if(isFirstIncrease==true){
     bookNewCount=bookCount+1;
    }
    else if(isFirstIncrease==false && bookCount>0){
       bookNewCount=bookCount-1;
    }
    inputFirstCount.value=bookNewCount;
    const bookTotal= bookNewCount*150;
    document.getElementById('first-total').innerText=bookTotal;
 }




 function handleEconomyBook(isEconomyIncrease){
    const inputEconomyCount=document.getElementById('economy-count');
    const economyCount=parseInt(inputEconomyCount.value);
   
     let economyNewCount=economyCount;
    // const economyPlusNewCount=  economyPlusCount+1;
    if(isEconomyIncrease==true){
        economyNewCount=economyCount+1;
    }
    else if(isEconomyIncrease==false && economyCount>0){
        economyNewCount=economyCount-1
    }
    inputEconomyCount.value=economyNewCount;
 
    const  economyTotal= economyNewCount*100;
 
    document.getElementById('economy-total').innerText=economyTotal;
 }
 
//  document.getElementById('economy-increase').addEventListener('click',function(){
//    handleEconomyBook(true)
// })

// document.getElementById('economy-decrease').addEventListener('click',function(){
//    handleEconomyBook(false)
// })
