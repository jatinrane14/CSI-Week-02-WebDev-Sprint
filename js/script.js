const toggleButton = document.getElementsByClassName('toggle-button')[0]
const sidenav = document.getElementsByClassName('side-navbar')[0]
const closebtn = document.getElementsByClassName('close-side')[0]
toggleButton.addEventListener('click', () => {
	if(window.innerWidth>=382){
		sidenav.style = 'width:350px';
		console.log(document.innerWidth);
	}
	else{
		sidenav.style = 'width:100vw'

	}
})
closebtn.addEventListener('click',()=>{
	sidenav.style = 'width:0';
})

const navlogo = document.getElementsByClassName('nav-logo')[0];
navlogo.addEventListener('mouseover',()=>{
	navlogo.style = 'cursor:pointer';
})
navlogo.addEventListener('click',()=>{
	window.open('index.html');
})