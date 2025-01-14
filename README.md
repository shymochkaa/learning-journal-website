# My Learning Journal 📚

A responsive personal blog website documenting a learning journey through frontend development bootcamp. Built with vanilla HTML, CSS, and JavaScript.

This project was built as part of the [Frontend Developer Career Path](https://scrimba.com/learn/frontend) on Scrimba.

## 🌐 Live Demo
[View Live Demo](https://shymochkaa.github.io/learning-journal-website/index.html)

## ✨ Features

- 📱 Responsive design (mobile-first approach)
- 📰 Featured hero post with background image
- 📑 Grid-based blog post layout
- 👆 Interactive "View More/Less" functionality
- 🎨 Clean, modern design with consistent styling
- 📄 Multiple page types (home, about, blog posts)
- 🖼️ Optimized image handling
- 📱 Cross-device compatibility

## 📂 Project Structure

```
learning-journal/
├── index.html          # Home page
├── about-me.html       # About page
├── post-0.html         # Individual blog post template
├── css/
│   └── index.css       # Styles
├── scripts/
│   └── index.js        # Interactive features
└── images/
    ├── logo.png
    ├── roku-avatar.png
    └── blog-*.png      # Blog post images
```

## 🔧 Dependencies

- Google Fonts:
  - Roboto (weights: 100-900, including italics)
  - Source Sans 3 (weights: 200-900, including italics)
- No other external libraries required

## 🚀 Setup Instructions

1. Clone the repository
2. No build process required - this is a static website
3. Open `index.html` in your browser to view the site

## 🎯 Features in Detail

### 🧭 Navigation
- Consistent header across all pages
- Logo with site name
- Navigation links to Home and About pages
- Fully responsive design

### 🏠 Home Page
- Featured hero post with overlay effect
- Grid of blog posts (3 visible initially)
- "View More/Less" button to show/hide additional posts
- Click/tap on hero post to view full article

### 📝 Blog Posts
- Large feature image
- Publication date
- Title and preview text
- Full post view with additional content
- Responsive image handling with optimized loading

### 👤 About Page
- Author introduction with avatar
- Personal journey description
- Recent posts section
- Consistent styling with main site

### 📱 Responsive Design
- Mobile-first approach
- Breakpoint at 767px for tablet/desktop views
- Flexible grid system
- Optimized image display
- Responsive typography

### 🔄 Interactive Features

The site includes several JavaScript-powered features:

```javascript
// View More/Less functionality
- Toggles visibility of hidden blog posts
- Updates button text based on current state
- Shows/hides 3 posts at a time

// Hero Post Navigation
- Clickable hero container
- Redirects to full post view
```

## 🎨 CSS Structure

The stylesheet follows these key principles:
- Mobile-first media queries
- Consistent spacing using em/rem units
- Flexible grid layouts
- Optimized image handling
- Modern CSS features (flexbox, grid)
- Maintainable naming conventions

## 🌐 Browser Support

- Works on all modern browsers
- Responsive design supports mobile devices
- Progressive enhancement approach

## 🚀 Future Enhancements

Potential areas for expansion:
1. Search functionality
2. Categories/tags for posts
3. Comments section
4. Social media integration
5. Newsletter signup
6. Dark mode toggle


## 🙏 Acknowledgments

This project was created as part of Scrimba's Frontend Developer Career Path. Thanks to the Scrimba team for the great project design and learning experience!

▶️ [Check out the course on Scrimba](https://scrimba.com/learn/frontend)
