function msg1(){
	//alert('Bibhas');

	var a=parseFloat(document.getElementById('FirstDigit').value);
	var b=parseFloat(document.getElementById('SecondDigit').value);

	var c=a+b;
	var d=a-b;
	var e=a*b;
	var f=a/b;

	


	var g=document.getElementById('sign').value;

	if(g ==='+'){
		document.getElementById('answer').value=c;
	}
	if(g ==='-'){
		document.getElementById('answer').value=d;
	}
	if(g ==='*'){
		document.getElementById('answer').value=e;
	}
	if(g ==='/'){
		document.getElementById('answer').value=f;
	}
	
}