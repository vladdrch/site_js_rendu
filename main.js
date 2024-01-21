let form = document.querySelector('form')

if (form) {
           form.addEventListener('submit',function(event)
{
  	event.preventDefault();
  
  	let email = document.querySelector('#email')	
  	let errorContainer=document.querySelector('.message-error')
  	let errorList=document.querySelector('.message-error ul') 

   	errorList.innerHTML=""
   	errorContainer.classList.remove('visible')

   if (email.value!=='' && email.value.includes('@') && email.value.includes('.'))
   { 
    email.classList.add('success')

   }
else   { 

	errorContainer.classList.add('visible')
	email.classList.remove('success')
	let err = document.createElement('li')
	err.innerText ="Le email ne peut pas etre vide"
	errorList.appendChild(err)
}




let pseudo=document.querySelector('#pseudo')	

if (pseudo.value.length  < 6){
 
	errorContainer.classList.add('visible')
	pseudo.classList.remove('success')
	let err = document.createElement('li')
	err.innerText ="Le pseudo doit contenir au moins 6 catactheres"
	errorList.appendChild(err)
}

else {
pseudo.classList.add('success')
}



let successContainer=document.querySelector('.message-success')
let  messList=document.querySelector('.message-success ul') 

 messList.innerHTML=""

if (pseudo.classList.contains('success') && email.classList.contains('success'))
{
successContainer.classList.add('visible')
let mess= document.createElement('li')
mess.innerText ="Votre demande est prise en compte !"
messList.appendChild(mess)
}


    });
}

/*burger_menu*/

let sideNav = document.getElementById("mySideNav");
let openButton = document.getElementById("openButton");
let closeButton = document.getElementById("closeButton");

openButton.onclick = openNav;
closeButton.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sideNav .classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sideNav.classList.remove("active");
}

/*Slider*/
document.addEventListener('DOMContentLoaded', function () {
      let swiperElement = document.querySelector(".mySwiper");

      if (swiperElement) {
        let swiper = new Swiper(swiperElement, {
          slidesPerView: 1,
          spaceBetween: 30,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          autoplay: {
            delay: 3000
          }
        });
      }
    });


/*tab*/

document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.content');

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      this.classList.add('active');

      if (this.classList.contains('axisX')) {
        document.querySelector('.content.axisX').classList.add('active');
      } else if (this.classList.contains('axisY')) {
        document.querySelector('.content.axisY').classList.add('active');
      } else if (this.classList.contains('axisZ')) {
        document.querySelector('.content.axisZ').classList.add('active');
      }
    });
  });
});


