import { AnimatedBackground } from './components/AnimatedBackground'
import { LinkButton } from './components/LinkButton'
import { Globe, MessageCircle, Sparkles } from 'lucide-react'
import Icon from './assets/icon.webp'
import IconCopyright from './assets/icon-copyright.png'


export default function App() {
  return (
    <div className='relative h-svh w-full overflow-hidden bg-[#0A1612] flex flex-col'>
      <AnimatedBackground />

      <main className='relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-4 sm:py-6 overflow-y-auto'>
        <div className='w-full max-w-2xl mx-auto flex flex-col justify-center gap-3 sm:gap-4'>
          <header className='flex flex-col items-center gap-1.5 sm:gap-3'>
            <div className='w-18 h-18 xs:w-14 xs:h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border-2 border-[#FDCD00]/30 p-1.5 sm:p-2'>
              <img
                src={Icon}
                alt='Logo MangaLab'
                className='w-full h-full object-contain'
                loading='eager'
              />
            </div>

            <div className='relative'>
              <h1 className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-white tracking-wide font-bold'>
                <span className='bg-gradient-to-r from-[#FDCD00] via-[#E9972D] to-[#FDCD00] bg-clip-text text-transparent'>
                  MangaLab
                </span>
              </h1>
              <div
                className='absolute inset-0 blur-xl opacity-30 bg-gradient-to-r from-[#FDCD00] to-[#E9972D] pointer-events-none'
                aria-hidden='true'
              />
            </div>
          </header>

          <section className='text-center space-y-1.5 sm:space-y-3 mb-4'>
            <h2 className='text-white text-base xs:text-lg sm:text-xl md:text-2xl px-2'>
              Inovação digital ao alcance da sua empresa
            </h2>

            <p className='text-gray-300 max-w-xl mx-auto text-xs xs:text-sm sm:text-base px-4'>
              Tecnologia acessível para todas as empresas, porque acreditamos
              que inovação deve ser para todos.
            </p>
          </section>

          <nav
            className='space-y-2.5 sm:space-y-3.5 px-2'
            aria-label='Links principais'>
            <LinkButton
              icon={
                <Globe className='w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5' />
              }
              title='Visite nosso site'
              href='https://www.mangalab.io'
            />

            <LinkButton
              icon={
                <MessageCircle className='w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5' />
              }
              title='Fale com nosso time'
               href='https://wa.me/5541987306000?text=Oi!%20Quero%20saber%20mais%20sobre%20o%20trabalho%20da%20MangaLab.'
            />

            <LinkButton
              icon={
                <Sparkles className='w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5' />
              }
              title='Descubra o SalonSync'
              href='https://salonsync.mangalab.io'
            />
          </nav>
        </div>
      </main>

      <footer className='relative z-10 text-center py-3 sm:py-4 border-t border-[#727272]/50 shrink-0'>
        <p className='text-[10px] sm:text-xs lg:text-sm text-[#727272]'>
          © 2025 MangaLab. Todos os direitos reservados.
        </p>
        <p className='text-[9px] sm:text-xs text-[#555] mt-1'>
          Desenvolvido com
          <img
            src={IconCopyright}
            alt='amor'
            className='h-2 w-2 inline m-1'
            aria-hidden='true'
          />
          pela equipe{' '}
          <a
            href='https://www.mangalab.io'
            target='_blank'
            className='text-yellow-400 hover:text-yellow-500 transition-colors'>
            MangaLab
          </a>
        </p>
      </footer>
    </div>
  )
}
