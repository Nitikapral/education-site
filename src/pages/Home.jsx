import {
  ShieldCheck,
  Sparkles,
  Brain,
  Award,
} from 'lucide-react'

import { siteConfig } from '../data/siteConfig'
import EventCard from '../components/events/EventCard'
import {
  Container,
  PrimaryLink,
  Reveal,
  SectionHeading,
  TextLink,
} from '../components/common'

const focus = [
  {
    icon: Award,
    title: 'Recognising Excellence',
    text: 'Honouring outstanding education, principals and schools.',
  },
  {
    icon: Brain,
    title: 'Building Confidence',
    text: 'Championing emotional intelligence and essential life skills.',
  },
  {
    icon: ShieldCheck,
    title: 'Creating Safer Schools',
    text: 'Strengthening child safety, personal boundaries and safeguarding.',
  },
  {
    icon: Sparkles,
    title: 'Embracing Innovation',
    text: 'Exploring AI and technology with a human-centred approach.',
  },
]

const awards = [
  'Excellence in Educational Leadership',
  'Outstanding Community Engagement & CSR in Education',
  'Best Integration of AI in Education',
  'Best School in Life Skills & Safety Education',
  'Principal of the Year – Confidence & Well-Being Leadership',
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[620px] flex-col justify-center overflow-hidden bg-ink pb-8 pt-28 text-white sm:min-h-[700px] sm:pb-24 sm:pt-32 lg:min-h-[790px]">
        <div className="absolute inset-0">
          <img
            src="/images/award-stage.jpeg"
            alt="Education leaders at an awards and panel event"
            className="h-full w-full object-cover object-center opacity-35"
            fetchPriority="high"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-transparent to-ink/20" />
        </div>

        <Container className="relative z-10 grid w-full items-center gap-10 py-10 sm:py-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-12">
          <div className="min-w-0 max-w-3xl">
            <span className="eyebrow !text-champagne">
              Education · Well-being · Future-ready learners
            </span>

            <h1 className="section-title mt-5 text-4xl leading-[1.08] sm:mt-7 sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[1.04]">
              Celebrating Education:
              <br />
              <span className="serif-italic text-champagne">
                Embracing the Future.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/75 sm:mt-7 sm:text-base sm:leading-7 lg:text-lg">
              Recognising the educators, schools and changemakers building
              confident, safe, emotionally resilient and future-ready learners.
            </p>

            <p className="mt-4 text-sm font-semibold leading-6 text-champagne sm:mt-5">
              2026 — Date to be announced
              <span className="mx-2 text-white/35">·</span>
              Venue to be announced
            </p>

            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <PrimaryLink to="/events/celebrating-education-embracing-the-future-2026">
                Explore the 2026 edition
              </PrimaryLink>

              <PrimaryLink to="/about" dark>
                Our purpose
              </PrimaryLink>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="ml-auto max-w-[300px] border-l border-champagne pl-6">
              <p className="font-editorial text-3xl italic leading-snug">
                Education is evolving. What we teach children must evolve with it.
              </p>

              <p className="mt-5 text-[10px] font-bold uppercase tracking-[.18em] text-champagne">
                The 2026 edition
              </p>
            </div>
          </div>
        </Container>

        {/* Metrics: flow naturally on mobile, anchored on larger screens */}
        <div className="relative z-10 mt-6 border-t border-white/15 sm:absolute sm:bottom-0 sm:left-0 sm:right-0 sm:mt-0">
          <Container className="grid grid-cols-2 gap-y-5 py-5 sm:grid-cols-4 sm:gap-y-0 sm:py-5">
            {siteConfig.metrics.map((m, index) => (
              <div
                key={m.label}
                className={`min-w-0 ${
                  index % 2 === 0
                    ? 'border-r border-white/15 pr-3'
                    : 'pl-4 sm:pl-5'
                } sm:border-r sm:border-white/15 sm:px-4 sm:first:pl-0 sm:last:border-0`}
              >
                <p className="break-words font-display text-xl font-semibold text-white sm:text-2xl">
                  {m.value}
                </p>

                <p className="mt-1 break-words text-[9px] uppercase leading-4 tracking-[.1em] text-white/50 sm:text-[10px] sm:tracking-[.13em]">
                  {m.label}
                </p>
              </div>
            ))}
          </Container>
        </div>
      </section>

      {/* Introduction and Focus Areas */}
      <section className="bg-ivory py-14 sm:py-20 lg:py-28">
        <Container>
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-10">
            <SectionHeading
              eyebrow="The 2026 edition"
              title={
                <>
                  Education beyond{' '}
                  <span className="serif-italic text-[#8A6A00]">
                    academics.
                  </span>
                </>
              }
            />

            <p className="text-sm leading-7 text-slatecopy sm:text-[15px]">
              The future of education is shaped by a child's ability to think
              critically, manage emotions, build meaningful relationships, stay
              safe and face life's challenges with confidence. The initiative
              brings together visionary school leaders, educators, policymakers,
              CSR leaders and changemakers to recognise excellence and explore
              the future of holistic education in India.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2">
            {focus.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.06}
                className="flex min-w-0 flex-col gap-4 border border-[#E8DFAE] bg-white p-5 sm:flex-row sm:gap-5 sm:p-6 lg:p-7"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#FFF2A8] text-[#8A6A00]">
                  <item.icon size={21} strokeWidth={1.5} />
                </span>

                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slatecopy">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What to Expect */}
      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <Container>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">
            <SectionHeading
              eyebrow="What to expect in 2026"
              title={
                <>
                  A shared commitment to{' '}
                  <span className="serif-italic text-[#8A6A00]">
                    every learner.
                  </span>
                </>
              }
              description="Awards, thought-provoking conversations and meaningful collaboration for a more inclusive, empathetic, innovative and future-ready education system."
            />

            <div className="shrink-0 self-start md:self-auto">
              <TextLink to="/events">View event details</TextLink>
            </div>
          </div>

          <div className="mt-8 grid gap-8 sm:mt-10 md:grid-cols-2 md:gap-6 lg:gap-8">
            <Reveal>
              <div className="overflow-hidden bg-ivory">
                <img
                  src="/images/panel-discussion.jpeg"
                  alt="Panel discussion at an education event"
                  loading="lazy"
                  className="aspect-[1.35] w-full object-cover sm:aspect-[1.45]"
                />
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold sm:mt-5 sm:text-xl">
                Leadership Panel Discussion
              </h3>

              <p className="mt-2 text-sm leading-6 text-slatecopy">
                A conversation on AI in education, emotional health,
                confidence-building and the changing responsibilities of schools.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="overflow-hidden bg-ivory">
                <img
                  src="/images/award-founders.jpeg"
                  alt="Education event award presentation"
                  loading="lazy"
                  className="aspect-[1.35] w-full object-cover sm:aspect-[1.45]"
                />
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold sm:mt-5 sm:text-xl">
                Education Leadership Awards
              </h3>

              <p className="mt-2 text-sm leading-6 text-slatecopy">
                Recognising schools, principals and educators who are creating
                meaningful change in education.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Award Categories */}
      <section className="bg-ink py-14 text-white sm:py-20 lg:py-24">
        <Container className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-12">
          <div className="min-w-0">
            <span className="eyebrow !text-champagne">
              Proposed award categories
            </span>

            <h2 className="section-title mt-5 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Celebrating those who{' '}
              <span className="serif-italic text-champagne">
                lead change.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/60 sm:mt-5">
              Proposed award categories for 2026, subject to confirmation by
              the organisers.
            </p>

            <div className="mt-6 sm:mt-7">
              <TextLink
                to="/events/celebrating-education-embracing-the-future-2026"
                light
              >
                Explore the 2026 programme
              </TextLink>
            </div>
          </div>

          <div className="min-w-0">
            {awards.map((a, i) => (
              <div
                key={a}
                className="flex gap-4 border-b border-white/15 py-5 first:pt-0 sm:gap-5"
              >
                <span className="shrink-0 font-editorial text-xl italic text-champagne">
                  0{i + 1}
                </span>

                <p className="min-w-0 text-sm leading-6 text-white/85">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 2025 Edition */}
      <section className="bg-[#FFF2A8] py-14 sm:py-20 lg:py-24">
        <Container className="grid items-center gap-8 lg:grid-cols-[1fr_.9fr] lg:gap-12">
          <div className="min-w-0">
            <span className="eyebrow">Looking back</span>

            <h2 className="section-title mt-5 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Celebrating Education{' '}
              <span className="serif-italic text-[#8A6A00]">2025.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slatecopy sm:mt-5">
              The inaugural edition brought together distinguished educators,
              school leaders, CSR professionals and changemakers to recognise
              contributions to educational leadership, life skills, emotional
              well-being, community engagement and innovation.
            </p>

            <div className="mt-6 sm:mt-7">
              <PrimaryLink to="/events/celebrating-education-2025">
                Explore the 2025 edition
              </PrimaryLink>
            </div>
          </div>

          <div className="grid grid-cols-2 items-start gap-3 sm:gap-4">
            <img
              src="/images/award-educators.jpeg"
              alt="Educators receiving an award"
              loading="lazy"
              className="aspect-[.85] w-full object-cover"
            />

            <img
              src="/images/award-partners.jpeg"
              alt="Education partners at the awards"
              loading="lazy"
              className="mt-5 aspect-[.85] w-full object-cover sm:mt-8"
            />
          </div>
        </Container>
      </section>

      {/* Partners */}
      <section className="bg-ivory py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <div className="min-w-0">
              <span className="eyebrow">Our partners</span>

              <h2 className="section-title mt-4 text-3xl">
                Working together for learners.
              </h2>
            </div>

            <div className="border-t border-[#D9BC39] pt-5">
              <h3 className="font-display text-lg font-semibold">
                Life Skills Journal
              </h3>

              <p className="mt-3 text-sm leading-6 text-slatecopy">
                Leading the initiative to promote confidence, emotional
                intelligence, life skills and safety awareness among children.
              </p>
            </div>

            <div className="border-t border-[#D9BC39] pt-5">
              <h3 className="font-display text-lg font-semibold">
                Study Base &amp; Lamp Post Trust
              </h3>

              <p className="mt-3 text-sm leading-6 text-slatecopy">
                Study Base is an education technology partner offering school
                management solutions. Lamp Post Trust supports meaningful
                educational and social initiatives.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Sponsor */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <Container className="grid items-center gap-8 lg:grid-cols-[.65fr_1.35fr] lg:gap-12">
          <div className="flex min-h-[160px] items-center justify-center border border-[#E8DFAE] bg-[#FFF2A8] p-6 sm:min-h-[200px] sm:p-8">
            <div className="text-center">
              <p className="font-display text-4xl font-extrabold text-[#8A6A00]">
                ABC
              </p>

              <p className="mt-2 text-xs font-bold uppercase tracking-[.15em] text-charcoal">
                AI Business Challenge
              </p>

              <p className="mt-2 text-xs text-slatecopy">Event sponsor</p>
            </div>
          </div>

          <div className="min-w-0">
            <span className="eyebrow">Our sponsor</span>

            <h2 className="section-title mt-4 text-3xl sm:text-4xl">
              Ai Business Challenge (ABC)
            </h2>

            <p className="mt-4 text-sm leading-7 text-slatecopy sm:mt-5 sm:text-[15px]">
              Viplav Panghal and Gaurav Rawat are the founders of Ai Business
              Challenge (ABC), an AI community built for students and freelancers
              who want to start their own AI business and enter the world of
              digital marketing. It has 30,000 members from 102 countries.
              ABC is our sponsor.
            </p>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-ink py-14 text-white sm:py-16 lg:py-20">
        <Container className="flex flex-col gap-6 sm:gap-7 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
            <span className="eyebrow !text-champagne">
              Be part of the 2026 conversation
            </span>

            <h2 className="section-title mt-4 text-3xl sm:text-4xl">
              Help shape the future of education.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">
              For schools, educators, award nominations, panel speakers, CSR
              partners and sponsors.
            </p>
          </div>

          <div className="shrink-0 self-start md:self-auto">
            <PrimaryLink to="/contact">Contact the team</PrimaryLink>
          </div>
        </Container>
      </section>
    </>
  )
}