import Head from 'next/head';
import styles from "../../styles/Blog.module.css";
import Link from "next/link"

function BlogPostPage(props) {
  var title = `${props.title} - on Blog-y`;
  return (
    <div className={styles.blog}>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content={props.dp} />
        <meta name="keywords" content={`${props.kw},blogy,blogy-y,net-js`} />
        <meta name="author" content="net-js" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="application-name" content="Blogy-y" />
        <meta name="name" content="Blog-y" />

        <link rel="manifest" href="/data.webmanifest" />
        <link rel="icon" href="/icons/icon-48x48.png"/>

        <meta property="og:title" content={title} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="blog" />
        <meta property="og:description" content={props.dp} />
        <meta property="og:url" content="https://blog-y.vercel.app" />
        <meta property="og:site_name" content="Blogy" />
        <meta property="og:image" content="https://blog-y.vercel.app/icons/icon-48x48.png" />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content={title} />
        <meta name="twitter:description" content={props.dp} />
        <meta name="twitter:image" content="https://blog-y.vercel.app/icons/icon-48x48.pn" />
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={props.dp} />  
        <meta itemProp="image" content="https://blog-y.vercel.app/icons/icon-48x48.pnp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "headline": title,
            "description": props.dp,
            "url": "https://blog-y.vercel.app",
            "@type": "Blog",
            "name": "Blogy",
            "@context": "https://schema.org"
          })}
        </script>
      </Head>
      <section>

        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.dp} dangerouslySetInnerHTML={{__html: props.dp}}></p>
        <div dangerouslySetInnerHTML={{ __html: props.file, }} className={ styles.main }></div>
        <footer>
        <div itemScope itemType="http://schema.org/Person">
          <Link itemProp="url" href="/author">
            <div itemProp="name"><strong>Author<span>:</span> Net-js <span>|</span> <i>{props.date}</i></strong></div>
          </Link>
        </div>
        </footer>
      </section>
    </div>
  );
}

export function getStaticProps({params}) {
  const fs = require("fs");
  const path = require("path");

  const metadata = JSON.parse(fs.readFileSync(path.join(process.cwd(), "contents/", `${params.id}.json`,)))
  const file = fs.readFileSync(path.join(process.cwd(), "/contents/", `${metadata.filename}.html`)).toString()
  return {
    props: {
      ...metadata,
      file
    }
  };
}

export async function getStaticPaths() {
  const fs = require("fs");

  const blogs = fs.readdirSync(`${process.cwd()}/contents`, "utf-8")
    .filter((fn) => fn.endsWith(".json"))
    .map((fn) => fn.replace(".json", ''));

  return {
    paths: blogs.map((path) => {
      return {
        params: {
          id: path,
        }
      };
    }),
    fallback: 'blocking',
  };
}

export default BlogPostPage