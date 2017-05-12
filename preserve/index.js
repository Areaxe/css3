let rotateY = 0
window.onload = function(){
	let container = document.querySelector('.container')
	container.onclick=changeRotate
	let imgs = document.querySelectorAll('.container img')
	console.log(imgs)
}

function changeRotate(){
	rotateY+=40
	let container = document.getElementsByClassName('container')[0]
	console.log(container)
	container.style.transform = "rotateY("+rotateY+"deg)"
	console.log('change')
}