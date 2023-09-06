'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Verify() {
  const router = useRouter();

  useEffect(() => {

    const { token } = router.query;

    router.push('/verification-success');
  }, [router]);

  return <div>Verifying...</div>;
}
