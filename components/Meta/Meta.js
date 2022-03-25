import React from "react";

function Meta({ content, keywords }) {
  return (
    <>
      <meta charSet='utf-8' />
      <meta name="description" content={content} />
      <meta name="keywords" content={keywords}/>

    </>
  );
}

export default Meta;
