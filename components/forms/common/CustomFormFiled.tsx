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

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name?: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderField = ({ field, props } : { field:any; props:CustomProps }) =>{
    return(
        <Input 
            placeholder="John De"
            type="text"
        />
    )
}

const CustomFormFiled = ( props: CustomProps) => {
    const {control, fieldType, name, label }  = props
  return (
    <FormField
      control={control}
      name="username"
      render={({ field }) => (
        <FormItem>
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{name}</FormLabel>
          )}
          <RenderField field={field} props={props} />
        </FormItem>
      )}
    />
  );
};

export default CustomFormFiled;
