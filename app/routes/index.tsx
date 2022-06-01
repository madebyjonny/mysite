export default function Index() {
  const caseStudies = [
    {
      title: "The Pursuit",
      logo: "",
      poster: "/images/posters/pursuit.jpg",
      slug: "",
    },
    { title: "WIT", logo: "", poster: "/images/posters/wit.jpg", slug: "" },
    {
      title: "CrossFit Death or Glory",
      logo: "",
      poster: "/images/posters/deathorglory.jpg",
      slug: "",
    },
    { title: "Battle for Middle Ground", logo: "", poster: "", slug: "" },
    { title: "The Defiant Games", logo: "", poster: "", slug: "" },
    { title: "Castle Games", logo: "", poster: "", slug: "" },
  ];

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
          <div className="meta">
            <span>Edition: #01</span> <span>Year: 2021</span>
          </div>
          <h1>Showreel</h1>
          <a
            className="play-button"
            href="https://www.youtube.com/watch?v=AVlcj4t61L4&amp;ab_channel=madebyjonny"
          >
            <i className="fa fa-play icon" aria-hidden="true"></i>
            Play
          </a>
        </div>
      </section>
      <article className="container case-studies">
        <header>
          <h2>Case Studies</h2>
        </header>
        <section>
          <ul>
            {caseStudies.map((item) => {
              return (
                <li className="poster">
                  <a href={item.slug}>
                    <img src={item.poster} alt={item.title} />
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </article>
    </>
  );
}
