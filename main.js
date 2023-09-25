let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#172140;"> Actual estudiante de desarrollo de sitios web y comentariasta de foros sobre programación.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
