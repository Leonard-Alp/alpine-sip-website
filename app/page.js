export default function AlpineSipLandingPage() {
  const images = {
    hero: "/images/alpine-hero-ski.jpg",
    product: "/images/alpine-product-mountains.jpg",
    everywhere: "/images/alpine-beach-can.jpg",
    memory: "/images/alpine-memory-ski.jpg",
    luxury: "/images/alpine-luxury-red.jpg",
  };

  return (
    <main className="bg-[#F4F6F4] text-[#1C2B39] selection:bg-[#D7262E] selection:text-white">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .section-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,10,11,0.32), rgba(10,10,11,0.08));
        }
      `}</style>

      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div className="rounded-full border border-white/25 bg-white/70 px-4 py-2 backdrop-blur-md shadow-sm">
            <span className="text-sm font-semibold tracking-[0.22em] text-[#1C2B39]">
              ALPINE SIP
            </span>
          </div>

          <nav className="hidden items-center gap-3 md:flex">
            <a
              href="#story"
              className="rounded-full border border-white/25 bg-white/70 px-4 py-2 text-sm text-[#1C2B39] backdrop-blur-md transition hover:bg-white"
            >
              Story
            </a>
            <a
              href="#launch"
              className="rounded-full bg-[#D7262E] px-5 py-2 text-sm font-medium text-white shadow-[0_10px_30px_rgba(215,38,46,0.28)] transition hover:translate-y-[-1px] hover:shadow-[0_14px_34px_rgba(215,38,46,0.36)]"
            >
              Join the drop
            </a>
          </nav>
        </div>
      </header>

      <section className="relative min-h-screen overflow-hidden">
        <div
          className="section-image absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images.hero})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#F4F6F4]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-16 pt-32 md:px-8 md:pb-24 lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-white/90 md:text-sm">
              Alpine lifestyle • launching soon
            </p>
            <h1 className="max-w-2xl text-5xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] text-white drop-shadow-sm md:text-7xl lg:text-8xl">
              The taste of your last ski day
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/85 md:text-lg">
              A new take on Skiwasser — crisp, cinematic and designed to feel at
              home from the Alps to everywhere else.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#launch"
                className="inline-flex items-center justify-center rounded-full bg-[#D7262E] px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-white shadow-[0_12px_34px_rgba(215,38,46,0.28)] transition hover:translate-y-[-1px]"
              >
                Join the first drop
              </a>
              <a
                href="#story"
                className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Explore the story
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="relative z-10 bg-[#F4F6F4] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#D7262E]">
              Inspired by the Alps
            </p>
            <h2 className="max-w-xl text-4xl font-semibold uppercase leading-tight tracking-[-0.03em] md:text-6xl">
              Made for everywhere
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#4F5B68] md:text-lg">
              Alpine Sip captures the familiar taste and feeling of a perfect ski
              day — clean, bright and instantly transportive.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm uppercase tracking-[0.18em] text-[#1C2B39]">
              <span className="rounded-full border border-[#1C2B39]/12 bg-white px-4 py-2 shadow-sm">
                Skiwasser
              </span>
              <span className="rounded-full border border-[#1C2B39]/12 bg-white px-4 py-2 shadow-sm">
                Raspberry
              </span>
              <span className="rounded-full border border-[#1C2B39]/12 bg-white px-4 py-2 shadow-sm">
                Lemon
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(28,43,57,0.12)]">
            <img
              src={images.product}
              alt="Alpine Sip can in front of snowy mountains"
              className="h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(28,43,57,0.12)]">
            <img
              src={images.everywhere}
              alt="Alpine Sip can on the beach"
              className="h-[560px] w-full object-cover"
            />
          </div>

          <div className="pb-2 lg:pl-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#D7262E]">
              Same feeling
            </p>
            <h2 className="text-4xl font-semibold uppercase leading-[0.98] tracking-[-0.04em] md:text-6xl">
              Same taste. Different places.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-[#4F5B68] md:text-lg">
              Built around one recognizable moment — and meant to travel far
              beyond the mountain.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6F4] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#D7262E]">
              Memory, bottled
            </p>
            <h2 className="max-w-lg text-4xl font-semibold uppercase leading-[1] tracking-[-0.04em] md:text-6xl">
              What did your last ski day taste like?
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-[#4F5B68] md:text-lg">
              The cold air. The late sun. The first sip after the final run.
              Alpine Sip is made to bring that exact energy back.
            </p>
          </div>

          <div className="order-1 overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(28,43,57,0.12)] lg:order-2">
            <img
              src={images.memory}
              alt="Relaxed ski scene in the snow"
              className="h-[560px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0A0A0B] py-20 text-white md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: `url(${images.luxury})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,11,0.92),rgba(10,10,11,0.72),rgba(10,10,11,0.88))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(215,38,46,0.18),transparent_38%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1fr_0.95fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#D7262E]">
              Signature contrast
            </p>
            <h2 className="max-w-xl text-4xl font-semibold uppercase leading-[0.98] tracking-[-0.04em] md:text-6xl">
              Not just a drink. A moment.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/72 md:text-lg">
              Alpine by nature. Elevated by atmosphere. The cold clarity of the
              slopes, reimagined with a darker, more exclusive edge.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="space-y-4">
              <div className="h-px w-16 bg-[#D7262E]" />
              <p className="text-sm uppercase tracking-[0.24em] text-white/60">
                Visual direction
              </p>
              <p className="text-2xl font-medium leading-relaxed text-white/92">
                Cold base. Warm accent. Modern alpine identity with a cinematic
                luxury break.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="launch" className="bg-[#F4F6F4] py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#D7262E]">
            First drop
          </p>
          <h2 className="text-4xl font-semibold uppercase leading-[0.98] tracking-[-0.04em] md:text-6xl">
            Coming soon
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#4F5B68] md:text-lg">
            Be first to hear when Alpine Sip launches. Stay close to the drop and
            follow the story as it unfolds.
          </p>

          <form className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Your email"
              className="h-14 w-full rounded-full border border-[#1C2B39]/12 bg-white px-6 text-base text-[#1C2B39] outline-none ring-0 placeholder:text-[#7D8794] shadow-sm transition focus:border-[#D7262E]"
            />
            <button
              type="submit"
              className="h-14 rounded-full bg-[#D7262E] px-7 text-sm font-medium uppercase tracking-[0.18em] text-white shadow-[0_12px_34px_rgba(215,38,46,0.28)] transition hover:translate-y-[-1px]"
            >
              Notify me
            </button>
          </form>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block text-sm uppercase tracking-[0.22em] text-[#1C2B39]/70 transition hover:text-[#D7262E]"
          >
            Instagram
          </a>
        </div>
      </section>
    </main>
  );
}
