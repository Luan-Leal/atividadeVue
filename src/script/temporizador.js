export default function Timer() {
  function startTimer(duration, display) {
    var timer = duration,
      seconds;
    var button = document.querySelector('.botao-login');

    button.addEventListener('click', () => {
      setInterval(function () {
        seconds = parseInt(timer % 600);

        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
          timer = window.location.href = './index.html';
        }
      }, 1000);
    });
  }

  window.onload = function () {
    var durationChoosed = 599;

    var duration = durationChoosed;
    var display = document.querySelector('#timer');

    startTimer(duration, display);
  };
}
