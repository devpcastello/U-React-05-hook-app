import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { HooksApp } from "./HooksApp";
import { Layout } from "./05-useLayoutEffect/Layout";

import "./index.css";
import { Memorize } from "./06-memos/Memorize";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Memorize />
  // </React.StrictMode>
);
