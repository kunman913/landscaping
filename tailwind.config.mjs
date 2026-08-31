/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // ブリーフ 1章のブランドカラー
        base: '#FBFAF6',        // 生成りの白
        'green-deep': '#2E4A34', // 深い常緑樹の緑（見出し・フッター）
        'green-light': '#7A9367', // 明るい葉の緑（区切り・アイコン）
        accent: '#C1732B',       // 土・幹の色（CTAのみ）
        ink: '#2A2A26',          // 本文
      },
      fontFamily: {
        heading: ['"Shippori Mincho"', 'serif'],
        body: ['"Noto Sans JP"', 'sans-serif'],
      },
      lineHeight: {
        relaxed: '1.8',
      },
    },
  },
  plugins: [],
};
