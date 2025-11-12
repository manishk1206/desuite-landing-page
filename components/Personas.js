export default function Personas() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">For Your Entire Organization</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Built for Your Key Business Units
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-3">
          
          {/* Persona 1: CFO */}
          <div className="flex flex-col rounded-2xl p-8 ring-1 ring-gray-200">
            <h3 className="text-lg font-semibold leading-7 text-gray-900">For the CFO</h3>
            <p className="mt-4 text-base leading-7 text-gray-600">
              "Get a real-time, 24/7 view of your global cash. Reduce FX exposure, cut settlement times by 99%, and turn your supply chain into a new source of liquidity."
            </p>
          </div>

          {/* Persona 2: CIO / IT */}
          <div className="flex flex-col rounded-2xl p-8 ring-1 ring-gray-200">
            <h3 className="text-lg font-semibold leading-7 text-gray-900">For the CIO / Head of IT</h3>
            <p className="mt-4 text-base leading-7 text-gray-600">
              "Modernize your tech stack without disruption. DeSuite is a fully-managed service that integrates natively with your existing Oracle footprint. Add blockchain capabilities without the headache."
            </p>
          </div>

          {/* Persona 3: Supply Chain */}
          <div className="flex flex-col rounded-2xl p-8 ring-1 ring-gray-200">
            <h3 className="text-lg font-semibold leading-7 text-gray-900">For the Head of Supply Chain</h3>
            <p className="mt-4 text-base leading-7 text-gray-600">
              "Strengthen supplier relationships with instant payments. Offer flexible, on-demand financing to your entire ecosystem, backed by the assets you already track in Oracle."
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}