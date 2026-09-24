import { cn } from '@/lib/utils'

export function PawIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      aria-hidden="true"
      className={cn('h-6 w-6', className)}
    >
      <ellipse cx="20" cy="20" rx="7" ry="9" transform="rotate(-18 20 20)" />
      <ellipse cx="44" cy="20" rx="7" ry="9" transform="rotate(18 44 20)" />
      <ellipse cx="11" cy="36" rx="6" ry="8" transform="rotate(-8 11 36)" />
      <ellipse cx="53" cy="36" rx="6" ry="8" transform="rotate(8 53 36)" />
      <path d="M32 34c-8 0-15 6-15 14 0 6 5 9 11 9 2 0 3-1 4-1s2 1 4 1c6 0 11-3 11-9 0-8-7-14-15-14Z" />
    </svg>
  )
}

export function Logo({
  className,
  variant = 'navy',
}: {
  className?: string
  variant?: 'navy' | 'cream'
}) {
  const color = variant === 'cream' ? 'text-cream-light' : 'text-navy'
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <span
        className={cn(
          'flex h-10 w-10 items-center justify-center rounded-2xl bg-orange text-navy shadow-sm',
        )}
      >
        <PawIcon className="h-6 w-6" />
      </span>
      <span className={cn('font-display text-xl font-extrabold leading-none', color)}>
        Demarcos Luis
        <span className="block text-sm font-bold text-orange">Banho e Tosa</span>
      </span>
    </div>
  )
}
