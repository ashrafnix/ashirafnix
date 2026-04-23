export default function Loading() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="flex items-center gap-4 text-slate-300">
        <span className="w-3 h-3 rounded-full bg-indigo-500 animate-ping" />
        <span className="text-sm md:text-base font-mono uppercase tracking-[0.2em]">
          Loading experience
        </span>
      </div>
    </section>
  )
}
