import React, { useState, useEffect } from "react";

const Car = () => {
  const [started, setStarted] = useState(false);
  const [countKm, setCountKm] = useState(0);

  //Uso de useEffect
  useEffect(() => {
    document.title = `Coche ${started}`;
  }, [started]);

  const checkStateCar = () => {
    if (started) {
      return <span style={{ color: "green" }}>Encendido</span>;
    }
    return <span style={{ color: "red" }}>Apagado</span>;
  };

  const aumentarKms = num => {
    if (started) {
      setCountKm(countKm + num);
    } else {
      alert("El coche está apagado");
    }
  };
  return (
    <div>
      <h1>Nuestro coche está: {checkStateCar()}</h1>
      <h1>Recorrido: {countKm}</h1>

      <button
        onClick={() => {
          setStarted(!started);
        }}
      >
        Enceder / Apagar
      </button>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          aumentarKms(5);
        }}
      >
        Aumentar kms
      </button>
    </div>
  );
};

export default Car;
