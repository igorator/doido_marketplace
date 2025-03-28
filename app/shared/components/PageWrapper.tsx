export const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className='flex flex-col items-center m-auto max-w-[768px]'>
    {children}
  </div>
);
