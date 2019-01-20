import React, { createRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'

const PHOTO_SET = [
  {
    src: '/static/img/1-fullsize.jpg',
    srcSet: [
      '/static/img/1-500.jpg 500w',
      '/static/img/1-1000.jpg 1000w',
      '/static/img/1-2000.jpg 2000w'
    ],
    width: '5499',
    height: '3565'
  },
  {
    src: '/static/img/2-fullsize.jpg',
    srcSet: [
      '/static/img/2-500.jpg 500w',
      '/static/img/2-1000.jpg 1000w',
      '/static/img/2-2000.jpg 2000w'
    ],
    width: '6000',
    height: '4000'
  },
  {
    src: '/static/img/3-fullsize.jpg',
    srcSet: [
      '/static/img/3-500.jpg 500w',
      '/static/img/3-1000.jpg 1000w',
      '/static/img/3-2000.jpg 2000w'
    ],
    width: '5907',
    height: '3938'
  },
  {
    src: '/static/img/4-fullsize.jpg',
    srcSet: [
      '/static/img/4-500.jpg 500w',
      '/static/img/4-1000.jpg 1000w',
      '/static/img/4-2000.jpg 2000w'
    ],
    width: '6000',
    height: '4000'
  },
  {
    src: '/static/img/5-fullsize.jpg',
    srcSet: [
      '/static/img/5-500.jpg 500w',
      '/static/img/5-1000.jpg 1000w',
      '/static/img/5-2000.jpg 2000w'
    ],
    width: '6000',
    height: '4000'
  },
  {
    src: '/static/img/7-fullsize.jpg',
    srcSet: [
      '/static/img/7-500.jpg 500w',
      '/static/img/7-1000.jpg 1000w',
      '/static/img/7-2000.jpg 2000w'
    ],
    width: '2500',
    height: '3081'
  },
  {
    src: '/static/img/6-fullsize.jpg',
    srcSet: [
      '/static/img/6-500.jpg 500w',
      '/static/img/6-1000.jpg 1000w',
      '/static/img/6-2000.jpg 2000w'
    ],
    width: '6000',
    height: '4000'
  }
]

export default class Portfolio extends React.Component {
  state = {
    activeSection: '#about',
    currentImage: 0,
    isLightBoxOpen: false
  }

  about = createRef()
  experience = createRef()
  skills = createRef()
  pastwork = createRef()
  gallery = createRef()

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      isLightBoxOpen: true
    })
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      isLightBoxOpen: false
    })
  }

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    })
  }

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    })
  }

  componentDidMount() {
    this.scrollspy()
  }

  scrollspy = () => {
    this.scrollSpyID = requestAnimationFrame(() => {
      const { innerHeight, scrollY } = window

      if (scrollY === this.lastFrameScroll) {
        this.lastFrameScroll = scrollY
        return this.scrollspy()
      }

      this.lastFrameScroll = scrollY
      let { activeSection } = this.state
      const scrollOffset = innerHeight + scrollY

      if (scrollOffset > this.about.current.offsetTop) {
        activeSection = '#about'
      }

      if (scrollOffset > this.experience.current.offsetTop) {
        activeSection = '#experience'
      }

      if (scrollOffset > this.skills.current.offsetTop) {
        activeSection = '#skills'
      }

      if (scrollOffset > this.pastwork.current.offsetTop) {
        activeSection = '#pastwork'
      }

      if (scrollOffset > this.gallery.current.offsetTop) {
        activeSection = '#gallery'
      }

      if (activeSection !== this.state.activeSection) {
        window.history.pushState(null, null, activeSection)
        this.setState({ activeSection }, this.scrollspy)
      } else {
        this.scrollspy()
      }
    })
  }

  render() {
    const { activeSection } = this.state
    return (
      <div>
        <Head>
          <title>MARK | Portfolio</title>
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <meta name="theme-color" content="black" />
          <meta property="og:title" content="I AM MARK" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://iammark.me" />
        </Head>
        <div className="wrapper">
          <div className="sidebar">
            <div className="name">
              <Link href="/">
                <p>Possawat Suksai</p>
              </Link>
              <Link href="/">
                <a>&larr; BACK</a>
              </Link>
            </div>

            <div className="navigation">
              <a
                href="#about"
                className={activeSection === '#about' ? 'active' : ''}
              >
                About
              </a>
              <a
                href="#experience"
                className={activeSection === '#experience' ? 'active' : ''}
              >
                Experience
              </a>
              <a
                href="#skills"
                className={activeSection === '#skills' ? 'active' : ''}
              >
                Skills
              </a>
              <a
                href="#pastwork"
                className={activeSection === '#pastwork' ? 'active' : ''}
              >
                Past Work
              </a>
              <a
                href="#gallery"
                className={activeSection === '#gallery' ? 'active' : ''}
              >
                Gallery
              </a>
            </div>
          </div>

          <div className="content">
            <div id="about" ref={this.about}>
              <h3>12 March 2003 - present</h3>
              <h2>Possawat Suksai</h2>
              <p>
                I'm currently an M.4 student in Triam Udom Suksa School. My
                passion is to make the world a better place to live. I'm
                interested in Photography, Programming and Artificial
                Intelligence. My dream is to study abroad in the USA and I'm
                trying my best to make that come true.
                <br />
                <br />
                <p>Facts about me!</p>
                <ul>
                  <li>I'm currently 15 years old.</li>
                  <li>I love to assist in school events.</li>
                  <li>
                    My passion is photography and it would always be like that.
                  </li>
                  <li>I love coding!</li>
                </ul>
                <p>My Photography Equipment</p>
                <ul>
                  <li>Sony α7 III</li>
                  <li>Sony FE 70-200mm F4 G OSS</li>
                  <li>Zeiss Sonnar T* FE 55mm F1.8 ZA</li>
                </ul>
              </p>
            </div>

            <div id="experience" ref={this.experience}>
              <div className="work">
                <h3>June 2018 - Present</h3>
                <h2>Website Administrator at TUCMC</h2>
                <p>
                  Since I'm in charge of the sole IT position in this
                  organization, I'm responsible for all of the things related to
                  computer. such as generating the reports for the Head of
                  Department, Updating the news on the school website and much
                  more.
                  <br />
                  <br />
                  I’m responsible for:
                  <ul>
                    <li>Looking after the Clubs Registration System</li>
                    <li>
                      Looking after the Triam Udom Open House Registration
                      System
                    </li>
                    <li>Updating news</li>
                    <li>Managing analytics of Clubs Member</li>
                  </ul>
                </p>
              </div>
              <div className="work">
                <h3>June 2018 - Present</h3>
                <h2>60th years BLD. Photographer</h2>
                <p>
                  Since I was a child my passion always related to photography.
                  <br />
                  <br />
                  I’m responsible for:
                  <ul>
                    <li>Taking pictures of the building event(s)</li>
                  </ul>
                </p>
              </div>
            </div>

            <div id="skills" ref={this.skills}>
              <h3>Skills</h3>
              <div className="skills">
                <div className="skill">
                  <p>Photography</p>
                </div>
                <div className="skill">
                  <p>Video Editing</p>
                </div>
                <div className="skill">
                  <p>Color Grading</p>
                </div>
                <div className="skill">
                  <p>JavaScript</p>
                </div>
              </div>
            </div>

            <div id="pastwork" ref={this.pastwork}>
              <h3>Past Work</h3>
              <div className="pastwork">
                <h2>Head of TUDM2018 selection</h2>
                <p>I'm head of student who assist the panel of judge.</p>
              </div>
              <div className="pastwork">
                <h2>Head of Registration @TUOPH</h2>
                <p>I'm the one who design the registration flow.</p>
              </div>
              <div className="pastwork">
                <h2>Camera man for Haters the Musical Teaser</h2>
                <p>
                  I'm the one in the team that responsible for this project.
                </p>
              </div>
              <div className="pastwork">
                <h2>Camera man for TUDM and TUCLD show</h2>
                <p>
                  I'm responsible for recording all TUDM and TUCLD show @Triam
                  Udom Sports Day.
                </p>
              </div>
              <div className="pastwork">
                <h2>Camera man for 60th building in Sports Day</h2>
                <p>
                  <a href="/w/sports">iammark.me/w/sports</a>
                </p>
              </div>
            </div>
            <div id="gallery" ref={this.gallery}>
              <h2>Gallery</h2>
              <Gallery photos={PHOTO_SET} onClick={this.openLightbox} />
              <Lightbox
                images={PHOTO_SET}
                onClose={this.closeLightbox}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
                currentImage={this.state.currentImage}
                isOpen={this.state.isLightBoxOpen}
                backdropClosesModal={true}
              />
              <h3 className="tusc">#votemarkfortusc62</h3>
            </div>
          </div>
          <style jsx>{`
            .tusc {
              text-align: center;
              margin-top: 50px;
              color: #999;
              transition: all 0.2s ease;
            }

            .tusc:hover {
              color: black;
            }

            @keyframes fadein {
              from {
                opacity: 0;
              }

              to {
                opacity: 1;
              }
            }

            @-moz-keyframes fadein {
              from {
                opacity: 0;
              }

              to {
                opacity: 1;
              }
            }

            @-webkit-keyframes fadein {
              from {
                opacity: 0;
              }

              to {
                opacity: 1;
              }
            }

            a {
              cursor: pointer;
              color: #999;
              line-height: 2.5em;
              text-decoration: none;
              transition: all 0.2s ease;
            }

            a:hover,
            a.active {
              color: black;
            }

            .content {
              width: 700px;
            }

            h2 {
              font-size: 2.5em;
              margin: 0;
            }

            h3 {
              margin: 0;
              text-transform: uppercase;
            }

            li {
              margin-bottom: 10px;
            }

            li:before {
              content: '–';
              display: inline-block;
              color: #999;
              position: absolute;
              margin-left: -15px;
            }

            p {
              line-height: 2em;
              color: #444;
              transition: color 0.2s ease;
            }

            p a {
              border-bottom: 1px solid white;
              color: #0076ff;
              line-height: 2em;
              transition: all 0.2s ease;
            }

            p a:hover {
              border-bottom: 1px solid #0076ff;
            }

            ul {
              padding: 0;
              list-style-type: none;
              margin-left: 15px;
            }

            .name {
              margin-bottom: 20px;
              position: sticky;
              top: 60px;
            }

            .navigation {
              display: flex;
              flex-direction: column;
              position: sticky;
              top: 150px;
            }

            .sidebar {
              padding: 50px 50px 0 0;
              width: 200px;
            }

            #about {
              border-bottom: 1px solid #eaeaea;
              margin-top: 150px;
              margin-bottom: 100px;
              padding-bottom: 50px;
            }

            #experience {
              border-bottom: 1px solid #eaeaea;
              margin-top: 100px;
              margin-bottom: 50px;
            }

            .work {
              margin-bottom: 50px;
            }

            #skills {
              border-bottom: 1px solid #eaeaea;
              margin-top: 50px;
              margin-bottom: 50px;
              padding-bottom: 50px;
            }

            .skills {
              display: flex;
            }

            .skill {
              padding: 2px 10px;
              border: 1px solid #e3e5e7;
              border-radius: 5px;
              margin-right: 10px;
              margin-top: 10px;
              transition: all 0.5s ease;
            }

            .skill:hover {
              border: 1px solid black;
            }

            .skill p {
              margin: 0;
            }

            #pastwork {
              margin-top: 50px;
              padding-bottom: 50px;
              border-bottom: 1px solid #eaeaea;
            }

            #pastwork h2 {
              font-size: 2em;
            }

            .pastwork {
              margin-bottom: 50px;
            }

            .pastwork p {
              margin: 0;
            }

            #gallery {
              margin-top: 50px;
              padding-bottom: 50px;
            }

            .wrapper {
              margin: 0 auto;
              max-width: 1000px;
              display: flex;
              justify-content: center;
              -webkit-animation: fadein 1s;
              -moz-animation: fadein 1s;
              -ms-animation: fadein 1s;
              -o-animation: fadein 1s;
              animation: fadein 1s;
            }

            @media (max-width: 1200px) {
              .content {
                width: 100%;
              }
              h2 {
                font-size: 1.5em;
              }

              .navigation {
                margin-bottom: 100px;
                position: relative;
                top: none;
              }
              .sidebar {
                padding: 0px;
                width: 100%;
              }
              .skills {
                flex-direction: column;
              }
              .skill {
                margin-bottom: 12px;
              }
              .wrapper {
                flex-direction: column;
              }
              .name {
                margin-bottom: 0;
                position: relative;
                top: none;
              }
            }
          `}</style>
          <style global jsx>{`
            body {
              background-color: white;
              color: black;
              font-family: 'SF Pro Text', 'Helvetica Neue', 'Helvetica', 'Arial',
                sans-serif;
              font-size: 1em;
              font-style: normal;
              font-weight: 400;
              margin: 0 20px 0 20px;
              line-height: 1.47059;
              letter-spacing: -0.022em;
            }
          `}</style>
        </div>
      </div>
    )
  }
}
