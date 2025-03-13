import { CheckIcon } from '@heroicons/react/20/solid'
import { tiers } from "@/../data";
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';


function classNames(...classes: (string | boolean | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  return (
    <section>
      <div className="relative isolate  px-6  bg-white text-white py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-black sm:text-4xl">
            Elige el plan adecuado para ti
          </p>
        </div>
        <p className="mx-auto mt-4 max-w-1xl text-center text-lg font-medium text-[#16a34a] sm:text-xl/8">
          Selecciona un plan accesible que incluya las mejores características para optimizar tu inversión.
        </p>
        <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-10 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
                tier.featured ? '' : tierIdx === 0 ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl' : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
              )}
            >
              <h3 id={tier.id} className={classNames(tier.featured ? 'text-[#16a34a]' : 'text-green-600', 'text-base/7 font-semibold')}>
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className={classNames(tier.featured ? 'text-white' : 'text-bl', 'text-5xl font-semibold tracking-tight')}>
                  {tier.priceMonthly}
                </span>
                <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/año</span>
              </p>
              <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7')}>
                {tier.description}
              </p>
              <ul role="list" className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-8 space-y-3 text-sm/6 sm:mt-10')}>
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className={classNames(tier.featured ? 'text-green-400' : 'text-green-600', 'h-6 w-5 flex-none')} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                    asChild
                    className={cn(
                        tier.featured
                        ? 'bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium'
                        : 'bg-white text-green-600 border border-green-600 hover:bg-gray-100 focus-visible:outline-green-600',
                      'sm:mt-10 sm:text-base text-sm mt-10  px-4 py-3 focus-visible:outline-offset-2 rounded-full font-medium w-full md:w-auto'
                    )}
                  >
                <Link href={tier.href} aria-describedby={tier.id}>
                  Suscribirme
                </Link>
             </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
