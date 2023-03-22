import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '5taipc51',
  dataset: 'production',
  apiVersion: '2023-03-20',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY,
  ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);