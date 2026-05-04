"use client";
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const BorrowButton =  ({ bookTitle }) => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleBorrow = async () => {
    if (session?.user) {
      toast.success(`${bookTitle} borrowed successfully!`);
    } else {
      toast.error("Please login to borrow books");
      router.push("/login");
    }
  };

  return (
    <button 
      onClick={handleBorrow}
      className="w-full rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
    >
      Borrow this book
    </button>
  );
};

export default BorrowButton;
