let form = document.getElementById('reg_form');
let modalReg = document.getElementById('modalReg');
let Name = document.getElementById('Name');
let Email = document.getElementById('Email');
let Num = document.getElementById('Number');
let ErrorName = document.getElementById('Error_name');
let ErrorEmail = document.getElementById('Error_email');
let ErrorNum = document.getElementById('Error_num');
let Thanks = document.getElementById('Thanks'); 
let Request_reg = document.getElementById('Request');

const activeModal = ()=>
{
    modalReg.classList.toggle("active");
}
const hidenModal = ()=>{
    modalReg.classList.remove("active");
    Thanks.classList.remove("active");
}
const formSubmit = ()=>{
    form.submit();
}
const checkInputFields=(event)=>{
    event.preventDefault();
    if(Name.value && Email.value && Num.value)
    {
        Thanks.classList.toggle("active");
        modalReg.classList.remove("active");
    }
    if(!Name.value || !Email.value || !Num.value){
        Request_reg.style.display="block"
        Name.classList.toggle("Error_Border");
    }
    else{
        Request_reg.style.display="none"
    }

    if(!Name.value){
        ErrorName.style.display = "block";
        Name.style.border = "1px solid red";
    }
    else{
        ErrorName.style.display = "none";
        Name.style.border = "1px solid #F1F1F1";
    }

    if(!Email.value){
        ErrorEmail.style.display = "block";
        Email.style.border = "1px solid red";
    }
    else{
        ErrorEmail.style.display = "none";
        Email.style.border = "1px solid #F1F1F1";
    }
    if(!Num.value){
        ErrorNum.style.display = "block";
        Num.style.border = "1px solid red";
    }
    else{
        ErrorNum.style.display = "none";
        Num.style.border = "1px solid #F1F1F1";
    }
}