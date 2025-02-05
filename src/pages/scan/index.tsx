import dynamic from 'next/dynamic';


export default function Page() {
  const NonSSRVideoCapture = dynamic(() => import('@/components/video-capture'), { ssr: false });
  return (
    <div>
      <NonSSRVideoCapture />
    </div>
  );
}
