function koduret() {
	var kodlar = "";
	for (var i = 1; i <= 6; i++) {
		if (Math.round(Math.random()) == 1) {
			kodlar = kodlar + String.fromCharCode(65 + 25 * Math.random());
		}
		else {
			kodlar = kodlar + String.fromCharCode(48 + 9 * Math.random());
		}
	}
	document.getElementById("uretilenkod").value = kodlar;
}
function odaklan(x) {
	if (x == "ad" || x == "soyad" || x == "kadi" || x == "mail" || x == "girilenkod") {
		document.getElementById(x).value = "";
		document.getElementById(x).style.background = "#fff7db";
		document.getElementById(x).style.color = "#000";
		document.getElementById(x).style.borderColor = "#000";
	}
}
function cikis(x, y) {
	if (y == "") {
		if (x == "ad") {
			document.getElementById(x).value = "Adınızı yazınız";
		}
		if (x == "soyad") {
			document.getElementById(x).value = "Soyadınızı yazınız";
		}
		if (x == "kadi") {
			document.getElementById(x).value = "Kullanıcı adını yazınız";
		}
		if (x == "mail") {
			document.getElementById(x).value = "E-Mail giriniz";
		}
		if (x == "girilenkod") {
			document.getElementById(x).value = "Güvenlik kodunu giriniz";
		}

		document.getElementById(x).style.background = "#fff";
		document.getElementById(x).style.color = "#ababab";
		document.getElementById(x).style.borderColor = "#bbb";
	}
	else
	{
		document.getElementById(x).style.background = "#fff";
		document.getElementById(x).style.color = "#000";
		document.getElementById(x).style.borderColor = "#bbb";
	}
}
function islem()
{
	document.getElementById("aduyari").innerHTML="";
	document.getElementById("soyaduyari").innerHTML="";
	document.getElementById("kadiuyari").innerHTML="";
	document.getElementById("mailuyari").innerHTML="";
	document.getElementById("parolauyari").innerHTML="";
	document.getElementById("guvenlikuyari").innerHTML="";


	var kural,yazi;
	yazi=document.getElementById("mail").value;
	kural=/.+@.+\.+./;
	if(document.getElementById("ad").value=="Adınızı Yazınız")
	{
		document.getElementById("aduyari").innerHTML="Adınızı yazmadınız!";
	}
	if(document.getElementById("soyad").value=="Soyadınızı Yazınız")
	{
		document.getElementById("soyaduyari").innerHTML="Soyadınızı yazmadınız!";
	}
	if(document.getElementById("kadi").value=="Kullanıcı Adı Yazınız")
	{
		document.getElementById("kadiuyari").innerHTML="Kullanıcı adı yazmadınız!";
	}
	if(document.getElementById("parola").value=="")
	{
		document.getElementById("parolauyari").innerHTML="Şifrenizi yazmadınız!";
	}
	if(document.getElementById("mail").value=="E-Mail Giriniz")
	{
		document.getElementById("mailuyari").innerHTML="E-Mailinizi yazmadınız!";
	}
	else if(!kural.test(yazi))
	{
		document.getElementById("mailuyari").innerHTML="Geçersiz E-Mail!";
	}
	if(document.getElementById("girilenkod").value=="Güvenlik Kodunu Giriniz")
	{
		document.getElementById("guvenlikuyari").innerHTML="Güvenlik kodunu yazmadınız!";
	}
	else if(document.getElementById("uretilenkod").value!=document.getElementById("girilenkod").value)
	{
		document.getElementById("guvenlikuyari").innerHTML="Güvenlik kodunu yanlış!";
	}
}