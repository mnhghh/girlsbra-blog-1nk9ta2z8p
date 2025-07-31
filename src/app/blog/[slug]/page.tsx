import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getPostBySlug, getPostSlugs, getAllPosts } from '@/lib/posts'
import { markdownToHtml } from '@/lib/markdown'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - GirlsBra Top`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const content = await markdownToHtml(post.content)
  const allPosts = getAllPosts()
  const relatedPosts = allPosts
    .filter(p => p.slug !== slug && p.category === post.category)
    .slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="post-category bg-white/20 text-white border-white/30">
                {post.category}
              </span>
            </div>
            <h1 className="text-center mb-8">{post.title}</h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="font-medium">By {post.author}</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="section-sm">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={post.image}
                alt={post.alt}
                width={1200}
                height={600}
                className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="section">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
                  <div 
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />

                  {/* Article Footer */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    {/* Tags */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4 text-gray-900">Related Topics</h3>
                      <div className="flex flex-wrap gap-3">
                        {post.tags.map((tag) => (
                          <span key={tag} className="tag">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Share Section */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4 text-gray-900">Share this article</h3>
                      <div className="flex flex-wrap gap-3">
                        <button className="btn btn-outline btn-sm">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                          </svg>
                          Twitter
                        </button>
                        <button className="btn btn-outline btn-sm">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                          Facebook
                        </button>
                        <button className="btn btn-outline btn-sm">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Copy Link
                        </button>
                      </div>
                    </div>

                    {/* Author Bio */}
                    <div className="bg-gradient-to-r from-rose-50 to-purple-50 rounded-xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-rose-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-lg">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">About {post.author}</h4>
                          <p className="text-gray-600 leading-relaxed">
                            {post.author} is a certified bra fitting specialist with over 10 years of experience 
                            helping women find their perfect fit. She has worked with leading lingerie brands 
                            and trained hundreds of fitting consultants worldwide.
                          </p>
                          <div className="flex items-center space-x-4 mt-4">
                            <span className="text-sm text-gray-500">Follow on:</span>
                            <div className="flex space-x-2">
                              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                              </a>
                              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-8">
                  {/* Table of Contents */}
                  <div className="card">
                    <div className="card-content">
                      <h3 className="font-semibold mb-4 text-gray-900">In This Article</h3>
                      <nav className="space-y-2">
                        <a href="#" className="block text-sm text-gray-600 hover:text-rose-600 transition-colors">
                          Understanding Small Chest Bra Needs
                        </a>
                        <a href="#" className="block text-sm text-gray-600 hover:text-rose-600 transition-colors">
                          Top Bra Types for Small Chests
                        </a>
                        <a href="#" className="block text-sm text-gray-600 hover:text-rose-600 transition-colors">
                          Sizing Tips for Small Chests
                        </a>
                        <a href="#" className="block text-sm text-gray-600 hover:text-rose-600 transition-colors">
                          Brand Recommendations
                        </a>
                        <a href="#" className="block text-sm text-gray-600 hover:text-rose-600 transition-colors">
                          Care and Maintenance
                        </a>
                      </nav>
                    </div>
                  </div>

                  {/* Quick Tools */}
                  <div className="card">
                    <div className="card-content">
                      <h3 className="font-semibold mb-4 text-gray-900">Quick Tools</h3>
                      <div className="space-y-3">
                        <Link href="/calculator" className="btn btn-primary btn-sm w-full">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          Size Calculator
                        </Link>
                        <Link href="/blog" className="btn btn-outline btn-sm w-full">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          All Guides
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Related Topics */}
                  <div className="card">
                    <div className="card-content">
                      <h3 className="font-semibold mb-4 text-gray-900">Related Topics</h3>
                      <ul className="space-y-3">
                        <li>
                          <Link href="/blog?category=bra-reviews" className="text-sm text-gray-600 hover:text-rose-600 transition-colors">
                            More Bra Reviews
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog?category=bra-size-guide" className="text-sm text-gray-600 hover:text-rose-600 transition-colors">
                            Size Guides
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog?tag=push-up" className="text-sm text-gray-600 hover:text-rose-600 transition-colors">
                            Push-Up Bras
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog?tag=wireless" className="text-sm text-gray-600 hover:text-rose-600 transition-colors">
                            Wireless Options
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="section section-accent">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Articles</h2>
              <p className="text-gray-600">More expert guides in the same category</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.slug} className="card">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.alt}
                    width={300}
                    height={200}
                    className="card-image h-48"
                  />
                  <div className="card-content">
                    <span className="post-category">{relatedPost.category}</span>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <Link href={`/blog/${relatedPost.slug}`} className="btn btn-outline btn-sm w-full">
                      Read Article
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Get More Expert Advice</h2>
            <p>
              Subscribe to our newsletter for the latest bra guides, reviews, and exclusive tips 
              from our team of fitting specialists!
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-secondary btn-md">
                Subscribe Free
              </button>
            </form>
            <p className="text-sm mt-4 opacity-80">
              Join 50,000+ women • Weekly tips • No spam
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

