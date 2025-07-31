import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts().slice(0, 3) // Get latest 3 posts

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Find Your Perfect Bra Fit</h1>
            <p>Expert guides, honest reviews, and professional fitting advice to help every woman feel confident, comfortable, and beautifully supported</p>
            <div className="hero-cta">
              <Link href="/calculator" className="btn btn-secondary btn-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Free Size Calculator
              </Link>
              <Link href="/blog" className="btn btn-outline btn-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Browse Expert Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose GirlsBra Top?</h2>
            <p className="section-subtitle">
              We&apos;re more than just a blog – we&apos;re your trusted partner in finding the perfect fit. 
              Our expert team combines years of fitting experience with honest, detailed reviews.
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="category-card">
              <div className="category-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="category-title">Expert Fitting Guides</h3>
              <p className="category-description">
                Professional techniques and insider tips from certified bra fitting specialists. 
                Learn the secrets that boutique fitters use to ensure the perfect fit every time.
              </p>
              <Link href="/blog?category=bra-size-guide" className="btn btn-outline btn-sm">
                Learn More
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
                Unbiased, detailed reviews of popular bra brands and styles. We test everything ourselves 
                and share the real pros and cons to help you make informed decisions.
              </p>
              <Link href="/blog?category=bra-reviews" className="btn btn-outline btn-sm">
                Read Reviews
              </Link>
            </div>

            <div className="category-card">
              <div className="category-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="category-title">All Body Types</h3>
              <p className="category-description">
                Inclusive advice for every woman, regardless of size, shape, or specific needs. 
                From AA to K+ cups, we celebrate and support every body type with expert guidance.
              </p>
              <Link href="/blog" className="btn btn-outline btn-sm">
                Find Your Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="section section-accent">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Popular Tools & Resources</h2>
            <p className="section-subtitle">
              Everything you need to find your perfect bra, from our professional-grade calculator 
              to comprehensive fitting guides and expert recommendations.
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="card card-featured">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/bra-1.jpg"
                  alt="Professional bra size calculator tool"
                  width={400}
                  height={240}
                  className="card-image"
                />
                <div className="absolute top-4 left-4">
                  <span className="post-category">Most Popular</span>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">Free Bra Size Calculator</h3>
                <p className="card-text">
                  Our professional-grade calculator uses the same techniques as boutique fitters. 
                  Get your accurate size in under 2 minutes with step-by-step guidance.
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>2 min</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-sm text-gray-600">(2,847 reviews)</span>
                  </div>
                </div>
                <Link href="/calculator" className="btn btn-primary btn-md w-full">
                  Calculate My Size
                </Link>
              </div>
            </div>

            <div className="card">
              <Image
                src="/images/bra-2.jpg"
                alt="Ultimate bra fitting guide"
                width={400}
                height={240}
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">Ultimate Fitting Guide</h3>
                <p className="card-text">
                  Master the art of bra fitting with our comprehensive guide. Learn professional 
                  techniques and avoid the most common fitting mistakes.
                </p>
                <Link href="/blog" className="btn btn-outline btn-md w-full">
                  Read Complete Guide
                </Link>
              </div>
            </div>

            <div className="card">
              <Image
                src="/images/bra-3.jpg"
                alt="Sports bra selection guide"
                width={400}
                height={240}
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">Sports Bra Guide</h3>
                <p className="card-text">
                  Find the perfect sports bra for your workout intensity and body type. 
                  From yoga to high-impact training, we&apos;ve got you covered.
                </p>
                <Link href="/blog" className="btn btn-outline btn-md w-full">
                  Explore Options
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Latest Expert Articles</h2>
            <p className="section-subtitle">
              Stay updated with our latest guides, reviews, and expert insights. 
              New content published weekly by our team of fitting specialists.
            </p>
          </div>
          
          <div className="grid grid-3">
            {posts.map((post) => (
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
                    <span>•</span>
                    <span>By {post.author}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="btn btn-outline btn-md w-full">
                    Read Article
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/blog" className="btn btn-primary btn-lg">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Join 50,000+ Women Getting Expert Advice</h2>
            <p>
              Get weekly bra fitting tips, exclusive guides, and early access to our latest reviews. 
              Plus, receive our free &quot;Perfect Fit Checklist&quot; when you subscribe!
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-secondary btn-md">
                Get Free Guide
              </button>
            </form>
            <p className="text-sm mt-4 opacity-80">
              No spam, ever. Unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-sm bg-white">
        <div className="container">
          <div className="text-center">
            <p className="text-gray-600 mb-8">Trusted by women worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">50,000+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Expert Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

