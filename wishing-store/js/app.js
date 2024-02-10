const dropdown=document.getElementById('drop-down-content');
function openDropDown() {
    dropdown.style.display="block";
    
}
function closeDropDown() {
    dropdown.style.display="none";
}


let openArri=true;

function openConntent(content){
    if(openArri){
        document.getElementById(content).style.display="block";
        openArri=false;
    }
    else{
        document.getElementById(content).style.display="none" ;
        openArri=true;
    }
}


const profileDropDown=document.getElementById('profile-drop-down');
let isClicked=true;
function dropDownProfile(){
    if(isClicked){
        profileDropDown.style.display="block";
        isClicked=false;
    }else{
        profileDropDown.style.display="none";
        isClicked=true;
    }
}

const img=document.getElementsByClassName("p3-thunbs-img");
function nxtImg(){
    for( let imgActive of img){
        imgActive.classList.remove("active");
    }
    event.currentTarget.classList.add("active");
}

const imgItems=document.getElementsByClassName("p3-bottom-img");
function nxtItems(){
    for( let activeItmes of imgItems){
        activeItmes.classList.remove("active");
    }
    event.currentTarget.classList.add("active");
}

const itemColors=document.getElementsByClassName("color");
function itemColor(){
    for( let itemColor of itemColors){
        itemColor.classList.remove("color-active");
    }
    event.currentTarget.classList.add("color-active");
}


const quantityArea=document.getElementById("quantityselect");
const decrease=quantityArea.childNodes[0];
let quantityValue=quantityArea.childNodes[1];
const increase=quantityArea.childNodes[2];
let quantityValues=1;
quantityValue.innerHTML=quantityValues;


function increaseQuantity(){
    for(let quantities of quantityArea.childNodes){
        if(event.currentTarget==quantities){
            if(quantities==increase){
                quantityValues++;
                quantityValue.innerHTML=quantityValues;
            }
            else if(quantities==decrease){
                quantityValues--;
                if(quantityValues<1){
                    quantityValues=1;
                    quantityValue.innerHTML=quantityValues;
                }
                else{
                    quantityValue.innerHTML=quantityValues;
                }
            }
            else{
                quantityValue.innerHTML=quantityValues;
            }
        }
    }
}