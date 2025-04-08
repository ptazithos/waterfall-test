import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { UnoCSSRspackPlugin } from "@unocss/webpack/rspack";
import { presetUno } from "unocss";

export default defineConfig({
	dev: {
		hmr: false,
	},
	server: {
		publicDir: { name: "public" },
	},
	plugins: [pluginReact()],
	tools: {
		rspack: {
			plugins: [
				UnoCSSRspackPlugin({
					presets: [presetUno()],
				}),
			],
		},
	},
	resolve: {
		alias: {
			"@": "./src/",
		},
	},
});