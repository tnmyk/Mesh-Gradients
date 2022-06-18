import { draw, generateParticles, shuffle } from "./particles.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerHeight / 1.4;
canvas.height = canvas.width;

context.font = "14px serif";
context.fillStyle = "#000";
context.globalCompositeOperation = "saturation";

const download = () => {
  const link = document.createElement("a");
  link.download = "mesh-gradient.png";
  link.href = canvas.toDataURL();
  link.click();
};

document.querySelector("nav").style.color = `hsla(${~~(
  360 * Math.random()
)}, 70%, 85%)`;

document.getElementById("download").addEventListener("click", download);

document.getElementById("randomize").addEventListener("click", () => {
  generateParticles(canvas, 25);
});

document.getElementById("shuffle").addEventListener("click", shuffle);

document
  .getElementById("composite-operation")
  .addEventListener("change", (e) => {
    context.globalCompositeOperation = e.target.value;
  });

generateParticles(canvas, 25);
requestAnimationFrame(animate);
function animate() {
  // request another loop of animation
  draw(canvas, context);
  requestAnimationFrame(animate);
}
