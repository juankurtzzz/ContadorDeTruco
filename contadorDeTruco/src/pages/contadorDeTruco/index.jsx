import { useState } from "react";
import "./styles.css";

const LIMITE = 12;

export default function TrucoGame() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [truco, setTruco] = useState(1);

  const clamp = v => Math.max(0, Math.min(LIMITE, v));

  const vencedor =
    a >= LIMITE ? "Time A venceu 🎉" :
    b >= LIMITE ? "Time B venceu 🎉" :
    null;

  return (
    <div className="truco">

      <h1>🃏 Truco</h1>

      <div className="mesa">

        <Time
          nome="Time A"
          pontos={a}
          truco={truco}
          set={v => setA(clamp(v))}
        />

        <Centro truco={truco} setTruco={setTruco} />

        <Time
          nome="Time B"
          pontos={b}
          truco={truco}
          set={v => setB(clamp(v))}
        />

      </div>

      {vencedor && <strong className="winner">{vencedor}</strong>}

      <button className="reset" onClick={() => {
        setA(0);
        setB(0);
        setTruco(1);
      }}>
        Nova Partida
      </button>

    </div>
  );
}

function Time({ nome, pontos, set, truco }) {
  return (
    <div className="time">

      <h3>{nome}</h3>

      <span>{pontos}</span>

      <div className="acoes">
        <button onClick={() => set(pontos + 1)}>+1</button>
        <button onClick={() => set(pontos - 1)}>-1</button>
        <button onClick={() => set(pontos + truco)}>
          Truco +{truco}
        </button>
      </div>

    </div>
  );
}

function Centro({ truco, setTruco }) {
  const valores = [1, 3, 6, 9, 12];

  return (
    <div className="centro">

      <p>Valor da mão</p>

      {valores.map(v => (
        <button
          key={v}
          className={truco === v ? "ativo" : ""}
          onClick={() => setTruco(v)}
        >
          {v}
        </button>
      ))}

    </div>
  );
}