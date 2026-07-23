import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  variant?: 'default' | 'white'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className, variant = 'default' } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'
  const src = variant === 'white' ? '/mtw-logo-white.png' : '/mtw-logo.png'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="MTW Sports"
      width={160}
      height={40}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('w-auto h-10', className)}
      src={src}
    />
  )
}
