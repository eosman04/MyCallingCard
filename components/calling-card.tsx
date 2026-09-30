import Image from 'next/image'
import { GraduationCap, Mail, MapPin } from 'lucide-react'
//import image from '../assets/ohmygodbruh.jpg'
const EMAIL = 'eosman0104@gmail.com'

const SKILLS = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'C++', 'JavaScript', 'TypeScript', 'HTML/CSS'],
  },
  {
    label: 'Frameworks & Libraries',
    items: ['React', 'Express', 'FastAPI', 'JUnit', 'Material UI'],
  },
  {
    label: 'Tools & Platforms',
    items: ['Git', 'AWS', 'Linux', 'Firebase', 'VS Code', 'Visual Studio', 'PyCharm', 'Eclipse'],
  },
]

export function CallingCard() {
  return (
    <article className="w-full max-w-md rounded-xl border bg-card p-8 text-card-foreground shadow-2xl shadow-black/40 sm:p-10">
      <header className="flex flex-col gap-2">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Software Engineer
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Essam Osman
        </h1>
        {/* <Image src={image} alt="Essam Osman" width={160} height={160} /> */}
      </header>

      <div className="my-8 h-px bg-border" aria-hidden="true" />

      <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
        <li className="flex items-center gap-3">
          <GraduationCap className="size-4 shrink-0" aria-hidden="true" />
          <span>Senior at The University of Texas at Dallas</span>
        </li>
        <li className="flex items-center gap-3">
          <MapPin className="size-4 shrink-0" aria-hidden="true" />
          <span>Lives in the DFW</span>
        </li>
      </ul>

      <section aria-labelledby="skills-heading" className="mt-8">
        <h2
          id="skills-heading"
          className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          Skills
        </h2>
        <dl className="mt-4 flex flex-col gap-4">
          {SKILLS.map((group) => (
            <div key={group.label} className="flex flex-col gap-2">
              <dt className="text-xs font-medium text-card-foreground">{group.label}</dt>
              <dd>
                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <a
        href={`mailto:${EMAIL}`}
        className="mt-8 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <Mail className="size-4" aria-hidden="true" />
        {EMAIL}
      </a>
      <p className="mt-3 text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        <span className="inline-block scale-x-125">For inquiries &amp; correspondence</span>
      </p>
    </article>
  )
}
