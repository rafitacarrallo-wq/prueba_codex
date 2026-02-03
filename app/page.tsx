const stats = [
  { label: "Aplicaciones activas", value: "18" },
  { label: "Entrevistas", value: "4" },
  { label: "Ofertas", value: "1" },
  { label: "Seguimientos esta semana", value: "7" }
];

const nextSteps = [
  {
    title: "Enviar follow-up",
    company: "Figma",
    date: "Mañana · 10:00"
  },
  {
    title: "Preparar entrevista",
    company: "Vercel",
    date: "Viernes · 14:30"
  },
  {
    title: "Actualizar CV",
    company: "Notion",
    date: "Lunes · 09:00"
  }
];

const pipeline = [
  { label: "Guardadas", count: 6 },
  { label: "Aplicadas", count: 8 },
  { label: "Entrevista", count: 3 },
  { label: "Oferta", count: 1 },
  { label: "Rechazadas", count: 2 }
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <aside className="hidden w-64 flex-col border-r border-border bg-surface px-6 py-8 md:flex">
        <div className="text-sm uppercase tracking-[0.2em] text-muted">Tracker</div>
        <div className="mt-2 text-2xl font-semibold">Aplicaciones</div>
        <nav className="mt-10 space-y-3 text-sm">
          {[
            "Dashboard",
            "Kanban",
            "Contactos",
            "Watchlist",
            "Calendario",
            "Configuración"
          ].map((item) => (
            <button
              key={item}
              className="flex w-full items-center justify-between rounded-lg border border-transparent px-3 py-2 text-left transition hover:border-border hover:bg-[#0f172a]"
              type="button"
            >
              <span>{item}</span>
              <span className="text-xs text-muted">↗</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 px-6 py-10 md:px-12">
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Dashboard</p>
            <h1 className="mt-2 text-3xl font-semibold">Tu pipeline en tiempo real</h1>
            <p className="mt-2 max-w-xl text-sm text-muted">
              Gestiona aplicaciones, contactos y próximos pasos con una experiencia limpia y
              enfocada.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              className="rounded-full border border-border px-4 py-2 text-sm text-muted transition hover:border-foreground hover:text-foreground"
              type="button"
            >
              Importar CSV
            </button>
            <button
              className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white shadow-glow"
              type="button"
            >
              Nueva aplicación
            </button>
          </div>
        </header>

        <section className="mt-10 grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-surface p-5 shadow-subtle"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted">{stat.label}</p>
              <p className="mt-3 text-3xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-3xl border border-border bg-surface p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">Pipeline</p>
                <h2 className="mt-2 text-xl font-semibold">Aplicaciones por estado</h2>
              </div>
              <button
                className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                type="button"
              >
                Ver Kanban
              </button>
            </div>
            <div className="mt-6 space-y-4">
              {pipeline.map((stage) => (
                <div key={stage.label} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{stage.label}</p>
                    <p className="text-xs text-muted">{stage.count} oportunidades</p>
                  </div>
                  <div className="h-2 w-40 rounded-full bg-[#0b1220]">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${Math.min(stage.count * 12, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-surface p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Próximos pasos</p>
              <h2 className="mt-2 text-xl font-semibold">Acciones que requieren atención</h2>
            </div>
            <div className="mt-6 space-y-4">
              {nextSteps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-border bg-[#0b1220] p-4"
                >
                  <p className="text-sm font-semibold">{step.title}</p>
                  <p className="mt-1 text-xs text-muted">{step.company}</p>
                  <p className="mt-3 text-xs text-muted">{step.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-border bg-surface p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Resumen rápido</p>
              <h2 className="mt-2 text-xl font-semibold">Aplicaciones recientes</h2>
            </div>
            <button
              className="rounded-full border border-border px-4 py-2 text-xs text-muted"
              type="button"
            >
              Ver todas
            </button>
          </div>
          <div className="mt-6 grid gap-3">
            {[
              { company: "Linear", role: "Product Designer", status: "Entrevista" },
              { company: "Airbnb", role: "Senior Frontend", status: "Aplicada" },
              { company: "Stripe", role: "Growth PM", status: "Guardada" }
            ].map((item) => (
              <div
                key={item.company}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-[#0b1220] p-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-sm font-semibold">{item.company}</p>
                  <p className="text-xs text-muted">{item.role}</p>
                </div>
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
