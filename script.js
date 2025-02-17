// Background sound
const spookySound = new Howl({
    src: ['sounds/spooky.mp3'],
    loop: true,
    volume: 0.5
});

spookySound.play();

// Three.js Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("threejs-container").appendChild(renderer.domElement);

// Create Floating Pumpkins
const pumpkinGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const pumpkinMaterial = new THREE.MeshStandardMaterial({ color: "#ff4500" });
const pumpkins = [];

for (let i = 0; i < 5; i++) {
    const pumpkin = new THREE.Mesh(pumpkinGeometry, pumpkinMaterial);
    pumpkin.position.set(Math.random() * 5 - 2.5, Math.random() * 3 - 1.5, Math.random() * 3 - 1);
    scene.add(pumpkin);
    pumpkins.push(pumpkin);
}

// Lighting
const light = new THREE.PointLight("#ff8c00", 1.5, 10);
light.position.set(2, 2, 2);
scene.add(light);

camera.position.z = 5;

// Animation
function animate() {
    requestAnimationFrame(animate);

    pumpkins.forEach((pumpkin, index) => {
        pumpkin.rotation.y += 0.02;
        pumpkin.position.y += Math.sin(Date.now() * 0.001 + index) * 0.005;
    });

    renderer.render(scene, camera);
}

animate();

// GSAP Animations
gsap.from(".logo", { opacity: 0, y: -50, duration: 1.5 });
gsap.from(".video", { opacity: 0, scale: 0.5, stagger: 0.2, duration: 1.5 });
