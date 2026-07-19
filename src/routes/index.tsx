import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Star, Scissors, Award, Users } from "lucide-react";
import photo1 from "@/assets/photo-1.png.asset.json";
import photo2 from "@/assets/photo-2.png.asset.json";
import photo3 from "@/assets/photo-3.png.asset.json";
import photo4 from "@/assets/photo-4.png.asset.json";
import photo5 from "@/assets/photo-5.png.asset.json";
import photo6 from "@/assets/photo-6.png.asset.json";
import photo7 from "@/assets/photo-7.png.asset.json";
import photo8 from "@/assets/photo-8.png.asset.json";
import photo9 from "@/assets/photo-9.png.asset.json";
import photo10 from "@/assets/photo-10.png.asset.json";

const hero = photo2.url;
const gallery = [photo1, photo2, photo3, photo8, photo9, photo10, photo5, photo6, photo7, photo4];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sammy's Barber Shop — New York Style Cuts in Bloomington, MN" },
      {
        name: "description",
        content:
          "New York Style Sammy's Barber Shop in Bloomington, MN. Precision fades, classic cuts, hot towel shaves and beard grooming. 5.0 stars on Google.",
      },
      { property: "og:title", content: "Sammy's Barber Shop — Bloomington, MN" },
      { property: "og:description", content: "Precision fades, classic cuts, and hot towel shaves. 5.0 stars." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BarberShop",
          name: "New York Style Sammy's Barber Shop",
          image: "/favicon.ico",
          telephone: "+1-929-257-7175",
          address: {
            "@type": "PostalAddress",
            streetAddress: "9217 17th Ave S Ste 120",
            addressLocality: "Bloomington",
            addressRegion: "MN",
            postalCode: "55425",
            addressCountry: "US",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "34" },
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: Home,
});

const PHONE = "+19292577175";
const PHONE_DISPLAY = "(929) 257-7175";
const ADDRESS = "9217 17th Ave S Ste 120, Bloomington, MN 55425";
const MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Sammy's Barber Shop " + ADDRESS)}`;

const services = [
  { name: "Signature Haircut", desc: "Custom cut tailored to your style — scissor or clipper.", img: photo5.url },
  { name: "Skin Fade", desc: "Sharp, seamless fades — low, mid, high or bald.", img: photo6.url },
  { name: "Beard Trim & Shape", desc: "Precision beard sculpting with scissors and razor detailing.", img: photo7.url },
  { name: "Hair Designs", desc: "Custom hair art, stars, logos — signature freestyle designs.", img: photo3.url },
  { name: "Kids Cuts", desc: "Patient, careful cuts for the little ones — all ages welcome.", img: photo4.url },
  { name: "Freestyle Art", desc: "Stars, honeycomb, letters — bring a reference or trust the vision.", img: photo10.url },

];

const allServices = [
  "Haircut", "Custom cut", "Fade cut", "Buzz cut", "Scissor cut", "Razor cut",
  "Long haircut", "Military haircut", "Children's cuts", "Senior Citizen Cut",
  "Hair shape-up", "Hair straightening", "Hair colouring", "Head shave",
  "Shave", "Straight razor shave", "Hot towel shave",
  "Beard trim", "Beard maintenance", "Beard dyeing", "Beard conditioning",
  "Eyebrow trimming", "Scalp treatment", "Shampoo & conditioning", "Groom packages",
];

const reviews = [
  { text: "He delivers high-quality haircuts with great attention to detail.", name: "Google Review" },
  { text: "It was a really great experience, nice service and it was professional!", name: "Google Review" },
  { text: "Best haircut in the twin cities hands down.", name: "Google Review" },
];

const hours = [
  ["Monday", "10:00 AM – 7:00 PM"],
  ["Tuesday", "10:00 AM – 7:00 PM"],
  ["Wednesday", "10:00 AM – 7:00 PM"],
  ["Thursday", "10:00 AM – 7:00 PM"],
  ["Friday", "10:00 AM – 7:00 PM"],
  ["Saturday", "10:00 AM – 7:00 PM"],
  ["Sunday", "11:00 AM – 5:00 PM"],
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
          <a href="#top" className="flex items-center gap-2">
            <Scissors className="h-5 w-5 text-primary" />
            <span className="font-display text-lg tracking-widest sm:text-xl">SAMMY'S</span>
          </a>
          <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#services" className="hover:text-primary">Services</a>
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#reviews" className="hover:text-primary">Reviews</a>
            <a href="#visit" className="hover:text-primary">Visit</a>
          </nav>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:brightness-110 sm:text-sm"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Call</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
        <img
          src={hero}
          alt="Sammy's Barber Shop interior"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-6 px-4 py-20 sm:py-28">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
            <span className="inline-block h-px w-8 bg-primary" />
            Bloomington, Minnesota
          </div>
          <h1 className="max-w-3xl font-display text-5xl leading-[0.95] sm:text-7xl md:text-8xl">
            New York Style <br />
            <span className="text-gradient-gold">Sammy's</span> Barber Shop
          </h1>
          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            Precision fades, classic cuts, and old-school hot towel shaves.
            Walk in a guest, leave sharper than ever.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:brightness-110"
            >
              <Phone className="h-4 w-4" /> Book by Phone
            </a>
            <a
              href={MAPS}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
            >
              <MapPin className="h-4 w-4" /> Get Directions
            </a>
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-semibold text-foreground">5.0</span>
            <span>·</span>
            <span>34 Google reviews</span>
          </div>
        </div>
        <div className="barber-stripes absolute bottom-0 left-0 h-1.5 w-full opacity-80" />
      </section>

      {/* Trust bar */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 text-center sm:grid-cols-4">
          {[
            { icon: Star, label: "5.0 Rating" },
            { icon: Users, label: "Trusted by 34+" },
            { icon: Award, label: "Master Barber" },
            { icon: Scissors, label: "25+ Services" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <Icon className="h-5 w-5 text-primary" />
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <div className="mb-12 flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">The Craft</span>
          <h2 className="font-display text-4xl sm:text-6xl">Signature Services</h2>
          <p className="max-w-xl text-muted-foreground">
            From clean fades to full grooming rituals — every service delivered with
            attention to detail that keeps clients coming back.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/50"
            >
              {s.img ? (
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.name}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-secondary to-card">
                  <Scissors className="h-12 w-12 text-primary/60" />
                </div>
              )}
              <div className="p-6">
                <h3 className="font-display text-2xl tracking-wide">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card/50 p-6 sm:p-8">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Full Service Menu</h3>
          <div className="flex flex-wrap gap-2">
            {allServices.map((svc) => (
              <span
                key={svc}
                className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
              >
                {svc}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Senior Citizen Discount available. Call for pricing on packages.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative border-y border-border/60 bg-card/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:py-28 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={photo1.url}
              alt="Star hair design at Sammy's"
              width={800}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-5">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">About Sammy's</span>
            <h2 className="font-display text-4xl sm:text-5xl">
              Authentic New York <br /> barbering in the Twin Cities.
            </h2>
            <p className="text-muted-foreground">
              Sammy brings the energy, precision, and craft of a classic New York
              barber chair to Bloomington. Every cut is personal — no shortcuts,
              no assembly line. Just great work, honest prices, and a chair
              that always feels like home.
            </p>
            <blockquote className="border-l-2 border-primary pl-4 text-lg italic text-foreground">
              "Best haircut in the twin cities hands down."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <div className="mb-12 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Loved by clients</span>
          <h2 className="mt-3 font-display text-4xl sm:text-6xl">5.0 on Google</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-3 flex">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground">"{r.text}"</p>
              <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">— {r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="border-t border-border/60 bg-card/20">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <div className="mb-10 flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">The Work</span>
            <h2 className="font-display text-4xl sm:text-6xl">Straight from the chair.</h2>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5">
            {gallery.map((g, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-xl border border-border">
                <img
                  src={g.url}
                  alt={`Sammy's Barber Shop work ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Visit */}
      <section id="visit" className="border-t border-border/60 bg-card/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:py-28 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Visit</span>
            <h2 className="font-display text-4xl sm:text-5xl">Stop by the shop.</h2>

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-muted-foreground">{ADDRESS}</p>
                <a href={MAPS} target="_blank" rel="noreferrer" className="mt-1 inline-block text-sm text-primary hover:underline">
                  Get directions →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-semibold">Phone</p>
                <a href={`tel:${PHONE}`} className="text-muted-foreground hover:text-primary">{PHONE_DISPLAY}</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="font-semibold">Hours</p>
                <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                  {hours.map(([d, h]) => (
                    <li key={d} className="grid grid-cols-[7rem_1fr] gap-2">
                      <span>{d}</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Sammy's Barber Shop location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
              className="h-full min-h-[400px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="relative overflow-hidden">
        <div className="barber-stripes h-1.5 w-full" />
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <Scissors className="h-6 w-6 text-primary" />
            <p className="font-display text-2xl tracking-widest">SAMMY'S BARBER SHOP</p>
            <p className="text-sm text-muted-foreground">
              {ADDRESS} · <a href={`tel:${PHONE}`} className="hover:text-primary">{PHONE_DISPLAY}</a>
            </p>
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} New York Style Sammy's Barber Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
