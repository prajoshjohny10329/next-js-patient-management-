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
    26:10 before patient form 22:09:17  to 00:00:00

    30-11-2024  22.45

    Patient Form
        *npx shadcn@latest add form
        *Add form schema
        *CustomFormField for handling reuseable form inputs

    CustomFormField
        *CustomProps for interface inputs
        *check is check-box for avoiding label
        *RenderField for  dynamic input fields by render

    RenderField
        *create switch case for choose inputs by field type
        *npm i react-phone-number-input
        *react-phone-number-input for country code for phone inputs
        




