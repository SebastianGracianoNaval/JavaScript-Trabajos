const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
  ];
  
  let palabraAleatoria, time = 10, score = 0;
  
  function randomWords() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  
  function addToDOM() {
    palabraAleatoria = randomWords();
    document.getElementById('randomWord').textContent = palabraAleatoria;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    addToDOM();
    setInterval(actualizarTiempo, 1000);
  });
  
  document.getElementById('text').addEventListener('input', (e) => {
    const palabraIngresada = e.target.value.trim();
    if (palabraIngresada === palabraAleatoria) {
      time += 3;
      e.target.value = '';
      addToDOM();
      updateScore();
    }
  });
  
  function actualizarTiempo() {
    if (time > 0) {
      time--;
      document.getElementById('timeSpan').textContent = `${time}s`;
    } else {
      gameOver();
    }
  }
  
  function updateScore() {
    score++;
    document.getElementById('score').textContent = score;
  }
  
  function gameOver() {
    const endGameContainer = document.getElementById('end-game-container');
    endGameContainer.innerHTML = `
      <h3>¡Tiempo agotado!</h3>
      <p>Puntaje final: ${score}</p>
      <button onclick="restartGame()">Volver a empezar</button>
    `;
  }
  
  function restartGame() {
    time = 10;
    score = 0;
    addToDOM();
    document.getElementById('score').textContent = score;
    document.getElementById('timeSpan').textContent = `${time}s`;
    document.getElementById('end-game-container').innerHTML = '';
  }
  