import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/posts'

export const metadata = {
  title: 'Expert Bra Guides & Reviews - GirlsBra Top | Professional Fitting Advice',
  description: 'Expert bra guides, honest reviews, and professional fitting advice. Find the best bras for your needs with our comprehensive blog covering size guides, product reviews, and fitting tips.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const featuredPost = posts[0]
  const regularPosts = posts.slice(1)

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Expert Bra Guides & Reviews</h1>
            <p>
              Professional advice, honest reviews, and comprehensive guides from certified fitting specialists. 
              Everything you need to find your perfect bra and feel confident every day.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="section-sm">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Featured Article</h2>
              <p className="text-gray-600">Our most popular guide this week</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <article className="card card-featured">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.alt}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="post-category">{featuredPost.category}</span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="post-meta mb-6">
                      <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                      <span>•</span>
                      <span>By {featuredPost.author}</span>
                    </div>
                    <Link href={`/blog/${featuredPost.slug}`} className="btn btn-primary btn-lg">
                      Read Complete Guide
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}

      {/* Categories Section */}
      <section className="section section-accent">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Browse by Category</h2>
            <p className="section-subtitle">
              Find exactly what you&apos;re looking for with our organized categories. 
              Each section is curated by our expert team to provide the most valuable insights.
            </p>
          </div>
          
          <div className="grid grid-2 lg:grid-3 gap-8">
            <div className="category-card">
              <div className="category-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="category-title">Bra Size Guide</h3>
              <p className="category-description">
                Complete guides to finding your perfect size and understanding bra measurements. 
                Learn professional fitting techniques from certified specialists.
              </p>
              <Link href="/blog?category=bra-size-guide" className="btn btn-primary btn-md">
                Explore Guides
              </Link>
            </div>

            <div className="category-card">
              <div className="category-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="category-title">Best Bras by Use</h3>
              <p className="category-description">
                Discover the best bras for sports, work, sleep, and special occasions. 
                Expert recommendations for every activity and lifestyle need.
              </p>
              <Link href="/blog?category=best-bras-by-use" className="btn btn-primary btn-md">
                Find Your Bra
              </Link>
            </div>

            <div className="category-card">
              <div className="category-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="category-title">Honest Reviews</h3>
              <p className="category-description">
                Unbiased, detailed reviews of popular bra brands and models. 
                Real testing, honest opinions, and detailed pros and cons.
              </p>
              <Link href="/blog?category=bra-reviews" className="btn btn-primary btn-md">
                Read Reviews
              </Link>
            </div>

            <div className="category-card">
              <div className="category-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="category-title">Maternity & Nursing</h3>
              <p className="category-description">
                Specialized support and comfort for expecting and nursing mothers. 
                Expert guidance for this important life stage.
              </p>
              <Link href="/blog?category=maternity-bras" className="btn btn-primary btn-md">
                Shop Maternity
              </Link>
            </div>

            <div className="category-card">
              <div className="category-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="category-title">Teen & First Bras</h3>
              <p className="category-description">
                Gentle guidance for teens and first-time bra buyers. 
                Building confidence with comfort and age-appropriate advice.
              </p>
              <Link href="/blog?category=teen-first-bras" className="btn btn-primary btn-md">
                Get Started
              </Link>
            </div>

            <div className="category-card">
              <div className="category-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="category-title">Bra vs Bralette</h3>
              <p className="category-description">
                Learn the differences and find out which option is best for you. 
                Compare support, comfort, and style options.
              </p>
              <Link href="/blog?category=bra-vs-bralette" className="btn btn-primary btn-md">
                Compare Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Latest Articles</h2>
            <p className="section-subtitle">
              Stay updated with our newest guides, reviews, and expert insights. 
              Fresh content published weekly by our team of fitting specialists.
            </p>
          </div>
          
          <div className="grid grid-2 lg:grid-3">
            {regularPosts.map((post) => (
              <article key={post.slug} className="card">
                <Image
                  src={post.image}
                  alt={post.alt}
                  width={400}
                  height={240}
                  className="card-image"
                />
                <div className="card-content">
                  <span className="post-category">{post.category}</span>
                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-text">{post.excerpt}</p>
                  <div className="post-meta">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="btn btn-outline btn-md w-full">
                    Read Full Guide
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="section section-accent">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Popular Topics</h2>
            <p className="section-subtitle">
              Quick access to our most requested guides and tools. 
              These resources are loved by thousands of women worldwide.
            </p>
          </div>
          
          <div className="grid grid-2 lg:grid-4">
            <div className="category-card">
              <div className="category-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-3">Bra Size Calculator</h4>
              <p className="text-gray-600 mb-4">Find your perfect size with our free calculator</p>
              <Link href="/calculator" className="btn btn-primary btn-sm">
                Try Now
              </Link>
            </div>

            <div className="category-card">
              <div className="category-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-3">Push-Up Bras</h4>
              <p className="text-gray-600 mb-4">Best push-up bras for enhancement and cleavage</p>
              <Link href="/blog?tag=push-up" className="btn btn-outline btn-sm">
                Read More
              </Link>
            </div>

            <div className="category-card">
              <div className="category-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-3">Wireless Bras</h4>
              <p className="text-gray-600 mb-4">Comfortable wire-free options for everyday wear</p>
              <Link href="/blog?tag=wireless" className="btn btn-outline btn-sm">
                Read More
              </Link>
            </div>

            <div className="category-card">
              <div className="category-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-3">Fitting Tips</h4>
              <p className="text-gray-600 mb-4">Expert tips for finding the perfect fit</p>
              <Link href="/blog?tag=fitting" className="btn btn-outline btn-sm">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Never Miss Our Latest Guides</h2>
            <p>
              Get expert bra fitting tips, exclusive reviews, and early access to new guides 
              delivered straight to your inbox. Join 50,000+ women who trust our advice!
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
              Weekly tips • No spam • Unsubscribe anytime
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

