import RegisterForm from "@/components/forms/RegisterForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Registration = async ({params}: SearchParamProps) => {
  
  const {userId} = await params
  
  const { user , success } = await fetch(process.env.NEXT_PUBLIC_API+"user/"+userId).then(async (response)=>{
    return await response.json()
  })

  
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-2 h-10 w-fit"
          />

          <RegisterForm user={user} />

            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Patient
            </p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default Registration;
