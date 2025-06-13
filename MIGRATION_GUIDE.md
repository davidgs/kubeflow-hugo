# Kubeflow Website Migration Guide: Docsy to kubeflow-hugo Theme

This document provides complete instructions for migrating the Kubeflow website from the Docsy theme to the new kubeflow-hugo theme.

## Overview

The kubeflow-hugo theme provides a modern, developer-focused redesign of the Kubeflow website with:

- **Modern Design**: Clean, responsive interface with dark/light mode support
- **Enhanced Performance**: Optimized CSS/JS loading and improved Core Web Vitals
- **Better Mobile Experience**: Mobile-first responsive design
- **Improved Documentation**: Enhanced navigation and reading experience
- **Rich Event Layouts**: Dedicated templates for upcoming and past events
- **Developer-Friendly**: Modern web technologies and maintainable code structure

## Migration Process

### Step 1: Theme Installation

```bash
# Navigate to your Kubeflow website repository
cd /path/to/kubeflow/website

# Option A: Add as Git submodule (recommended)
git submodule add https://github.com/kubeflow/kubeflow-hugo-theme.git themes/kubeflow

# Option B: Copy theme files directly
cp -r /path/to/kubeflow-hugo/themes/kubeflow themes/
```

### Step 2: Configuration Migration

Replace your existing `config.toml` with the following configuration:

```toml
baseURL = "/"
title = "Kubeflow"
description = "Kubeflow makes deployment of ML Workflows on Kubernetes straightforward and automated"

enableRobotsTXT = true
theme = "kubeflow"

# Language and Content Settings
enableGitInfo = true
contentDir = "content/en"
defaultContentLanguage = "en"
defaultContentLanguageInSubdir = false
enableMissingTranslationPlaceholders = true
disableKinds = ["taxonomy"]
ignoreFiles = []

# Navigation Menu
[menu]
  [[menu.main]]
    name = "Kubeflow Virtual Symposium"
    weight = -1000
    pre = "<i class='fas fa-calendar pr-2' style='color: #FFC107'></i>"
    post = "<br><span class='badge badge-warning'>July 9th, 2025</span>"
    url = "https://community.cncf.io/events/details/cncf-kubeflow-community-presents-kubeflow-community-call-20241203/"
  [[menu.main]]
    name = "Docs"
    weight = -102
    pre = "<i class='fas fa-book pr-2'></i>"
    url = "/docs/"
  [[menu.main]]
    name = "Events"
    weight = -101
    pre = "<i class='fas fa-calendar pr-2'></i>"
    url = "/events/"
  [[menu.main]]
    name = "Blog"
    weight = -100
    pre = "<i class='fas fa-rss pr-2'></i>"
    url = "https://blog.kubeflow.org/"
  [[menu.main]]
    name = "GitHub"
    weight = -99
    pre = "<i class='fab fa-github pr-2'></i>"
    url = "https://github.com/kubeflow/"

# Markup Configuration
[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
    [markup.goldmark.extensions]
      [markup.goldmark.extensions.passthrough]
        enable = true
        [markup.goldmark.extensions.passthrough.delimiters]
          block = [['\[', '\]'], ['$$', '$$']]
          inline = [['\(', '\)']]
  [markup.highlight]
    noClasses = false
    guessSyntax = "true"
    style = "github-dark"
    lineNos = true
    codeFences = true

# Services
[services]
  [services.googleAnalytics]
    id = "G-Y2KDEK0998"

# Language Configuration
[languages]
  [languages.en]
    title = "Kubeflow"
    languageName = "English"
    weight = 1
    [languages.en.params]
      description = "Kubeflow makes deployment of ML Workflows on Kubernetes straightforward and automated"

# Site Parameters
[params]
  github_repo = "https://github.com/kubeflow/website"
  github_project_repo = "https://github.com/kubeflow/kubeflow"
  
  # Theme-specific parameters
  version = "v1.10"
  github_stars = "15.2k"
  active_users = "100k+"
  
  RSSLink = "/index.xml"
  author = "kubeflow.org"
  github = "kubeflow"
  copyright = "The Kubeflow Authors."
  privacy_policy = "https://policies.google.com/privacy"
  trademark = "https://www.linuxfoundation.org/trademark-usage/"
  
  # Version management
  version_menu = "Version"
  archived_version = false
  url_latest_version = "https://www.kubeflow.org/docs/"
  github_branch = "master"
  
  # Social media
  [params.social]
    twitter = "kubeflow"
    
  # Version dropdown entries
  [[params.versions]]
    version = "master"
    githubbranch = "master"
    url = "https://master.kubeflow.org"
  [[params.versions]]
    version = "v1.9"
    githubbranch = "v1.9-branch"
    url = "https://v1-9.kubeflow.org"
  [[params.versions]]
    version = "v1.8"
    githubbranch = "v1.8-branch"
    url = "https://v1-8.kubeflow.org"
  [[params.versions]]
    version = "v1.7"
    githubbranch = "v1.7-branch"
    url = "https://v1-7.kubeflow.org"
  [[params.versions]]
    version = "v1.6"
    githubbranch = "v1.6-branch"
    url = "https://v1-6.kubeflow.org"
  [[params.versions]]
    version = "v1.5"
    githubbranch = "v1.5-branch"
    url = "https://v1-5.kubeflow.org"
  [[params.versions]]
    version = "v1.4"
    githubbranch = "v1.4-branch"
    url = "https://v1-4.kubeflow.org"
  [[params.versions]]
    version = "v1.3"
    githubbranch = "v1.3-branch"
    url = "https://v1-3.kubeflow.org"
  [[params.versions]]
    version = "v1.2"
    githubbranch = "v1.2-branch"
    url = "https://v1-2.kubeflow.org"
  [[params.versions]]
    version = "v1.1"
    githubbranch = "v1.1-branch"
    url = "https://v1-1.kubeflow.org"
  [[params.versions]]
    version = "v1.0"
    githubbranch = "v1.0-branch"
    url = "https://v1-0.kubeflow.org"
  [[params.versions]]
    version = "v0.7"
    githubbranch = "v0.7-branch"
    url = "https://v0-7.kubeflow.org"
    
  # UI Configuration
  [params.ui]
    navbar_logo = true
    sidebar_menu_compact = true
    sidebar_search_disable = false
    breadcrumb_disable = false
    sidebar_menu_foldable = true
    footer_about_disable = true
    [params.ui.feedback]
      enable = true
      yes = ""
      no = ""
      
  # Footer Social Links
  [params.links]
    [[params.links.user]]
      name = "X"
      url = "https://x.com/kubeflow/"
      icon = "fa-brands fa-x-twitter"
      desc = "Follow us on X"
    [[params.links.user]]
      name = "LinkedIn"
      url = "https://www.linkedin.com/company/kubeflow/"
      icon = "fab fa-linkedin"
      desc = "Connect with us on LinkedIn"
    [[params.links.user]]
      name = "YouTube"
      url = "https://www.youtube.com/c/Kubeflow"
      icon = "fab fa-youtube"
      desc = "Subscribe to our YouTube channel"
    [[params.links.user]]
      name = "Slack"
      url = "https://join.slack.com/t/kubeflow/shared_invite/zt-n73pfj05-l206djXlXk5qdQKs4o1Zkg"
      icon = "fab fa-slack"
      desc = "Join our Slack workspace"
    [[params.links.developer]]
      name = "GitHub"
      url = "https://github.com/kubeflow/kubeflow"
      icon = "fab fa-github"
      desc = "Development happens here!"
    [[params.links.developer]]
      name = "Community"
      url = "https://github.com/kubeflow/community"
      icon = "fas fa-users"
      desc = "Join our community"
```

### Step 3: Content Structure Updates

#### Update Homepage Content

Replace `content/en/_index.html` with `content/en/_index.md`:

```markdown
---
title: "Kubeflow"
description: "Kubeflow makes deployment of ML Workflows on Kubernetes straightforward and automated"
type: "homepage"
---

Welcome to Kubeflow - the machine learning toolkit for Kubernetes.
```

#### Content Compatibility

**No changes required for:**
- `content/en/docs/` - All documentation will work with new layouts
- `content/en/events/` - Events will use enhanced event-specific layouts
- Static files and images remain in same locations
- All existing markdown files and front matter

### Step 4: Feature Comparison

| Feature | Docsy Theme | kubeflow-hugo Theme | Migration Status |
|---------|-------------|-------------------|-----------------|
| **Documentation** | ✅ Sidebar navigation | ✅ Enhanced sidebar + breadcrumbs | ✅ Improved |
| **Events** | ✅ Basic layouts | ✅ Rich event displays with cards | ✅ Enhanced |
| **Homepage** | ✅ Block-based sections | ✅ Modern landing page design | ✅ Redesigned |
| **Search** | ✅ Algolia/Lunr integration | ⚠️ Needs integration | 🔄 Requires setup |
| **Dark Mode** | ❌ Limited support | ✅ Full dark/light toggle | ✅ New feature |
| **Mobile Experience** | ✅ Responsive | ✅ Mobile-first design | ✅ Enhanced |
| **Performance** | ⚠️ Heavy assets | ✅ Optimized loading | ✅ Improved |
| **Navigation** | ✅ Standard menus | ✅ Enhanced with icons | ✅ Enhanced |
| **Code Highlighting** | ✅ Basic syntax | ✅ Advanced highlighting | ✅ Enhanced |

### Step 5: Migration Checklist

#### Pre-Migration Tasks
- [ ] **Backup**: Create full backup of current website
- [ ] **Staging**: Set up staging environment for testing
- [ ] **Review**: Audit all navigation links and menu items
- [ ] **Content**: Verify all content types are compatible
- [ ] **Dependencies**: Check for custom shortcodes or plugins

#### Migration Tasks
- [ ] **Theme**: Install kubeflow-hugo theme
- [ ] **Config**: Update `config.toml` with new settings
- [ ] **Homepage**: Replace `_index.html` with `_index.md`
- [ ] **Navigation**: Test all menu items and links
- [ ] **Documentation**: Verify docs navigation works correctly
- [ ] **Events**: Check event pages display properly
- [ ] **Responsive**: Test mobile and tablet layouts
- [ ] **Themes**: Verify dark/light mode toggle functionality

#### Post-Migration Tasks
- [ ] **Search**: Integrate search functionality (if needed)
- [ ] **Analytics**: Verify Google Analytics tracking
- [ ] **Performance**: Monitor Core Web Vitals
- [ ] **SEO**: Check meta tags and structured data
- [ ] **Deployment**: Update CI/CD pipeline if necessary
- [ ] **Feedback**: Gather community feedback
- [ ] **Documentation**: Update contributor guides

### Step 6: Search Integration (Optional)

If your current site uses search functionality, integrate it with the new theme:

```html
<!-- Add to themes/kubeflow/layouts/partials/search.html -->
<div id="search-container" class="relative">
  <input type="search" 
         id="search-input" 
         placeholder="Search documentation..."
         class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                focus:ring-2 focus:ring-blue-500 focus:border-transparent">
  <div id="search-results" class="hidden absolute top-full left-0 right-0 mt-2 
                                  bg-white dark:bg-gray-800 border border-gray-200 
                                  dark:border-gray-700 rounded-lg shadow-lg z-50">
    <!-- Search results will be populated here -->
  </div>
</div>

<script>
// Integrate with your existing search solution (Algolia, Lunr, etc.)
</script>
```

### Step 7: Custom Styling (If Needed)

Add Kubeflow-specific customizations:

```css
/* themes/kubeflow/assets/css/custom.css */

/* Custom Kubeflow brand colors */
:root {
  --kubeflow-blue: #326ce5;
  --kubeflow-dark-blue: #1a4b8c;
  --kubeflow-light-blue: #e3f2fd;
}

/* Custom component styles */
.kubeflow-hero {
  background: linear-gradient(135deg, var(--kubeflow-blue), var(--kubeflow-dark-blue));
}

.kubeflow-card {
  border-left: 4px solid var(--kubeflow-blue);
}

/* Override default theme colors if needed */
.btn-primary {
  background-color: var(--kubeflow-blue);
  border-color: var(--kubeflow-blue);
}
```

### Step 8: Deployment Pipeline Updates

Update your CI/CD configuration:

#### GitHub Actions Example
```yaml
# .github/workflows/deploy.yml
name: Deploy Website

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
      with:
        submodules: recursive
        fetch-depth: 0

    - name: Setup Hugo
      uses: peaceiris/actions-hugo@v2
      with:
        hugo-version: '0.126.1'
        extended: true

    - name: Build
      run: hugo --minify --theme kubeflow

    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./public
```

#### Netlify Configuration
```toml
# netlify.toml
[build]
  command = "hugo --theme kubeflow"
  publish = "public"

[build.environment]
  HUGO_VERSION = "0.126.1"
  HUGO_THEME = "kubeflow"
```

### Step 9: Rollback Strategy

Prepare a rollback plan in case issues arise:

```bash
# Create backup branch before migration
git checkout -b backup-docsy-theme
git add -A
git commit -m "Backup before kubeflow-hugo migration"

# Switch back to main for migration
git checkout main

# If rollback is needed:
git checkout backup-docsy-theme
git checkout -b rollback-to-docsy
# Make necessary adjustments
git push origin rollback-to-docsy
```

### Step 10: Testing and Validation

#### Functional Testing
- [ ] All pages load without errors
- [ ] Navigation menus work correctly
- [ ] Search functionality (if applicable)
- [ ] Contact forms and interactive elements
- [ ] External links and integrations

#### Visual Testing
- [ ] Homepage displays correctly
- [ ] Documentation layout is readable
- [ ] Event pages show proper formatting
- [ ] Dark/light mode toggle works
- [ ] Mobile responsiveness across devices

#### Performance Testing
- [ ] Page load times improved
- [ ] Core Web Vitals scores
- [ ] Image optimization working
- [ ] CSS/JS minification effective

### Step 11: Post-Migration Benefits

After successful migration, you'll gain:

#### Performance Improvements
- **Faster Loading**: Optimized CSS and JavaScript loading
- **Better Core Web Vitals**: Improved LCP, FID, and CLS scores
- **Efficient Caching**: Better browser caching strategies

#### User Experience Enhancements
- **Modern Design**: Clean, professional appearance
- **Dark Mode**: Full dark/light theme support
- **Mobile-First**: Enhanced mobile navigation and layouts
- **Accessibility**: Better screen reader support and keyboard navigation

#### Developer Experience
- **Maintainable Code**: Clean, organized theme structure
- **Modern Technologies**: Latest Hugo features and best practices
- **Documentation**: Comprehensive theme documentation
- **Customization**: Easy to extend and modify

#### Content Management
- **Enhanced Layouts**: Better documentation and event presentations
- **Flexible Structure**: Easy to add new content types
- **SEO Optimized**: Better search engine visibility

## Troubleshooting

### Common Issues and Solutions

#### Issue: Menu items not displaying
**Solution**: Check menu configuration in `config.toml` and ensure proper weight values.

#### Issue: Images not loading
**Solution**: Verify image paths and ensure static files are in correct directories.

#### Issue: Search not working
**Solution**: Integrate your existing search solution with the new theme's search partial.

#### Issue: Styling inconsistencies
**Solution**: Add custom CSS overrides in `themes/kubeflow/assets/css/custom.css`.

### Getting Help

- **Theme Documentation**: Refer to theme-specific documentation
- **Hugo Documentation**: [gohugo.io](https://gohugo.io/documentation/)
- **Community Support**: Kubeflow Slack #website channel
- **GitHub Issues**: Report bugs in the theme repository

## Conclusion

The migration from Docsy to kubeflow-hugo theme provides significant improvements in performance, user experience, and maintainability while preserving all existing content and functionality. The modern design better serves the Kubeflow community's needs and provides a solid foundation for future enhancements.

Following this guide ensures a smooth transition with minimal disruption to users and contributors.