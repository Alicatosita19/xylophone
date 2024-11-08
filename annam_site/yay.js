
document.addEventListener('mousemove', function(event) {
  console.log("LASER FIRED")
  var laser = document.getElementById('laser');
  var x = event.clientX;
  var y = event.clientY;

  // Calculate the angle to rotate the laser
  var angle = Math.atan2(y - laser.offsetTop, x - laser.offsetLeft) * 180 / Math.PI;

  // Update the laser's position and rotation
  laser.style.left = x + 'px';
  laser.style.top = y + 'px';
  laser.style.transform = 'rotate(' + angle + 'deg)';
});