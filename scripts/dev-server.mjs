import esbuild from 'esbuild';
import chokidar from 'chokidar';
import liveServer from 'live-server';

import esbuildConfig from '../esbuild.config.mjs';


let builder = await esbuild.build({
	format: 'esm',
	outdir: './public/assets/',
	...esbuildConfig,
	bundle: true,
	incremental: true,
});

chokidar.watch('src/**/*', { ignoreInitial: true })
	.on('all', () => { builder.rebuild() });

liveServer.start({
	root: './public/',
	open: false,
});
