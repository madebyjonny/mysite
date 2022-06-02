import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { marked } from "marked";
const MEDIA_BASE_URL = "https://shark-app-gdi93.ondigitalocean.app";

export const loader = async ({ params }) => {
  const { slug } = params;

  console.log(params);

  try {
    const data = await fetch(
      `https://shark-app-gdi93.ondigitalocean.app/v1/case-studies?filters[slug]=${slug}&populate=poster,banner`
    );

    const caseStudies = await data.json();

    const content = caseStudies.data[0];

    const body = marked.parse(content.attributes.introduction);

    return json({ caseStudy: caseStudies.data[0], body });
  } catch (e) {
    console.log(e);
    return json({ caseStudy: {} });
  }
};

export default function Index() {
  const { caseStudy, body } = useLoaderData();

  console.log(caseStudy);
  console.log("etdsdg");
  return (
    <>
      <div className="main-navigation">
        <img src="/images/watermark.png" className="logo" alt="made by jonny" />
      </div>
      <section className="banner short">
        <div />
        <img
          src={`${MEDIA_BASE_URL}${caseStudy.attributes?.banner?.data?.attributes?.formats?.medium?.url}`}
          alt={caseStudy.attributes.poster.attributes?.alternativeText}
        />
        <div className="play-button-ontainer">
          <a
            className="play-button"
            href="https://www.youtube.com/watch?v=AVlcj4t61L4&amp;ab_channel=madebyjonny"
          >
            <i className="fa fa-play icon" aria-hidden="true"></i>
            Watch on YouTube
          </a>
        </div>
        <div className="overlay" />
        <header>
          <div className="summary">
            <h1>{caseStudy.attributes.title}</h1>
            <p>{caseStudy.attributes.description}</p>
          </div>
          <div className="meta">
            <ul>
              <li>
                <h2>Client</h2>
                {caseStudy.attributes.title}
              </li>
              <li>
                <h2>service</h2>
                {caseStudy.attributes.service}
              </li>
            </ul>
          </div>
        </header>
      </section>
      <article className="container short">
        <header className="short">
          <h3>About the Project</h3>
        </header>
        <section
          className="short content"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </article>
    </>
  );
}
