import { useState } from "react";

// —————————————————————————————————————————————————————————————————————————————
// SVG Logo Icons
// —————————————————————————————————————————————————————————————————————————————

const LOGOS = {
  // --- FRONTEND ---
  react: () => (
    <svg viewBox="-11.5 -10.23 23 20.46" className="w-10 h-10">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  nextjs: () => (
    <svg viewBox="0 0 180 180" className="w-10 h-10" fill="none">
      <mask id="nextjs-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <circle cx="90" cy="90" r="90" fill="#FFF"/>
      </mask>
      <g mask="url(#nextjs-mask)">
        <circle cx="90" cy="90" r="90" fill="#000" stroke="#FFF" strokeWidth="6"/>
        <path d="M149.508 157.52L69.142 54H54v72h10.33V67.67L135.035 162.34c4.896-4.57 9.387-9.51 14.473-14.82z" fill="#FFF"/>
        <rect x="115" y="54" width="11" height="72" fill="#FFF"/>
      </g>
    </svg>
  ),
  vuejs: () => (
    <svg viewBox="0 0 256 221" className="w-10 h-10">
      <path d="M204.8 0H256L128 220.8L0 0h97.28L128 51.2L158.72 0h46.08z" fill="#41B883"/>
      <path d="M204.8 0H256L128 220.8L0 0h97.28L128 51.2L158.72 0h46.08z" fill="#41B883"/>
      <path d="M0 0l128 220.8L256 0h-51.2L128 132.48L51.2 0H0z" fill="#35495E"/>
    </svg>
  ),
  angular: () => (
    <svg viewBox="0 0 250 250" className="w-10 h-10">
      <path d="M125 30L21.9 66.8l15.6 135.2L125 240l87.5-38 15.6-135.2L125 30z" fill="#DD0031"/>
      <path d="M125 30v210l87.5-38 15.6-135.2L125 30z" fill="#C3002F"/>
      <path d="M125 52.3L66.8 182.6h23.7l11.7-29.2h45.4l11.7 29.2h23.7L125 52.3zm22.8 81.3H102.2L125 78l22.8 55.6z" fill="#FFF"/>
    </svg>
  ),
  html5: () => (
    <svg viewBox="0 0 512 512" className="w-10 h-10">
      <path d="M108.4 0h23v22.8h21V0h23v68.3h-23V45.6h-21v22.8h-23zM206 22.8h-20.5V0h64v22.8H229v45.5h-23zm72.6 0H258V0h23v68.3h-23v-23h-23V0h23zm65 45.5V0h23v45.6H400v22.8h-56.4zM65.6 137.9l36.7 412 153.7 42.6 153.7-42.6 36.7-412H65.6z" fill="#E34F26"/>
      <path d="M256 166.3v300.2l121.7-33.8 29.8-334H256z" fill="#F06529"/>
      <path d="M256 250.7h-49.8l-3.4-38.4h53.2v-34.6H131.6l10.4 116.8H256v-43.8zm0 88.2h-.2l-32.8-8.8-2.1-23.5H186l4.2 47.1 65.6 18.2v-33z" fill="#EBEBEB"/>
      <path d="M256 250.7v-43.8h102.5l-9.7 109-92.8 25.8v-33l54.8-15.2 5.8-62.8H256z" fill="#FFF"/>
    </svg>
  ),
  css3: () => (
    <svg viewBox="0 0 512 512" className="w-10 h-10">
      <path d="M107.6 0h23v68.3h-23zm57.2 48.2c6 6 15 6 21 0s6-15 0-21l-8-8c-6-6-15-6-21 0s-6 15 0 21zm47-21c6-6 6-15 0-21s-15-6-21 0l-8 8c-6 6-6 15 0 21s15 6 21 0zm88.8 41.2V0h23v45.6H399v22.8h-56.4zM65.6 137.9l36.7 412 153.7 42.6 153.7-42.6 36.7-412H65.6z" fill="#1572B6"/>
      <path d="M256 166.3v300.2l121.7-33.8 29.8-334H256z" fill="#33A9DC"/>
      <path d="M256 250.7h-49.8l-3.4-38.4h53.2v-34.6H131.6l10.4 116.8H256v-43.8zm0 88.2h-.2l-32.8-8.8-2.1-23.5H186l4.2 47.1 65.6 18.2v-33z" fill="#EBEBEB"/>
      <path d="M256 206.9h105.8l-2.9 33.2H256v43.8h70.3l-6.6 74-63.7 17.2v33l92.8-25.8 19.3-217.4H256v42z" fill="#FFF"/>
    </svg>
  ),
  tailwindcss: () => (
    <svg viewBox="0 0 32 32" className="w-10 h-10">
      <path d="M16 6c-3.556 0-5.63 1.778-6.222 5.333C11.111 9.556 12.89 8.963 15.26 9.556c1.352.338 2.32 1.321 3.39 2.41C20.4 13.754 22.185 15.556 26 15.556c3.556 0 5.63-1.778 6.222-5.333-1.333 1.778-3.111 2.37-5.481 1.778-1.352-.338-2.32-1.32-3.39-2.408C21.6 7.8 19.815 6 16 6zm-10.667 9.556c-3.556 0-5.63 1.778-6.222 5.333 1.333-1.778 3.111-2.37 5.481-1.778 1.353.338 2.32 1.32 3.39 2.409C9.733 23.31 11.519 25.111 15.333 25.111c3.556 0 5.63-1.778 6.222-5.333-1.333 1.778-3.111 2.37-5.481 1.778-1.352-.338-2.32-1.32-3.39-2.409C11.022 17.356 9.237 15.556 5.333 15.556z" fill="#06B6D4"/>
    </svg>
  ),
  javascript: () => (
    <svg viewBox="0 0 448 512" className="w-10 h-10">
      <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 76.1-75.1 76.1-42.2 0-66.8-24.8-74.2-46.7l41-23.7c5.6 15.6 17.2 25 32.4 25 17.6 0 27.5-9.4 27.5-31V244h48.4v137.4zm181.8-63.5c-6.8 33.6-29.3 54.7-65.8 54.7-37.3 0-59.8-20.1-67.3-53l42.2-24.3c5 18.6 16.5 29.3 30.2 29.3 14 0 22.7-7.7 22.7-20.1 0-14-11.7-19.5-30.7-27.7-22.7-9.7-52.7-22.1-52.7-56.1 0-32 25-54.7 60.9-54.7 34.6 0 53.9 16.8 61.1 43.3l-40.7 24.3c-4.3-11.4-12.7-17.6-22.4-17.6-11.1 0-17.9 6.8-17.9 15.6 0 12 11.4 16.5 27.7 23.4 26.6 11.1 56.9 24.6 56.9 59.9.1.2.1.2 0 .5z" fill="#F7DF1E"/>
    </svg>
  ),
  typescript: () => (
    <svg viewBox="0 0 448 512" className="w-10 h-10">
      <path d="M0 32v448h448V32H0zm260.6 342.3c0 48.7-26.7 78.8-76.4 78.8-44.5 0-70-26-77.5-48.9l43-24.9c5.9 16.5 18.3 26.3 34.4 26.3 18.7 0 29.3-9.9 29.3-32.6V244h47.2v130.3zM362.9 313c0 14.3-12.8 22-29.3 22-14.7 0-26-7-31.1-20.1l-42.1 24.5c9.2 22 28.9 42.1 73.3 42.1 43.2 0 76.4-23.4 76.4-61.9 0-38.1-26.4-50.5-62.6-66.3-24.2-10.6-35.9-17.2-35.9-29.7 0-11 9.2-18 24.5-18 13.9 0 23.4 5.9 27.8 16.1l40.3-24.2c-10.6-21.6-28.9-39.6-68.1-39.6-40.3 0-71.1 21.6-71.1 58.6 0 35.2 24.2 48 60.1 63.4 27.8 11.7 37.7 18.7 37.7 33.2z" fill="#3178C6"/>
    </svg>
  ),

  // --- BACKEND ---
  nodejs: () => (
    <svg viewBox="0 0 256 288" className="w-10 h-10">
      <path d="M144.6 0L24.8 69.2v138.4l119.8 69.2 119.8-69.2V69.2L144.6 0zm-20 235.8l-72.2-41.7v-83.3l72.2 41.7v83.3zm0-112.5L52.4 81.6l72.2-41.7v83.3zm20 112.5V152.5l72.2 41.7v41.6zm72.2-83.3l-72.2-41.7V40l72.2 41.7v83.2z" fill="#339933"/>
    </svg>
  ),
  laravel: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#FF2D20" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6z" />
    </svg>
  ),
  python: () => (
    <svg viewBox="0 0 438.3 438.9" className="w-10 h-10">
      <path d="M211.5 0C94.3 0 108.2 50.8 108.2 104v52h104v13c0 21.5 17.5 39 39 39h13c21.5 0 39-17.5 39-39V65C303.2 29.1 270.6 0 211.5 0zM172.5 32.5c10.8 0 19.5 8.7 19.5 19.5s-8.7 19.5-19.5 19.5-19.5-8.7-19.5-19.5 8.7-19.5 19.5-19.5z" fill="#3776AB"/>
      <path d="M226.8 438.9c117.2 0 103.3-50.8 103.3-104v-52H226.1v-13c0-21.5-17.5-39-39-39h-13c-21.5 0-39 17.5-39 39v104c0 35.9 32.6 65 91.7 65zm39-32.5c-10.8 0-19.5-8.7-19.5-19.5s8.7-19.5 19.5-19.5c10.8 0 19.5 8.7 19.5 19.5s-8.7 19.5-19.5 19.5z" fill="#FFE873"/>
    </svg>
  ),
  django: () => (
    <svg viewBox="0 0 171 180" className="w-10 h-10">
      <rect width="171" height="180" rx="20" fill="#092E20"/>
      <text x="32" y="115" fill="#FFF" fontSize="62" fontWeight="800">d</text>
      <text x="75" y="115" fill="#44B78B" fontSize="62" fontWeight="800">j</text>
    </svg>
  ),
  php: () => (
    <svg viewBox="0 0 120 120" className="w-10 h-10" fill="none">
      <ellipse cx="60" cy="60" rx="55" ry="35" fill="#777BB4"/>
      <text x="60" y="70" textAnchor="middle" fill="#FFF" fontSize="30" fontWeight="bold" fontFamily="sans-serif">php</text>
    </svg>
  ),
  expressjs: () => (
    <svg viewBox="0 0 256 120" className="w-10 h-10" fill="none">
      <rect width="256" height="120" rx="16" fill="#1F2937"/>
      <text x="128" y="76" textAnchor="middle" fill="#FFF" fontSize="42" fontWeight="900" letterSpacing="2" fontFamily="sans-serif">EX</text>
    </svg>
  ),

  // --- MOBILE ---
  reactnative: () => (
    <svg viewBox="-11.5 -10.23 23 20.46" className="w-10 h-10">
      <circle cx="0" cy="0" r="2.05" fill="#05c5f4"/>
      <g stroke="#05c5f4" strokeWidth="1.2" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  flutter: () => (
    <svg viewBox="0 0 256 320" className="w-10 h-10">
      <path d="M152.5 0L64 88.5l44.3 44.3l88.5-88.5H152.5z" fill="#02569B"/>
      <path d="M108.3 132.8L20 221.1l44.3 44.3l88.5-88.5h-44.5z" fill="#0175C2"/>
      <path d="M152.8 176.9L108.5 221.2l44.3 44.3h44.3L152.8 176.9z" fill="#39C2FF"/>
    </svg>
  ),
  swift: () => (
    <svg viewBox="0 0 512 512" className="w-10 h-10">
      <path d="M439 123.6c-48.4-61-127.3-89.8-196-80.4 46.2 46.6 62 108.6 42.6 160.2 26-25 57.5-54 84-88.4 6 27.5-5 58.5-23.7 82 46.4-18.4 87.5-47.5 119.8-82.7 6.3 35.7-13.6 74-45.7 97.4C465.7 206 500 188 512 165c-6.8 55-52 102-106.6 123-53.7 21-124 16.4-180-26.6-4.5 16-17.6 30-34 37 32-1.7 66-10 94.6-26.4-53.8 38-124.6 45-186.2 16.6 43.6 22 93 26 142.2 13.8-90.8 18-181.6-18.4-230-91.8 14.8-1.5 30-5 45.4-10.6-70 1.2-125.7-36.8-155-90.8 28.5 14 59.4 19.3 90.6 16.4C4.6 317 0 259 5.8 200.7c22 34 56.4 57 96 61.8C46 223 37.5 158 79.4 109.8c3.5 15 12 28.4 24.3 37C84 100 110.8 56.7 155.8 32.5c-15.5 28-15.4 61.8.8 88.5 35-64.6 104-94.6 172.5-98 12.3 27-2.3 59-28.7 73 59-40.4 121.2-31.5 174 4l-35.4 23.6z" fill="#FA7323"/>
    </svg>
  ),
  kotlin: () => (
    <svg viewBox="0 0 256 256" className="w-10 h-10">
      <defs>
        <linearGradient id="kotlin-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0095D5"/>
          <stop offset="30%" stopColor="#3C83DC"/>
          <stop offset="70%" stopColor="#806EE3"/>
          <stop offset="100%" stopColor="#E2445C"/>
        </linearGradient>
      </defs>
      <path d="M256 256H0V0h256L128 128z" fill="url(#kotlin-grad)"/>
    </svg>
  ),

  // --- CMS ---
  wordpress: () => (
    <svg viewBox="0 0 512 512" className="w-10 h-10">
      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 21.6c117 0 213.6 86.8 230.8 200.3L371.4 466.8C257.6 515.6 137.6 448 83.2 334.8L211 21.6C225.8 21.6 241 21.6 256 21.6zm-177 94L188 395.2L74.8 245c-.2-42 16-86 42.6-129.4zm346.5 13.5c6 13 8 28.5 4 43.6l-67 190.2L282.8 129.1h142.7z" fill="#21759B"/>
    </svg>
  ),
  shopify: () => (
    <svg viewBox="0 0 256 288" className="w-10 h-10">
      <path d="M233.4 83.3c-2.3-5-6-9.2-11.4-11.4l-57-22.8c-5.4-2.2-11.4-2.2-16.8 0l-57 22.8c-5.4 2.2-9.1 6.4-11.4 11.4l-11.4 22.8H244.8l-11.4-22.8zm-111 65.5V288l119.8-47.9V148.8H122.4z" fill="#96BF48"/>
      <path d="M122.4 148.8H2.6V240l119.8 48V148.8z" fill="#5E8E3E"/>
    </svg>
  ),
  woocommerce: () => (
    <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none">
      <rect width="256" height="256" rx="40" fill="#96588A"/>
      <path d="M52 80h152v32c0 28.7-23.3 52-52 52h-48c-28.7 0-52-23.3-52-52V80z" fill="#FFF"/>
      <circle cx="100" cy="116" r="12" fill="#96588A"/>
      <circle cx="156" cy="116" r="12" fill="#96588A"/>
    </svg>
  ),
  magento: () => (
    <svg viewBox="0 0 256 288" className="w-10 h-10">
      <path d="M128 0L24.8 59.8v119.6l103.2 59.8 103.2-59.8V59.8L128 0zm68.8 135.2V63.5l34.4 20v71.7l-34.4-20zM93.6 135.2l-34.4 20v-71.7l34.4-20v71.7zm34.4 20v67l-34.4-20v-67l34.4 20z" fill="#EE672A"/>
    </svg>
  ),
  webflow: () => (
    <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none">
      <rect width="256" height="256" rx="40" fill="#4353FF"/>
      <text x="128" y="170" textAnchor="middle" fill="#FFF" fontSize="130" fontWeight="900" fontFamily="sans-serif">w</text>
    </svg>
  ),

  // --- DATABASE ---
  mongodb: () => (
    <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none">
      <path d="M128 0c-4.4 0-8.8 6.6-8.8 15V220c0 19.8 16.2 36 36 36 4.4 0 8.8-6.6 8.8-15V36c0-19.8-16.2-36-36-36z" fill="#47A248"/>
      <path d="M128 0c4.4 0 8.8 6.6 8.8 15v205c0 19.8-16.2 36-36 36-4.4 0-8.8-6.6-8.8-15V15c0-19.8 16.2-36 36-36z" fill="#3F3F3F"/>
      <path d="M128 30v156c-13.2 0-24-10.8-24-24v-108c0-13.2 10.8-24 24-24z" fill="#589636"/>
      <path d="M128 30v156c13.2 0 24-10.8 24-24v-108c0-13.2-10.8-24-24-24z" fill="#13AA52"/>
    </svg>
  ),
  mysql: () => (
    <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none">
      <rect width="256" height="256" rx="40" fill="#00758F"/>
      <text x="128" y="160" textAnchor="middle" fill="#FFF" fontSize="48" fontWeight="bold" fontFamily="sans-serif">MySQL</text>
    </svg>
  ),
  postgresql: () => (
    <svg viewBox="0 0 256 256" className="w-10 h-10">
      <rect width="256" height="256" rx="40" fill="#336791"/>
      {/* elephant silhouette */}
      <path d="M198 128c0-22-18-40-40-40s-40 18-40 40 18 40 40 40 40-18 40-40zm-100-30c-15 0-28 10-31 24h-17v12h17c3 14 16 24 31 24 17 0 31-14 31-30s-14-30-31-30z" fill="#FFF"/>
    </svg>
  ),
  firebase: () => (
    <svg viewBox="0 0 256 352" className="w-10 h-10">
      <path d="M0 273.7l93.7-184.8c4.3-8.5 16.5-8.5 20.8 0L256 273.7c4.6 9-2 20.3-11.8 20.3H11.8C2 294-4.6 282.7 0 273.7z" fill="#FFC400"/>
      <path d="M0 273.7l93.7-184.8c4.3-8.5 16.5-8.5 20.8 0L256 273.7c4.6 9-2 20.3-11.8 20.3H11.8C2 294-4.6 282.7 0 273.7z" fill="#FFC400"/>
      <path d="M0 273.7l64-213c3.5-11.6 19.6-11.6 23.1 0L128 273.7" fill="#F4B400"/>
      <path d="M128 273.7L186.7 82.2c3.5-11.4 19.5-11.4 23 0L256 273.7" fill="#DB4437"/>
    </svg>
  ),

  // --- CLOUD/DEVOPS ---
  aws: () => (
    <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none">
      <rect width="256" height="256" rx="40" fill="#232F3E"/>
      <text x="128" y="130" textAnchor="middle" fill="#FFF" fontSize="56" fontWeight="bold" fontFamily="sans-serif">AWS</text>
      <path d="M50 160 Q128 190 206 160" stroke="#FF9900" strokeWidth="6" strokeLinecap="round" />
    </svg>
  ),
  gcp: () => (
    <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none">
      <rect width="256" height="256" rx="40" fill="#1A73E8"/>
      <text x="128" y="145" textAnchor="middle" fill="#FFF" fontSize="48" fontWeight="bold" fontFamily="sans-serif">GCP</text>
    </svg>
  ),
  azure: () => (
    <svg viewBox="0 0 256 256" className="w-10 h-10">
      <rect width="256" height="256" rx="40" fill="#0078D4"/>
      <path d="M60 170l50-80 50 80h-25l-25-40-25 40z" fill="#FFF"/>
    </svg>
  ),
  docker: () => (
    <svg viewBox="0 0 256 256" className="w-10 h-10">
      <rect width="256" height="256" rx="40" fill="#2496ED"/>
      {/* whale outline */}
      <path d="M50 150c0-10 10-20 30-20s40 10 50 20 20 10 30 0l20-20 10 20s-20 30-60 30-80-20-80-30z" fill="#FFF"/>
      <rect x="70" y="110" width="12" height="12" fill="#FFF"/>
      <rect x="86" y="110" width="12" height="12" fill="#FFF"/>
      <rect x="102" y="110" width="12" height="12" fill="#FFF"/>
    </svg>
  ),

  // --- AI ---
  openai: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#10a37f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5-2.5-1.5-5.5 0-8s4.5-4 7.5-4 6 1.5 7.5 4M19.5 7.5c1.5 2.5 1.5 5.5 0 8s-4.5 4-7.5 4-6-1.5-7.5-4" />
      <path d="M12 2v20M2 12h20M5.75 5.75l12.5 12.5M18.25 5.75L5.75 18.25" />
    </svg>
  ),
  lovable: () => (
    <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none">
      <rect width="256" height="256" rx="40" fill="#FF4E6E"/>
      {/* Stylized Heart */}
      <path d="M128 200s-70-40-70-90c0-25 18-45 42-45 16 0 30 10 28 25 0-15 12-25 28-25 24 0 42 20 42 45 0 50-70 90-70 90z" fill="#FFF"/>
    </svg>
  ),
  tensorflow: () => (
    <svg viewBox="0 0 256 288" className="w-10 h-10">
      <path d="M128 0L24.8 59.8v119.6L128 239.2l103.2-59.8V59.8L128 0zm0 40l68.8 40v79.7L128 199.7l-68.8-40V80L128 40z" fill="#FF6F00"/>
    </svg>
  ),
  langchain: () => (
    <svg viewBox="0 0 256 256" className="w-10 h-10" fill="none">
      <rect width="256" height="256" rx="40" fill="#1C3D5A"/>
      {/* bird/parrot shape */}
      <path d="M100 160c0-10 10-30 28-30s28 20 28 30v40h-56v-40z" fill="#FFC400"/>
      <path d="M100 120c0-20 12-30 28-30s28 10 28 30v20h-56v-20z" fill="#FFF"/>
      <circle cx="116" cy="116" r="4" fill="#000"/>
    </svg>
  ),
};

// —————————————————————————————————————————————————————————————————————————————
// Tech Stack Data
// —————————————————————————————————————————————————————————————————————————————

const CATEGORIES = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "mobile", label: "Mobile" },
  { id: "cms", label: "CMS" },
  { id: "database", label: "Database" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "ai", label: "Artificial Intelligence" },
];

const TECH_DATA = {
  frontend: [
    { name: "React", logo: "react" },
    { name: "Next.js", logo: "nextjs" },
    { name: "Vue.js", logo: "vuejs" },
    { name: "Angular", logo: "angular" },
    { name: "HTML5", logo: "html5" },
    { name: "CSS3", logo: "css3" },
    { name: "Tailwind CSS", logo: "tailwindcss" },
    { name: "JavaScript", logo: "javascript" },
    { name: "TypeScript", logo: "typescript" },
  ],
  backend: [
    { name: "Node.js", logo: "nodejs" },
    { name: "Laravel", logo: "laravel" },
    { name: "Python", logo: "python" },
    { name: "Django", logo: "django" },
    { name: "PHP", logo: "php" },
    { name: "Express.js", logo: "expressjs" },
  ],
  mobile: [
    { name: "React Native", logo: "reactnative" },
    { name: "Flutter", logo: "flutter" },
    { name: "Swift", logo: "swift" },
    { name: "Kotlin", logo: "kotlin" },
  ],
  cms: [
    { name: "WordPress", logo: "wordpress" },
    { name: "Shopify", logo: "shopify" },
    { name: "WooCommerce", logo: "woocommerce" },
    { name: "Magento", logo: "magento" },
    { name: "Webflow", logo: "webflow" },
  ],
  database: [
    { name: "MongoDB", logo: "mongodb" },
    { name: "MySQL", logo: "mysql" },
    { name: "PostgreSQL", logo: "postgresql" },
    { name: "Firebase", logo: "firebase" },
  ],
  cloud: [
    { name: "AWS", logo: "aws" },
    { name: "Google Cloud", logo: "gcp" },
    { name: "Azure", logo: "azure" },
    { name: "Docker", logo: "docker" },
  ],
  ai: [
    { name: "OpenAI / ChatGPT", logo: "openai" },
    { name: "Lovable", logo: "lovable" },
    { name: "TensorFlow", logo: "tensorflow" },
    { name: "LangChain", logo: "langchain" },
  ],
};

// —————————————————————————————————————————————————————————————————————————————
// Component Render
// —————————————————————————————————————————————————————————————————————————————

export default function TechnologiesSection() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section className="section-auto-render w-full bg-[#000405] py-20 px-4 sm:px-6 lg:py-24 relative overflow-hidden">
      {/* Subtle Background Mesh Glows */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/4 w-[400px] h-[400px] z-0 opacity-15 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #07BEB8 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-1/4 w-[400px] h-[400px] z-0 opacity-10 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #07BEB8 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-[#07BEB8] text-xs font-semibold tracking-[0.25em] uppercase mb-4 px-4 py-1.5 rounded-full border border-[#07BEB8]/30 bg-[#07BEB8]/[0.06]">
            Our Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mt-2">
            Technologies <span className="precision-gradient">We Work With</span>
          </h2>
          <p className="mt-4 text-white/50 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We leverage a wide array of state-of-the-art languages, frameworks, databases, and cloud technologies to build scalable, secure, and future-proof digital assets.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-14 border-b border-white/5 pb-6">
          {CATEGORIES.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide rounded-full border transition-all duration-300 ${
                  isActive
                    ? "border-[#07BEB8] bg-[#07BEB8]/10 text-white shadow-[0_0_20px_rgba(7,190,184,0.15)]"
                    : "border-white/5 bg-transparent text-white/60 hover:border-white/20 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {TECH_DATA[activeTab].map((tech) => {
            const LogoComponent = LOGOS[tech.logo];
            return (
              <div
                key={tech.name}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-white/5 bg-[#031111]/30 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:border-[#07BEB8]/40 hover:bg-[#051e1e]/40"
                style={{
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
                }}
              >
                {/* Logo wrapper with subtle inner shadow & flex center */}
                <div className="w-16 h-16 rounded-2xl bg-[#000405]/80 border border-white/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-[#07BEB8]/50 group-hover:shadow-[0_0_20px_rgba(7,190,184,0.2)]">
                  {LogoComponent && <LogoComponent />}
                </div>

                {/* Name */}
                <span className="text-white/80 font-semibold text-xs sm:text-sm tracking-wide text-center group-hover:text-white transition-colors duration-200">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
