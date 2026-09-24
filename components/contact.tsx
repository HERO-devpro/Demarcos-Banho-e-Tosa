'use client'

import { useState } from 'react'
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react'
import Image from 'next/image'
import { site, whatsappLink } from '@/lib/site'

const services = ['Banho', 'Tosa', 'Corte de Unhas', 'Limpeza de ouvido', 'Tosa Especializada']

export function Contact() {
  const [name, setName] = useState('')
  const [pet, setPet] = useState('')
  const [service, setService] = useState(services[0])

  const message = `Olá! Meu nome é ${name || '[seu nome]'} e gostaria de agendar o serviço de ${service} para o meu pet ${pet || '[nome do pet]'}.`

  return (
    <section id="contato" className="bg-cream-light py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-stretch gap-8 px-4 lg:grid-cols-2">
        {/* info + image */}
        <div className="flex flex-col overflow-hidden rounded-3xl bg-navy text-cream-light">
          <div className="p-8 md:p-10">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
              Vamos cuidar do seu pet?
            </h2>
            <p className="mt-3 text-cream-light/70">
              Agende pelo WhatsApp ou venha nos visitar. Será um prazer receber você e seu amiguinho!
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange text-navy">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-cream-light/60">Telefone / WhatsApp</p>
                  <p className="font-display text-lg font-bold">{site.phoneDisplay}</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange text-navy">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-cream-light/60">Endereço</p>
                  <p className="font-display text-lg font-bold">{site.address}</p>
                  <p className="text-cream-light/70">{site.city}</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange text-navy">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-cream-light/60">Horário</p>
                  <p className="font-display text-lg font-bold">{site.hours}</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange text-navy">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-cream-light/60">E-mail</p>
                  <p className="font-display text-lg font-bold break-all">{site.email}</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative mt-auto h-48 w-full">
            <Image
              src="/grooming-2.png"
              alt="Cãozinho tomando banho com espuma no pet spa"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* form */}
        <div className="rounded-3xl border border-cream-dark/60 bg-cream p-8 md:p-10">
          <h3 className="font-display text-2xl font-extrabold text-navy">Agende em segundos</h3>
          <p className="mt-2 text-ink/60">
            Preencha os campos e envie direto para o nosso WhatsApp.
          </p>

          <form
            className="mt-6 space-y-5"
            onSubmit={(e) => {
              e.preventDefault()
              window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
            }}
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-navy">
                Seu nome
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex.: Ana Souza"
                className="w-full rounded-xl border border-cream-dark bg-cream-light px-4 py-3 text-ink outline-none transition-colors focus:border-orange focus:ring-2 focus:ring-orange/30"
              />
            </div>
            <div>
              <label htmlFor="pet" className="mb-1.5 block text-sm font-bold text-navy">
                Nome do pet
              </label>
              <input
                id="pet"
                value={pet}
                onChange={(e) => setPet(e.target.value)}
                placeholder="Ex.: Bidu"
                className="w-full rounded-xl border border-cream-dark bg-cream-light px-4 py-3 text-ink outline-none transition-colors focus:border-orange focus:ring-2 focus:ring-orange/30"
              />
            </div>
            <div>
              <label htmlFor="service" className="mb-1.5 block text-sm font-bold text-navy">
                Serviço desejado
              </label>
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-xl border border-cream-dark bg-cream-light px-4 py-3 text-ink outline-none transition-colors focus:border-orange focus:ring-2 focus:ring-orange/30"
              >
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange px-6 py-3.5 text-base font-extrabold text-navy shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-orange-light"
            >
              <Send className="h-5 w-5" />
              Enviar pelo WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
