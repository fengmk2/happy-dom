import { defineConfig } from '@voidzero-dev/vite-plus';

export default defineConfig({
	cacheDir: '.turbo/vitest',
	test: {
		environment: 'node',
		include: ['./test/**/*.test.ts'],
		setupFiles: ['./test/setup.ts'],
		testTimeout: 500,
		restoreMocks: true
	}
});
