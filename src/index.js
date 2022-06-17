const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerHeight / 1.4;
canvas.height = canvas.width;

ctx.font = "14px serif";
ctx.fillStyle = "#000";
ctx.globalCompositeOperation = "saturation";
function random_rgb() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return [o(r() * s), o(r() * s), o(r() * s)];
}
const particles = new Array(14).fill(0).map((_) => {
  return {
    x: canvas.width * Math.random(),
    y: canvas.height * Math.random(),
    rgb: random_rgb(),
    vx: 2 * Math.random(),
    vy: 7 * Math.random(),
    radius: Math.max(350, Math.random() * 500),
  };
});

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw something

  particles.forEach((particle) => {
    const grad = ctx.createRadialGradient(
      particle.x,
      particle.y,
      1,
      particle.x,
      particle.y,
      particle.radius
    );
    const [r, g, b] = particle.rgb;
    grad.addColorStop(0, `rgba(${r},${g},${b},1)`);
    grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();

    // particle.radius = particle.radius
    if (particle.x >= canvas.width || particle.x < 0) particle.vx *= -1;
    if (particle.y >= canvas.height || particle.y < 0) particle.vy *= -1;
    particle.x += particle.vx;
    particle.y += particle.vy;
  });
};

requestAnimationFrame(animate);
function animate() {
  // request another loop of animation
  draw();
  requestAnimationFrame(animate);
}
