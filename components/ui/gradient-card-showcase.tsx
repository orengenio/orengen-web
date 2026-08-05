import type { CSSProperties } from "react";

export type GradientCardItem = {
  eyebrow: string;
  title: string;
  description: string;
  price: string;
  href: string;
  cta: string;
  gradientFrom: string;
  gradientTo: string;
  badge?: string;
};

type GradientCardShowcaseProps = {
  cards: GradientCardItem[];
  ariaLabel?: string;
};

/**
 * OrenGen adaptation of 21st.dev's Gradient Card Showcase.
 * The skew/glow/glass interaction is preserved, while its palette, hierarchy,
 * focus behavior, and mobile layout are rebuilt for the OrenGen brand system.
 */
export default function GradientCardShowcase({
  cards,
  ariaLabel = "Featured options",
}: GradientCardShowcaseProps) {
  return (
    <div
      className="grid grid-cols-1 gap-x-5 gap-y-1 lg:grid-cols-3"
      role="list"
      aria-label={ariaLabel}
    >
      {cards.map((card, index) => {
        const gradientStyle: CSSProperties = {
          backgroundImage: `linear-gradient(315deg, ${card.gradientFrom}, ${card.gradientTo})`,
        };

        return (
          <article
            key={card.title}
            className="group relative isolate mx-auto flex min-h-[470px] w-full max-w-[390px] items-center px-3 py-9 motion-reduce:transform-none"
            role="listitem"
          >
            <span
              aria-hidden="true"
              className="absolute left-[8%] top-7 -z-20 h-[calc(100%-3.5rem)] w-[84%] skew-x-0 rounded-[30px] opacity-95 shadow-[inset_0_1px_0_rgba(255,255,255,.45)] transition-all duration-700 ease-out md:left-[23%] md:w-[54%] md:skew-x-[15deg] group-hover:left-[7%] group-hover:w-[86%] group-hover:skew-x-0 group-focus-within:left-[7%] group-focus-within:w-[86%] group-focus-within:skew-x-0 motion-reduce:transition-none"
              style={gradientStyle}
            />
            <span
              aria-hidden="true"
              className="absolute left-[8%] top-7 -z-30 h-[calc(100%-3.5rem)] w-[84%] skew-x-0 rounded-[30px] opacity-70 blur-[34px] transition-all duration-700 ease-out md:left-[23%] md:w-[54%] md:skew-x-[15deg] group-hover:left-[7%] group-hover:w-[86%] group-hover:skew-x-0 group-hover:opacity-90 group-focus-within:left-[7%] group-focus-within:w-[86%] group-focus-within:skew-x-0 motion-reduce:transition-none"
              style={gradientStyle}
            />

            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 overflow-visible"
            >
              <span
                className="absolute left-9 top-2 h-20 w-20 rounded-[22px] border border-white/20 bg-white/10 opacity-35 shadow-[0_18px_45px_rgba(0,0,0,.22)] backdrop-blur-xl transition-all duration-700 group-hover:-left-1 group-hover:-top-3 group-hover:h-24 group-hover:w-24 group-hover:opacity-100 group-focus-within:-left-1 group-focus-within:-top-3 group-focus-within:opacity-100 md:opacity-0 md:group-hover:left-12 md:group-hover:-top-2 md:group-focus-within:left-12 motion-safe:animate-og-float motion-reduce:transition-none"
                style={{ animationDelay: `${index * -0.55}s` }}
              />
              <span
                className="absolute bottom-2 right-9 h-16 w-16 rounded-[20px] border border-white/20 bg-white/10 opacity-25 shadow-[0_18px_45px_rgba(0,0,0,.2)] backdrop-blur-xl transition-all duration-700 group-hover:-bottom-4 group-hover:right-2 group-hover:h-24 group-hover:w-24 group-hover:opacity-100 group-focus-within:-bottom-4 group-focus-within:right-2 group-focus-within:opacity-100 md:opacity-0 motion-safe:animate-og-float motion-reduce:transition-none"
                style={{ animationDelay: `${-1.2 - index * 0.45}s` }}
              />
            </span>

            <div className="relative z-20 flex min-h-[350px] w-full flex-col overflow-hidden rounded-[26px] border border-white/20 bg-[linear-gradient(145deg,rgba(255,255,255,.16),rgba(255,255,255,.055)_42%,rgba(0,15,31,.42))] px-7 py-8 text-white shadow-[0_28px_70px_rgba(0,13,28,.4),inset_0_1px_0_rgba(255,255,255,.3)] backdrop-blur-[18px] transition-all duration-700 ease-out group-hover:-translate-x-3 group-hover:-translate-y-2 group-hover:border-white/35 group-hover:px-8 group-hover:py-10 group-focus-within:-translate-x-3 group-focus-within:-translate-y-2 group-focus-within:border-white/35 motion-reduce:transform-none motion-reduce:transition-none">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 motion-safe:animate-og-sheen motion-reduce:hidden"
              />
              <div className="relative z-10 flex items-start justify-between gap-3">
                <span className="text-[11px] font-black uppercase tracking-[.18em] text-[#ffb27c]">
                  {card.eyebrow}
                </span>
                {card.badge && (
                  <span className="rounded-full border border-[#ffb27c]/50 bg-[#cc5500]/30 px-2.5 py-1 text-[10px] font-black uppercase tracking-[.12em] text-white">
                    {card.badge}
                  </span>
                )}
              </div>

              <h3 className="relative z-10 mt-5 !text-[clamp(1.55rem,2.3vw,2rem)] !font-black !leading-[1.02] !tracking-[-.045em] !text-white">
                {card.title}
              </h3>
              <p className="relative z-10 mt-5 !text-[15px] !leading-7 !text-[#e7eef6]">
                {card.description}
              </p>

              <div className="relative z-10 mt-auto pt-7">
                <div className="mb-4 border-l-2 border-[#ff7a1a] pl-3 text-sm font-bold text-white">
                  {card.price}
                </div>
                <a
                  href={card.href}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white bg-white px-4 py-2.5 text-sm font-black text-[#00254b] shadow-[0_12px_30px_rgba(0,0,0,.2)] transition duration-300 hover:border-[#ffb27c] hover:bg-[#ffcfaa] hover:shadow-[0_14px_34px_rgba(204,85,0,.3)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#ff8a3d] motion-reduce:transition-none"
                  aria-label={`${card.cta}: ${card.title}`}
                >
                  {card.cta}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
