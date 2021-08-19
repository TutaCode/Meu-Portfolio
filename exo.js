let box_1 	= document.querySelector('.box-1');
let box_2 	= document.querySelector('.box-2');
let pink 	= document.querySelector('.pink');
let black 	= document.querySelector('.black');
let menu 	= document.querySelector('.menu');
let box_menu= document.querySelector('.box_menu');
let sobremim= document.querySelector('.sobremim');
let resume 	= document.querySelector('.resume');
let resume_menu = document.querySelector('.resume_menu');
let resume_box_menu = document.querySelector('.resume_box_menu');
let resume_sobremim = document.querySelector('.resume_sobremim');

/*Primeira block da div black(sobremim)*/

menu.onclick=function () {
	if (box_menu.style.display=="none") {
		box_menu.style.display="block";
		resume_box_menu.style.display="none";
	}else{
		box_menu.style.display="none";
	}
}

resume.onclick=function(){
	if (black.style.display=="block") {
		black.style.display="none";
		pink.style.display="block";
	}else{
		black.style.display="none";
	}
}

/*...............Fim da div...................*/

resume_menu.onclick=function(){
	if (resume_box_menu.style.display=="none") {
		resume_box_menu.style.display="block";
	}else{
		resume_box_menu.style.display="none";
	}
}

resume_sobremim.onclick=function(){
	black.style.display="block";
	pink.style.display="none";
	box_menu.style.display="none";
}


/*pink.onclick=function() {
	black.style.display="block";
	pink.style.display="none";
}

black.onclick=function() {
	black.style.display="none";
	pink.style.display="block";
}*/