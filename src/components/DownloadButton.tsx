import React from 'react'
import clsx from 'clsx'

type DownloadButtonProps = {
  fileName: string
} & (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })

const DownloadButton = React.memo(
  ({ className, children, fileName, ...props }: DownloadButtonProps) => {
    className = clsx(
      className,
      'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
      'bg-neutral-950 text-white hover:bg-neutral-800',
    )

    let inner = <span className="relative top-px">{children}</span>

    return (
      <a href={`/${fileName}`} className={className} download>
        {inner}
      </a>
    )
  },
)

export default DownloadButton
