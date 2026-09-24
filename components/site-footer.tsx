import { Logo } from '@/components/paw-logo'
import { MapPin, Phone, Clock } from 'lucide-react'
import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-navy text-cream-light">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-1">
          <Logo variant="cream" />
          <p className="mt-4 max-w-xs text-sm text-cream-light/70">
            {site.tagline.charAt(0).toUpperCase() + site.tagline.slice(1)}.
          </p>
        </div>

        <div>
          <h3 className="font-display font-bold text-orange">Serviços</h3>
          <ul className="mt-3 space-y-2 text-sm text-cream-light/70">
            <li>Banho</li>
            <li>Tosa</li>
            <li>Hidratação</li>
            <li>Corte de Unhas</li>
            <li>Limpeza de ouvido</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-orange">Navegação</h3>
          <ul className="mt-3 space-y-2 text-sm text-cream-light/70">
            <li>
              <a href="#servicos" className="hover:text-orange">
                Serviços
              </a>
            </li>
            <li>
              <a href="#diferenciais" className="hover:text-orange">
                Diferenciais
              </a>
            </li>
            <li>
              <a href="#precos" className="hover:text-orange">
                Preços
              </a>
            </li>
            <li>
              <a href="#depoimentos" className="hover:text-orange">
                Depoimentos
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-orange">Contato</h3>
          <ul className="mt-3 space-y-3 text-sm text-cream-light/70">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-orange" />
              {site.phoneDisplay}
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-orange" />
              <span>
                {site.address}
                <br />
                {site.city}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-orange" />
              {site.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-light/10">
        <div className="mx-auto max-w-6xl px-4 py-5 text-center text-sm text-cream-light/50">
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
