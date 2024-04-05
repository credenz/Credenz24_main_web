/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: ['selector', '[data-mode="dark"]'],
	theme: {
		// screens: {
		// 	sm: '480px',
		// 	md: '768px',
		// 	lg: '976px',
		// 	xl: '1440px',
		// },
		screens: {
			sm: '500px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		// colors: {
		// 	// transparent: 'transparent',
		// 	// current: 'currentColor',
		// 	// white: '#ffffff',
		// 	// purple: '#3f3cbb',
		// 	// midnight: '#121063',
		// 	// metal: '#565584',
		// 	// tahiti: '#3ab7bf',
		// 	// silver: '#ecebff',
		// 	// bubblegum: '#ff77e9',
		// 	// bermuda: '#78dcca',
		// },
		extend: {},
	},
	plugins: [],
	variants: {
		extend: {
			// ...
			transitionDuration: ['hover', 'focus'],
		},
	},
};

const {
	default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");
  const withMT = require("@material-tailwind/react/utils/withMT");
  const colors = require("tailwindcss/colors");
  /** @type {import('tailwindcss').Config} */
  module.exports = {
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  
	  // Or if using `src` directory:
	  "./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
	  extend: {
		animation: {
		  scroll:
			"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
		},
		boxShadow: {
		  input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
		},
		keyframes: {
		  scroll: {
			to: {
			  transform: "translate(calc(-50% - 0.5rem))",
			},
		  },
		},
	  },
	  
	   
	  
	},
	plugins: [addVariablesForColors],
  };
  
  function addVariablesForColors({ addBase, theme}) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
  
	addBase({
	  ":root": newVars,
	});
  }
  