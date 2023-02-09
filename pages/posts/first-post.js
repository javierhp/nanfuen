import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Nanfuen - post</title>
      </Head>
      <h1>First Post</h1>
      <Image
        src="/images/small.png" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={320} // Desired size with correct aspect ratio
        alt="Your Name"
      />
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}