import {Html, Head, Main, NextScript} from 'next/document';

export default function Document(props) {
   return (
      <Html lang="en" style={{scrollBehavior: 'smooth'}}>
         <Head>
            {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
            {/* <title>{`${props.title} | Goodnews Ogechukwu Ike | goo.dev`}</title> */}
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:url" content="https://goodnews-ike.vercel.app" />
            <meta property="og:title" content="Goodnews Ike Portfolio Website" />
            <meta
               property="og:description"
               content="Goodnews Ike - Results-driven Software Engineer with 5 years of experience in designing, developing, and optimizing high-performance web applications. Adept at using React.js, Next.js, Typescript, Flutter, and state management libraries, with hands-on expertise in CI/CD automation using Bitbucket Pipelines. Currently contributing to innovative fintech solutions, improving product scalability and security. Passionate about transitioning into Product Management to drive technology-driven business growth." />
            <meta name="author" content="Goodnews Ogechukwu Ike" />
            <meta name="keywords" content="Goodnews Ogechukwu Ike, software engineer, software developer, frontend engineer, frontend, engineer, developer" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en-US" />
            <meta property="og:type" content="website" />
            <meta name="description" content="Hi, I&#x27;m Goodnews Ogechukwu Ike, Software Engineer." />
            <meta property="og:description" content="Hi, I&#x27;m Goodnews Ogechukwu Ike, Software Engineer." />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="twitter:site" content="@goodnews_ike" />
            <meta name="instagram:site" content="@ikegoodnewsofficial" />
            <meta name="linkedin:site" content="@ikegoodnews" />
            <meta name="github:site" content="@ikegoodnews" />
            <meta name="facebook:site" content="@goodnewsikeogeh" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <meta name="robots" content="index, nofollow" />
            <link rel="manifest" href="/manifest.json" />
            <meta property="og:title" content="Goodnews Ogechukwu Ike" />
            <meta property="og:url" content="https://goodnews-ike.vercel.app" />
            <meta name="apple-mobile-web-app-title" content="Goodnews Ogechukwu Ike" />
            <link
               rel="stylesheet"
               href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
               integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw=="
               crossOrigin
               referrerPolicy="no-referrer"
            />

            {/* <meta name="msapplication-config" content="/icons/browserconfig.xml" /> */}
            {/* <meta name="twitter:image" content="https://i.ibb.co/jz5Qwx1/Group-7.png" /> */}
            {/* <link rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap" /> */}
            {/* <link rel="preconnect" href="https://i.ibb.co/" crossOrigin /> */}
            {/* <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <link rel="icon" href="/favicon.ico" />
            <link
               rel="author"
               href="https://lh3.googleusercontent.com/KUg3rbUWiVpV83Sdsy5FcsGeOlpcOgi1o3wLhcZGmGkjDmWCj4Hh4kLEEn_1b4dGsm9hzW7lGGvEsUpH2wpCRk9vlfod3ojbJyG7Rdb3ViBaBric9MwvP6J422dIifjzdT4gMJdKkWB4TIlfouuwVm9lxBgxoXEoGm3yiF7xMtFPNIEOTbbgG-WcV6I6jGhLj4AKoRJS_M2g2m5g132WKRTgWSLO4D4sL05lRPAATNq2h3bD72vFGm_Zk-r53dJGBe7FlHIcTV6rU85XD7wwF5sKtmddNbO9nbKg1L-W5pGcU-Ntvx9ayUmxMmGck0FXhf3saN6Qys_dh_C31jy1StMNeceswq1cH8712PvVmca1uNircDdNUbgKIstcn2Q3Egw1w_P5fJ17H6Ru7ZB8gmgEtivx8enUeE_TknyYz37p71GEGCg9-E2m5bl9YaUNTnODjQ2Lh8xeXYnsnCFkvw-XTlWFi799mxtjQFbPK32oAbV728dCld7eB8oTcvB4msAah-hukPKOr83q4GeiZlUe-w_L9hXzFDXF5d86CQbD7ypeUnlhdMaZi8KXOXrkEUMD_njXWSFEh9Xdcnt87Yvkz7VqRxbDHUz4Nid5oiUFAYtUgV917fg1PHroY1Iy0R3g97GXAxHsVc0PfzKLcKgZvoDVURscN8jlpDvbwGfiJ_4HwRHFRys=w1080-h1440-no"
            /> */}
            {/* <meta property="og:image" content="https://i.ibb.co/jz5Qwx1/Group-7.png" /> */}
            {/* <meta name="next-head-count" content="21" /> */}
            <style
               // eslint-disable-next-line react/no-danger
               dangerouslySetInnerHTML={{
                  __html: `
                     @font-face {
                        font-family: 'ProstoOne';
                        font-style: normal;
                        font-weight: 500;
                        src: url('/_assets/fonts/ProstoOne-Regular.ttf');
                     }
                     @font-face {
                        font-family: 'Gidado';
                        font-style: normal;
                        font-weight: 200;
                        src: url('/_assets/fonts/Raleway-Thin.ttf');
                     }
                     @font-face {
                        font-family: 'Gidado';
                        font-style: normal;
                        font-weight: 300;
                        src: url('/_assets/fonts/Raleway-ExtraLight.ttf');
                     }
                     @font-face {
                        font-family: 'Gidado';
                        font-style: normal;
                        font-weight: 400;
                        src: url('/_assets/fonts/Raleway-Light.ttf');
                     }
                     @font-face {
                        font-family: 'Gidado';
                        font-style: normal;
                        font-weight: 500;
                        src: url('/_assets/fonts/Raleway-Regular.ttf');
                     }
                     @font-face {
                        font-family: 'Gidado';
                        font-style: normal;
                        font-weight: 600;
                        src: url('/_assets/fonts/Raleway-Medium.ttf');
                     }
                     @font-face {
                        font-family: 'Gidado';
                        font-style: normal;
                        font-weight: 700;
                        src: url('/_assets/fonts/Raleway-SemiBold.ttf');
                     }
                     @font-face {
                        font-family: 'Gidado';
                        font-style: normal;
                        font-weight: 800;
                        src: url('/_assets/fonts/Raleway-Bold.ttf');
                     }
                     @font-face {
                        font-family: 'Gidado';
                        font-style: normal;
                        font-weight: 900;
                        src: url('/_assets/fonts/Raleway-ExtraBold.ttf');
                     }
                  `,
               }}
            />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
