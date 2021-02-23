var elements = [];
function setup() {
  elements = [];
  startDivs = Array.from(document.querySelector('body').children);
  startDivs.forEach(function (startdiv) {
    if (startdiv.children.length === 0) {
      elements.push(startdiv);
    } else {
      checkForChildren(startdiv);
    }
  });
  destroy(elements);
}
function checkForChildren(x) {
  Array.from(x.children).forEach(function (div) {
    if (div.children.length === 0) {
      elements.push(div);
    } else {
      checkForChildren(div);
    }
  });
  console.log(elements);
}
var i = 0;
var txt = 'Erased by Alex...';
var speed = 250; /* The speed/duration of the effect in milliseconds */
function typeWriter() {
  if (i < txt.length) {
    document.querySelector('body').children[0].innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function destroy(x) {
  document
    .querySelector('body')
    .insertAdjacentHTML(
      'afterbegin',
      '<div style="font-family: monospace; color:white; font-size: 60px; display:flex; justify-content: center; align-items:center;height: 100vh; width: 100vw; background-image: url(https://media.giphy.com/media/ZwMF9XIF7eo9i/giphy.gif); position: fixed; top:0; left:0; z-index: 1000000000; background-size: cover; mix-blend-mode: overlay;"></div>'
    );
  var bar = new Promise((resolve, reject) => {
    x.forEach(function (child, index) {
      setTimeout(function () {
        child.remove();
        console.log('removing');
        if (index === x.length - 1) {
          resolve();
        }
      }, 50 * index);
    });
  });
  bar.then(() => {
    console.log('All done!');
    if (document.querySelector('body').children.length > 1) {
      setup();
    } else {
      document.querySelector('body').children[0].style.backgroundImage = '';
      document.querySelector('body').children[0].style.backgroundColor =
        'black';
      typeWriter();
    }
  });
}
setup();
