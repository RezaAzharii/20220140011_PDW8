var gambar = ['./aset/ft1.jpeg', './aset/ft2.jpeg', './aset/imgpop.gif']; // Tambahkan lebih banyak jalur gambar jika diperlukan
        var indeksSaatIni = 0;
        var elemenGambar = document.getElementById('image1');

        function gantiGambar() {
            indeksSaatIni = (indeksSaatIni + 1) % gambar.length;
            elemenGambar.src = gambar[indeksSaatIni];
        }

        setInterval(gantiGambar, 2500); // Ganti gambar setiap 3 detik

        function ImageN() {
            // Contoh: Ganti sumber gambar saat tombol diklik
            gantiGambar();
        }

function ShowPopup() {
    var infoPopup = document.querySelector('.infopopup');
    infoPopup.style.display = 'block';
}

function HidePopup() {
    var infoPopup = document.querySelector('.infopopup');
    infoPopup.style.display = 'none';
}

document.getElementById('popup').addEventListener('click', ShowPopup);

function ImageN() {
    alert("Image akan berubah jika rasio diabawah 600");
}
  
function VidN() {
    alert("Dancing and Chill");
}

document.addEventListener("DOMContentLoaded", function() {
    var music = document.getElementById("background-music");
    var muteButton = document.getElementById("mute-button");
    var isPlaying = true; // Variable to track the playing status

    muteButton.addEventListener("click", function() {
        if (isPlaying) {
            music.pause(); // Pause the music
            muteButton.innerHTML = '<i class="fas fa-solid fa-music"></i>'; // Change the icon to play
        } else {
            music.play(); // Play the music
            muteButton.innerHTML = '<i class="fas fa-solid fa-volume-mute"></i>'; // Change the icon to pause
        }
        isPlaying = !isPlaying; // Toggle the playing status
    });
});

const allStar = document.querySelectorAll('.rating .star')

allStar.forEach((item, idx)=>{
    item.addEventListener('click', function(){
        allStar.forEach(i=> {
            i.classList.replace('bxs-star', 'bx-star')
            i.classList.add('active')
        })
        for(let i=0; i<allStar.length; i++) {
            if(i <= idx) {
                allStar[i].classList.replace('bx-star', 'bxs-star')
                allStar[i].classList.add('active')
            }
        }
    })
})