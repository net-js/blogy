import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"

function Grid({a}) {
  return (
        <div className={styles.grid}>
              {a.map((data, index) => {
                 const keywords = data.keywords.split(",");
                  return (
                    <div>
                      <Link href={`/blogs/${data.filename}`} >
                        <a key={parseInt(index).toString()} className={styles.card}>
                          <h2>{data.title}</h2>
                          <p dangerouslySetInnerHTML={{__html: data.dp}}></p>
                          <hr />
                          <p>{keywords.map((word, index) => {
                              return <span key={index} className={styles.keyword}>#{word.trim()}</span>
                          })}</p>
                          </a>
                      </Link>
                    </div>
                  )
               })
              }
        </div>
  );
}


export function getStaticProps() {
  var fs = require("fs")
  var blogs = fs.readdirSync(`${process.cwd()}/contents`, "utf-8")
        .filter((fn) => fn.endsWith(".json"))
        .map((fn) => {
          return JSON.parse(fs.readFileSync(`${process.cwd()}/contents/${fn}`, {
            encoding: "utf-8",
          }));
        });

  return { 
    props: {
        d:blogs
    }}
}

export default function Home(props) {
  return (
    <div className={styles.container} id="body">
      <Head>
        <title>Blog-y</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="A blogging site by net-js to blog on everything net-js" />
        <meta name="keywords" content="blogy,blogy-y,net-js" />
        <meta name="author" content="net-js" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="application-name" content="Blogy-y" />
        <meta name="name" content="Blog-y" />

        <link rel="manifest" href="/data.webmanifest" />
        <link rel="icon" href="/icons/icon-48x48.png"/>

        <meta property="og:title" content="Blog-y" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="A blogging site by net-js to blog on everything net-js" />
        <meta property="og:url" content="https://blog-y.vercel.app" />
        <meta property="og:site_name" content="Blogy" />
        <meta property="og:image" content="https://blog-y.vercel.app/icons/icon-48x48.png" />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content="Blogy" />
        <meta name="twitter:description" content="A blogging site by net-js to blog on everything net-js" />
        <meta name="twitter:image" content="https://blog-y.vercel.app/icons/icon-48x48.png" />
        <meta itemProp="name" content="Blogy" />
        <meta itemProp="description" content="A blogging site by net-js to blog on everything net-js" />  
        <meta itemProp="image" content="https://blog-y.vercel.app/icons/icon-48x48.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "headline": "Blogy",
            "description": "A blogging site by net-js to blog on everything net-js",
            "url": "https://blog-y.vercel.app",
            "@type": "WebSite",
            "name": "Blogy",
            "@context": "https://schema.org"
          })}
        </script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="./">Blogy</a>
        </h1>

        <p className={styles.description}>
          The offical blogging site by net-js for blogging
        </p>
        <Grid a={props.d}/>
      </main>

      <footer className={styles.footer}>
        <Link>
          Open Sourced{' '}
          <span className={styles.logo}>
            <img src="https://github.com/favicon.ico" />
          </span>
        </Link>
      </footer>
    </div>
  )
}