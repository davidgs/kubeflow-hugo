# Kubeflow Hugo Theme

A modern, responsive Hugo theme for open source projects and technical communities.

## Features

- 🎨 Modern design with Tailwind CSS
- 📱 Fully responsive layout
- 🌙 Dark mode support
- 🧩 Configurable homepage sections
- 🔗 Dynamic action cards and components
- 👥 Community and foundation integration
- ⚡ Fast performance

## Installation

1. Add as a git submodule to your Hugo site:
```bash
git submodule add https://github.com/your-org/kubeflow-theme themes/kubeflow
```

2. Update your `config.toml`:
```toml
theme = "kubeflow"
```

## Configuration

### Basic Site Setup

```toml
baseURL = "https://yoursite.com"
title = "Your Project"
description = "Your project description"

[params]
  copyright = "Your Organization"

  # Social/Community Links
  [params.links]
    [[params.links.user]]
      name = "Twitter"
      url = "https://twitter.com/yourproject"
      icon = "fab fa-twitter"
    [[params.links.developer]]
      name = "GitHub"
      url = "https://github.com/yourorg/yourproject"
      icon = "fab fa-github"
```

### Homepage Configuration

The theme supports a fully customizable homepage through configuration:

```toml
[params.homepage]
  # Hero Section
  [params.homepage.hero]
    title = "Your Project"
    subtitle = "Your amazing project tagline"

  # About/Features Section
  [params.homepage.features]
    title = "About Your Project"
    description = "Detailed description of what your project does..."
    call_to_action = "Get started with <a href='/docs/'>our documentation</a>."

  # Action Cards
  [params.homepage.action_cards]
    title = "Get Started"
    [[params.homepage.action_cards.cards]]
      title = "Quick Start"
      icon = "fas fa-rocket"
      color = "blue"
      url = "/quickstart/"
      description = "Get up and running in minutes"
    [[params.homepage.action_cards.cards]]
      title = "Documentation"
      icon = "fas fa-book"
      color = "orange"
      url = "/docs/"
      description = "Complete guides and references"
      [[params.homepage.action_cards.cards.buttons]]
        text = "User Guide"
        url = "/docs/user/"
        icon = "fas fa-user"
        color = "orange"
      [[params.homepage.action_cards.cards.buttons]]
        text = "API Reference"
        url = "/docs/api/"
        icon = "fas fa-code"
        color = "blue"

  # Components/Features Grid
  [params.homepage.components]
    title = "Key Features"
    [[params.homepage.components.items]]
      name = "Feature One"
      logo = "/images/feature1-logo.png"
      url = "/docs/feature1/"
      description = "Description of your first key feature."
    [[params.homepage.components.items]]
      name = "Feature Two"
      url = "/docs/feature2/"
      description = "Description of your second feature."

  # Community Section
  [params.homepage.community]
    title = "Join Our Community"
    description = "Connect with other users and contributors in our vibrant community!"

  # Trusted By Section (optional)
  [params.homepage.trusted_by]
    title = "Used by"
    adopters_link = "https://github.com/yourorg/yourproject/blob/main/ADOPTERS.md"
    adopters_text = "see all users"
    [[params.homepage.trusted_by.logos]]
      name = "Company A"
      light = "/images/logos/company-a-light.svg"
      dark = "/images/logos/company-a-dark.svg"

  # Foundation Section (optional)
  [params.homepage.cncf]
    title = "Part of the Example Foundation"
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
    path = "/docs/started"
    icon = "fas fa-arrow-alt-circle-right"
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

## Customization

### Styling

The theme uses Tailwind CSS. You can customize colors and styling by:

1. Overriding CSS in your site's `assets/css/` directory
2. Customizing Tailwind configuration
3. Using Hugo's template override system

### Layout Overrides

You can override any theme template by creating the same file structure in your site's `layouts/` directory.

## Available Shortcodes

The theme includes these generic, reusable shortcodes:

### Content Organization
- `alert` - Display alert boxes with different styles
- `card` - Create content cards
- `cardpane` - Container for multiple cards
- `note` - Display informational notes
- `pageinfo` - Page metadata display

### Status Indicators
- `alpha-status` - Show alpha status with project name (configurable)
- `beta-status` - Show beta status with project name (configurable)
- `stable-status` - Show stable status with project name (configurable)
- `needs-update` - Indicate outdated documentation

### Content Display
- `figure` - Enhanced image display with captions
- `iframe` - Embedded iframe content
- `imgproc` - Image processing and display
- `conditional-text` - Conditional content based on parameters

### Interactive Elements
- `tab` / `tabpane` - Tabbed content organization
- `swaggerui` / `swaggerui-inline` - API documentation display

### Blocks (Complex Components)
- `blocks/cover` - Hero/cover sections
- `blocks/feature` - Feature highlights
- `blocks/lead` - Lead paragraphs
- `blocks/section` - Generic content sections

## Removed from Original Theme

To make this theme truly reusable, the following Kubeflow-specific shortcodes were removed:

- **Version-specific shortcodes**: `kf-*`, `kfp-*` files
- **Deployment configurations**: `config-uri-*`, `config-file-*` files
- **Provider-specific directories**: `aws/`, `azure/`, `gke/`, etc.
- **Component-specific shortcodes**: `pipelines/`, `model-registry/`, etc.
- **Project-specific content**: `pipelines-compatibility.html`, `tf-serving-version.html`

If you need similar functionality, create project-specific shortcodes in your site's `layouts/shortcodes/` directory.

## Status Shortcode Configuration

The status shortcodes (`alpha-status`, `beta-status`, `stable-status`) are now configurable:

```toml
[params]
  # URL to your project's support/versioning policy page
  support_policy_url = "/docs/support/"
```

Usage:
```markdown
{{< alpha-status >}}
{{< beta-status feedbacklink="https://github.com/yourorg/feedback" >}}
{{< stable-status >}}
```

## Development

1. Clone the theme repository
2. Make your changes
3. Test with a Hugo site
4. Submit a pull request

## License

[License information]

## Support

- 📖 [Documentation](link-to-docs)
- 💬 [Community Forum](link-to-forum)
- 🐛 [Issue Tracker](link-to-issues)