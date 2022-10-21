import React  from "react";
import ReactDom from 'react-dom'
import NumberBaseball from './NumberBasball/NumberBaseball';
import NumberBaseballHooks from "./NumberBasball/Hooks/NumberBaseballHooks";





ReactDom.render(<NumberBaseballHooks />, document.querySelector('#root'));