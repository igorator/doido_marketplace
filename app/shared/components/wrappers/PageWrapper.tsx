export const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <main className='flex flex-col justify-start items-center self-center gap-[18px] px-[8px] py-[16px] pt-0 w-full max-w-[var(--theme-default-max-width)]'>
    {children}
  </main>
);
