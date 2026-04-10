export default function AISkaneLandingPage() {
  const pillars = [
    {
      title: "Mapping",
      text: "Vi kartlägger ekosystemet i Skåne och synliggör vilka som bygger, vilka som behöver AI och vilka resurser som redan finns.",
    },
    {
      title: "Matching",
      text: "Vi kopplar ihop offentlig sektor, företag, talanger och partners genom introduktioner, events och riktade samarbeten.",
    },
    {
      title: "Outcome",
      text: "Vi fokuserar på konkreta resultat: partnerskap, AI-projekt, rekryteringar, implementationer och nya möjligheter.",
    },
  ];

  const ecosystem = [
    "Offentlig sektor",
    "Företag",
    "Startups & entreprenörer",
    "Utvecklare & AI-talanger",
    "Investerare & finansiärer",
    "Universitet & forskning",
    "Infrastruktur & AI-verktyg",
    "Media & communities",
  ];

  const examples = [
    "Ett företag matchas med rätt AI-partner eller kompetens",
    "En startup får kontakt med pilotkund, kapital eller samarbetspartner",
    "En kommun hittar rätt väg för att ta nästa steg med AI",
    "Ett event leder till nya team, projekt eller partnerskap",
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              Regional AI-infrastruktur för Skåne
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Gör AI användbart i människors vardag i Skåne.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
              AI Skåne samlar offentlig sektor, företag och yrkesverksamma för att accelerera AI-utvecklingen i Skåne, skapa verklig nytta och bygga ett starkare regionalt AI-ekosystem.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#kontakt"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:scale-[1.02]"
              >
                Bli partner
              </a>
              <a
                href="#vad-vi-gor"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Läs mer
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm text-white/60">Fokus</p>
              <p className="mt-2 text-xl font-semibold">Människan i centrum</p>
              <p className="mt-3 text-sm leading-6 text-white/70">
                AI ska inte stanna i strategi och snack. Det ska bli användbart i vardag, verksamhet och samhälle.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm text-white/60">Modell</p>
              <p className="mt-2 text-xl font-semibold">Mapping → Matching → Outcome</p>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Vi går från synlighet och samverkan till konkreta resultat som projekt, partnerskap och implementation.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm text-white/60">Roll</p>
              <p className="mt-2 text-xl font-semibold">Neutral regional motor</p>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Vi bygger inte ännu ett konsultbolag. Vi bygger infrastrukturen för AI-samverkan i Skåne.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="vad-ar-ai-skane" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/45">Vad är AI Skåne?</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Ett regionalt initiativ som förvandlar AI-ambitioner till verklig nytta.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              AI Skåne samlar aktörer från hela regionen för att göra det enklare att förstå, använda och skala AI. Vi synliggör möjligheter, kopplar ihop rätt parter och driver arbetet mot konkreta resultat.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-medium text-white/60">Det här betyder i praktiken</p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-white/75">
              <li>• Vi hjälper aktörer att hitta rätt samarbeten</li>
              <li>• Vi skapar struktur i ett fragmenterat ekosystem</li>
              <li>• Vi gör AI mer tillgängligt för företag och offentlig sektor</li>
              <li>• Vi fokuserar på verkliga outcomes, inte bara networking</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="vad-vi-gor" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/45">Vad gör vi?</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Vi bygger rörelse i ekosystemet genom tre tydliga steg.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-[2rem] border border-white/10 bg-neutral-900 p-8 shadow-2xl shadow-black/20">
                <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70">
                  {pillar.title}
                </div>
                <h3 className="mt-5 text-2xl font-semibold">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/45">Vilka vi samlar</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Hela spektrumet av AI-ekosystemet i Skåne.</h2>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {ecosystem.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/75">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/45">AI Skåne i praktiken</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Exempel på vad vi möjliggör.</h2>
            <div className="mt-8 space-y-4">
              {examples.map((example) => (
                <div key={example} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/75">
                  {example}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">Varför behövs det?</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Skåne har potentialen — men ekosystemet behöver struktur.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-neutral-900 p-6">
                <p className="text-lg font-semibold">Fragmentering</p>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Många aktörer vill framåt med AI, men vet inte alltid vem de ska samarbeta med eller hur de ska börja.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-neutral-900 p-6">
                <p className="text-lg font-semibold">För lite output</p>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  För många initiativ stannar vid synlighet, networking och inspiration istället för verkliga resultat.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-neutral-900 p-6 sm:col-span-2">
                <p className="text-lg font-semibold">AI Skåne skapar riktning</p>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Vi samlar regionens aktörer kring en gemensam modell som gör det enklare att gå från ambition till handling — och från handling till nytta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="mx-auto max-w-5xl px-6 py-24 text-center md:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 md:p-14">
          <p className="text-sm uppercase tracking-[0.2em] text-white/45">Var med och bygg AI Skåne</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            För aktörer som vill skapa verklig AI-nytta i regionen.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            Vi söker dialog med offentlig sektor, företag, talanger, investerare, kunskapsaktörer och partners som vill bidra till ett starkare AI-ekosystem i Skåne.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@aiskane.se"
              className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:scale-[1.02]"
            >
              Kontakta AI Skåne
            </a>
            <a
              href="#vad-ar-ai-skane"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Läs om initiativet
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
