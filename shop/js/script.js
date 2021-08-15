//  -----work 2 
 const cardTitles = document.getElementsByClassName('card-title');
 for(const cardTitle of cardTitles ){
     cardTitle.style.color = 'blue';
 }
//  ----work 3 
 document.getElementById('back-pack').style.backgroundColor = 'tomato';

// -----work 4 
 const cards = document.getElementsByClassName('cd');
 for(const card of cards){
     card.style.borderRadius = '30px';
 }

// ----work 5
 function onClickb() {
     document.body.style.backgroundColor = 'black';
 }

 function onClickw() {
     document.body.style.backgroundColor = 'rgba(0, 255, 255, 0.747)';
 }

//  -----work 6
const btns=document.getElementsByClassName("problem")
for(const btn of btns){
    btn.addEventListener("click",function(event){
        event.target.parentNode.removeChild(event.target);
})
}


//  -----work 7 
 document.getElementById('email-input').addEventListener('keyup', function (event) {
     if(event.target.value == 'email'){
         document.getElementById('button-disabled').disabled =false;
     }
     else{
        document.getElementById('button-disabled').disabled =true;
     }
 })

//  -----work 8 
 document.getElementById('mouse-enter1').addEventListener('mouseenter', function () {
    document.getElementById('mouse-enter1').src = 'images/shoes/shoe-2.png';
 })
 document.getElementById('mouse-enter2').addEventListener('mouseenter', function () {
    document.getElementById('mouse-enter2').src = 'images/shoes/shoe-1.png';
 })

//  -----work 9
 document.getElementById('oclick').addEventListener('click', function () {
     document.getElementById('oclick').style.backgroundColor = 'darkGray';
     })

 