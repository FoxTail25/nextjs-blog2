import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/data';
import { useState } from 'react';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {

  let [cnt, setCnt] = useState(0)


  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <p>useState-test: {cnt}</p>
      <button onClick={()=> setCnt(cnt +=1)}>test useState</button>

      <section className={utilStyles.headingMd}>
        <p>Hello, i`m <span className={utilStyles.headingWg}>FoxTail</span>. i software enginer</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <Link href={'posts/post'}>first post</Link>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
          <Link href={`/posts/${id}`}>{title}</Link>
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={date} />
          </small>
        </li>
          ))}
        </ul>
      </section>


    </Layout>
  );
}