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
       
    01:20:00    before form submit   00:50 am to  4:20 am
    with the env issue

13-12-2024  

    Appwrite Error
        *appwrite Error & create data in MONGODB 
        *create api for first user
    
    00:25 am to 02:41 am

14-12-2024  

    Create patients Register Page
        *create Register Page
        *create Register Form
        *Get userdata from Dynamic user api
        *User data Pass to Register form from Register page

    01:27:54    before add actual form field     00:00am to 01:37 am

15-12-2024

    Create Register form
        *Patient information
        *npx shadcn@latest add radio-group
        *add gender option constant file  /constant/index.ts
        *Add new switch case for DATE_PICKER and SKELTON 
        http://localhost:3000/patients/675f01ac04c5e52326983cde/register
        *Date picker dependencies problem

    01:40:54    dependencies problem    21:47pm to 23:15pm

20-12-2024 18:14

    Create Register form
        *solve date picker problem with add css file of date-picker

10-01-2025 
        *fix font issue by removing "var(--font-sans)" at tailwind config
        *add case FormFieldType for SELECT

    01:40:54    next create TEXTAREA FormFieldType case   21:27pm to 23:28pm

22-01-2025
        *create TEXTAREA FormFieldType case
        *create Custom Filed for FileUploader component     ./component/common/FileUploader

    02.04.24    next install react-dropzone FileUploader     19:22pm to 21:18pm

24-01-2025
        *install react-dropzone FileUploader
        *using URL.createObject for save image file path
        *using Blob 
        
    02.24.00    next store register data to database and cloudinary     18:24   22:08





    
    
        




