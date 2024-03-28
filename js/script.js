//Validasi form
function submitForm() {
    var nama = document.querySelector('.contact-form input[name="nama"]').value;
    var email = document.querySelector('.contact-form input[name="email"]').value;
    var help = document.getElementById("help").value;

    if (nama.trim() === "") {
      alert("Masukan nama anda!");
      return;
    }

    if (email.trim() === "") {
      alert("Masukan email anda!");
      return;
    }

    if (help.trim() === "pilih-opsi") {
      alert("Pilih salah satu bantuan informasi yang anda butuhkan!");
      return;
    }

    alert("Laporan bantuan informasi anda berhasil terkirim, terima kasih.");
}

// Menampilkan gambar secara slide banner
let indexSlide = 1;
showSlide(1);

function nextSlide(n) {
    showSlide(indexSlide +=n);
    console.log('indexSlide ' + indexSlide);
    console.log('nilai n =' + n);
}

function showSlide(n) {
    let listImage = document.getElementsByClassName('banner-img');
    if (n > listImage.length) indexSlide = 1;

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
    console.log('jumlah gambar ' + listImage.length);
}

setInterval(() => nextSlide(1), 3000);