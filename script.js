alert("Happy birthday to yo");
alert("click the screen");
window.onload = function () {
  var s = document.querySelector("canvas");
  s.height = innerHeight;
  s.width = innerWidth;
  var c = s.getContext("2d");

  var colors = ["pink", "aqua"];

  var sk = {
    x: null,
    y: null,
  };
  addEventListener("click", function (event) {
    sk.x = event.x;
    sk.y = event.y;
    const bolles = 70;
    var r = 0;

    const circel = (Math.PI * 2) / bolles;

    for (var i = 0; i < bolles; i++) {
      bolls.push(
        new boll(sk.x, sk.y, 2, 4, 4, {
          x: Math.cos(circel * i) * Math.random() * 4,
          y: Math.sin(circel * i) * Math.random() * 4,
        })
      );
    }
  });

  addEventListener("resize", function () {
    s.height = innerHeight;
    s.width = innerWidth;
  });
  const gr = 0.005;
  const fr = 0.001;
  function boll(x, y, r, dx, dy, vc, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.vc = vc;
    this.al = 1;
    this.color = color;
    let randomColor = Math.floor(Math.random() * colors.length);

    this.draw = function () {
      c.save();
      c.globalAlpha = this.al;
      c.beginPath();
      c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
      c.fillStyle = colors[randomColor];
      c.fill();
      c.closePath();
      c.restore();
    };
    Object.prototype.update = function () {
      this.draw();
      this.vc.x += fr;
      this.vc.y += gr;
      this.vc.y += fr;
      this.x += this.vc.x;
      this.y += this.vc.y;
      this.al -= 0.00999;
    };
  }
  var bolls;
  function init() {
    bolls = [];
  }

  function ant() {
    requestAnimationFrame(ant);
    // c.clearRect(0, 0, innerWidth, innerHeight)
    c.fillStyle = "rgba(0,0,0,0.1)";
    c.fillRect(0, 0, innerWidth, innerHeight);
    bolls.forEach((bolls, i) => {
      if (boll.al > 0) {
        bolls.update();
      } else {
        bolls.update(i, 1);
      }
    });
  }
  init();
  ant();
};
