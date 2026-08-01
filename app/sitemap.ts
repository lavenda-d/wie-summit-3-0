import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wie-summit-3-0.vercel.app'
  const routes = [
    '',
    '/about',
    '/program',
    '/sponsorship',
    '/previous-summits',
    '/team',
    '/contact',
    '/registration',
    '/privacy',
    '/terms',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }))
}
