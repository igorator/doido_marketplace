export const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <main className='flex flex-col justify-start items-center self-center gap-[16px] px-[16px] py-[8px] w-full max-w-[var(--theme-default-max-width)]'>
    {children}
  </main>
);
