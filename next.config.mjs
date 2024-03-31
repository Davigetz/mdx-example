import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter' // YAML and such.
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import createMDX from '@next/mdx'
import rehypeHighlight from 'rehype-highlight'
import fauxRemarkEmbedder from '@remark-embedder/core'
import fauxOembedTransformer from '@remark-embedder/transformer-oembed'
 
const remarkEmbedder = fauxRemarkEmbedder.default
const oembedTransformer = fauxOembedTransformer.default

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack5: true,
  webpack: config => {
    config.resolve.fallback = {
      fs: false,
      dns: false,
    };

    return config;
  },
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  compiler:{
    removeConsole:false
  }
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    // @ts-expect-error: `remarkEmbedder` types are wrong.
    remarkPlugins: [remarkGfm, remarkFrontmatter,remarkMath,[
      // @ts-expect-error: `remarkEmbedder` types are wrong.
      remarkEmbedder,
      {transformers: [oembedTransformer]}
    ]],
    rehypePlugins: [rehypeKatex,rehypeHighlight],
  },
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)