import { join } from 'path'

import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
      backgroundImage: theme => ({
				'gradient-one': 'linear-gradient(180eg, #1D1A39, #451952, #662549, #AE445A, #F39F5A, #E8BCB9)',
				'gradient-two': 'linear-gradient(180deg, #05161a, #072e33, #0c7075, #0f969c, #6da5c0, #294d61)',
				'gradient-three': 'linear-gradient(270deg, #FFFFF7, #FBFBEB, #E2E2D4, #C9C9BC, #B5B5A9, #A3A398)',
				'gradient-four': 'linear-gradient(180deg, #355070, #6D597a, #b56576, #e56b6f, #e88c7d, #eaac8b)'
      }),
			dropShadow: {
				'dark': '0 0 10px rgba(0, 0, 0, 0.5)',
				'light': '0 0 10px rgba(255, 255, 255, 0.5)',
			}
		},
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'modern',
						enhancements: true,
					},
					{
						name: 'rocket',
						enhancements: true,
					},
					{
						name: 'hamlindigo',
						enhancements: true,
					},
				],
			},
		}),
	],
};
