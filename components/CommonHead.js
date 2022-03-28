import Head from 'next/head';

export default function CommonHead(props) {
  return (
    <Head>
      <link rel="stylesheet" href="/global.css" />
      {/* <link rel="stylesheet" href="/fonts/fonts.css" /> */}
      {props.children}
    </Head>
  );
}