import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
            },
        },
        variants: {
            extend: {
              fontWeight: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
              fontFamily: ['responsive', 'hover', 'focus'],
            },
          },
    },

    plugins: [forms],
};
