document.querySelector('body').addEventListener('click',function(e){
	console.log(e.target.className);
	document.body.style.backgroundColor=(e.target.className)
})