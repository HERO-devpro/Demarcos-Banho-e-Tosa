import Image from 'next/image'
import { HeartHandshake, ShieldCheck, Clock, Leaf } from 'lucide-react'

const features = [
  {
    icon: HeartHandshake,
    title: 'Atendimento com a maior qualidade',
    desc: 'Cada pet é tratado como único, com paciência e carinho do começo ao fim.',
  },
  {
    icon: ShieldCheck,
    title: 'Ambiente seguro',
    desc: 'Banho e tosa realizados por um profissional com mais de 26 anos de experiência, manuseio seguro do seu pet no conforto e bem-estar da sua casa.',
  },
  {
    icon: Leaf,
    title: 'Produtos pet-safe',
    desc: 'Usamos apenas produtos de qualidade, dermatologicamente testados para animais.',
  },
  {
    icon: Clock,
    title: 'Agilidade e pontualidade',
    desc: 'Respeitamos seu tempo com horários agendados e entrega no prazo combinado.',
  },
]

export function Features() {
  return (
    <section id="diferenciais" className="bg-navy py-16 text-cream-light md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-3 bg-blue"
            style={{ borderRadius: '48% 52% 40% 60% / 55% 45% 55% 45%' }}
          />
          <Image
            src="/grooming-1.png"
            alt="Profissional realizando a tosa de um cãozinho no salão"
            width={640}
            height={520}
            className="relative z-10 h-auto w-full rounded-[2.5rem] object-cover shadow-2xl"
          />
        </div>

        <div>
          <span className="text-sm font-extrabold uppercase tracking-wider text-orange">
            Por que escolher a o Banho e Tosa a domicílio do Demarcos Luis?
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
            Mais que um banho e tosa, uma experiência de cuidado e carinho para o seu pet, no comforto do seu lar.
          </h2>
          <p className="mt-3 text-lg text-cream-light/70">
            Sabemos que seu pet é da família. Por isso, oferecemos um atendimento que une técnica,
            segurança e muito afeto.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange text-navy">
                  <f.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">{f.title}</h3>
                  <p className="mt-1 text-sm text-cream-light/70">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
