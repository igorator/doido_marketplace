export const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <main className='flex flex-col justify-start items-stretch self-center gap-3 px-[8px] py-4 w-full max-w-[var(--theme-default-max-width)]'>
    {children}
  </main>
);
