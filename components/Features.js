import { GlobeAltIcon, DocumentChartBarIcon, ScaleIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Global Stablecoin Payments',
    description: 'Pay suppliers in 100+ countries instantly, 24/7/365. All transactions are immutably recorded and automatically reconciled in your Oracle GL.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Supply Chain Tokenization',
    description: 'Your accepted invoices are valuable. DeSuite tokenizes them, allowing you to instantly sell them for working capital, giving you (and your suppliers) new liquidity.',
    icon: DocumentChartBarIcon,
  },
  {
    name: 'Automated Reconciliation',
    description: 'Every on-chain transaction is mirrored in your ERP. DeSuite provides a real-time, three-way match (PO, invoice, on-chain payment), making your month-end close faster.',
    icon: ScaleIcon,
  },
  {
    name: 'Compliance & Security',
    description: 'Built with MPC wallets, role-based access controls, and pre-transaction compliance rules (KYC/AML). We provide the tools to satisfy your auditor and regulator.',
    icon: LockClosedIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Core Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A Single Platform for Your Digital Treasury
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}