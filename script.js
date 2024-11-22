function playMusic() {
    alert('🎉 Selamat ulang tahun, Rasya! 🎶');
    const audio = new Audio('https://www.soundjay.com/button/sounds/button-10.mp3');
    audio.play();

    const message = document.getElementById("message");
    message.innerHTML = `
        <p>Semoga hidupmu penuh warna, cinta, dan kebahagiaan! 🌸</p>
        <p>Jangan lupa untuk terus tersenyum dan menjadi inspirasi untuk semua! 😊</p>
    `;
}
