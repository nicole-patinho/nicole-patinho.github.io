let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #4C2A85;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #320E3B;">Soy estudiante de Ingeniería Mecatrónica.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
