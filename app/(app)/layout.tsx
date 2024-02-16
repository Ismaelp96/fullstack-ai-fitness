import Navbar from '@/components/Navbar';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col w-full h-full'>
      <Navbar />
      {children}
    </div>
  );
};

export default AppLayout;
