let tombol = document.querySelector('.container__kalkulator');
let layar = document.querySelector('#layar');
tombol.addEventListener('click', (e) => {
    // dia akan memilih target yang akan di click
    let tombolClick = e.target;
    // dan nilai tombol ini akan memasukkan sebuah value yang dihasilkan dari target
    let NilaiTombol = tombolClick.innerText;
    if(NilaiTombol == "C"){
        layar.value = "";
    }else if(NilaiTombol == "<"){
        layar.value = layar.value.slice(0, -1);
    }else if(NilaiTombol == "="){
        layar.value =  eval(layar.value);
    }
    else{
        layar.value = layar.value + NilaiTombol;
    }
});