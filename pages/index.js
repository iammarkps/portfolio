import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Quotes = [
  'Aut viam inveniam aut faciam',
  'Fugit inreparabile tempus',
  'Quinon proficit deficit',
  'Omne ignotum pro magnifico',
  'Audentes fortuna iuvat',
  'Non omnia possumus omnes'
]

export default () => (
  <React.Fragment>
    <Head>
      <title>MARK</title>
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
    <div className="container">
      <div className="header">
        <h1>I AM MARK</h1>
        <p>TU81 | Programmer | Photographer</p>
        <p className="quotes">
          {Quotes[Math.floor(Math.random() * Quotes.length)]}
        </p>
      </div>

      <div className="footer">
        <div className="left">
          <p>
            <b>Possawat Suksai</b>
          </p>
        </div>

        <div className="right">
          <a
            href="https://github.com/iammarkps"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://medium.com/@iammark._"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
          <a
            href="https://www.instagram.com/iammark._/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        html,
        body {
          background-color: white;
        }

        a {
          color: black;
          display: inline-block;
          margin: 0 20px;
          position: relative;
          text-decoration: none;
        }

        a:after {
          content: '';
          height: 1px;
          background: black;
          position: absolute;
          pointer-events: none;
          bottom: -5px;
          left: 0;
          right: 0;
          opacity: 0;
          transform: scale(0, 1);
          transition: all 200ms;
        }

        a:hover:after {
          opacity: 1;
          transform: scale(1, 1);
        }

        .container {
          position: absolute;
          overflow: hidden;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          color: black;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
          -webkit-animation: fadein 2s;
          -moz-animation: fadein 2s;
          -ms-animation: fadein 2s;
          -o-animation: fadein 2s;
          animation: fadein 2s;
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

        .header {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          text-align: center;
        }

        .footer {
          color: #666;
          bottom: 20px;
          font-size: 14px;
          position: absolute;
          width: 100%;
          text-align: center;
          margin-bottom: 20px;
        }

        .footer a {
          color: #666;
          margin: 0;
          transition: all 200ms;
        }

        .footer a:hover {
          color: black;
        }

        .left {
          display: inline-block;
          margin-bottom: 30px;
          margin-left: 0;
          margin-right: 30px;
        }

        .right {
          display: inline-block;
        }

        .right a {
          display: inline-block;
          margin-right: 30px;
        }

        .quotes {
          font-style: italic;
          margin-top: 50px;
        }

        @media only screen and (max-width: 40em) {
          .left {
            display: block;

            margin-right: 0;
          }

          .right {
            display: block;
          }

          .right a:last-child {
            margin-right: 0;
          }
        }
      `}
    </style>
  </React.Fragment>
)
