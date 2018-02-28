import m from "mithril";
import Header from "./Header";
import TweetBox from "../models/TweetBox";

const overed = text => text.length >= 140;

const TweetBoxView = () => {
  const model = TweetBox();

  return {
    view: () => (
      <div class="container">
        <Header />
        <div class="control">
          <textarea
            class={`textarea ${overed(model.value()) ? "is-danger" : ""}`}
            oninput={m.withAttr("value", model.value)}
            value={model.value()}
          />
        </div>

        <p class={`help ${overed(model.value()) ? "is-danger" : ""}`}>
          {140 - model.value().length}
        </p>
      </div>
    )
  };
};

module.exports = TweetBoxView;
