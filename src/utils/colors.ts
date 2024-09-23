import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @tailwind base;
          @tailwind components;
          @tailwind utilities;

          :root {
            --color-primary: #f3e05b; // Amarelo vibrante
            --color-secondary: #a8dadc; // Azul claro
            --color-accent: #e9c46a; // Laranja vibrante

            --color-background: #f5f5f5; // Fundo neutro
            --color-text: #333; // Texto padrão
          }
        `,
      },
    },
  },
});