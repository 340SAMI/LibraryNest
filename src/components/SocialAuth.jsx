"use client";
import { authClient } from '@/lib/auth-client';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialAuth = () => {
  const HandleGoogleClick = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const HandleGithubClick = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <>
      <div className="mt-6 flex items-center gap-3 text-sm text-slate-400">
        <span className="h-px flex-1 bg-slate-200"></span>
        <span>or continue with</span>
        <span className="h-px flex-1 bg-slate-200"></span>
      </div>

      <button
        type="button"
        className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        onClick={HandleGoogleClick}
      >
        <FcGoogle />
        Sign in with Google
      </button>

      <button
        type="button"
        className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        onClick={HandleGithubClick}
      >
        <FaGithub />
        Sign in with Github
      </button>
    </>
  );
};

export default SocialAuth;