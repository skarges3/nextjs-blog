import Head from 'next/head'
import Layout from '../components/layout'
import { BLOG_TITLE } from '../lib/constants'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'

const isWindow = typeof window !== "undefined"

export default function FourZeroFour({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout>
      <Head>
        <title>404: Not Found - {BLOG_TITLE}</title>
      </Head>
      <section className='prose-stone dark:prose-invert my-12 prose prose-xl'>
        <h1 className='font-bold tracking-widest uppercase'>404: Not Found</h1>
        {isWindow ? 
        (<p>This is probably my fault, but also could be a typo in the URL: <code>{window.location.href}</code></p>)
          : (<p>This is probably my fault, but also could be a typo in the URL.</p>) 
        }
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}