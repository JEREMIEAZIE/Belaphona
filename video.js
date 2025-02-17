// Play spooky sound in video player
const videoSound = new Howl({
    src: ['sounds/spooky.mp3'],
    loop: true,
    volume: 0.3
});

videoSound.play();

// Video page animation
gsap.from(".video-player-container", { opacity: 0, y: -50, duration: 1.5 });
