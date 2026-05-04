"use client";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import SocialAuth from '@/components/SocialAuth';

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitReg = async (data) => {
  

    const {name, email, photo, password} = await data;

    const { data:val, error } = await authClient.signUp.email({
    name: name, // required
    email: email, // required
    password: password, // required
    image: photo,
    callbackURL: "/"  
});

 console.log(val,error, "the values");

 if(error){
    toast.error(error.message);
    return;
 }

if(val){
    toast.success("registration successful");
}


  }






console.log(errors, "error");
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
      <section className="w-full max-w-md bg-white border border-slate-200 rounded-[2rem] shadow-[0_35px_60px_-15px_rgba(15,23,42,0.2)] p-8">
        <div className="mb-8 flex flex-col items-center">
          <h1 className="text-3xl font-semibold text-slate-900">Register Here</h1>
          <p className="mt-3 text-sm text-slate-500">Be Part of the Intellectuals</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmitReg)}>
            <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                Name
                </label>

                <input
                type="text"
                placeholder="your name"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                {...register('name', { required: 'Name is required' })}
                />

                {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
          </div>



          <div className="space-y-2">
            <label  className="text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              placeholder="example@domain.com"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
          </div>

         <div className="space-y-2">
                <label  className="text-sm font-medium text-slate-700">
                Photo
                </label>
                <input
                type="text"
                placeholder="image.com"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                {...register('photo')}
                />
                
        </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Register
          </button>
        </form>

        <SocialAuth />

        <p className="mt-4">
          Already have an account?{" "}
          <Link href={"/login"} className="text-blue-500">
            Log in
          </Link>
        </p>

      </section>
    </main> 
  );
};

export default Page;