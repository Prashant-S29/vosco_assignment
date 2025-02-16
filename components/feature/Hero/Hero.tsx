import React from 'react';
import Image from 'next/image';

// icons
import { ArrowDownIcon, StarIcon } from '@/public/icons';

// components
import { SearchPropertyByCityCTA } from '../SearchPropertyByCityCTA';
import { HeroSearchPropertyCTA } from '../HeroSearchPropertyCTA';

export const Hero: React.FC = () => {
  return (
    <main data-container className="relative h-screen bg-primary-foreground pt-[150px]">
      <h1 className="text-[50px] font-semibold leading-tight">
        <span className="text-primary/30">Find The</span> Most
      </h1>
      <h1 className="text-[50px] font-semibold leading-tight">Appropriate Residence</h1>
      <section className="flex items-center gap-5">
        <h1 className="text-[50px] font-semibold leading-tight">
          For You
          <span className="text-primary/30"> To Live In</span>
        </h1>
        <p className="flex h-10 items-center justify-center rounded-full bg-primary px-3 text-primary-foreground">
          <ArrowDownIcon />
        </p>
      </section>
      <section className="mt-5">
        <SearchPropertyByCityCTA />
      </section>

      <div className="absolute right-[250px] top-1/2 max-w-[200px]">
        <section className="flex w-fit items-center gap-1 rounded-full bg-secondary p-1 pr-4">
          <div className="aspect-square w-[20px] overflow-hidden rounded-full">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="person"
              width={40}
              height={40}
            />
          </div>
          <p className="text-xs font-medium">Top Testimonial</p>
        </section>
        <p className="mt-2 line-clamp-3 pl-5 text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, omnis.
        </p>
        <p className="mt-1 flex items-center gap-1 pl-5 text-xs font-medium">
          <StarIcon /> 4.8
        </p>
      </div>

      <div data-container className="absolute bottom-5 left-0 w-full py-4">
        <HeroSearchPropertyCTA />
      </div>
    </main>
  );
};
