const forCustomersBtn = document.getElementById('ClickToSetForCustomers');
const forBusinessBtn = document.getElementById('ClickToSetForBusines');
const contactSalesBtn = document.getElementById('ContactButtonHead');
const marketsBtn = document.getElementById('Markets');
const menuBtn = document.getElementById('menuButton');
function updateWindowWidth() {
    windowWidth = window.innerWidth;
}
let windowWidth = window.innerWidth;
window.addEventListener('resize', updateWindowWidth);


const SetUserCustomers=()=>{
    contactSalesBtn.style.display = 'none';
    marketsBtn.style.display = 'block';
    if(windowWidth<800){
        marketsBtn.style.display = 'block';
        menuBtn.style.display = 'none';
    }
};
const SetUserBusines=()=>{
    contactSalesBtn.style.display = 'block';
    marketsBtn.style.display = 'none';
    if(windowWidth<800){
        marketsBtn.style.display = 'none';
        menuBtn.style.display = 'block';
    }
};
