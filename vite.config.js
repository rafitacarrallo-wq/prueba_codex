import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  // Salida ASCII pura: los acentos sobreviven aunque el host sirva el HTML sin charset.
  esbuild: { charset: 'ascii' }
})
