import { defineConfig } from 'vite'; 

export default defineConfig({
    server: {
        watch:{
            usePolling: true
        }
    },
    publicDir: '../public',
    root: './src', 
    build: {
       outDir: '../dist', // define the output directory, the output directory for to build files 
    }
});

// ../dist means src root folder ထဲကနေ ထွက်မှာကို ဆိုလိုတာ current vite.config.js file ရှိတဲ့ folder ထဲကနေ ထွက်တာကို မဆိုလိုဘူး။