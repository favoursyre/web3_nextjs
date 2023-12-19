///This is the robots file

//Libraies-->
import { MetadataRoute } from 'next';
import { domainName } from '@/config/utils'

///Commencing the code
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/flip-coin/'],
    },
    sitemap: `${domainName}/sitemap.xml`,
  }
}