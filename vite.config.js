import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Define aquí manualmente las dependencias que deseas agrupar en un archivo separado.
          // Por ejemplo, si quieres agrupar 'react' y 'react-dom' en un archivo separado:
          'vendor': ['react', 'react-dom']
        }
      }
    }
  },
  esbuild: {
    // Configura esbuild para que pueda compilar archivos .js que contienen JSX
    jsxFactory: 'React.createElement', // Reemplaza 'React' con el nombre de tu biblioteca de React si es diferente
    jsxFragment: 'React.Fragment' // Reemplaza 'React' con el nombre de tu biblioteca de React si es diferente
  }
})
