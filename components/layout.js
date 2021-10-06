import Navbar from './navandfoo/Navbar';
import Footer from './navandfoo/Footer';
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
