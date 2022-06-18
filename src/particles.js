let particles = [];
const randomLocation = () => {
  return { x: canvas.width * Math.random(), y: canvas.height * Math.random() };
};
export const generateParticles = (canvas, numberOfParticles) => {
  particles = new Array(numberOfParticles).fill(0).map((_) => {
    return {
      ...randomLocation(),
      hsl: [~~(360 * Math.random()), 70, 80],
      vx: 2 * (Math.random() - 0.5) * 2,
      vy: 7 * (Math.random() - 0.5) * 2,
      radius: Math.max(600, Math.random() * 650),
    };
  });
};

export const draw = (canvas, context) => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    const grad = context.createRadialGradient(
      particle.x,
      particle.y,
      1,
      particle.x,
      particle.y,
      particle.radius
    );
    const [h, s, l] = particle.hsl;
    grad.addColorStop(0, `hsla(${h},${s}%,${l}%,1)`);
    grad.addColorStop(1, `hsla(${h},${s}%,${l}%,0)`);
    context.beginPath();
    context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    context.fillStyle = grad;
    context.fill();

    // particle.radius = particle.radius
    if (
      particle.x - particle.radius / 2 >= canvas.width ||
      particle.x + particle.radius / 2 < 0
    )
      particle.vx *= -1;
    if (
      particle.y - particle.radius / 2 >= canvas.height ||
      particle.y + particle.radius / 2 < 0
    )
      particle.vy *= -1;
    particle.x += particle.vx;
    particle.y += particle.vy;
  });
};

export const shuffle = () => {
  particles.forEach((particle) => {
    const { x, y } = randomLocation();
    particle.x = x;
    particle.y = y;
    particle.radius = Math.max(600, Math.random() * 650);
  });
};
