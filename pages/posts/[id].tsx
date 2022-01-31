import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    excerpt: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta content="Thoughts on sundry topics, including but not limited to web development, CSS, HTML, public policy." />
      </Head>
      <article className='prose-stone dark:prose-invert prose-ul:list-disc prose-li:marker:text-orange-800 mx-auto my-12 prose prose-lg'>
        <h1 className='font-black'>{postData.title}</h1>
        <p>
          <Date dateString={postData.date} />
        </p>
        <div className='' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}