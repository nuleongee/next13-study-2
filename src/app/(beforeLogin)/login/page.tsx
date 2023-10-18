'use client';

import { useRouter } from 'next/navigation';
import LoginPage from '@/app/(beforeLogin)/_component/Login';

export default function Login() {
  const router = useRouter();
  router.replace('/i/flow/login');

  return <LoginPage />;
}
