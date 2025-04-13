import './styles.css';
import React, { useState, useEffect } from 'react';
import BotaoTruco from "../../components/buttonTruco/buttonTruco.jsx";

function ContadorTruco() {
  const [timeA, setTimeA] = useState(0);
  const [timeB, setTimeB] = useState(0);
  const [vencedor, setVencedor] = useState('');
  const [trucoValor, setTrucoValor] = useState(3);

  useEffect(() => {
    const definicoes = () => {
      if (timeA < 0) setTimeA(0);
      if (timeA > 12) setTimeA(12);
      if (timeB < 0) setTimeB(0);
      if (timeB > 12) setTimeB(12);
    };

    const vencer = () => {
      if (timeA >= 12 && vencedor === '') setVencedor('Time A venceu!');
      if (timeB >= 12 && vencedor === '') setVencedor('Time B venceu!');
    };

    definicoes();
    vencer();
  }, [timeA, timeB, vencedor]);

  const resetar = () => {
    setTimeA(0);
    setTimeB(0);
    setVencedor('');
  };

  return (
    <>
      <div className="titulo">
        <h1>Contador de Truco</h1>
        <div className='BotaoTruco'></div>
      </div>
      <div className='BotaoTruco'>
        <BotaoTruco onSelecionar={setTrucoValor} />
        <h1>Valor atual do Truco: {trucoValor}</h1>
      </div>
      <div className='TimeA'>
        <h1>Time A</h1>
        <h2> Pontos: {timeA}</h2>
        <button onClick={() => setTimeA(timeA + 1)}>+1</button>
        <button onClick={() => setTimeA(timeA - 1)}>-1</button>
        <button onClick={() => setTimeA(timeA + trucoValor)}>Adicionar valor truco</button>
      </div>
      <br />
      <div className='TimeB'>
        <h1>Time B</h1>
        <h2> Pontos: {timeB}</h2>
        <button onClick={() => setTimeB(timeB + 1)}>+1</button>
        <button onClick={() => setTimeB(timeB - 1)}>-1</button>
        <button onClick={() => setTimeB(timeB + trucoValor)}>Adicionar valor truco</button>
      </div>
      <br />
      <div className='Vencedor'>
        {vencedor && <h1>{vencedor}</h1>}
      </div>
      <div className='Resetar'>
        <button onClick={resetar}>Resetar</button>
      </div>
    </>
  );
}

export default ContadorTruco;
