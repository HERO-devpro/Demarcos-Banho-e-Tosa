import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Jaqueline Melo',
    pet: 'tutora da Dexter',
    text: 'Meu Dexter sempre volta cheiroso e super calmo. Dá pra ver que é tratado com carinho de verdade!',
  },
  {
    name: 'Dona Graça',
    pet: 'tutora da Nina',
    text: 'Atendimento impecável e pontual. A tosa ficou perfeita e a Nina adorou. Recomendo demais!',
  },
  {
    name: 'Eric',
    pet: 'tutor do Bento',
    text: 'A hidratação deixou o pelo do Bento maravilhoso. Demarcos foi atencioso e muito profissional. Virei cliente fiel.',
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-extrabold uppercase tracking-wider text-orange">
            Depoimentos
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Tutores que confiam na gente
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-cream-dark/60 bg-cream-light p-7 shadow-sm"
            >
              <div className="flex gap-1 text-orange" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-ink/80">“{t.text}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-display text-lg font-extrabold text-orange">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="font-display font-bold text-navy">{t.name}</p>
                  <p className="text-sm text-ink/60">{t.pet}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
