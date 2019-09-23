<!DOCTYPE html>
<html lang="pt-br" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Javascript</title>
    <link rel="stylesheet" href="/css1/styles.css">
  </head>
  <body>
      <header>
          <h1>Pedra papel e tesoura</h1>
      </header>

      <div class="placar">
          <div id="user-label" class="badge"> Jogador </div>
          <div id="comp-label" class="badge"> Computador </div>
          <span id="user-score">0</span>:<span id="comp-score">0</span>
      </div>

      <div class="result">
        <p id="resMessage">Pedra ganha de tesoura! Você venceu!</p>
      </div>

      <div class="choices">
        <div class="choice" id="r">
          <img src="images/rock.png" alt="">
        </div>

        <div class="choice" id="p">
          <img src="images/paper.png" alt="">
        </div>

        <div class="choice" id="s">
          <img src="images/scissors.png" alt="">
        </div>
      </div>

      <p id="action-message">FAÇA SUA ESCOLHA!</p>
      <script src="/js/javascript.js">

      </script>
  </body>
</html>
