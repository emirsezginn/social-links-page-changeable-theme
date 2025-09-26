Social Links Page

This project allows you to showcase your social media links in a clean and modern single page. The color themes are fully customizable, so you can personalize the page as you like.

Features

Responsive Design: Looks great on all devices.

Easy Color Theme Customization: Change colors easily using CSS variables.

Simple Setup: Just edit the HTML and CSS files to use it.

Modern Look: Minimal and clean user interface.

Installation

Clone or download the repository:

git clone https://github.com/username/social-links-page.git


Open index.html and add your social media links.

Edit the color variables in style.css to create your own theme.

Changing Color Themes

The color theme is controlled via CSS variables. Example:

body.theme-modern-blue-gray {
  --primary: #1F3A93;
  --secondary: #00A8FF;
  --primary-rgb: var(--bg-card);
  --theme-name: "Modern Blue & Gray";
  background: linear-gradient(135deg, #0f172a, #1e293b, #2d3748);
}


--primary-color: Main color for buttons, links, and highlights.

--secondary-color: Hover effects and details.

--background: Page background color.

Change these values to create your own custom theme.

Usage

Add your social media links in the <a> tags inside index.html.

Update colors in style.css.

Open the page in a browser to see the result.

License

This project is licensed under the MIT License.
