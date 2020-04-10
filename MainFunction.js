class KeyControls {
  constructor() {
    // Keys will store the keys we are currently pressing
    this.keys = {};
    // Bind event handlers
    document.addEventListener(
      'keydown',
      e => {
        if ([37, 39].indexOf(e.which) >= 0) {
          // To avoid scrolling the page with arrows
          e.preventDefault();
        }
        // Set the pressed keys to true
        this.keys[e.which] = true;
      },
      false,
    );

    document.addEventListener(
      'keyup',
      e => {
        // set the released key to false
        this.keys[e.which] = false;
      },
      false,
    );
  }
  get x() {
    // Return -1 if left arrow or A key are pressed
    if (this.keys[37] || this.keys[65]) return -1;
    // Return 1 if right arrow or D key are pressed
    if (this.keys[39] || this.keys[68]) return 1;
    return 0;
  }
}

const controls =　new KeyControls

const canvas = document.querySelector('#board canvas');
const ctx = canvas.getContext('2d');
var img = new Image();
var juice = 0;
img.src = "SlimeStill.png";
const { width: w, height: h } = canvas;

let rectW = 50;
let rectH = 50;
let x = w / 2 - rectW / 2;
let y = h / 2 - rectH / 2;
let color = 0;

img.onload = function() {
	function loop() {
 		requestAnimationFrame(loop)
  		x += controls.x;
 
  		ctx.clearRect(0, 0, w, h)
  		
		ctx.drawImage(img, x, y, 100, 100);
  		ctx.font = "100px Arial";
  		ctx.fillText(juice, 100, 100);
} requestAnimationFrame(loop)
}

