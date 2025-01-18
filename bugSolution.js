The issue was resolved by explicitly specifying the correct path to my `tailwind.config.js` file within the `postcss.config.js` configuration file.  Previously, it was implicitly assumed, leading to an incorrect path resolution. The solution involves ensuring the Tailwind plugin in `postcss.config.js` is configured correctly with the explicit path to your `tailwind.config.js` file.

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: { config: './tailwind.config.js' }, // Explicit path to config file
    autoprefixer: {},
  },
};
```
By explicitly setting the path, Tailwind correctly loaded its configuration and generated the necessary CSS.  Additionally, review your webpack config (if applicable) to ensure it doesn't interfere with the Tailwind plugin's operation.