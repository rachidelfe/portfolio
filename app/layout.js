import { Poppins, Raleway, Roboto } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import 'glightbox/dist/css/glightbox.css';
import 'swiper/css/bundle';
import '../public/assets/css/main.css';
import './globals.css';
import './extra-styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClientEnhancements from '../components/client/ClientEnhancements';
import { ContactModalProvider } from '../components/client/ContactModalProvider';
import {
  defaultMetaDescription,
  defaultMetaKeywords,
  siteName
} from '../lib/site';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  metadataBase: new URL('https://rachid-elfermi.dev'),
  title: {
    default: `Bioinformatician | ${siteName}`,
    template: `%s | ${siteName}`
  },
  description: defaultMetaDescription,
  keywords: defaultMetaKeywords,
  icons: {
    icon: '/assets/img/favicon.png',
    shortcut: '/assets/img/favicon.png',
    apple: '/assets/img/favicon.png'
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable} ${raleway.variable}`}>
        <ContactModalProvider>
          <ClientEnhancements />
          <Header />
          {children}
          <Footer siteName={siteName} />
        </ContactModalProvider>
      </body>
    </html>
  );
}
