'use client'

import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Logo } from '@/components/paw-logo'
import { site, whatsappLink } from '@/lib/site'

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#precos', label: 'Preços' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-cream-dark/60 bg-cream-light/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#inicio" aria-label={`${site.name} - início`}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ink/70 transition-colors hover:text-navy"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={whatsappLink('Olá! Gostaria de agendar um horário para o meu pet.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-bold text-navy shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-orange-light"
          >
            <Phone className="h-4 w-4" />
            Agendar agora
          </a>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-navy md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-cream-dark/60 bg-cream-light md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-semibold text-ink/80 hover:bg-cream"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappLink('Olá! Gostaria de agendar um horário para o meu pet.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-orange px-5 py-3 text-base font-bold text-navy"
            >
              <Phone className="h-4 w-4" />
              Agendar agora
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
