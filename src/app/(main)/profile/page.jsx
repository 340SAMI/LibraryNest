"use client";
import React from 'react';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import Image from 'next/image';

const isValidImageUrl = (value) => {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (error) {
    return false;
  }
};

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <p className="text-sm text-slate-700">Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
        <div className="max-w-sm w-full bg-white border border-slate-200 p-6 rounded-2xl text-center">
          <h1 className="text-xl font-semibold text-slate-900 mb-3">Please login</h1>
          <p className="text-sm text-slate-600 mb-4">You need to log in before accessing your profile.</p>
          <Link href="/login" className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm text-white">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="mx-auto max-w-4xl bg-white border border-slate-200 rounded-2xl p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-900">My Profile</h1>
          <p className="text-sm text-slate-600 mt-2">View your profile and update your information.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-[120px_1fr] items-center">
          <div className="flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-4">
            {user.image && isValidImageUrl(user.image) ? (
              
              <Image src={user.image} alt={user.name || 'User image'} className="h-24 w-24 rounded-full object-cover" width={300} height={300}/>
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-200 text-xl font-semibold text-slate-700">
                {'U'}
              </div>
            )}
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">Name</p>
              <p className="text-sm text-slate-900">{user.name || 'Not provided'}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">Email</p>
              <p className="text-sm text-slate-900">{user.email || 'Not provided'}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">Image URL</p>
              <p className="text-sm text-slate-900 wrap-break-word">{user.image || 'Not provided'}</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Link href="/profile/update" className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm text-white">
            Update Information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;