	let currentIndex = 0;
	let prevIndex=0
	let documentLength = 0
	let direction = ''
window.onload = function(){
	 let doc = document.querySelectorAll('.zoomer')
	 documentLength = doc.length
	 prevIndex = documentLength - 1;
}

function prev(){
	direction = 'prev'	
	currentIndex = getIndex(currentIndex)
	prevIndex = getIndex(prevIndex)
	render('prev')
}

function next(){
	direction = 'next'
	currentIndex = getIndex(currentIndex)
	prevIndex = getIndex(prevIndex)
	render('next')
}

function getIndex(index){
	if(direction==='next')
		index = index<documentLength-1?++index:0
	if(direction === 'prev')
		index = index>0?--index:documentLength-1
		return index
}

function render(direction){
	console.log('currentIndex:'+currentIndex,'prevIndex:'+prevIndex)
	let devices = document.querySelectorAll('.zoomer')
	for(let i=0;i<devices.length;i++){
		devices[i].setAttribute('class','zoomer')
	}
	console.log(direction)
	devices[currentIndex].setAttribute('class','zoomer active')
}