let nameElement=document.getElementById("nameInput");
let cardNumberElement=document.getElementById("cardNumberInput");
let cvvElement=document.getElementById("cvvInput");
let monthElement=document.getElementById("monthInput");
let yearElement=document.getElementById("yearInput");
let nameErrorElement=document.getElementById("nameError");
let cardNumberErrorElement=document.getElementById("cardNumberError"); 
let dateErrorElement=document.getElementById("dateError");
let cvvErrorElement=document.getElementById("cvvError");
function emptyCheck(element,errorMessage){
    if(element.value==null || element.value==""){

        errorMessage.innerHTML="cant be blank";
      
        errorMessage.style.color = "red";
       element.style.borderColor="red";
       return false;
       
    }
    else{
        return true;
    }
} 
function onConfirm(){
    if(blankCheck()&&validation()&&cvvValidation()&&dateValidation()){
       document.getElementById("number").innerHTML=cardNumberElement.value;
       document.getElementById("name").innerHTML=nameElement.value;
       document.getElementById("date").innerHTML=monthElement.value +'/'+ yearElement.value;
       document.getElementById("cvv").innerHTML=cvvElement.value;
       document.getElementById("inputWraper").style.display="none";
       document.getElementById("thankYou").style.display="block";
    }
    else{
        // alert("invalid details")
    }

}  
function blankCheck(){
    if(emptyCheck(nameElement,nameErrorElement)){
        return true;
    }
    if(emptyCheck(cardNumberElement,cardNumberErrorElement)){
        return true;
    }
    if(emptyCheck(monthElement,dateErrorElement)){
        return true;
    }
    if(emptyCheck(yearElement,dateErrorElement)){
        return true;
    }
    if(emptyCheck(cvvElement,cvvErrorElement)){
        return true;
    }
    else{
        return false;
    }
}
function validation(){
    
  if(isNaN(cardNumberElement.value )){
        cardNumberErrorElement.innerHTML="Should contain digits";
        cardNumberErrorElement.style.color="red";
        cardNumberElement.style.borderColor="red";
        return false;
    }
    else if(cardNumberElement.value.length<16 || cardNumberElement.value.length>16){
        cardNumberErrorElement.innerHTML="Should contain 16 digits";
        cardNumberErrorElement.style.color="red";
        cardNumberElement.style.borderColor="red";
        return false;
    
    }
   
    else{
        return true;
    }
}
function cvvValidation(){
    if(isNaN(cvvElement.value)){
        cvvErrorElement.innerHTML="should contain digits";
        cvvErrorElement.style.color="red";
        cvvElement.style.borderColor="red";
        return false;
    }
    else if(cvvElement.value.length>3){
        cvvErrorElement.innerHTML="should be less than 3 digits";
        cvvErrorElement.style.color="red";
        cvvElement.style.borderColor="red";
        return false;
    }
    else{
        return true;
    }
}

nameElement.addEventListener("input", function () {
       
    nameErrorElement.innerHTML = "";
     nameElement.style.borderColor="#dddddd";
     emptyCheck(nameElement,nameErrorElement);
   });
   cardNumberElement.addEventListener("input", function () {
       
    cardNumberErrorElement.innerHTML = "";
    cardNumberElement.style.borderColor="#dddddd";
    emptyCheck( cardNumberElement,cardNumberErrorElement);
    validation();
   });
   monthElement.addEventListener("input", function () {
       
    dateErrorElement.innerHTML = "";
    monthElement.style.borderColor="#dddddd";
    emptyCheck( monthElement,dateErrorElement);
    dateValidation();
   });
   yearElement.addEventListener("input", function () {
       
    dateErrorElement.innerHTML = "";
    yearElement.style.borderColor="#dddddd";
    emptyCheck( yearElement,dateErrorElement);
    dateValidation();
   });
   cvvElement.addEventListener("input", function () {
       
    cvvErrorElement.innerHTML = "";
    cvvElement.style.borderColor="#dddddd";
    emptyCheck( cvvElement,cvvErrorElement);
    cvvValidation();
   });
   function dateValidation(){
    if(isNaN(monthElement.value)){
        dateErrorElement.innerHTML="should be a number";
        dateErrorElement.style.color="red";
        monthElement.style.borderColor="red";
        return false;
    }
    else if(monthElement.value>12){
        dateErrorElement.innerHTML="there are only 12 months";
        dateErrorElement.style.color="red";
        monthElement.style.borderColor="red";
        return false;
    }
    else if(isNaN(yearElement.value)){
        dateErrorElement.innerHTML="should be a number";
        dateErrorElement.style.color="red";
        yearElement.style.borderColor="red";
        return false;
   }
   else{
    return true;
   }
}
function cont(){
document.getElementById("inputWraper").style.display="block";
document.getElementById("thankYou").style.display="none";
}
