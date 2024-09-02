# Portfolio

Hello and welcome to my portfolio website's project!  
You can explore the deployed version of the site [here](https://zairadev.vercel.app/).

## Overview

This portfolio showcases my projects and skills in Software Development. Each project features its own dedicated page, allowing you to discover detailed information about the technologies I've used, along with links to live demos and repositories.  
I love crafting creative solutions while continuously learning along the way. I hope you have fun exploring my work!

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript, React (including React Router and React Markdown)
- **Build Tool**: Vite
- **Deployment**: Vercel
- **Email Handling**: EmailJS
- **Accessibility Tools**: Lighthouse, WAVE
- **Graphics**: Figma, Canva

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/package-manager/): v21.7.2 or above

### Installing

To run the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/zairacodes/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up EmailJS (optional)**:  
   If you want to enable the contact form to receive messages directly to your preferred email address:

   - Create a free account on [EmailJS](https://www.emailjs.com/)
   - Create an `.env` file in the root of your project. Ensure this file is added to your `.gitignore` to keep your credentials safe
   - Add the following variables to your `.env` file, replacing the placeholders with your actual EmailJS service ID, template ID and public key:

   ```bash
    VITE_EMAILJS_SERVICE_ID=your_service_id_here
    VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
    VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

4. **Run the development environment**:
   ```bash
   npm run dev
   ```

Feel free to reach out if you have any questions or feedback!

---

[![Made with ♥ by Zaira](https://img.shields.io/badge/Made%20with%20%E2%9D%A4%20by-Zaira-red)](https://www.linkedin.com/in/zaira-n/)
