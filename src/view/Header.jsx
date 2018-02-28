import m from "mithril";

const Header = {
  view: () => (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          mithril-training-poi
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div class="navbar-menu">
        <a href="/counter" class="navbar-item" oncreate={m.route.link}>
          Counter
        </a>
        <a href="/tweetbox" class="navbar-item" oncreate={m.route.link}>
          TweetBox
        </a>
      </div>
    </nav>
  )
};

module.exports = Header;
