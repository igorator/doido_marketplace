import { cn } from '~/shared/utils/cn'; // Импорт функции cn

export const ControlsWrapper = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'flex flex-wrap justify-between items-center gap-1 bg-[var(--theme-secondary-bg-color)] p-4 rounded-[var(--theme-outer-border-radius)] w-full',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
