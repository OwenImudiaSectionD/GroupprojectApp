import Link from 'next/link';
import Footer from './footer';
import '../styles/globals.css';


export default function App({ Component, pageProps }) {
  return (
    <>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/courses">Courses</Link></li>
        </ul>
      </nav>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
