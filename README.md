# Coffee-House

A Coffee House website project using Vite and Tailwind CSS to create a beautiful and responsive interface for a coffee shop.

## Description

The website includes:

- Homepage with a header featuring logo, navigation menu, cart, and hamburger menu for mobile devices.
- Update page with fade-in effects and custom colors.
- Navigation menu that can be toggled on mobile using JavaScript.

## Technologies Used

- **Vite**: Fast build tool for frontend.
- **Tailwind CSS v4**: Utility-first CSS framework with Vite plugin.
- **Firebase Hosting**: For deploying and hosting the website.
- **JavaScript**: For menu interactions.
- **HTML/CSS**: Basic structure and styling.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository-url>
   cd coffee-style
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

To run the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).

## Building the Project

To build for production:

```bash
npm run build
```

The build files will be generated in the `dist` folder.

## Previewing the Build

After building, you can preview:

```bash
npm run preview
```

## Deploying to Firebase

1. Ensure you have Firebase CLI installed:

   ```bash
   npm install -g firebase-tools
   ```

2. Log in to Firebase:

   ```bash
   firebase login
   ```

3. Initialize or link a Firebase project:

   ```bash
   firebase use <your-project-id>
   ```

4. Deploy:
   ```bash
   firebase deploy
   ```

## Project Structure

```
coffee-style/
├── public/
│   └── cafe.png          # Website icon
├── src/
│   ├── assets/           # Static assets
│   ├── Css/
│   │   └── style.css     # Custom CSS with Tailwind
│   └── js/
│       ├── main.js       # Main JS file
│       ├── top-menu.js   # Menu toggle logic
│       └── top-menu1.js  # (Possibly additional file)
├── index.html            # Homepage
├── uppdate.html          # Update page
├── vite.config.js        # Vite configuration
├── firebase.json         # Firebase Hosting configuration
├── package.json          # Dependencies and scripts
└── README.md             # This documentation
```

## Features

- **Responsive Design**: Design that adapts to different screen sizes.
- **Mobile Menu**: Hamburger menu that can be opened/closed with smooth animations.
- **Custom Styling**: Uses custom colors like `light-coffee`.
- **Animations**: Fade-in and slide-down effects for elements.

## Further Development

- Add product pages, blog, contact.
- Integrate backend for cart and ordering.
- Add real images and content for the coffee shop.

## Author

[AwtichDev](https://github.com/awtichcoder/)

## License

This project is open source. Please comply with the terms of use of third-party libraries.
