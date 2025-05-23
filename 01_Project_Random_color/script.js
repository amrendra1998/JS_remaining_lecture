import "./styles.css";
// Generate Random color
const Randomcolor = function () {
  const hex = "0123456789ABCDEF";

  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let IntervalId;
const StartChangingColor = function () {
  if (!IntervalId) {
    IntervalId = setInterval(ChangeBgColor, 1000);
  }

  function ChangeBgColor() {
    document.body.style.backgroundColor = Randomcolor();
  }
};
const StopChangingColor = function () {
  clearInterval(IntervalId);
  IntervalId = null;
};
document.querySelector("#start").addEventListener("click", StartChangingColor);
document.querySelector("#stop").addEventListener("click", StopChangingColor);
