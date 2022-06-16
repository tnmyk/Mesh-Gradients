const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerHeight / 1.6;
canvas.height = canvas.width;

ctx.font = "14px serif";
ctx.fillStyle = "#000";

const particles = new Array(10).fill(0).map((_) => {
  return {
    x: 10,
    y: 10,
    color: "#eee",
    vx: 8,
    vy: 12,
  };
});

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw something
  ctx.beginPath();
  particles.forEach((particle) => {
    ctx.arc(particle.x, particle.y, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = particle.color;

    // radius = 10
    if (particle.x + 10 >= canvas.width || particle.x - 10 < 0)
      particle.vx *= -1;
    if (particle.y + 10 >= canvas.height || particle.y - 10 < 0)
      particle.vy *= -1;
    particle.x += particle.vx;
    particle.y += particle.vy;
  });
  ctx.lineWidth = 1;
};

requestAnimationFrame(animate);
function animate() {
  // request another loop of animation
  draw();
  requestAnimationFrame(animate);
}
