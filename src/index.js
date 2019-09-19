import React, {useState} from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  //0<>300
  //Estados do Jogo : ENTRADA, RODANDO, FIM
  const [estado, setEstado] = useState('ENTRADA')

  //Qual o palpite da Máquina - Usando logica de busca binária sempre tentamos acertar o meio
  const [palpite, setPalpite] = useState(150);

  //Numero de palpites da máquina
  const [numeroPalpites, setNumeroPalpites] = useState(1);

  //Limite de Valores
  const [valorMinimo, setValorMinimo] = useState(0);
  const [valorMaximo, setValorMaximo] = useState(300);

  const reiniciaValores = () => {
    setValorMinimo(0)
    setValorMaximo(300)
    setNumeroPalpites(1)
    setPalpite(150)
  }
    
  //iNICIAR jOGO
  const iniciarJogo = () => {
    setEstado('RODANDO')
  }

  const reiniciarJogo = () => {
    setEstado('RODANDO')
    reiniciaValores()
  }
  
  const menor = () => {
    setNumeroPalpites(numeroPalpites+1)
    setValorMaximo(palpite)
    //Para evitar numeros decimais, devo converter para inteiro
    //const proximoPalpite = parseInt((palpite-valorMinimo)/2)
    const proximoPalpite = parseInt((palpite - valorMinimo) /2) + valorMinimo
    setPalpite(proximoPalpite)
  }
  const maior = () => {
    setNumeroPalpites(numeroPalpites+1)
    setValorMinimo(palpite)

    const proximoPalpite = parseInt((valorMaximo - valorMinimo)/2) + palpite
    setPalpite(proximoPalpite)

  }

  const acertou = () => {
    setEstado('FIM')
  }

  if(estado==='FIM'){
    return (
      <div>
        <p>Acertei o número {palpite} com {numeroPalpites} chutes..!</p>
        <button onClick={reiniciarJogo}>!!!!!!! RESTART !!!!!!!</button>
      </div>
    )
  }

  const elBr = <br></br>

  if (estado === 'ENTRADA') {
    return <button onClick={iniciarJogo}>Começar a jogar!</button>
  }

  return (
    <div className="App">
      <h1>Jogo da Busca Binária</h1>
      <h2>Máquina Advinhar um Número de 0 a 300</h2>

      {elBr}

      <p>O seu número é {palpite} ?</p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>

      <p># Palpites : {numeroPalpites}</p>


    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
