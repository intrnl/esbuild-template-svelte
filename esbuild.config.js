let { svelte } = require('@intrnl/esbuild-plugin-svelte');


let buildOptions = {
	entryPoints: ['src/app.ts'],
	plugins: [
		svelte({
			compilerOptions: {
				immutable: true,
			}
		}),
	],
};

if (process.env.NODE_ENV == 'production') {
	buildOptions.minify = true;
}

module.exports = buildOptions;
