"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form"; // Ensure this is the correct import
import { FormFieldType } from "../PatientForm";

interface CustomProps{
    control: Control<any>,
    fieldType: FormFieldType
}

const CustomFormFiled = ( { control, fieldType }: CustomProps) => {
  return (
    <FormField
      control={ control }
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input placeholder="shadcn" {...field} />
          </FormControl>
          <FormDescription>This is your public display name.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomFormFiled;
