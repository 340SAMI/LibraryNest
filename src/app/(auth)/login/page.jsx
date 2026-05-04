"use client";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

import { useForm } from 'react-hook-form';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {console.log(data, "data");

    const {email, password} = await data;

    const { data:val, error } = await authClient.signIn.email({
    email: email, // required
    password: password, // required
    rememberMe: true,
    callbackURL: "/",
});

console.log(val,error, "see the res")

  }
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
      <section className="w-full max-w-md bg-white border border-slate-200 rounded-[2rem] shadow-[0_35px_60px_-15px_rgba(15,23,42,0.2)] p-8">
        <div className="mb-8">
          <p className="text-sm text-slate-500 uppercase tracking-[0.24em] mb-3">Welcome back</p>
          <h1 className="text-3xl font-semibold text-slate-900">Login</h1>
          <p className="mt-3 text-sm text-slate-500">Sign in to access your library dashboard and saved books.</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <label htmlFor="email"className="text-sm  font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@domain.com"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              id="password"
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
            Login
          </button>
        </form>

        <div className="mt-6 flex items-center gap-3 text-sm text-slate-400">
          <span className="h-px flex-1 bg-slate-200"></span>
          <span>or continue with</span>
          <span className="h-px flex-1 bg-slate-200"></span>
        </div>

        <button
          type="button"
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
            <FcGoogle />
          Sign in with Google
        </button>

        <button
          type="button"
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
            <FaGithub />
          Sign in with Github
        </button>
        <p className="mt-4">
          Dont have an account?{" "}
          <Link href={"/register"} className="text-blue-500">
            Register
          </Link>
        </p>
      </section>
    </main> 
  );
};

export default Page;