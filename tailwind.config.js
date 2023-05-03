/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{vue,js}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            colors: {
                'base-color': '#1B1E26',
                'base-color-comp': '#14161C',
                'main-content': '#E4E6EB',
                'default-dark': '#181818',
                'accent-color-dark': '#273C75',
                'accent-color-light': '#3856A8',
            }
        }
    },
    plugins: [],
}
