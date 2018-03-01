import "bulma/bulma.sass";
import m from "mithril";
import CounterView from "./src/view/CounterView";
import TweetBoxView from "./src/view/TweetBoxView";
import TodoView from "./src/view/TodoView";

const root = document.body;

m.route(root, "/counter", {
  "/counter": CounterView,
  "/tweetbox": TweetBoxView,
  "/todo": TodoView
});
