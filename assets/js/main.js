
var content = document.getElementById('containerGrid');
for (var i = 3; i < 14; i++) {
	var image = document.createElement('img');
	var div = document.createElement('div');
	var p = document.createElement('p');
	var text = document.createTextNode('NOMBRE DEL PROYECTO');
	div.setAttribute('class','div-image');
	image.setAttribute('src','assets/img/img-'+ i +'.jpg');
	image.setAttribute('class','image');
	image.setAttribute('id',i);
	p.appendChild(text);
	div.appendChild(image);
	div.appendChild(p);
	content.appendChild(div);
}

var modal = document.getElementById('modal');
var close = document.getElementById('close');
var next = document.getElementById('next');
var prev = document.getElementById('previous');
var contentImage = document.getElementById('viewImage');
var classImage = document.getElementsByClassName('div-image');

content.addEventListener("click",function(event){
	if (event.target.tagName == "IMG"){
		modal.style.display = "flex";
		contentImage.src = event.target.src;
		contentImage.id = event.target.id;
	}
});

close.addEventListener("click",function(){
	modal.style.display = "none";
});

next.addEventListener("click",function(event){
	if(contentImage.id == 13){
		modal.style.display = "none";
	}else{
		var id = parseInt(contentImage.id);
		var nextId = id+1;
		var srcNext = 'assets/img/img-'+nextId+'.jpg';
		modal.style.display = 'flex';
		contentImage.src = srcNext;
		contentImage.id = nextId;
		console.log(nextId);
	}
});

prev.addEventListener("click",function(event){
	if(contentImage.id == 3){
		modal.style.display = "none";
	}else{
		var id = parseInt(contentImage.id);
		var prevId = id-1;
		var srcPrev = 'assets/img/img-'+prevId+'.jpg';
		modal.style.display = 'flex';
		contentImage.src = srcPrev;
		contentImage.id = prevId;
		console.log(prevId);
	}
});
