import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://stockaveragecalculators.com'
  
  const lastModified = new Date()

  // Base paths
  const paths = [
    '',
    '/how-to-calculate-average-stock-price',
    '/average-stock-price-after-buying-more',
    '/stock-averaging-down-calculator',
    '/calculate-average-stock-price-for-loss-recovery',
    '/average-cost-vs-average-price',
  ]

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }))
}
