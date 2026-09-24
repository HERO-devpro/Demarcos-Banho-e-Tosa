import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Features } from '@/components/features'
import { Pricing } from '@/components/pricing'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFab } from '@/components/whatsapp-fab'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Features />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  )
}
