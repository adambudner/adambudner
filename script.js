const container = document.getElementById('emoji-container');
const emojis = ['❤️', '🧡', '💖', '💗', '💓', '💞', '💕', '💘', '💝', '❣️', '💌'];
const emojiCount = 50; 

function createEmoji() {
    const el = document.createElement('div');
    el.classList.add('emoji');
    el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
 
    const tx = (Math.random() - 0.5) * 200;
    const ty = (Math.random() - 0.5) * 200;

    const duration = 5 + Math.random() * 12; 
    const size = 20 + Math.random() * 35; 

    el.style.left = `${startX}vw`;
    el.style.top = `${startY}vh`;
    el.style.fontSize = `${size}px`;
    el.style.setProperty('--tx', `${tx}vw`);
    el.style.setProperty('--ty', `${ty}vh`);
    
    el.style.animationName = 'float';
    el.style.animationDuration = `${duration}s`;
    el.style.animationDirection = 'alternate';
    el.style.animationIterationCount = 'infinite';

    container.appendChild(el);
}

for (let i = 0; i < emojiCount; i++) {
    createEmoji();
}

const texts = [
    "No proooooszeeeee >:3",
    "Plosssse >:c",
    "Napewno?",
    "Grzecznie prosze",
    "Bardzo proszeeee <3",
    "Pliska",
    "Napewno nie?",
    "PLISKA",
    "Teraz nie masz opcji:3"
]

let index = 0;
const shrinkBtn = document.querySelector('.btn-secondary');
const yesBtn = document.querySelector(".btn-primary");
let currentScale = 1;

shrinkBtn.addEventListener('click', function() {
    currentScale = currentScale - 0.1;
    shrinkBtn.style.transform = `scale(${currentScale})`;
    if (currentScale < 0.2) {
        shrinkBtn.style.opacity = '0';
        shrinkBtn.style.pointerEvents = 'none'; 
    }

    if (index < texts.length) {
        document.querySelector(".btn-primary").innerText = texts[index];
        index++;
    }
});

function explodeHearts() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('explosion-heart');
        heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = 150 + Math.random() * 250; 
        
        const tx = Math.cos(angle) * velocity + 'px';
        const ty = Math.sin(angle) * velocity + 'px';
        const rot = Math.random() * 360 + 'deg';

        heart.style.setProperty('--tx', tx);
        heart.style.setProperty('--ty', ty);
        heart.style.setProperty('--rot', rot);

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
}

yesBtn.addEventListener('click', function() {
    document.getElementById("tekst").innerText = "JUPIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII :33333333333333";
    explodeHearts();
});