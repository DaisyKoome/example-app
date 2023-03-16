/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
"./resources/**/*.blade.php",
"./resources/**/*.js",
'./pages/**/*.{js,ts,jsx,tsx}',
'./components/**/*.{js,ts,jsx,tsx}',
'./app/**/*.{js,ts,jsx,tsx}',

    ],

    theme: {
    extend: {},
    },
    plugins: [],
}