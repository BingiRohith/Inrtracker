const portalCards = [
  { title: "Doctor Portal", text: "A future workspace for longitudinal patient records, visits, and clinical notes." },
  { title: "Patient Portal", text: "A future mobile-friendly view for patient-provided updates and records." },
];

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-8 sm:px-10">
      <header className="flex items-center justify-between border-b border-slate-200 pb-6">
        <div>
          <p className="text-sm font-semibold tracking-wide text-teal-700">VALVETRACK</p>
          <p className="mt-1 text-sm text-slate-600">Anticoagulation record management</p>
        </div>
        <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-800">Sprint 0</span>
      </header>

      <section className="py-16 sm:py-24">
        <p className="text-sm font-semibold text-teal-700">Clinical records, clearly organized</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          A secure foundation for anticoagulation monitoring.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          ValveTrack will help clinicians and patients record, organize, and review provided information over time.
          It does not prescribe medication or make clinical decisions.
        </p>
      </section>

      <section aria-label="Future portals" className="grid gap-5 pb-12 md:grid-cols-2">
        {portalCards.map((card) => (
          <article key={card.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{card.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{card.text}</p>
            <p className="mt-5 text-sm font-medium text-teal-700">Planned in a future sprint</p>
          </article>
        ))}
      </section>
    </main>
  );
}
