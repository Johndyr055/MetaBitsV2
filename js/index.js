const s1 = document.getElementById('s1');
s1.onmouseover = function(){
   this.src = "images/social1Pixel.png";
};
s1.onmouseout = function(){
  this.src = "images/social1.png";
};

const s2 = document.getElementById('s2');
s2.onmouseover = function(){
    this.src = "images/social2Pixel.png";
};
s2.onmouseout = function(){
  this.src = "images/social2.png";
};

const s3 = document.getElementById('s3');
s3.onmouseover = function(){
    this.src = "images/social3Pixel.png";
};
s3.onmouseout = function(){
  this.src = "images/social3.png";
};

const s4 = document.getElementById('s4');
s4.onmouseover = function(){
    this.src = "images/social4Pixel.png";
};
s4.onmouseout = function(){
  this.src = "images/social4.png";
};

const s5 = document.getElementById('s5');
s5.onmouseover = function(){
    this.src = "images/social5Pixel.png";
};
s5.onmouseout = function(){
  this.src = "images/social5.png";
};

const s6 = document.getElementById('s6');
s6.onmouseover = function(){
    this.src = "images/social6Pixel.png";
};
s6.onmouseout = function(){
  this.src = "images/social6.png";
};

const reescalar = function(){
  document.body.style.width = window.innerWidth + 'px';
  document.body.style.height = (window.innerHeight * 5) + 'px';
}

reescalar();

/** EVENT LISTENERS ***/
window.addEventListener('resize', () => {
  reescalar();
});
