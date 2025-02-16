import { CityAPIResponseType } from '@/types/api/city/req_res.types';
import * as cheerio from 'cheerio';

export async function scrapeMagicBricks(htmlBlob: string): Promise<CityAPIResponseType[]> {
  try {
    const $ = cheerio.load(htmlBlob);
    const properties: CityAPIResponseType[] = [];

    $('.projdis__prjcard__leftcont').each((index, element) => {
      const propertyName = $(element).find('.mghome__prjblk__prjname').text()?.trim() || '';

      let propertyImage = $(element).find('.mghome__prjblk__imgsec__img').attr('src') || '';

      const dataSrc = $(element).find('.mghome__prjblk__imgsec__img').attr('data-src') || '';

      if (propertyImage.startsWith('data:image')) {
        propertyImage = dataSrc;
      }

      const propertyLocation = $(element).find('.mghome__prjblk__locname').text()?.trim() || '';
      const propertyPriceRange = $(element).find('.mghome__prjblk__price').text()?.trim() || '';
      const linkToMoreInfo = $(element).find('.mghome__prjblk__prjname').attr('href') || '';

      properties.push({
        propertyName,
        propertyImage,
        propertyLocation,
        propertyPriceRange,
        linkToMoreInfo,
      });
    });

    console.log('properties from scrapeMagicBricks', properties);

    return properties;
  } catch (error) {
    console.error('Error scraping MagicBricks:', error);
    return []; // Or throw the error, depending on your needs
  }
}
