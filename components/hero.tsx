import Image from 'next/image'
import { Phone, PawPrint, ArrowRight } from 'lucide-react'
import { site, whatsappLink } from '@/lib/site'

const pills = ['Tosa', 'Banho', 'Hidratação', 'Corte de Unhas', 'Limpeza de ouvido']

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-cream-light">
      {/* decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-[36rem] w-[36rem] rounded-full bg-cream opacity-70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-orange/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 md:grid-cols-2 md:py-20">
        {/* content on blue blob */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[3rem] bg-navy md:-inset-10 md:rounded-[4rem]"
            style={{
              borderRadius: '48% 52% 58% 42% / 55% 45% 55% 45%',
            }}
          />
          <div className="relative z-10 py-6 md:py-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange/20 px-4 py-1.5 text-sm font-bold text-orange">
              <PawPrint className="h-4 w-4" />
              Banho e Tosa a domicílio | {site.city}
            </span>

            <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.95] text-orange sm:text-6xl md:text-7xl">
              Banho
              <br />e Tosa
            </h1>
            <p className="mt-3 font-display text-lg font-medium italic text-cream-light/90">
              {site.tagline}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2.5">
              {pills.map((p) => (
                <li
                  key={p}
                  className="inline-flex items-center gap-2 rounded-full bg-orange px-4 py-2 text-sm font-bold text-navy shadow-sm"
                >
                  <PawPrint className="h-3.5 w-3.5" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink('Olá! Quero agendar um banho e tosa para o meu pet.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-7 py-3.5 text-base font-extrabold text-navy shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-orange-light"
              >
                <Phone className="h-5 w-5" />
                Agendar agora
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream-light/40 px-7 py-3.5 text-base font-bold text-cream-light transition-colors hover:bg-cream-light/10"
              >
                Ver serviços
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* dog image */}
        <div className="relative flex justify-center">
          <div
            aria-hidden="true"
            className="absolute right-2 top-6 h-[85%] w-[85%] bg-blue"
            style={{ borderRadius: '46% 54% 62% 38% / 58% 42% 58% 42%' }}
          />
          <Image
            src="/hero-dog.png"
            alt="Cachorro chihuahua com toalha laranja na cabeça e roupão, segurando um frasco de shampoo"
            width={640}
            height={640}
            priority
            className="relative z-10 h-auto w-full max-w-md rounded-[2.5rem]"
          />
        </div>
      </div>

      {/* trust bar */}
      <div className="relative border-t border-cream-dark/60 bg-cream">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 text-center sm:grid-cols-4">
          {[
            ['+5.000', 'pets cuidados'],
            ['5 ★', 'avaliação média'],
            ['26 anos', 'de experiência'],
            ['100%', 'produtos pet-safe'],
          ].map(([big, small]) => (
            <div key={small}>
              <p className="font-display text-2xl font-extrabold text-navy">{big}</p>
              <p className="text-sm font-semibold text-ink/60">{small}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
