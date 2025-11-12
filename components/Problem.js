import { ClockIcon, BuildingLibraryIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Manual & Slow Settlements',
    description: 'Stop waiting 3-5 business days for cross-border payments. Manual reconciliation burns hundreds of hours and leaves your global treasury flying blind.',
    icon: ClockIcon,
  },
  {
    name: 'Trapped Working Capital',
    description: 'Your supply chain is filled with valuable, static assets—invoices, purchase orders, inventory—locked in your ERP and invisible to global capital markets.',
    icon: BuildingLibraryIcon,
  },
  {
    name: 'Opaque Fees & Risk',
    description: 'Correspondent bank fees, FX volatility, and counterparty risk create a black box of inefficiency that silently erodes your bottom line.',
    icon: ShieldExclamationIcon,
  },
]

export default function Problem() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">The Problem</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your ERP is Powerful. Your Financial Rails Are Not.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Enterprise finance is stuck with 1970s infrastructure. This inefficiency is a direct drain on your time, capital, and operational agility.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}