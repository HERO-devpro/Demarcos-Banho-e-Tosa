import { Scissors, Droplets, Sparkles, Bath, Ear, Wind } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

const services = [
  {
    icon: Bath,
    title: 'Banho',
    desc: 'Banho completo com shampoo adequado ao pelo e pele do seu pet, secagem e escovação.',
  },
  {
    icon: Scissors,
    title: 'Tosa',
    desc: 'Tosa higiênica, na tesoura ou na máquina, respeitando o estilo e o conforto do seu pet.',
  },
  {
    icon: Droplets,
    title: 'Hidratação',
    desc: 'Tratamento hidratante que deixa os pelos macios, brilhantes e cheirosos por muito mais tempo.',
  },
  {
    icon: Sparkles,
    title: 'Corte de Unhas',
    desc: 'Corte seguro e sem estresse, evitando desconforto e problemas nas patinhas.',
  },
  {
    icon: Ear,
    title: 'Limpeza de ouvido',
    desc: 'Higienização delicada dos ouvidos para prevenir odores, sujeira e infecções.',
  },
  {
    icon: Wind,
    title: 'Perfumaria & Spa',
    desc: 'Finalização com perfume pet, laço ou gravatinha para o seu amigo sair ainda mais charmoso.',
  },
]

export function Services() {
  return (
    <section id="servicos" className="bg-cream-light py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-extrabold uppercase tracking-wider text-orange">
            Meus serviços
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Tudo que seu pet precisa em um só serviço.
          </h2>
          <p className="mt-3 text-lg text-ink/70">
            Cuidamos de cada detalhe com carinho, produtos de qualidade e um profissional apaixonado por
            animais.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-cream-dark/60 bg-cream p-7 transition-all hover:-translate-y-1 hover:border-orange hover:shadow-xl"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-orange transition-colors group-hover:bg-orange group-hover:text-navy">
                <s.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-xl font-extrabold text-navy">{s.title}</h3>
              <p className="mt-2 text-ink/70">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={whatsappLink('Olá! Gostaria de saber mais sobre os serviços de banho e tosa.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-base font-extrabold text-cream-light shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-navy-light"
          >
            Fale com a gente
          </a>
        </div>
      </div>
    </section>
  )
}
