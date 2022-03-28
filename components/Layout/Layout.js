import HeaderDefault from "../UIShell/HeaderDefault";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import NextNProgress from "nextjs-progressbar";

export default function Layout({ children }) {
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <>
      <NextNProgress
        color='#29D'
        startPosition={0.3}
        stopDelayMs={200}
        height={6}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
      <HeaderDefault />
      <motion.main
        variants={variants}
        initial='initial'
        animate='animate'
        transition={{ duration: 0.3 }}
        className='min-h-screen text-midnight'
      >
        {children}
      </motion.main>
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
