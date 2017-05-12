let imgNum = 0;
let clickX = 0
let clickY = 0
let preserve = 2000
let imgDatas = []
let browserType = ["-moz-","-o-","-ms-","-webkit-"]

window.onload = function(){
	let sections = document.querySelectorAll('section')
	imgNum = sections.length
	let imgList = getRandomData()
	let moveLock = false
	window.onclick=function(){beginMove(moveLock);moveLock=!moveLock}		//click to trigger mouseMove event
	for(let i=0;i<imgNum;i++){
		let mouseOver = true
		let style = {}
		sections[i].onmouseenter=function(e){
				// initImg(e.target)
				style = this.style		
		}
		sections[i].onmouseout = function(e){
			render()			
		}
	}
	render()
	// this.onmouseup =function(){removeEvent(window,'mousemove',renderContainer)}
}

// function initImg(img){
	// let clientHeight = document.body.clientHeight
	// let clientWidth = document.body.clientWidth
	// let imgLeft = parseInt(img.style.left.replace('px',''))
	// let imgTop = parseInt(img.style.top.replace('px',''))
	// let left = imgLeft>clientWidth/2?(imgLeft-200)+"px":(imgLeft+200)+"px"
	// let top = imgTop>clientHeight/2?(imgTop-200)+"px":(imgTop+200)+"px"
	// img.style.cssText = img.style.cssText+"left"+left+";+top:"+top+";"
// }

function renderImg(imgElm,img){	//render one img
	imgElm.style.cssText = "id:"+img.id+";left:"+img.left+"px;top:"+img.top+"px;"
	for(let i=0;i<browserType.length;i++){
		imgElm.style.cssText = imgElm.style.cssText+browserType[i]+"transform:rotate("+img.rotateX+"deg) rotateY("+img.rotateY+"deg);animation-delay:"+img.delay+"s;"
	}
}

function getRandomData(){
	let clientWidth = document.body.clientWidth;
	let clientHeight = document.body.clientHeight
	for(let i=0;i<imgNum;i++){
		imgDatas.push({
			id:i,
			rotateX:parseInt(Math.random()*360+90),
			rotateY:parseInt(Math.random()*360+90),
			left:parseInt(Math.random()*clientWidth),
			top:parseInt(Math.random()*clientHeight),
			delay:Math.random()*2
		})
	}
	return imgDatas
}

function render(){		//render all images
	let imgs = document.getElementsByTagName('section')
	for(let i=0;i<imgs.length;i++){
		let img = imgDatas[i]
		renderImg(imgs[i],img)
	}
}

let beginMove = function(moveLock,e){
	if(!moveLock){
		e = e||window.event
		clickX = e.pageX;
		clickY = e.pageY;
		let container = document.querySelector('.container')
	}	
	window.onmousemove  = function(){
			renderContainer(moveLock)
		}
}

function renderContainer(moveLock,e){
	e = e||window.event
	let x = (e.pageX-clickX)
	let y = (e.pageY-clickY)
	let container = document.querySelector('.container')
	let line3 = Math.sqrt(Math.pow(x,2)+Math.pow(preserve,2))
	if(!moveLock) container.style.transform = "rotateX("+(x*preserve/line3-y*x/line3)+"deg) rotateY("+(x*x/line3+y*preserve/line3)+"deg)"
	// else container.style.transform = "rotateX(0deg) rotateY(0deg)"
}