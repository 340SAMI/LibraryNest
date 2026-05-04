"use client";
import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { authClient } from '@/lib/auth-client';

const UpdateProfilePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const onSubmit = async (data) => {
  const { name, image } = data;

 
    const { data: res, error } = await authClient.updateUser({
      name: name,
      image: image,
    });

    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Profile updated successfully!");


};
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="mx-auto max-w-lg bg-white border border-slate-200 rounded-2xl p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-900">Update Profile</h1>
          <p className="text-sm text-slate-600 mt-2">Update your name and profile image URL.</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your new name"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700" htmlFor="image">
              Image URL
            </label>
            <input
              id="image"
              type="text"
              placeholder="Enter image URL"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              {...register('image')}
            />
            {errors.image && <p className="text-sm text-red-600">{errors.image.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/profile" className="text-sm text-blue-600 hover:underline">
            Back to Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
