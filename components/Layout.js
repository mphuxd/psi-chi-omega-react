import Meta from "../components/meta";
import DefaultHeader from "./DefaultHeader";
import Footer from "./Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <DefaultHeader />
      {/* Theme classes to encapsulate all components */}
      <div className='min-h-screen'>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
