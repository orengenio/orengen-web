"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  OFFICIAL_FAVICON_WHITE_URL,
  OFFICIAL_LOGO_WHITE_URL,
} from "@/lib/brandAssets";
import {
  COMMAND_CATEGORIES,
  commandCategoryForPath,
  type CommandCategoryId,
  type CommandDestination,
} from "@/lib/siteNavigation";
import CommandVisual from "./CommandVisual";

const LANGUAGE_CODES = ["en", "es", "fr", "de", "pt", "zh-CN", "ja", "ar", "hi"];

type SearchResult = {
  categoryId: CommandCategoryId;
  categoryLabel: string;
  groupLabel: string;
  item: CommandDestination;
};

function DestinationLane({
  item,
  index,
  categoryLabel,
  current,
  onInline,
  onNavigate,
}: {
  item: CommandDestination;
  index: number;
  categoryLabel?: string;
  current: boolean;
  onInline: (event: React.MouseEvent<HTMLAnchorElement>, item: CommandDestination) => void;
  onNavigate: () => void;
}) {
  return (
    <article className={`og-command-lane${current ? " is-current" : ""}`}>
      <div className="og-command-lane__number" aria-hidden="true">
        {(index + 1).toString().padStart(2, "0")}
      </div>
      <div className="og-command-lane__body">
        <div className="og-command-lane__topline">
          <div>
          {categoryLabel && <small className="og-command-card__category">{categoryLabel}</small>}
          <h3>{item.title}</h3>
          </div>
          {item.badge && <span className="og-command-card__badge">{item.badge}</span>}
        </div>
        <p>{item.description}</p>
        {item.price && <div className="og-command-card__price">{item.price}</div>}
      </div>
      <div className="og-command-card__actions">
          <a
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            aria-current={current ? "page" : undefined}
            onClick={onNavigate}
          >
            {item.external ? "Open portal ↗" : "Open full page →"}
          </a>
          {item.inline && (
            <a
              className="is-secondary"
              href={`/${item.inline.hash}`}
              onClick={(event) => onInline(event, item)}
            >
              Explore inline
            </a>
          )}
      </div>
    </article>
  );
}

export default function CommandMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeCategoryId, setActiveCategoryId] = useState<CommandCategoryId>(() =>
    commandCategoryForPath(pathname),
  );
  const deckRef = useRef<HTMLElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const activeCategory =
    COMMAND_CATEGORIES.find((category) => category.id === activeCategoryId) ??
    COMMAND_CATEGORIES[0];

  const searchResults = useMemo<SearchResult[]>(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];

    return COMMAND_CATEGORIES.flatMap((category) =>
      category.groups.flatMap((group) =>
        group.items
          .filter((item) =>
            [item.title, item.description, item.badge, item.price, category.label, group.label]
              .filter(Boolean)
              .join(" ")
              .toLowerCase()
              .includes(normalized),
          )
          .map((item) => ({
            categoryId: category.id,
            categoryLabel: category.label,
            groupLabel: group.label,
            item,
          })),
      ),
    );
  }, [query]);

  useEffect(() => {
    setActiveCategoryId(commandCategoryForPath(pathname));
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    document.documentElement.classList.add("og-command-locked");
    const focusTimer = window.setTimeout(() => searchRef.current?.focus(), 120);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !deckRef.current) return;
      const focusable = Array.from(
        deckRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("hidden"));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      document.documentElement.classList.remove("og-command-locked");
      previousFocusRef.current?.focus({ preventScroll: true });
    };
  }, [open]);

  const openMenu = (categoryId?: CommandCategoryId) => {
    if (categoryId) setActiveCategoryId(categoryId);
    setQuery("");
    setOpen(true);
  };

  const chooseCategory = (categoryId: CommandCategoryId) => {
    setActiveCategoryId(categoryId);
    setQuery("");
    setOpen(true);
    window.setTimeout(() => searchRef.current?.focus(), 60);
  };

  const closeMenu = () => {
    setOpen(false);
    setQuery("");
  };

  const handleInline = (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: CommandDestination,
  ) => {
    if (!item.inline) return;
    closeMenu();

    if (pathname === "/") {
      event.preventDefault();
      window.history.replaceState(null, "", item.inline.hash);
      window.dispatchEvent(
        new CustomEvent("orengen:select-inline", { detail: item.inline }),
      );
      window.setTimeout(
        () => document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" }),
        80,
      );
    }
  };

  const isCurrent = (item: CommandDestination) =>
    !item.external &&
    item.href !== "/" &&
    (pathname === item.href || pathname.startsWith(`${item.href}/`));

  return (
    <>
      <header className="og-command-topbar" aria-label="OrenGen site header">
        <div className="og-command-topbar__inner">
          <button
            type="button"
            className="og-command-mobile-launch"
            aria-label="Open OrenGen command menu"
            aria-expanded={open}
            aria-controls="orengen-command-deck"
            onClick={() => openMenu()}
          >
            <img src={OFFICIAL_FAVICON_WHITE_URL} alt="" />
            <span className="og-command-mobile-launch__copy">
              <b>Explore</b>
              <small>Open menu</small>
            </span>
          </button>

          <a className="og-command-topbar__brand" href="/" aria-label="OrenGen Worldwide home">
            <img src={OFFICIAL_LOGO_WHITE_URL} alt="OrenGen Worldwide" fetchPriority="high" />
          </a>

          <button
            className="og-command-topbar__explore"
            type="button"
            aria-expanded={open}
            aria-controls="orengen-command-deck"
            onClick={() => openMenu()}
          >
            <span className="og-command-live-dot" />
            <span>
              <small>Worldwide command</small>
              <b>{activeCategory.label}</b>
            </span>
            <strong>EXPLORE</strong>
          </button>

          <nav className="og-command-topbar__actions" aria-label="Quick actions">
            <button type="button" onClick={() => openMenu()} aria-label="Search OrenGen">
              Search
            </button>
            <a href="/login">Sign In</a>
            <a
              className="is-primary"
              href="/book"
            >
              Book a Call
            </a>
          </nav>
        </div>
      </header>

      <div className={`og-command-root${open ? " is-open" : ""}`}>
        <button
          type="button"
          className="og-command-backdrop"
          aria-label="Close command menu"
          tabIndex={open ? 0 : -1}
          onClick={closeMenu}
        />

        <nav className="og-command-rail" aria-label="OrenGen command sections">
          <button
            type="button"
            className="og-command-rail__brand"
            aria-label={open ? "Close command menu" : "Open command menu"}
            aria-expanded={open}
            aria-controls="orengen-command-deck"
            onClick={() => (open ? closeMenu() : openMenu())}
          >
            <span className="og-command-rail__energy" />
            <span className="og-command-rail__mark">
              <img src={OFFICIAL_FAVICON_WHITE_URL} alt="" />
            </span>
            <span className="og-command-rail__prompt">
              <strong>{open ? "Close menu" : "Open menu"} <i>→</i></strong>
              <small>Worldwide command</small>
            </span>
          </button>

          <div className="og-command-rail__line" aria-hidden="true" />
          <div className="og-command-rail__sections">
            {COMMAND_CATEGORIES.map((category) => (
              <button
                type="button"
                key={category.id}
                className={`${activeCategoryId === category.id ? "is-active" : ""}${
                  category.id === "partners" ? " is-partner" : ""
                }`}
                aria-label={category.label}
                aria-pressed={activeCategoryId === category.id}
                data-label={category.label}
                onClick={() => chooseCategory(category.id)}
              >
                <span>{category.code}</span>
                <b>{category.label}</b>
              </button>
            ))}
          </div>
          <div className="og-command-rail__status" aria-label="OrenGen ecosystem online">
            <span />
            <small>LIVE</small>
          </div>
        </nav>

        <aside
          className="og-command-deck"
          id="orengen-command-deck"
          ref={deckRef}
          role="dialog"
          aria-modal="true"
          aria-label="OrenGen Worldwide command menu"
          aria-hidden={!open}
          inert={!open}
        >
          <div className="og-command-deck__header">
            <a href="/" aria-label="OrenGen Worldwide home" onClick={closeMenu}>
              <img src={OFFICIAL_LOGO_WHITE_URL} alt="OrenGen Worldwide" />
            </a>
            <div>
              <span>
                {activeCategory.code} · {activeCategory.label}
              </span>
              <button type="button" onClick={closeMenu} aria-label="Close command menu">
                <i />
                <i />
              </button>
            </div>
          </div>

          <div className="og-command-deck__scroll">
            <div className="og-command-mobile-categories" aria-label="Command sections">
              {COMMAND_CATEGORIES.map((category) => (
                <button
                  type="button"
                  key={category.id}
                  className={activeCategoryId === category.id ? "is-active" : undefined}
                  aria-pressed={activeCategoryId === category.id}
                  onClick={() => chooseCategory(category.id)}
                >
                  <span>{category.code}</span>
                  <b>{category.label}</b>
                </button>
              ))}
            </div>

            <CommandVisual category={activeCategoryId} />

            <div className="og-command-deck__intro">
              <small>{activeCategory.eyebrow}</small>
              <h2>{activeCategory.title}</h2>
              <p>{activeCategory.summary}</p>
            </div>

            <label className="og-command-search">
              <span>⌕</span>
              <input
                ref={searchRef}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search every product, solution, and resource…"
                aria-label="Search OrenGen navigation"
              />
              {query && (
                <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
                  Clear
                </button>
              )}
            </label>

            <div className="og-command-destinations">
              {query ? (
                <>
                  <div className="og-command-group__label">
                    <span>Search results</span>
                    <b>{searchResults.length.toString().padStart(2, "0")}</b>
                  </div>
                  {searchResults.length ? (
                    searchResults.map((result, index) => (
                      <DestinationLane
                        key={`${result.categoryId}-${result.item.href}-${result.item.title}`}
                        item={result.item}
                        index={index}
                        categoryLabel={`${result.categoryLabel} · ${result.groupLabel}`}
                        current={isCurrent(result.item)}
                        onInline={handleInline}
                        onNavigate={closeMenu}
                      />
                    ))
                  ) : (
                    <div className="og-command-empty">
                      <strong>No matching destination.</strong>
                      <p>Try “voice,” “pricing,” “health,” “partner,” or “security.”</p>
                    </div>
                  )}
                </>
              ) : (
                activeCategory.groups.map((group) => (
                  <section className="og-command-group" key={group.label}>
                    <div className="og-command-group__label">
                      {group.href ? (
                        <a href={group.href} onClick={closeMenu}>
                          <span>{group.label}</span>
                          <small>Open hub ↗</small>
                        </a>
                      ) : (
                        <span>{group.label}</span>
                      )}
                      <b>{group.items.length.toString().padStart(2, "0")}</b>
                    </div>
                    {group.items.map((item, index) => (
                      <DestinationLane
                        key={`${item.href}-${item.title}`}
                        item={item}
                        index={index}
                        current={isCurrent(item)}
                        onInline={handleInline}
                        onNavigate={closeMenu}
                      />
                    ))}
                  </section>
                ))
              )}
            </div>

            {!query && activeCategoryId !== "partners" && (
              <button
                type="button"
                className="og-command-partner-launchpad"
                onClick={() => chooseCategory("partners")}
              >
                <span>25%</span>
                <span>
                  <small>THE CENTER BRIDGE</small>
                  <strong>Sales Partner Launchpad</strong>
                  <em>25% setup + 25% monthly for life</em>
                </span>
                <b>ENTER →</b>
              </button>
            )}

            <div className="og-command-utility-dock">
              <a href="/pricing" onClick={closeMenu}>Pricing</a>
              <a href="/login" onClick={closeMenu}>Client Sign In</a>
              <a href="https://weshare.orengen.io/login" target="_blank" rel="noopener noreferrer">
                Partner Portal
              </a>
              <div className="lang-menu og-command-language" aria-label="Translate website">
                <button
                  type="button"
                  id="langToggle"
                  aria-expanded="false"
                  aria-controls="langOptions"
                >
                  EN ▾
                </button>
                <div className="lang-options" id="langOptions" aria-label="Language options" hidden>
                  {LANGUAGE_CODES.map((code) => (
                    <button type="button" data-lang={code} key={code}>
                      {code === "zh-CN" ? "ZH" : code.toUpperCase()}
                    </button>
                  ))}
                </div>
                <div id="google_translate_element" className="translate-hidden" aria-hidden="true" />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
