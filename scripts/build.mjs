import esbuild from 'esbuild';

import esbuildConfig from '../esbuild.config.js';


esbuild.build({
	format: 'esm',
	outdir: './public/assets/',
	...esbuildConfig,
	bundle: true,
});
