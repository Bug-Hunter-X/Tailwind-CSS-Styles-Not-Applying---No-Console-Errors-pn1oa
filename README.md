# Tailwind CSS Styles Not Applying - No Console Errors

This repository demonstrates a bug where Tailwind CSS styles fail to apply despite seemingly correct configuration and a successful build process.  The issue is peculiar because there are no errors reported in the browser's developer console.

The problem stems from an unusual interaction between Tailwind's build process and the project's setup, highlighting the importance of carefully checking for unexpected interactions between build tools and dependencies.

## Bug Reproduction

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm run build` to build the project.
4. Observe that the styles are not applied in the browser, although the build process completes without errors. 

## Solution

The solution involves ensuring the correct order of operations in your build process and potentially examining your webpack config to ensure that the appropriate plugins are correctly used. 

The `bugSolution.js` file illustrates a solution.  The key is to identify and resolve the conflict between the Tailwind postcss plugin, purgecss, and the build process.