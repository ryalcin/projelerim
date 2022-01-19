var dugme=document.getElementsByTagName("button");
//console.log(dugme);16 button varmis
var ekran=document.getElementsByClassName("ekran1")[0];
var hesapla=document.getElementById("hesapla");
var temizle=document.getElementById("temizle");
for(var i=0;i<16; i++) {
    if(i != 12 && i != 14) {    

    dugme[i].addEventListener("click", yazdir);
}
}
function yazdir(){
    ekran.value = ekran.value + this.value;
}
hesapla.addEventListener("click", hesap);

function hesap(){
    ekran.value = eval(ekran.value);
}
temizle.addEventListener("click", temizle);
    function temiz(){
    ekran.value="";
    }

