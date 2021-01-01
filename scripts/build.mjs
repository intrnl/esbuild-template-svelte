import esbuild from 'esbuild';

import esbuildConfig from '../esbuild.config.mjs';


esbuild.build({
	format: 'esm',
	outdir: './public/assets/',
	...esbuildConfig,
	bundle: true,
});
