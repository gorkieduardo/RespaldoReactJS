import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// Esta es una app de las primeras sobre diferentes tópicos de react
//entre ellas la calculadora y una serie mas de funciones y clases de react
//basados en elcurso de Aprender React.
serviceWorker.unregister();
