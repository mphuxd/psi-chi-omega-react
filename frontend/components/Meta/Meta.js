import React from "react";

function Meta({ description, keywords, url, title, imgURL, twitterHandle }) {
  return (
    <>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta property='image:alt_text' content='Psi Chi Omega logo in greek letters.' />
      <meta property='og:site_name' content='Psi Chi Omega Fraternity Gamma Chapter' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      {imgURL && <meta property='og:image' content={imgURL} /> && (
          <meta property='og:image:url' content={imgURL} />
        ) && <meta property='og:image:secure_url' content={imgURL} />}
      <meta name='twitter:card' content='summary_large_image' />
      {twitterHandle && <meta name='twitter:site' content={twitterHandle} />}
      <meta name='twitter:description' content={description} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:creator' content={twitterHandle} />
      <meta name='twitter:url' content={url} />
      {imgURL && <meta name='twitter:image' content={imgURL} />}
      <meta name='MobileOptimized' content='width' />
      <meta name='HandheldFriendly' content='true' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
      {/* mobile */}
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='black' />
      <meta content='True' name='HandheldFriendly' />
      <meta
        id='viewport-tag'
        name='viewport'
        content='width=device-width, minimum-scale=1.0, initial-scale=1, shrink-to-fit=no, viewport-fit=cover'
      />
      <meta name="robots" content="noindex"/>
    </>
  );
}

export default Meta;
