import { ShieldCheck, Lock, Sparkles, HeartHandshake } from "lucide-react";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "Wellness education",
    desc: "Not medical or emergency care",
  },
  {
    icon: Lock,
    title: "Private and secure",
    desc: "Your data stays yours",
  },
  {
    icon: HeartHandshake,
    title: "Built for professionals",
    desc: "Founders, leaders, healthcare",
  },
  {
    icon: Sparkles,
    title: "Neuroscience-informed",
    desc: "Grounded, never alarming",
  },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Trust and credibility"
      className="relative -mt-10 sm:-mt-14"
    >
      <div className="container-rw">
        <div className="rounded-3xl border border-soft-sage/30 bg-ivory/95 px-5 py-6 shadow-soft backdrop-blur md:px-8">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {ITEMS.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-soft-mist text-rooted-green">
                  <Icon className="h-4.5 w-4.5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-deep-forest">{title}</p>
                  <p className="text-xs leading-snug text-muted-gray">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
