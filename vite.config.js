import { defineConfig } from 'vite'
import { resolve } from 'path'

const root = resolve(__dirname, '')

export default defineConfig({
    root,
    base: '',
    server: {
        cors: false
    }
})