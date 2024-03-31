import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { fetchPosts } from '@/app/lib/data'

 
// interface Props {
//   mdxSource: MDXRemoteSerializeResult
// }
 
export default async function Page(props: any) {
  const data = await fetchPosts();
  console.log(data)
  return <div>Lol</div>
}