import m from "mithril";
import Header from "./Header";
import Counter from "../models/Counter";

const CounterView = {
  view: () => (
    <div class="container">
      <Header />
      <button onclick={Counter.increment}>{Counter.count}</button>
    </div>
  )
};

module.exports = CounterView;
