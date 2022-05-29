export default function Index() {
  return (
    <>
      <div className="main-navigation">
        <img src="/images/watermark.png" className="logo" alt="made by jonny" />
      </div>
      <section className="banner">
        <video
          className="video"
          muted
          autoPlay
          loop
          src="https://madebyjonny.fra1.digitaloceanspaces.com/showreel.mp4"
          poster="/images/reel-poster.jpg"
          playsInline
        ></video>
        <div className="overlay" />
        <div className="detail">
          <h1>
            <span>2021</span> Showreel
          </h1>
          <p>
            Checout and get a taste of my work from last year in my latest
            showreel.
          </p>
          <a
            className="button"
            href="https://www.youtube.com/watch?v=AVlcj4t61L4&amp;ab_channel=madebyjonny"
          >
            <span>Play Showreel</span>
            <div className="icon" aria-hidden="true">
              <i className="fa fa-play" aria-hidden="true"></i>
            </div>
          </a>
        </div>
      </section>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  );
}
