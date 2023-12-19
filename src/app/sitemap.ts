///This refers to the sitemap configurations

///Libraries -->
import { MetadataRoute } from 'next'
import { domainName } from '@/config/utils'
 
///Commencing code -->
export default function sitemap(): MetadataRoute.Sitemap {

  return [
    {
      url: domainName,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    }
  ]
}