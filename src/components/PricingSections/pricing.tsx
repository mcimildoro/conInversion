import { CheckIcon } from '@heroicons/react/20/solid'
import { tiers } from "@/../data";



function classNames(...classes: (string | boolean | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  return (
    <section>
      <div className="relative isolate  px-6  bg-[#1abc9c] text-white py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Elige el plan adecuado para ti
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600 sm:text-xl/8">
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
              <h3 id={tier.id} className={classNames(tier.featured ? 'text-green-400' : 'text-green-600', 'text-base/7 font-semibold')}>
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className={classNames(tier.featured ? 'text-white' : 'text-gray-900', 'text-5xl font-semibold tracking-tight')}>
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
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured ? 'bg-green-500 text-white shadow-xs hover:bg-green-400 focus-visible:outline-green-500' : 'text-green-600 ring-1 ring-green-200 ring-inset hover:ring-green-300 focus-visible:outline-green-600',
                  'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
                )}
              >
                Suscribirme
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
