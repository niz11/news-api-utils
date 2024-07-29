// tsup is a zero-config bundler for Node.js packages. It compiles TypeScript files to CommonJS, ESM, UMD, and more.
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"], // Build for commonJS and ESmodules
  dts: true, // Generate declaration file (.d.ts)
  splitting: true,
  sourcemap: true,
  clean: true,
  outDir: 'dist',
  target: 'es2016',
});