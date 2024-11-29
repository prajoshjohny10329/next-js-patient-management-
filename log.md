29-11-2024
    clean home.tsx, global.css
    change layout meta data

    static/dynamic class
        * import { cn } from '@/lib/utils'
        * create lib/utils.ts
        * passing in body tag
        * remove localFont from default then fontSans.variable --app/layout.ts

    configure Shadcn
        *npx shadcn@latest init

    Dark Mode
        *npm install next-themes
        *create ThemProvider component code from shadcn dark-mode
        *wrap app layout.tsx children by ThemProvider
        *crate ModeToggle component

    Add assets images

    Home Page
        *add logo
        *create from page




