/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    950: '#050C1A',
                    900: '#0F172A',
                    800: '#1E293B',
                    700: '#1E3A5F',
                },
                electric: {
                    400: '#60A5FA',
                    500: '#3B82F6',
                    600: '#2563EB',
                },
                accent: {
                    cyan: '#06B6D4',
                    purple: '#8B5CF6',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'Consolas', 'monospace'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
                'type-cursor': 'blink 1s step-end infinite',
                'gradient-shift': 'gradientShift 8s ease infinite',
                'bounceX': 'bounceX 1s ease-in-out infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
                gradientShift: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                bounceX: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '50%': { transform: 'translateX(6px)' },
                },
            },
            backgroundImage: {
                'grid-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%233B82F6' stroke-opacity='0.05' stroke-width='1'/%3E%3C/svg%3E")`,
            },
        },
    },
    plugins: [],
}
