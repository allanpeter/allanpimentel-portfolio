import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost'
  as?: 'button' | 'link'
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300'

const variants: Record<string, string> = {
  primary:
    'bg-neon-blue/20 text-neon-blue shadow-glow border border-neon-blue/40 hover:bg-neon-blue/30',
  secondary:
    'bg-neon-green/20 text-neon-green shadow-glowGreen border border-neon-green/40 hover:bg-neon-green/30',
  ghost: 'border border-white/20 text-white/80 hover:border-white/40 hover:text-white'
}

const Button = ({
  variant = 'primary',
  as = 'button',
  className = '',
  ...props
}: ButtonProps) => {
  if (as === 'link') {
    return (
      <a className={`${base} ${variants[variant]} ${className}`} {...props} />
    )
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props} />
  )
}

export default Button
