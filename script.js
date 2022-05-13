let myArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
vez = 1
colunas = 0
poder = true
let texto = document.getElementById('vez')
let jogo = document.getElementById('jogo')
function pegarNum(numero) {
  //VEZ DE X!!!!
  if (vez == 1 && poder == true) {
    switch (numero) {
      case '1':
        if (myArray[0] == '1') {
          texto.innerHTML = 'Vez de O'
          myArray[0] = 'X'
          vez = 2
          colunas++
          document.getElementById('q1').src = 'Imagens/X.png'
        }
        break
      case '2':
        if (myArray[1] == '2') {
          texto.innerHTML = 'Vez de O'
          myArray[1] = 'X'
          vez = 2
          colunas++
          document.getElementById('q2').src = 'Imagens/X.png'
        }
        break
      case '3':
        if (myArray[2] == '3') {
          texto.innerHTML = 'Vez de O'
          myArray[2] = 'X'
          vez = 2
          colunas++
          document.getElementById('q3').src = 'Imagens/X.png'
        }
        break
      case '4':
        if (myArray[3] == '4') {
          texto.innerHTML = 'Vez de O'
          myArray[3] = 'X'
          vez = 2
          colunas++
          document.getElementById('q4').src = 'Imagens/X.png'
        }
        break
      case '5':
        if (myArray[4] == '5') {
          texto.innerHTML = 'Vez de O'
          myArray[4] = 'X'
          vez = 2
          colunas++
          document.getElementById('q5').src = 'Imagens/X.png'
        }
        break
      case '6':
        if (myArray[5] == '6') {
          texto.innerHTML = 'Vez de O'
          myArray[5] = 'X'
          vez = 2
          colunas++
          document.getElementById('q6').src = 'Imagens/X.png'
        }
        break
      case '7':
        if (myArray[6] == '7') {
          texto.innerHTML = 'Vez de O'
          myArray[6] = 'X'
          vez = 2
          colunas++
          document.getElementById('q7').src = 'Imagens/X.png'
        }
        break
      case '8':
        if (myArray[7] == '8') {
          texto.innerHTML = 'Vez de O'
          myArray[7] = 'X'
          vez = 2
          colunas++
          document.getElementById('q8').src = 'Imagens/X.png'
        }
        break
      case '9':
        if (myArray[8] == '9') {
          texto.innerHTML = 'Vez de O'
          myArray[8] = 'X'
          vez = 2
          colunas++
          document.getElementById('q9').src = 'Imagens/X.png'
        }
        break
    }
  }
  //VEZ DE O!!!!
  else if (vez == 2 && poder == true) {
    switch (numero) {
      case '1':
        if (myArray[0] == '1') {
          texto.innerHTML = 'Vez de X'
          myArray[0] = 'O'
          vez = 1
          colunas++
          document.getElementById('q1').src = 'Imagens/O.png'
        }
        break
      case '2':
        if (myArray[1] == '2') {
          texto.innerHTML = 'Vez de X'
          myArray[1] = 'O'
          vez = 1
          colunas++
          document.getElementById('q2').src = 'Imagens/O.png'
        }
        break
      case '3':
        if (myArray[2] == '3') {
          texto.innerHTML = 'Vez de X'
          myArray[2] = 'O'
          vez = 1
          colunas++
          document.getElementById('q3').src = 'Imagens/O.png'
        }
        break
      case '4':
        if (myArray[3] == '4') {
          texto.innerHTML = 'Vez de X'
          myArray[3] = 'O'
          vez = 1
          colunas++
          document.getElementById('q4').src = 'Imagens/O.png'
        }
        break
      case '5':
        if (myArray[4] == '5') {
          texto.innerHTML = 'Vez de X'
          myArray[4] = 'O'
          vez = 1
          colunas++
          document.getElementById('q5').src = 'Imagens/O.png'
        }
        break
      case '6':
        if (myArray[5] == '6') {
          texto.innerHTML = 'Vez de X'
          myArray[5] = 'O'
          vez = 1
          colunas++
          document.getElementById('q6').src = 'Imagens/O.png'
        }
        break
      case '7':
        if (myArray[6] == '7') {
          texto.innerHTML = 'Vez de X'
          myArray[6] = 'O'
          vez = 1
          colunas++
          document.getElementById('q7').src = 'Imagens/O.png'
        }
        break
      case '8':
        if (myArray[7] == '8') {
          texto.innerHTML = 'Vez de X'
          myArray[7] = 'O'
          vez = 1
          colunas++
          document.getElementById('q8').src = 'Imagens/O.png'
        }
        break
      case '9':
        if (myArray[8] == '9') {
          texto.innerHTML = 'Vez de X'
          myArray[8] = 'O'
          vez = 1
          colunas++
          document.getElementById('q9').src = 'Imagens/O.png'
        }
        break
    }
  }
  if (
    (myArray[0] == 'X' && myArray[1] == 'X' && myArray[2] == 'X') ||
    (myArray[3] == 'X' && myArray[4] == 'X' && myArray[5] == 'X') ||
    (myArray[6] == 'X' && myArray[7] == 'X' && myArray[8] == 'X') ||
    //NAO JUNTA SEU ANIMAL
    (myArray[0] == 'X' && myArray[3] == 'X' && myArray[6] == 'X') ||
    (myArray[1] == 'X' && myArray[4] == 'X' && myArray[7] == 'X') ||
    (myArray[2] == 'X' && myArray[5] == 'X' && myArray[8] == 'X') ||
    //PFV
    (myArray[0] == 'X' && myArray[4] == 'X' && myArray[8] == 'X') ||
    (myArray[2] == 'X' && myArray[4] == 'X' && myArray[6] == 'X')
  ) {
    jogo.innerHTML = 'Vitória de <strong>X<strong>!'
    poder = false
  } else if (
    (myArray[0] == 'O' && myArray[1] == 'O' && myArray[2] == 'O') ||
    (myArray[3] == 'O' && myArray[4] == 'O' && myArray[5] == 'O') ||
    (myArray[6] == 'O' && myArray[7] == 'O' && myArray[8] == 'O') ||
    //NAO JUNTA SEU ANIMAL
    (myArray[0] == 'O' && myArray[3] == 'O' && myArray[6] == 'O') ||
    (myArray[1] == 'O' && myArray[4] == 'O' && myArray[7] == 'O') ||
    (myArray[2] == 'O' && myArray[5] == 'O' && myArray[8] == 'O') ||
    //PFV
    (myArray[0] == 'O' && myArray[4] == 'O' && myArray[8] == 'O') ||
    (myArray[2] == 'O' && myArray[4] == 'O' && myArray[6] == 'O')
  ) {
    jogo.innerHTML = 'Vitória de <strong>O<strong>!'
    poder = false
  } else if (colunas == 9) {
    jogo.innerHTML = 'Empate!!'
    poder = false
  }
}
function ReiniciarJogo() {
  myArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  colunas = 0
  poder = true
  texto.innerHTML = 'Vez de X'
  vez = 1
  jogo.innerHTML = 'Jogo da velha!'
  document.getElementById('q1').src = 'Imagens/Quadrado.png'
  document.getElementById('q2').src = 'Imagens/Quadrado.png'
  document.getElementById('q3').src = 'Imagens/Quadrado.png'
  document.getElementById('q4').src = 'Imagens/Quadrado.png'
  document.getElementById('q5').src = 'Imagens/Quadrado.png'
  document.getElementById('q6').src = 'Imagens/Quadrado.png'
  document.getElementById('q7').src = 'Imagens/Quadrado.png'
  document.getElementById('q8').src = 'Imagens/Quadrado.png'
  document.getElementById('q9').src = 'Imagens/Quadrado.png'
}
function ativar(quad) {
  if (poder == true) {
    switch (quad) {
      case 1:
        if (myArray[0] == '1') {
          document.getElementById('q1').src = 'Imagens/qVerde.png'
        }
        break
      case 2:
        if (myArray[1] == '2') {
          document.getElementById('q2').src = 'Imagens/qVerde.png'
        }
        break
      case 3:
        if (myArray[2] == '3') {
          document.getElementById('q3').src = 'Imagens/qVerde.png'
        }
        break
      case 4:
        if (myArray[3] == '4') {
          document.getElementById('q4').src = 'Imagens/qVerde.png'
        }
        break
      case 5:
        if (myArray[4] == '5') {
          document.getElementById('q5').src = 'Imagens/qVerde.png'
        }
        break
      case 6:
        if (myArray[5] == '6') {
          document.getElementById('q6').src = 'Imagens/qVerde.png'
        }
        break
      case 7:
        if (myArray[6] == '7') {
          document.getElementById('q7').src = 'Imagens/qVerde.png'
        }
        break
      case 8:
        if (myArray[7] == '8') {
          document.getElementById('q8').src = 'Imagens/qVerde.png'
        }
        break
      case 9:
        if (myArray[8] == '9') {
          document.getElementById('q9').src = 'Imagens/qVerde.png'
        }
        break
    }
  }
}
function desativar(quad) {
  if (poder == true) {
    switch (quad) {
      case 1:
        if (myArray[0] == '1') {
          document.getElementById('q1').src = 'Imagens/Quadrado.png'
        }
        break
      case 2:
        if (myArray[1] == '2') {
          document.getElementById('q2').src = 'Imagens/Quadrado.png'
        }
        break
      case 3:
        if (myArray[2] == '3') {
          document.getElementById('q3').src = 'Imagens/Quadrado.png'
        }
        break
      case 4:
        if (myArray[3] == '4') {
          document.getElementById('q4').src = 'Imagens/Quadrado.png'
        }
        break
      case 5:
        if (myArray[4] == '5') {
          document.getElementById('q5').src = 'Imagens/Quadrado.png'
        }
        break
      case 6:
        if (myArray[5] == '6') {
          document.getElementById('q6').src = 'Imagens/Quadrado.png'
        }
        break
      case 7:
        if (myArray[6] == '7') {
          document.getElementById('q7').src = 'Imagens/Quadrado.png'
        }
        break
      case 8:
        if (myArray[7] == '8') {
          document.getElementById('q8').src = 'Imagens/Quadrado.png'
        }
        break
      case 9:
        if (myArray[8] == '9') {
          document.getElementById('q9').src = 'Imagens/Quadrado.png'
        }
        break
    }
  }
}