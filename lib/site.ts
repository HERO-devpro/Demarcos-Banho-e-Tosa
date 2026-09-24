export const site = {
  name: 'Demarcos Luis | Banho e Tosa',
  tagline: 'o carinho que seu pet merece',
  phoneDisplay: '(21) 97147-0997',
  whatsapp: '5521971470997',
  address: 'Laranjeiras, Rio de Janeiro - RJ',
  city: 'Rio de Janeiro - RJ',
  hours: 'Seg a Sáb, 9h às 17h',
  email: 'luizdasilvademarcos@gmail.com',
}

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}
