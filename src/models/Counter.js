import m from "mithril";

const Counter = {
  count: 1,
  increment: () => {
    Counter.count++;
  }
};

module.exports = Counter;
