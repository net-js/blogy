import Head from "next/head"
import css from "../styles/Author.module.css"

export default function Author(){
    return (
        <div className={css.body}>
            <Head>
                <title>
                    Net-js Author
                </title>
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
            <div itemScope itemType="http://schema.org/Person">
                <a itemProp="url" href="https://github.com/net-js ">
                <div itemProp="name"><h1>Net-js</h1></div>
                </a>
            </div>
            <div itemScope itemType="http://schema.org/Organization">
                <a itemProp="url" href="https://github.com/net-js/blogy">
                    <div itemProp="name"><h5>Blog-y</h5></div>
                </a>
            </div>
            <hr />
            <div style={{display: "none"}}>Job: <span  itemProp="jobtitle">Programer</span></div>
            <div itemProp="description">
                <h2 id="hi-there-">Hi there 👋</h2>
                <p>I net-js a self taught beginner doing both backend (mostly) and frontend. I use <a href="https://github.com/nodejs/node">Node.js</a></p>
                <p>
                    I’m looking to collaborate on <strong>Node.js, Typescript, Front-end apps, Electron, JavaScript librarys</strong> etc;
                    <br />
                    <br />
                    On StackOverflow: <a href="https://stackoverflow.com/users/18844713/steve?tab=profile"><strong>Steve</strong></a>;
                    <br />
                    On NPMjs: <a href="https://www.npmjs.com/~net-js">net-js</a>
                    <br />
                    On Github: <a href="https://github.com/net-js">net-js</a></p>
                <p>| sign --&gt; <a href="/sign.txt">sign.txt</a> <em>(<a href="https://gist.github.com/net-js/732043a7abf3bc2458425a63edd4df78">PublicKey</a> format is hex and rsa-sha265)</em> |</p>
            </div>
        </div>
    )
}