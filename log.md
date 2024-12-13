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

30-11-2024  

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
        *npm install libphonenumber-js
        *libphonenumber-js for E164number
    50:31 before form submit     22.45 to 1:28

03-12-204
    Add SubmitButton
        *add submit button with loading $SubmitButton
        *validation form 
            *add new from schema for patient form    $UserFormValidation
            *know about zod for form validation
            *add default value for onSubmit function
    
    Backend
        *create app-write and a project
        *create api server
        *create database and collection: patient, doctors, appointment
        *create storage bucket
        *add appwrite.config.ts in lib and setup with
        *create patient require fields like name phone in appwrite patient database
        *allow permission to all database for CRUD operation
        *create patients.action.ts  in lib/action for ex:createUser...
        *create types folder and its files
        *connect createUser from patients.action.ts to createUser patientForm
       
    01:20:00    before form submit   12:50 am to  4:20 am
    with the env issue

13-12-2024  00:25

    backend
        *create api for first user
    
    02:41

13-12-2024  23:49
    Frontend
        *create patients Pages
        *create Register Form
        *Get userdata from Dynamic user api
        *

    
    
        




