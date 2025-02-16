import React from 'react';
import { CityPageWithSlug } from './slugPage';
import { generateSeo } from '@/utils/generateSeo';
import { Metadata } from 'next';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateSeo({
    title: `${(await params.then((p) => p.slug)).charAt(0).toUpperCase() + (await params.then((p) => p.slug)).slice(1)}`,
    description: 'This is the solution for the assignment by Vocso',
    url: `https://vocso-assignment-three.vercel.app/city/${await params.then((p) => p.slug)}`,
  });
}

const CityPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  return <CityPageWithSlug slug={slug} />;
};

export default CityPage;
