import type { Config } from 'tailwindcss'
import { nextui }  from "@nextui-org/react";

// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// } satisfies Config

// tailwind.config.ts


export default {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()]
} satisfies Config