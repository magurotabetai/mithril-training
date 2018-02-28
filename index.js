import "bulma/bulma.sass";
import m from "mithril";
import CounterView from "./src/view/CounterView";
import TweetBoxView from "./src/view/TweetBoxView";

const root = document.body;

m.route(root, "/counter", {
  "/counter": CounterView,
  "/tweetbox": TweetBoxView
});
