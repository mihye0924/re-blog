import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
const __dirname = path.resolve();


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname,'./src')}
  },
  // SCSS 전역 사용
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/scss/variables";' 
      }
    }
  }
})
