import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  try {
    const data = await fetch(
      "https://shark-app-gdi93.ondigitalocean.app/v1/case-studies?populate=poster"
    );

    const caseStudies = await data.json();

    return json({ caseStudies: caseStudies.data.reverse() });
  } catch (e) {
    return json({ caseStudies: [] });
  }
};

export default function Index() {
  const { caseStudies } = useLoaderData();

  console.log(caseStudies);

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
            {caseStudies.map(({ attributes }) => {
              return (
                <li
                  className={`poster ${
                    attributes.coming_soon ? "coming-soon" : null
                  }`}
                >
                  {attributes.coming_soon ? (
                    <div className="meta">
                      <span className="pill">Coming Soon</span>
                    </div>
                  ) : null}
                  <a
                    href={
                      !attributes.coming_soon
                        ? `/case-studies/${attributes?.slug}`
                        : undefined
                    }
                  >
                    <img
                      src={`${attributes?.poster?.data?.attributes?.formats?.medium?.url}`}
                      alt={attributes.poster.attributes?.alternativeText}
                    />
                    <section className="detail">
                      <header>
                        <h3>{attributes.title}</h3>
                      </header>
                    </section>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </article>
      <article className="center">
        <h2 className="dark">Worked with</h2>
        <ul className="list-h">
          <li>
            <img src="/images/WITLogo.png" />
          </li>
          <li>
            <img src="/images/bfmg.png" />
          </li>
          <li>
            <img src="/images/defiant.png" />
          </li>
          <li>
            <img src="/images/castlegames.png" />
          </li>
          <li>
            <img src="/images/deathorglory.png" />
          </li>
        </ul>
      </article>
      <footer>
        <h2>Follow me</h2>
      </footer>
    </>
  );
}
