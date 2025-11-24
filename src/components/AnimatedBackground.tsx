import { motion } from 'framer-motion'

function AbstractLine({
  d,
  stroke,
  duration,
  delay = 0,
}: {
  d: string
  stroke: string
  duration: number
  delay?: number
}) {
  return (
    <motion.path
      d={d}
      stroke={stroke}
      strokeWidth='2'
      fill='none'
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{
        pathLength: [0, 1, 0],
        opacity: [0, 0.5, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay,
      }}
    />
  )
}

export function AnimatedBackground() {
  return (
    <div className='absolute inset-0 overflow-hidden will-change-transform'>
      <svg
        className='absolute inset-0 w-full h-full opacity-10 pointer-events-none'
        aria-hidden='true'>
        <AbstractLine
          d='M0,100 Q250,50 500,100 T1000,100'
          stroke='#FDCD00'
          duration={8}
        />
        <AbstractLine
          d='M0,300 Q250,250 500,300 T1000,300'
          stroke='#E9972D'
          duration={10}
          delay={2}
        />
        <AbstractLine
          d='M0,500 Q250,450 500,500 T1000,500'
          stroke='#2B5B3F'
          duration={12}
          delay={4}
        />
      </svg>

      <motion.div
        className='absolute bottom-40 left-20 w-24 h-24 border-2 border-[#E9972D]/20 will-change-transform pointer-events-none'
        style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
        animate={{ rotate: [0, -360], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        aria-hidden='true'
      />
    </div>
  )
}
