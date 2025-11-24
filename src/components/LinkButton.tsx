import { motion } from 'framer-motion'
import { memo, type ReactNode } from 'react'

interface LinkButtonProps {
  icon: ReactNode
  title: string
  href: string
}

export const LinkButton = memo(function LinkButton({
  icon,
  title,
  href,
}: LinkButtonProps) {
  return (
    <motion.a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='
        relative group block w-full p-3 sm:p-5 rounded-2xl
        bg-gradient-to from-[#2B5B3F]/80 to-[#2B5B3F]/60
        border-2 border-[#FDCD00]/40 backdrop-blur-sm
        hover:from-[#2B5B3F] hover:to-[#2B5B3F]/80 hover:border-[#FDCD00]/80
        transition-all duration-300
        shadow-lg hover:shadow-xl
        will-change-transform
      '
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}>
      <div className='flex items-center gap-3 sm:gap-4'>
        <div
          className='bg-[#FDCD00]/20 text-[#FDCD00] p-2 sm:p-3 rounded-xl shrink-0'
          aria-hidden='true'>
          {icon}
        </div>

        <div className='flex-1'>
          <h3 className='text-white transition-colors text-sm sm:text-base'>
            {title}
          </h3>
        </div>

        <motion.div
          className='text-[#FDCD00] shrink-0'
          animate={{ x: [0, 5, 0] }}
          aria-hidden='true'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            className='sm:w-6 sm:h-6'>
            <path d='M5 12h14M12 5l7 7-7 7' />
          </svg>
        </motion.div>
      </div>

      <motion.div className='absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none' />
    </motion.a>
  )
})
