import React from "react";
//import ListUsers from "./components/ListUsers";
//import ListUsersV2 from "./components/ListUsersV2";
//import Buttons from "./components/Buttons";

import Car from "./components/Car";

function App() {
  // const employees = [
  //   { name: "Eduardo Estrada Montenegro", edad: 59 },
  //   { name: "Mariana Estrada Saballos", edad: 25 },
  //   { name: "Frances Estrada Saballos", edad: 22 },
  //   { name: "Clarisa Estrada Frachet", edad: 33 }
  //  ];

  //  const showNameConsole = (name, name2) => {
  //   console.log(parseInt(name, name2));
  // };
  // Ojo: esto es para eviar el propos desde mi App hacia el componente hijo:
  //<Buttons showNameConsole={showNameConsole} />

  return (
    <div className="App">
      <Car />
    </div>
  );
}

export default App;
