import m from "mithril";
import Header from "./Header";
import TweetBox from "../models/TweetBox";

const overed = text => text.length >= 140;

const TweetBoxView = {
  view: () => (
    <div class="container">
      <Header />
      <div class="control">
        <textarea
          class={`textarea ${overed(TweetBox.value()) ? "is-danger" : ""}`}
          oninput={m.withAttr("value", TweetBox.value)}
          value={TweetBox.value()}
        />
      </div>

      <p class={`help ${overed(TweetBox.value()) ? "is-danger" : ""}`}>
        {140 - TweetBox.value().length}
      </p>
    </div>
  )
};

module.exports = TweetBoxView;
