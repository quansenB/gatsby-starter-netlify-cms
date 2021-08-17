import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

export const KursPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div data-server-rendered="true" id="__nuxt">
    <div id="__layout">
      <section data-fetch-key="0">
        <div class="page">
          <div
            aria-label="Main Navigation"
            role="navigation"
            position="0"
            class="mv-navibar navbar-scroll"
          >
            <div
              class="
                relative
                justify-between
                bg-white
                mv-container
                mv-navibar__wrapper
                lg_bg-transparent
                z-top
              "
            >
              <div class="mv-navibar__logo">
                <a href="/de" target="_blank" rel="noreferrer">
                  <img
                    data-src="https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_0,f_auto,fl_lossy,q_auto,w_auto/https://static.mindvalley.com/public/assets/2019/09/mv-logo-horizontal-colour.svg"
                    alt="Mindvalley Logo"
                    class="lazyload cld-responsive --top-logo"
                  />
                </a>
              </div>
              <nav
                aria-label="Main Navigation"
                class="mv-navi mv-navi__desktop hidden lg_block"
              >
                <div class="flex">
                  <a
                    href="https://support.mindvalley.com/de"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Support
                  </a>
                  <a href="#" title="Log in" class="mv-navi__pill">
                    Anmelden
                  </a>
                </div>
              </nav>
              <div class="block mv-navi__burger lg_hidden">
                <span class="line line-1"></span>
                <span class="line line-2"></span>
                <span class="line line-3"></span>
              </div>
            </div>
          </div>
          <section
            id="1020"
            data-name="Header"
            class="pb-Container header mv-top__clean-text"
          >
            <div id="" class="mv-container">
              <div
                id=""
                target="_self"
                class="w-full lg_w-5/6 text-center mx-auto"
              >
                <div class="pb-markdown mv-type--titlebold2">
                  <h1>Leben ohne Kompromisse</h1>
                </div>
                <div class="pb-markdown mv-type--medbold-md mt-4 lg_mt-10">
                  <h2>
                    Erlebe den bahnbrechenden Prozess der Transformierenden
                    Hypnotherapie, der dich mithilfe der Überzeugungen,
                    Gewohnheiten &amp; Denkmustern neu programmiert
                  </h2>
                </div>
              </div>
              <div id="" class="w-full lg_w-5/6 xl_w-2/3 mt-6 lg_mt-12 mx-auto">
                <div data-v-4c1262f9="">
                  <div
                    data-bgset="https://img.youtube.com/vi/-4RpsztMtT0/maxresdefault.jpg"
                    data-sizes="auto"
                    class="video-thumb lazyload videoWrapper rounded lazyload"
                    style="background-color: #000; background-size: cover"
                    data-v-4c1262f9=""
                  >
                    <svg
                      height="100%"
                      version="1.1"
                      viewBox="0 0 68 48"
                      width="100%"
                      data-v-4c1262f9=""
                    >
                      <path
                        id="play"
                        d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                        fill="#212121"
                        fill-opacity="0.8"
                        class="ytp-large-play-button-bg"
                        data-v-4c1262f9=""
                      ></path>
                      <path
                        d="M 45,24 27,14 27,34"
                        fill="#fff"
                        data-v-4c1262f9=""
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            id="1027"
            data-name="Statistics"
            class="pb-Container statistics"
          >
            <section class="mt-14" style="min-height: 60vh"></section>
          </section>
          <section
            id="1030"
            data-name="Sticky Trigger"
            class="pb-Container sticky-trigger"
          >
            <div
              class="intersected-wrapper"
              style="height: 200px"
              data-v-8501b176=""
            ></div>
          </section>
          <section
            id="why-this-program"
            data-name="Warum dieser Kurs"
            class="pb-Container warum-dieser-kurs my-12 pb-navigable"
          >
            <section style="min-height: 60vh"></section>
            <section
              class="mv-section__gutter"
              style="min-height: 60vh"
            ></section>
          </section>
          <section
            id="meet-your-trainer"
            data-name="Profil der Autorin"
            class="
              pb-Container
              profil-der-autorin
              mv-section__gutter
              pb-navigable
            "
          >
            <div class="mv-container"></div>
            <div id="" class="mv-section__gutter--small">
              <div
                class="
                  pb-markdown
                  mv-type--titlebold4
                  text-center
                  mb-8
                  md_mb-12
                  hidden
                  md_block
                "
              >
                <p>Triff die Autorin</p>
              </div>
              <section style="min-height: 60vh"></section>
              <section style="min-height: 60vh"></section>
              <section
                class="hidden md_block"
                style="min-height: 60vh"
              ></section>
              <section style="min-height: 60vh"></section>
            </div>
            <section
              class="mv-section__gutter--medium"
              style="min-height: 60vh"
            ></section>
          </section>
          <section
            id="what-youll-learn"
            data-name="Was du lernen wirst"
            class="
              pb-Container
              was-du-lernen-wirst
              mv-section__gutter
              pb-navigable
            "
          >
            <section style="min-height: 60vh"></section>
            <section
              class="mv-section__gutter"
              style="min-height: 60vh"
            ></section>
            <section
              class="mv-section__gutter hidden md_block"
              style="min-height: 60vh"
            ></section>
          </section>
          <section
            id="the-curriculum"
            data-name="Der Kursaufbau"
            class="pb-Container der-kursaufbau mv-section__gutter pb-navigable"
          >
            <section style="min-height: 60vh"></section>
            <section
              class="mv-section__gutter--medium"
              style="min-height: 60vh"
            ></section>
          </section>
          <section
            id="what-people-say"
            data-name="Was Teilnehmer sagen"
            class="
              pb-Container
              was-teilnehmer-sagen
              mv-section__gutter--medium
              pb-navigable
            "
          >
            <div class="mv-container">
              <div class="w-full text-center lg_w-2/3 mx-auto">
                <div
                  class="
                    pb-markdown
                    mv-type--titlebold4
                    text-center
                    mb-8
                    md_mb-12
                  "
                >
                  <h2>Was Teilnehmer*innen über diese Quest sagen</h2>
                </div>
              </div>
            </div>
            <section
              class="mv-section__gutter--small"
              style="min-height: 60vh"
            ></section>
            <div class="pb-markdown mv-type--titlebold7 text-center mt-2 md_mt-10">
              <p>
                <a
                  href="https://stories.mindvalley.com/product/uncompromised-life"
                  target="_blank"
                >
                  Lies alle Erfahrungsberichte
                </a>
              </p>
            </div>
          </section>
          <section
            id="join-the-program"
            data-name="Jetzt anmelden"
            class="pb-Container jetzt-anmelden mv-section__gutter pb-navigable"
          >
            <div id="" target="_self" class="mv-container">
              <div class="w-full text-center lg_w-2/3 mx-auto">
                <div
                  class="
                    pb-markdown
                    mv-type--titlebold4
                    text-center
                    mb-8
                    md_mb-10
                    lg_mb-12
                  "
                >
                  <h2>Melde dich an</h2>
                </div>
              </div>
            </div>
            <article id="">
              <section style="min-height: 60vh"></section>
              <section style="min-height: 60vh"></section>
            </article>
            <div id="">
              <div id="" target="_self" class="mv-container">
                <section
                  class="mv-section__gutter"
                  style="min-height: 60vh"
                ></section>
              </div>
              <section
                class="mv-section__gutter--small"
                style="min-height: 60vh"
              ></section>
              <div id="ordermenu-btm" target="_self" class="mv-container">
                <section style="min-height: 60vh"></section>
                <section
                  class="hidden md_block"
                  style="min-height: 60vh"
                ></section>
              </div>
            </div>
          </section>
          <section
            id="1090"
            data-name="For Further Information"
            class="pb-Container for-further-information mv-section__gutter"
          >
            <section class="mv-container" style="min-height: 60vh"></section>
          </section>
          <section
            id="what-people-say"
            data-name="What People Say"
            class="
              pb-Container
              what-people-say
              mv-section__gutter
              hidden
              md_block
              pb-navigable
            "
          >
            <section
              class="mv-section__gutter--small hidden md_block"
              style="min-height: 60vh"
            ></section>
            <div class="pb-markdown mv-type--titlebold7 text-center mt-2 md_mt-10">
              <p>
                <a
                  href="https://stories.mindvalley.com/product/uncompromised-life"
                  target="_blank"
                >
                  Lies alle Erfahrungsberichte
                </a>
              </p>
            </div>
          </section>
          <section
            id="faqs"
            data-name="Häufig gestellte Fragen"
            class="
              pb-Container
              haufig-gestellte-fragen
              mv-section__gutter
              pb-navigable
            "
          >
            <section style="min-height: 60vh"></section>
            <section style="min-height: 60vh"></section>
          </section>
          <section
            id="join-the-program-2"
            data-name="Join The Program 2"
            class="
              pb-Container
              join-the-program-2
              mv-section__gutter
              hidden
              md_block
            "
          >
            <div id="" class="mv-container">
              <section style="min-height: 60vh"></section>
            </div>
          </section>
          <section
            id="1106"
            data-name="More About The Program"
            class="
              pb-Container
              more-about-the-program
              mv-section__gutter
              bg-grey-lighter
            "
          >
            <div id="" class="mv-container">
              <div id="" class="w-full mx-auto py-10 lg_py-16 flex flex-wrap">
                <div id="" class="w-full text-center mx-auto">
                  <div
                    class="
                      pb-markdown
                      mv-type--titlebold4
                      text-center
                      mb-8
                      md_mb-14
                      lg_mb-16
                    "
                  >
                    <h4>Möchtest du mehr über diese Quest erfahren?</h4>
                  </div>
                </div>
                <article
                  id=""
                  target="_self"
                  class="w-full md_w-1/2 md_pr-10 lg_pr-12"
                >
                  <div class="block md_hidden">
                    <img
                      data-src="https://storyblok-cdn.mindvalley.com/f/60579/1200x675/d216963a3f/ul_pp_masterclass.jpg?trans?quality=75&amp;dpr=1&amp;width=auto"
                      alt="Vishen &amp; Marisa Peer in the Masterclass"
                      class="lazyload cld-responsive rounded lazyload w-full"
                    />
                  </div>
                  <div class="pb-markdown mv-type--headline5 mt-4 md_mt-0 lg_mt-0">
                    <h5>
                      Schaue dir die kostenlose Masterclass mit Marisa Peer
                      &amp; Vishen Lakhiani an
                    </h5>
                  </div>
                  <div class="pb-markdown mv-type--body1 mt-4">
                    <p>
                      Sei dabei, wenn Marisa dich während dieser selbst von
                      Kritikern gefeierten Masterclass in die Transformierende
                      Hypnotherapie einführt.
                    </p>
                    <p>
                      Eine Masterclass bietet einen tiefen Einblick in den
                      Inhalt dieses Kurses. Du lernst die wichtigsten Strategien
                      für persönliche Transformation kennen, die du sofort
                      anwenden kannst und du erfährst, was der gesamte Kurs
                      enthält.
                    </p>
                  </div>
                  <a
                    href="https://www.mindvalley.com/de/uncompromised/masterclass?utm_source=storefront&amp;itm_source=storefront&amp;itm_campaign=ul_evergreen&amp;itm_campaign=ul_evergreen&amp;otag=storefront_ul%3Fitm_source%3Dstorefront&amp;otag=storefront_ul"
                    data-test="webinars-button"
                    target="_blank"
                    rel="noreferrer"
                    class="base-button mt-4 lg_mt-6 mv-btn--primary"
                  >
                    Schau dir die kostenlose Masterclass an
                  </a>
                </article>
                <figure class="w-full md_w-1/2">
                  <div class="hidden md_block">
                    <img
                      data-src="https://storyblok-cdn.mindvalley.com/f/60579/1200x675/d216963a3f/ul_pp_masterclass.jpg?trans?quality=75&amp;dpr=1&amp;width=auto"
                      alt="Vishen &amp; Marisa Peer in the Masterclass"
                      class="lazyload cld-responsive rounded lazyload w-full"
                    />
                  </div>
                </figure>
              </div>
            </div>
          </section>
          <div
            id=""
            target="_self"
            position="14"
            class="z-10 mv-stickybar sticky-btm showUp"
          >
            <section style="min-height: 60vh"></section>
          </div>
        </div>
      </section>
    </div>
  </div>
);

KursPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const KursPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <KursPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

KursPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default KursPage;

export const pageQuery = graphql`
  query KursPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
