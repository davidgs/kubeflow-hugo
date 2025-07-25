# Kubeflow Hugo Theme

A modern, responsive Hugo theme designed for technical documentation and project websites. Originally created for Kubeflow but designed to be reusable for any technical project.

## Features

- **📱 Responsive Design**: Mobile-first design that works on all devices
- **🌙 Dark Mode Support**: Automatic dark/light mode with system preference detection
- **📖 Beautiful Typography**: Built-in prose styling with Tailwind Typography
- **🧩 Component System**: Rich set of shortcodes and reusable components
- **🔧 Highly Configurable**: Homepage, documentation sections, and components all configurable via Hugo config
- **⚡ Performance Optimized**: Fast loading with minimal JavaScript
- **♿ Accessible**: WCAG compliant with proper semantic HTML
- **🎨 Modern UI**: Clean, professional design with Tailwind CSS

## Quick Start

1. **Add the theme to your Hugo site:**
   ```bash
   git submodule add https://github.com/davidgs/kubeflow-hugo themes/kubeflow
   ```

2. **Update your `hugo.toml`:**
   ```toml
   theme = "kubeflow"
   ```

3. **Copy the example configuration** from `exampleSite/hugo.toml` and customize it for your project.

4. **Start your development server:**
   ```bash
   hugo server
   ```

## Configuration

### Basic Site Configuration

```toml
baseURL = "/"
title = "Your Project Name"
description = "Your project description"
theme = "kubeflow"

[params]
  github_repo = "https://github.com/yourorg/yourproject-website"
  github_project_repo = "https://github.com/yourorg/yourproject"
  version = "v1.0"
  copyright = "Your Organization."
  support_policy_url = "/docs/support/"
```

### Homepage Content

The homepage content is completely configurable through your site's `hugo.toml`:

```toml
[params.homepage]
  [params.homepage.hero]
    title = "Your Project Name"
    subtitle = "Your project tagline"

  [params.homepage.features]
    title = "About Your Project"
    description = "Description of your project..."
    call_to_action = "Call to action text with links..."

  [params.homepage.action_cards]
    title = "Get Started"
    [[params.homepage.action_cards.cards]]
      title = "Card Title"
      icon = "fas fa-icon-name"
      color = "blue"
      url = "/path/"
      description = "Card description"

  [params.homepage.components]
    title = "Key Components"
    [[params.homepage.components.items]]
      name = "Component Name"
      logo = "/images/logo.png"
      url = "/docs/component/"
      description = "Component description"

  [params.homepage.community]
    title = "Join our Community"
    description = "Community description with links"

  [params.homepage.trusted_by]
    title = "Trusted by"
    adopters_link = "https://github.com/yourorg/yourproject/blob/main/ADOPTERS.md"
    adopters_text = "see more adopters"
    [[params.homepage.trusted_by.logos]]
      name = "Company Name"
      light = "/images/logos/company-light.svg"
      dark = "/images/logos/company-dark.svg"

  [params.homepage.cncf]
    title = "Part of a foundation project."
    logo_light = "/images/foundation-logo.svg"
    logo_dark = "/images/foundation-logo-dark.svg"
```

### Documentation Sections

The main documentation page (`/docs/`) can be customized with configurable sections:

```toml
[params.docs]
  title = "Documentation"
  description = "Your documentation description"

  [[params.docs.sections]]
    title = "Getting Started"
    path = "/docs/getting-started"
    icon = "fas fa-rocket"
    color = "green"
    description = "Learn the basics and get your first workflow running"
    button_text = "Start learning"

  [[params.docs.sections]]
    title = "Components"
    path = "/docs/components"
    icon = "fas fa-cubes"
    color = "blue"
    description = "Explore the core components"
    button_text = "Explore components"

  # Add more sections as needed...
```

**Fallback Behavior**: If no `[params.docs.sections]` are configured, the theme will automatically discover documentation sections from your content structure.

**Available Colors**: `blue`, `green`, `purple`, `orange`, `cyan`, `gray`, `red`, `yellow`, etc.

**Icon Support**: Uses Font Awesome classes (e.g., `fas fa-book`, `fas fa-cog`, `fas fa-rocket`).

### Component Versions

Configure component versions for use in shortcodes:

```toml
[params.component_versions]
  model_registry = "0.2.21"
  pipelines = "2.4.0"
  deploykf = "0.1.5"
  # Add other component versions as needed
```

## Available Shortcodes

The theme includes a comprehensive set of shortcodes for rich content:

### Content Shortcodes
- `alert` - Styled alert boxes with different colors
- `note` - Information notes
- `card` / `cardpane` - Card layouts
- `tab` / `tabpane` - Tabbed content
- `pageinfo` - Page information boxes

### Code and Media
- `figure` - Enhanced image figures
- `iframe` - Responsive iframes
- `readfile` - Include external file content
- `swaggerui` / `swaggerui-inline` - API documentation display

### Version Management
- `alpha-status`, `beta-status`, `stable-status` - Component status indicators
- Various `*/latest-version` shortcodes for different components
- `kf-version-notice` - Version-specific notices
- `pipelines-compatibility` - Version compatibility information

### Layout Blocks
- `blocks/cover` - Hero/cover sections
- `blocks/lead` - Lead paragraphs
- `blocks/feature` - Feature highlights
- `blocks/section` - Content sections

## Status Shortcode Configuration

The status shortcodes (`alpha-status`, `beta-status`, `stable-status`) are configurable:

```toml
[params]
  # URL to your project's support/versioning policy page
  support_policy_url = "/docs/support/"
```

## Content Structure

### Homepage

Create `content/en/_index.md`:
```markdown
---
title: "Home"
layout: "home"
---

This content is optional - the homepage layout is controlled by the theme configuration.
```

### Documentation

The theme supports hierarchical documentation:

```
content/en/docs/
├── _index.md                 # Main docs page
├── getting-started/
│   ├── _index.md            # Section overview
│   ├── introduction.md      # Individual pages
│   └── installation.md
└── components/
    ├── _index.md
    ├── component1/
    │   └── overview.md
    └── component2/
        └── setup.md
```

## Customization

### Colors and Styling

The theme uses Tailwind CSS with custom color configuration. You can override colors by modifying the Tailwind config in `layouts/_default/baseof.html`.

### Custom CSS

Add custom styles in the `<style>` section of `layouts/_default/baseof.html` or create custom CSS files in `assets/css/`.

### Layout Overrides

Override any theme layout by creating the same file structure in your site's `layouts/` directory.

## Development

### Building the Theme

1. Clone the repository
2. Navigate to the theme directory
3. Create an example site for testing:
   ```bash
   hugo server --source exampleSite --themesDir ../..
   ```

### Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with the example site
5. Submit a pull request

## Theme/Content Separation

This theme is designed to keep all site-specific content in configuration files rather than hard-coded in templates. This ensures:

- The theme can be reused by different projects
- Content updates don't require theme changes
- Theme updates can be applied without losing customizations

## Removed from Original Theme

To make this theme truly reusable, the following Kubeflow-specific shortcodes were removed:
- **Version-specific shortcodes**: `kf-*`, `kfp-*` files
- **Deployment configurations**: `config-uri-*`, `config-file-*` files
- **Provider-specific directories**: `aws/`, `azure/`, `gke/`, etc.
- **Component-specific shortcodes**: `pipelines/`, `model-registry/`, etc.
- **Project-specific content**: `pipelines-compatibility.html`, `tf-serving-version.html`

If you need similar functionality, create project-specific shortcodes in your site's `layouts/shortcodes/` directory.

## License

This theme is licensed under the MIT License. See [LICENSE](LICENSE.md) for details.

## Support

- 📚 Documentation: See the `exampleSite/` directory for usage examples
- 🐛 Issues: Report bugs and feature requests via GitHub Issues
- 💬 Community: Join our community discussions

## Acknowledgments

Originally developed for the Kubeflow project, this theme has been generalized for use by any technical documentation site.
