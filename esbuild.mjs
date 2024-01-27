import esbuild from "esbuild"

async function main() {
  try {
    await esbuild.build({
      entryPoints: ["./src/app.ts"],
      inject: ['./cjs-shim.ts'],
      bundle: true,
      format: 'esm',
      platform: 'node',
      target: 'node20',
      sourcemap: true,
      outdir: 'dist',
      logLevel: 'info',
    });

    console.log('Build completed successfully.');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

main();