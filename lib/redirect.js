import redirectTo from './redirect-to'
import Head from 'next/head'

export default destination =>
  class RedirectRoute extends React.Component {
    static getInitialProps({ res }) {
      if (typeof window === 'undefined' && !res.writeHead) {
        return { metaRedirect: true }
      }

      redirectTo(destination, { res, status: 302 })
      return {}
    }

    render() {
      const { metaRedirect } = this.props
      if (metaRedirect) {
        return (
          <Head>
            <meta httpEquiv="refresh" content={`0; url=${destination}`} />
          </Head>
        )
      }

      return null
    }
  }
