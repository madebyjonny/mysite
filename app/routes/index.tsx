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
            Watch my showreel of my work from the previous year. If you want to
            find out more about these projects checkout the case studies below
          </p>
          <a href="">Play Showreel</a>
        </div>
      </section>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  );
}
