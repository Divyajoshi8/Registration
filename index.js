//single element selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
const items=document.querySelectorAll('.item');

items.forEach((item) => console.log(item));
const btn=document.querySelector('.btn');

btn.style.background='red';
const ul=document.querySelector('.items');

ul.firstElementChild.textContent='hello';
ul.children[1].innerText='Brad';
ul.children[2].innerHTML='<h4>Hello</h4>';
ul.children[1].style.background='green';
ul.children[2].style.background='yellow';

btn.addEventListener('mouseout', (e)=>{
    e.preventDefault();
document.querySelector('#my-form').style.background='lavender'



});
btn.addEventListener('click', (e)=>{
    e.preventDefault();
document.querySelector('.items').children[0].style.background='lavender';

});



const myForm= document.querySelector('#my-form');
const nameInput= document.querySelector('#name');
const emailInput= document.querySelector('#email');
const msg= document.querySelector('.msg');
const userLit= document.querySelector('#users');

const submitmessage= document.getElementById('submit');
myForm.addEventListener('click', onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(nameInput.value===''|| emailInput.value==='')
    {
        alert('Please enter fields')
    }
    else{
    console.log('Success');
    }
}










