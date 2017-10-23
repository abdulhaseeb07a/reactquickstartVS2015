import * as React from "react";
import * as ReactDOM from "react-dom";
//import Bootstrap from './dist/css/bootstrap.css';

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework= "React" />,
    document.getElementById("example")
);