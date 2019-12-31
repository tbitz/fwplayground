import React from 'react';
import './App.css';
import A from './A';
import FnPasser from './FnPasser';
import CallBackParent from './CallBackParent';
import DataFetcher from './DataFetcher';
import Todos from './Todos';
import TodoObjects from './TodoObjects';
import Frame from './filter/Frame';
import MyStyling from './vishwas/STYLING/MyStyling';
import { Fragments } from './vishwas/Fragments';
import { Lodash } from './vishwas/Lodash';
import Parent from './vishwas/PURECOMPONENT/Parent';
import FocusInput from './vishwas/REFS/FocusInput';
import Input from './vishwas/REFS/Input';
import FRParentInput from './vishwas/REFS/FRParentInput';
import PortalsDemo from './vishwas/PORTALS/PortalsDemo';
var _ = require('lodash');

const PRODUCTS = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

const App: React.FC = () => {
  return (
    <div className="App">
      <header >
        App Header
      </header>
      <div>
        <PortalsDemo />
        <FRParentInput />
        <FocusInput />
        <Input />
        <Parent />
        <Lodash />
        <Fragments />
        <Frame products={PRODUCTS} />
        <MyStyling />
        <TodoObjects />
        <Todos />
        <A />
        <FnPasser />
        <CallBackParent />
        <DataFetcher />
      </div>
    </div>
  );
}

export default App;
