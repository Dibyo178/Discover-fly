function handleAirBook(booking, isIncrease){
    // const inputCount=document.getElementById(booking+'-count');
    // const bookCount=parseInt(inputCount.value);
   
    const bookCount=getInputValue(booking);

    let bookNewCount=bookCount;
    // const bookMinusNewCount=bookMinusCount-1;
    if(isIncrease==true){
     bookNewCount=bookCount+1;
    }
    else if(isIncrease==false && bookCount>0){
       bookNewCount=bookCount-1;
    }

    document.getElementById(booking +'-count').value=bookNewCount;
    // inputCount.value=bookNewCount;
    // const bookTotal= bookNewCount*150;
    let bookingTotal=0;

    if(booking =='first'){
        bookingTotal=bookNewCount*150;
    }
    else if(booking =='economy'){
        bookingTotal=bookNewCount*100;
    }
    document.getElementById(booking+'-total').innerText=bookingTotal;

    calculateTotal();
 }

 function calculateTotal(){
    // const firstInput= document.getElementById('first-count');
    // const firstCount=parseInt(firstInput.value)

    const firstCount=getInputValue('first');
    const economyCount=getInputValue('economy');

    
    const totalPrice= firstCount*150+economyCount*100;
    document.getElementById('subtotal').innerText='$'+totalPrice;

    const tax= totalPrice*0.1;
   document.getElementById('tax').innerText='$'+tax;
  
    const grandTotal= totalPrice+tax;
    document.getElementById('grandtotal').innerText='$'+grandTotal;

 }

 function getInputValue(booking){
    const airBookInput=document.getElementById(booking+'-count');
    const airBookCount=parseInt(airBookInput.value);
    return airBookCount;
 }


 const button=document.getElementById('book');

 button.addEventListener('click',function(){
     const bookingArea=document.getElementById('booking-area');
     bookingArea.style.display='none';

     const bookDone=document.getElementById('bookDone');
     bookDone.style.display='block';
 })
 