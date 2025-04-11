import { cn } from '~/shared/lib/utils';

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
        'flex justify-between gap-1 bg-[var(--theme-secondary-bg-color)] p-4 rounded-[var(--theme-outer-border-radius)] w-full items-center',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
