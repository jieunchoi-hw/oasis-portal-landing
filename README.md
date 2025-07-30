# OASIS Portal Landing Page

![OASIS Portal Landing Page](https://github.com/cruip/tailwind-landing-page-template/assets/2683512/f9a98fab-a1bc-4fb5-8572-4de0b6bd932a)

**OASIS Portal Landing Page** is a custom landing page built with **Next.js** and **TailwindCSS**. This project has been customized and modified from the original template to create a unique landing page experience.

## Features

- **Modern Design**: Clean and professional landing page design
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js for optimal performance
- **Custom Components**: Tailored components for specific business needs
- **Authentication**: Built-in authentication pages (signin, signup, reset-password)
- **SEO Optimized**: Next.js App Router with built-in SEO features

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Deployment**: Vercel (recommended)

## Installation

1. **Clone the repository**

   ```bash
   git clone [your-repository-url]
   cd oasis-portal-landing
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```
oasis-portal-landing/
├── app/
│   ├── (auth)/           # Authentication pages
│   ├── (default)/        # Main layout pages
│   ├── api/              # API routes
│   └── css/              # Custom styles
├── components/           # Reusable components
│   └── ui/              # UI components
├── public/              # Static assets
└── package.json
```

## Customization

### Adding New Pages

- Create new pages in the `app/` directory
- Use the existing layout structure for consistency

### Styling

- Custom styles are in `app/css/`
- TailwindCSS classes are used throughout the project
- Theme customization in `app/css/additional-styles/theme.css`

### Components

- Reusable components in `components/`
- UI components in `components/ui/`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

- **Netlify**: Configure build settings for Next.js
- **Railway**: Connect your GitHub repository
- **Self-hosted**: Build and serve the static files

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

## License

This project is custom-built and proprietary. All rights reserved.

## Contributing

This is a private project. For internal development and collaboration only.

## Support

For questions or issues related to this custom implementation, please contact the development team.

---

**Built with ❤️ using Next.js and TailwindCSS**
