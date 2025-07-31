# Non-Technical Deployment Guide

This guide will help you deploy your blog website to the internet using GitHub and Vercel, even if you have no coding experience.

## What You'll Need

- A computer with internet access
- A GitHub account (free)
- A Vercel account (free)
- Your blog content ready to upload

## Step 1: Set Up GitHub Account

### Create GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Choose a username (this will be part of your repository URL)
4. Enter your email and create a password
5. Verify your account through email

### Create Repository
1. Click the "+" icon in the top right corner
2. Select "New repository"
3. Name your repository (e.g., "my-blog-website")
4. Make sure it's set to "Public"
5. Check "Add a README file"
6. Click "Create repository"

## Step 2: Upload Your Website Files

### Upload the Blog Code
1. In your new repository, click "uploading an existing file"
2. Drag and drop all the files from your `girlsbra-blog` folder
3. **Important**: Make sure to upload ALL files and folders
4. Add a commit message like "Initial website upload"
5. Click "Commit changes"

### Verify Upload
Make sure these folders and files are visible in your repository:
- `content/` folder
- `public/` folder  
- `src/` folder
- `package.json` file
- `vercel.json` file
- `README.md` file

## Step 3: Set Up Vercel Account

### Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### Connect Your Repository
1. On the Vercel dashboard, click "New Project"
2. Find your repository in the list
3. Click "Import" next to your repository name
4. Leave all settings as default
5. Click "Deploy"

### Wait for Deployment
- Vercel will build your website (this takes 2-3 minutes)
- You'll see a success message with your website URL
- Your website is now live on the internet!

## Step 4: Get Your Website URL

### Find Your Live Website
1. After deployment, you'll see a preview of your site
2. Click "Visit" to see your live website
3. Copy the URL (it will look like: `https://your-project-name.vercel.app`)
4. Share this URL with anyone to show them your website!

### Custom Domain (Optional)
If you want a custom domain like `yourblog.com`:
1. Buy a domain from a provider like Namecheap or GoDaddy
2. In Vercel, go to your project settings
3. Click "Domains"
4. Add your custom domain
5. Follow the instructions to connect it

## Step 5: Adding Blog Posts

### Method 1: GitHub Web Interface (Easiest)
1. Go to your GitHub repository
2. Navigate to `content/blog/`
3. Click "Add file" → "Create new file"
4. Name your file: `your-post-title.md`
5. Copy the template from `BLOG_POST_TEMPLATE.md`
6. Write your blog post
7. Click "Commit new file"
8. Your website updates automatically in 2-3 minutes!

### Method 2: GitHub Desktop (For Regular Bloggers)
1. Download GitHub Desktop from [desktop.github.com](https://desktop.github.com)
2. Clone your repository to your computer
3. Edit files locally using any text editor
4. Commit and push changes through GitHub Desktop

## Step 6: Adding Images

### Upload Images to GitHub
1. Go to your repository on GitHub
2. Navigate to `public/images/`
3. Click "Add file" → "Upload files"
4. Drag and drop your images
5. Click "Commit changes"

### Use Images in Blog Posts
In your markdown files, reference images like this:
```markdown
![Description of image](/images/your-image.jpg)
```

## Automatic Updates

### How It Works
- Every time you make changes on GitHub, Vercel automatically rebuilds your website
- Changes appear on your live site within 2-3 minutes
- No technical knowledge required!

### What Triggers Updates
- Adding new blog posts
- Editing existing posts
- Uploading new images
- Any file changes in your repository

## Troubleshooting

### Website Not Updating
1. Check the Vercel dashboard for build errors
2. Make sure your markdown files have proper front matter
3. Verify image paths are correct
4. Wait 5 minutes for changes to appear

### Images Not Showing
1. Ensure images are in the `public/images/` folder
2. Check that image paths start with `/images/`
3. Verify image files are properly uploaded to GitHub

### Build Errors
1. Check that all markdown files end with `.md`
2. Verify front matter is properly formatted with `---` at top and bottom
3. Make sure dates are in YYYY-MM-DD format

## Managing Your Blog

### Regular Maintenance
- Add new blog posts regularly (weekly or monthly)
- Update existing posts with new information
- Check for broken links periodically
- Monitor your website analytics

### Content Strategy
- Plan your blog posts in advance
- Use relevant keywords in titles and content
- Include high-quality images
- Write for your target audience

### SEO Tips
- Use descriptive titles with keywords
- Write compelling excerpts under 160 characters
- Add alt text to all images
- Link between related posts

## Getting Help

### Resources
- GitHub Help: [help.github.com](https://help.github.com)
- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Markdown Guide: [markdownguide.org](https://markdownguide.org)

### Common Questions

**Q: How much does this cost?**
A: GitHub and Vercel are free for personal use. You only pay if you want a custom domain.

**Q: Can I edit my website on my phone?**
A: Yes! You can edit files directly on GitHub using your phone's web browser.

**Q: What if I make a mistake?**
A: GitHub keeps a history of all changes. You can always revert to a previous version.

**Q: How do I backup my website?**
A: Your website is automatically backed up on GitHub. You can also download a copy anytime.

## Success Checklist

After following this guide, you should have:
- [ ] A live website accessible via URL
- [ ] Ability to add new blog posts through GitHub
- [ ] Automatic deployments working
- [ ] Images displaying correctly
- [ ] Understanding of how to update content

Congratulations! You now have a professional blog website that updates automatically when you add new content. No coding required! 🎉

## Next Steps

1. **Add your first blog post** using the template
2. **Share your website URL** with friends and family
3. **Set up Google Analytics** to track visitors
4. **Plan your content calendar** for regular posting
5. **Consider a custom domain** for a more professional look

Happy blogging! Your website is ready to grow your audience and share your expertise with the world.

