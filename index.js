import "bulma/bulma.sass";
import m from "mithril";
import CounterView from "./src/view/CounterView";

const root = document.body;

m.route(root, "/counter", { "/counter": CounterView });
