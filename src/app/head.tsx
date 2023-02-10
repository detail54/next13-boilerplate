const Head = ({ params }: any) => {
  return (
    <>
      {/* <title>{`new next rq boilerplate${pageName}`}</title> */}
      <meta httpEquiv='X-UA-Compatible' content='IE=edge, chrome=1' />
      <meta name='format-detection' content='telephone=no' />
      <meta name='description' content='new next rq boilerplate' />
      <meta charSet='utf-8' />
      {/* <link rel='canonical' href={currentUrl} /> */}
      <meta name='description' content='__new next rq boilerplate' />
      <meta property='og:title' content='__new next rq boilerplate' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, viewport-fit=cover'
      />
      <meta property='og:description' content='__new next rq boilerplate' />
      {/* <meta property='og:url' content={currentUrl} /> */}
      {/* <meta
        property='og:image'
        content={`${domain}/opengraph.png?${(Math.random() * 7).toString(7)}`}
      /> */}
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='__new next rq boilerplate' />
    </>
  )
}

export default Head
