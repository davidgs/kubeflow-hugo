# Kubeflow Hugo Theme

A modern, developer-focused Hugo theme designed for machine learning and Kubernetes projects. This theme provides a clean, responsive design with dark mode support and interactive components perfect for technical documentation and project websites.

## Features

- **Modern Design**: Clean, professional layout with gradient accents
- **Dark Mode**: Full dark/light theme support with automatic persistence
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized for fast loading and smooth animations
- **Accessibility**: Built with accessibility best practices
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Interactive Components**:
  - Hero section with call-to-action buttons
  - Feature showcase cards
  - Code examples with syntax highlighting
  - Community engagement sections
  - Documentation cards
  - Newsletter signup

## Installation

1. Add the theme to your Hugo site:
```bash
git submodule add https://github.com/davidgs/kubeflow-hugo.git themes/kubeflow
```

2. Update your `hugo.toml` configuration:
```toml
theme = 'kubeflow'
```

## Configuration

### Basic Configuration

```toml
baseURL = 'https://example.com/'
languageCode = 'en-us'
title = 'Your Site Title'
theme = 'kubeflow'

[params]
  version = "v1.8"
  github_stars = "12.3k"
  active_users = "50k+"
  description = "Your site description"
```

### Menu Configuration

```toml
[menu]
  [[menu.main]]
    name = "Features"
    url = "#features"
    weight = 10
  [[menu.main]]
    name = "Examples"
    url = "#examples"
    weight = 20
  [[menu.main]]
    name = "Community"
    url = "#community"
    weight = 30
  [[menu.main]]
    name = "Docs"
    url = "#docs"
    weight = 40
```

### Markup Configuration

```toml
[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
  [markup.highlight]
    style = "github-dark"
    lineNos = true
    codeFences = true
```

## Content Structure

The theme is designed for single-page websites with the following sections:

1. **Hero Section**: Main introduction with call-to-action buttons
2. **Features Section**: Showcase key features with icons and descriptions
3. **Code Examples**: Interactive code samples with copy functionality
4. **Visualization**: Images and metrics showcasing your project
5. **Community**: Community engagement links and newsletter signup
6. **Documentation**: Links to documentation resources

## Customization

### Colors

The theme uses Tailwind CSS with custom color extensions:
- Primary blue: `#1e90ff`
- Purple accent: `#8b5cf6`
- Cyan accent: `#06b6d4`

### Animations

Built-in animations include:
- `animate-slide-up`: Slide up fade-in effect
- `animate-fade-in`: Simple fade-in effect
- `animate-float`: Floating animation for decorative elements

### Dark Mode

Dark mode is automatically handled by the theme's JavaScript. Users can toggle between light and dark modes, and their preference is saved in localStorage.

## Development

### Prerequisites

- Hugo Extended (for SCSS processing)
- Node.js (for asset processing)

### Asset Pipeline

The theme includes:
- `assets/css/main.css`: Main stylesheet with Tailwind CSS
- `assets/js/main.js`: Theme JavaScript for interactivity

### Building

Assets are processed automatically by Hugo's asset pipeline. For development:

```bash
hugo server --themesDir=themes
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This theme is licensed under the Apache 2.0 License - see the LICENSE file for details.

## Credits

- Built with [Hugo](https://gohugo.io/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Images from [Unsplash](https://unsplash.com/)