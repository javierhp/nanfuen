import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function RootIndex() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/es/');
  }, [router]);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#0D1117',
      color: '#E6EDF3',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <p>Redirigiendo... / Redirecting...</p>
    </div>
  );
}
