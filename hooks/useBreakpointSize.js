import useWindowSize from "./useWindowSize";
import { useEffect, useState } from "react";

const useBreakpointSize = () => {
  let windowSize = useWindowSize();
  let windowWidth = windowSize[0];
  const [breakPointSize, setBreakPointSize] = useState(null);

  useEffect(() => {
    let breakpoint;
    if (windowWidth < 640) breakpoint = "default";
    else if (windowWidth >= 640 && windowWidth < 768) breakpoint = "sm";
    else if (windowWidth >= 768 && windowWidth < 1024) breakpoint = "md";
    else if (windowWidth >= 1024 && windowWidth < 1280) breakpoint = "lg";
    else if (windowWidth >= 1280 && windowWidth < 1536) breakpoint = "xl";
    else if (windowWidth >= 1536 && windowWidth < 1664) breakpoint = "2xl";
    else if (windowWidth >= 1664) breakpoint = "max";
    setBreakPointSize(breakpoint);
  }, [windowWidth]);
  return breakPointSize;
};

export default useBreakpointSize;
