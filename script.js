const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainCard = document.getElementById('mainCard');
const successMsg = document.getElementById('successMsg');
const music = document.getElementById('bgMusic');

const startMusic = () => {
    music.play().catch(() => {});
};

window.addEventListener('load', startMusic);
document.addEventListener('mousemove', startMusic, { once: true });
document.addEventListener('touchstart', startMusic, { once: true });
document.addEventListener('click', startMusic, { once: true });

const moveButton = () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
};

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveButton();
});

yesBtn.addEventListener('click', () => {
    music.src = 'viviano.mp3'; 
    music.loop = true;
    music.play();

    mainCard.style.display = 'none';
    successMsg.style.display = 'block';
    console.log("Mission Accomplished! ❤️");
});