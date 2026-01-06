import { defineConfig } from '@voidzero-dev/vite-plus';

export default defineConfig({
	test: {
		projects: ['./packages/happy-dom/vitest.config.ts'],
		testTimeout: 10000,
	}
});
