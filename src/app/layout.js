import { Inter } from 'next/font/google';
import '../styles/global.scss';
import Header from '../components/Header';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Saurow',
  description: 'Portfolio of Saurabh Thapliyal (aka Saurow/Soro), a web developer specializing in front-end development, UI/UX, and interactive experiences.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Saurabh Thapliyal, Saurow, Soro, web developer, front-end, UI/UX, portfolio, JavaScript, React" />
        <meta name="author" content="Saurabh Thapliyal" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/portfolio-thumbnail.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />

        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/portfolio-thumbnail.jpg" />

        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Saurabh Thapliyal",
            "alternateName": ["Saurow", "Soro"],
            "url": "https://yourwebsite.com",
            "sameAs": [
              "https://github.com/yourprofile",
              "https://linkedin.com/in/yourprofile",
              "https://twitter.com/yourprofile"
            ],
            "jobTitle": "Web Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            }
          })}
        </script>
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
