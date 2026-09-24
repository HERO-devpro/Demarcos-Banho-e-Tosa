import { Check, PawPrint } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

const plans = [
  {
    name: 'Banho Essencial a partir de:',
    price: '79',
    badge: null as string | null,
    desc: 'O cuidado básico para o dia a dia do seu pet.',
    features: ['Banho completo', 'Secagem e escovação', 'Limpeza de ouvido', 'Perfume pet', 'Corte de unhas'],
    highlight: false,
  },
  {
    name: 'Banho & Tosa a partir de:',
    price: '149',
    badge: 'Mais procurado',
    desc: 'O combo completo para deixar seu amigo impecável.',
    features: [
      'Tudo do Banho Essencial',
      'Tosa higiênica ou completa',
      'Corte de unhas',
      'Laço ou gravatinha',
    ],
    highlight: true,
  },
  {
    name: 'Tosa especializada a partir de:',
    price: '199',
    badge: null,
    desc: 'A experiência mais completa de bem-estar.',
    features: [
      'Tudo do Banho & Tosa',
      'Hidratação profunda',
      'Escovação de dentes',
      'Tosa Tremming(essas técnicas combinam estética, respeito à anatomia da raça e saúde da pelagem.)  ',
    ],
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section id="precos" className="bg-cream-light py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-extrabold uppercase tracking-wider text-orange">
            Pacotes
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Escolha o cuidado ideal para o seu pet
          </h2>
          <p className="mt-3 text-lg text-ink/70">
            Valores a partir de porte pequeno. O preço final pode variar conforme porte e tipo de
            pelagem.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={
                p.highlight
                  ? 'relative flex flex-col rounded-3xl bg-navy p-8 text-cream-light shadow-2xl ring-4 ring-orange'
                  : 'relative flex flex-col rounded-3xl border border-cream-dark/60 bg-cream p-8'
              }
            >
              {p.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange px-4 py-1 text-xs font-extrabold uppercase tracking-wide text-navy shadow">
                  {p.badge}
                </span>
              )}
              <h3
                className={`font-display text-xl font-extrabold ${p.highlight ? 'text-orange' : 'text-navy'}`}
              >
                {p.name}
              </h3>
              <p className={`mt-1 text-sm ${p.highlight ? 'text-cream-light/70' : 'text-ink/60'}`}>
                {p.desc}
              </p>
              <div className="mt-5 flex items-end gap-1">
                <span className={`text-sm font-bold ${p.highlight ? 'text-cream-light/70' : 'text-ink/50'}`}>
                  R$
                </span>
                <span
                  className={`font-display text-5xl font-extrabold ${p.highlight ? 'text-cream-light' : 'text-navy'}`}
                >
                  {p.price}
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      className={`mt-0.5 h-5 w-5 shrink-0 ${p.highlight ? 'text-orange' : 'text-blue'}`}
                    />
                    <span className={p.highlight ? 'text-cream-light/90' : 'text-ink/80'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(`Olá! Tenho interesse no pacote "${p.name}". Pode me passar mais detalhes?`)}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  p.highlight
                    ? 'mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-3.5 text-base font-extrabold text-navy transition-transform hover:-translate-y-0.5 hover:bg-orange-light'
                    : 'mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-base font-extrabold text-cream-light transition-transform hover:-translate-y-0.5 hover:bg-navy-light'
                }
              >
                <PawPrint className="h-4 w-4" />
                Agendar este pacote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
