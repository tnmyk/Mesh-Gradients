const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.font = "14px serif";
ctx.fillStyle = "#000";

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw something
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 10, 0, Math.PI * 2);
  //   ctx.fillStyle = "white";
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "white";
  ctx.stroke();
};

requestAnimationFrame(animate);
function animate() {
  // request another loop of animation
  draw();
  requestAnimationFrame(animate);
}
