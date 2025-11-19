export default function Solution() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">The Solution</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            DeSuite: Your Oracle ERP, Now Web3-Native.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            DeSuite is a secure, compliant, and non-disruptive layer that gives your existing Oracle system access to the speed and liquidity of blockchain rails.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <ol className="space-y-12">
            
            {/* Step 1 */}
            <li className="flex flex-col lg:flex-row items-start lg:items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-600 text-white">
                  <span className="text-xl font-bold">1</span>
                </div>
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-8">
                <h3 className="text-xl font-semibold leading-7 text-gray-900">CONNECT: Native Oracle Integration</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  DeSuite plugs directly into your Oracle environment as a native module. It reads and writes to your General Ledger and SCM modules just like any other Oracle component.
                </p>
              </div>
            </li>

            {/* Step 2 */}
            <li className="flex flex-col lg:flex-row items-start lg:items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-600 text-white">
                  <span className="text-xl font-bold">2</span>
                </div>
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-8">
                <h3 className="text-xl font-semibold leading-7 text-gray-900">TRANSACT: Automate Digital Asset Workflows</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Use our platform to manage stablecoin payments, treasury ops, and payroll. Set rules to automatically pay suppliers in USDC upon goods receipt in your Oracle SCM.
                </p>
              </div>
            </li>

            {/* Step 3 */}
            <li className="flex flex-col lg:flex-row items-start lg:items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-600 text-white">
                  <span className="text-xl font-bold">3</span>
                </div>
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-8">
                <h3 className="text-xl font-semibold leading-7 text-gray-900">TOKENIZE: Unlock New Liquidity</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Transform real-world assets (RWAs) like accepted invoices or purchase orders into on-chain tokens. Use them as collateral or sell them instantly on private credit markets.
                </p>
              </div>
            </li>
            
          </ol>
        </div>
      </div>
    </div>
  );
}