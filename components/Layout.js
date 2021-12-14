import Meta from "../components/Meta";
import HeaderDefault from "./UIShell/HeaderDefault";
import Footer from "./Footer/Footer";
import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <HeaderDefault />
      <div className='min-h-screen'>
        <main>{children}</main>
      </div>

      <Footer
        description='Psi Chi Omega offers our members the tools, guidance, and environment that allow our members create meaningful, longlasting experiences, memories, and relationships.'
        youtube='/'
        ig='/'
        facebook='/'
      />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
