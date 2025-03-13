// tailwind.config.js
import type { Config } from 'tailwindcss';


const config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"*.{js,ts,jsx,tsx,mdx}",
		'./public/index.html'
	  ],
  
  darkMode: ["class", "class"],
  theme: {
  	extend: {
  		colors: {
			calculatorBanner: "#1B4D3E",
			quienes: "#F1C40F",
			somos: "#A5D6A7",
			counterServices: "#B0BEC5",

			title: "#388E3C",
			description: "#455A64",
			containerBlock: "#D7FFD9",


	
			
			paneles: "#212121",
			panelesDes: "#B0BEC5",
			panelesButton: "#1B5E20",

  			subtitles: '#E0E0E0',
  			
  			whiteColor: '#f9f9f9',
  			buttonColor: '#FF8C00',

			darkBg: "linear-gradient(90deg, #1E3A5F 10%, #2A3B4C 50%, #1B2C3A 90%)",

  	
  			green4: '#1B5E20',
  		
  			icons: '#C8E6C9',
  			titleFooter: '#FFA726 ',
  			

  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			buttonColorPrincipal: '#F4F4F4',
  			'darker-green-gradient': 'linear-gradient(90deg, #1B5E20, #2E7D32)',
  			'gradient-cover': 'linear-gradient(90.21deg, rgba(0, 181, 120, 0.95) -5.91%, rgba(0, 181, 120, 0) 111.58%)',
			'testimonials': "linear-gradient(90.21deg, rgba(27, 67, 50, 0.95) -5.91%, rgba(45, 106, 79, 0) 111.58%)",
        	"testimonials-gradient": "linear-gradient(to bottom, #4CAF50, #2E7D32)",
        
			
  		},
  		boxShadow: {
  			button: '0px 4px 10px rgba(76, 175, 80, 0.5)'
  		},
  		animation: {
  			aurora: 'aurora 40s linear infinite',
			  scroll:
			  "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
			marquee: "marquee 50s linear infinite",
        	marquee2: "marquee2 50s linear infinite",
  		},	
  		keyframes: {
  			aurora: {
  				from: {
  					backgroundPosition: '50% 50%, 20% 20%'
  				},
  				to: {
  					backgroundPosition: '350% 50%, 350% 50%'
  				}
  			},
			  marquee: {
				"0%": { transform: "translateX(0%)" },
				"100%": { transform: "translateX(-100%)" },
			  },
			  marquee2: {
				"0%": { transform: "translateX(100%)" },
				"100%": { transform: "translateX(0%)" },
			  },
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [],
} satisfies Config;

export default config;
