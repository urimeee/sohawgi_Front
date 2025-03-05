/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Vite 사용 시 필요
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        Grey_01: '#F1F4F5',
        Grey_02: '#E4E5E8',
        Grey_03: '#DADDE0',
        Grey_04: '#9EA4B6',
        Grey_05: '#74767C',
        Grey_06: '#343845',
        White: '#FFFFFF',
      },
      fontFamily: {
        pretendard: ['Pretendard'],
      },
      fontSize: {
        body_01: ['19px', '150%'],
        body_02: ['17px', '150%'],
        body_03: ['15px', '150%'],
        body_04: ['13px', '1rem'],
        body_05: ['13px', '150%'],
      },
      fontWeight: {
        semiBold: '600',
        medium: '500',
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/**/*.{js,ts,jsx,tsx}',
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         Grey_01: '#F1F4F5',
//         Grey_02: '#E4E5E8',
//         Grey_03: '#DADDE0',
//         Grey_04: '#9EA4B6',
//         Grey_05: '#74767C',
//         Grey_06: '#343845',
//         White: '#FFFFFF',
//       },
//       fontFamily: {
//         pretendard: ['Pretendard', 'sans-serif'],
//       },
//       fontSize: {
//         body_01: ['19px', '150%'],
//         body_02: ['17px', '150%'],
//         body_03: ['15px', '150%'],
//         body_04: ['13px', '1rem'],
//         body_05: ['13px', '150%'],
//       },
//       fontWeight: {
//         semiBold: '600',
//         medium: '500',
//       },
//     },
//   },
//   plugins: [],
// };
