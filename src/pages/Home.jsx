
import { ArrowRight, ArrowUpRight, BookOpen, HeartHandshake, ShieldCheck, Sparkles, Users, Brain, Award, Handshake } from 'lucide-react'
import { Link } from 'react-router-dom'
import { events } from '../data/events'
import { siteConfig } from '../data/siteConfig'
import EventCard from '../components/events/EventCard'
import { Container, PrimaryLink, Reveal, SectionHeading, TextLink } from '../components/common'

const focus = [
 { icon: Award, title: 'Recognising Excellence', text: 'Honouring outstanding education, principals and schools.' },
 { icon: Brain, title: 'Building Confidence', text: 'Championing emotional intelligence and essential life skills.' },
 { icon: ShieldCheck, title: 'Creating Safer Schools', text: 'Strengthening child safety, personal boundaries and safeguarding.' },
 { icon: Sparkles, title: 'Embracing Innovation', text: 'Exploring AI and technology with a human-centred approach.' }
]
const awards = [
 'Excellence in Educational Leadership',
 'Outstanding Community Engagement & CSR in Education',
 'Best Integration of AI in Education',
 'Best School in Life Skills & Safety Education',
 'Principal of the Year – Confidence & Well-Being Leadership'
]
export default function Home() {
 return <>
  <section className="relative flex min-h-[720px] items-center overflow-hidden bg-ink pb-20 pt-32 text-white sm:min-h-[790px]">
   <div className="absolute inset-0"><img src="/images/award-stage.jpeg" alt="Education leaders at an awards and panel event" className="h-full w-full object-cover opacity-35" fetchPriority="high"/><div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/35"/><div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-transparent to-ink/20"/></div>
   <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.15fr_.85fr]">
    <div className="max-w-3xl"><span className="eyebrow !text-champagne">Education · Well-being · Future-ready learners</span>
     <h1 className="section-title mt-7 text-5xl leading-[1.04] sm:text-6xl lg:text-[72px]">Celebrating Education:<br/><span className="serif-italic text-champagne">Embracing the Future.</span></h1>
     <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">Recognising the educators, schools and changemakers building confident, safe, emotionally resilient and future-ready learners.</p>
     <p className="mt-5 text-sm font-semibold text-champagne">2026 — Date to be announced <span className="mx-2 text-white/35">·</span> Venue to be announced</p>
     <div className="mt-8 flex flex-col gap-3 sm:flex-row"><PrimaryLink to="/events/celebrating-education-embracing-the-future-2026">Explore the 2026 edition</PrimaryLink><PrimaryLink to="/about" dark>Our purpose</PrimaryLink></div>
    </div>
    <div className="hidden lg:block"><div className="ml-auto max-w-[300px] border-l border-champagne pl-6"><p className="font-editorial text-3xl italic leading-snug">Education is evolving. What we teach children must evolve with it.</p><p className="mt-5 text-[10px] font-bold uppercase tracking-[.18em] text-champagne">The 2026 edition</p></div></div>
   </Container>
   <div className="absolute bottom-0 left-0 right-0 border-t border-white/15"><Container className="grid grid-cols-2 gap-y-4 py-5 sm:grid-cols-4">{siteConfig.metrics.map(m=><div key={m.label} className="border-r border-white/15 last:border-0 sm:pl-5 first:sm:pl-0"><p className="font-display text-2xl font-semibold text-white">{m.value}</p><p className="mt-1 text-[10px] uppercase tracking-[.13em] text-white/50">{m.label}</p></div>)}</Container></div>
  </section>

  <section className="bg-ivory py-20 sm:py-28"><Container><div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end"><SectionHeading eyebrow="The 2026 edition" title={<>Education beyond <span className="serif-italic text-[#8A6A00]">academics.</span></>}/><p className="text-[15px] leading-7 text-slatecopy">The future of education is shaped by a child's ability to think critically, manage emotions, build meaningful relationships, stay safe and face life's challenges with confidence. The initiative brings together visionary school leaders, educators, policymakers, CSR leaders and changemakers to recognise excellence and explore the future of holistic education in India.</p></div>
   <div className="mt-12 grid gap-4 sm:grid-cols-2">{focus.map((item,i)=><Reveal key={item.title} delay={i*.06} className="flex gap-5 border border-[#E8DFAE] bg-white p-6 sm:p-7"><span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#FFF2A8] text-[#8A6A00]"><item.icon size={21} strokeWidth={1.5}/></span><div><h3 className="font-display text-lg font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slatecopy">{item.text}</p></div></Reveal>)}</div>
  </Container></section>

  <section className="bg-white py-20 sm:py-28"><Container><div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><SectionHeading eyebrow="What to expect in 2026" title={<>A shared commitment to <span className="serif-italic text-[#8A6A00]">every learner.</span></>} description="Awards, thought-provoking conversations and meaningful collaboration for a more inclusive, empathetic, innovative and future-ready education system."/><TextLink to="/events">View event details</TextLink></div>
   <div className="mt-10 grid gap-5 md:grid-cols-2"><Reveal><div className="overflow-hidden bg-ivory"><img src="/images/panel-discussion.jpeg" alt="Panel discussion at an education event" loading="lazy" className="aspect-[1.45] w-full object-cover"/></div><h3 className="mt-5 font-display text-xl font-semibold">Leadership Panel Discussion</h3><p className="mt-2 text-sm leading-6 text-slatecopy">A conversation on AI in education, emotional health, confidence-building and the changing responsibilities of schools.</p></Reveal>
    <Reveal delay={.08}><div className="overflow-hidden bg-ivory"><img src="/images/award-founders.jpeg" alt="Education event award presentation" loading="lazy" className="aspect-[1.45] w-full object-cover"/></div><h3 className="mt-5 font-display text-xl font-semibold">Education Leadership Awards</h3><p className="mt-2 text-sm leading-6 text-slatecopy">Recognising schools, principals and educators who are creating meaningful change in education.</p></Reveal>
   </div>
  </Container></section>

  <section className="bg-ink py-20 text-white sm:py-24"><Container className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><span className="eyebrow !text-champagne">Proposed award categories</span><h2 className="section-title mt-5 text-4xl sm:text-5xl">Celebrating those who <span className="serif-italic text-champagne">lead change.</span></h2><p className="mt-5 text-sm leading-6 text-white/60">Proposed award categories for 2026, subject to confirmation by the organisers.</p><div className="mt-7"><TextLink to="/events/celebrating-education-embracing-the-future-2026" light>Explore the 2026 programme</TextLink></div></div><div className="space-y-0">{awards.map((a,i)=><div key={a} className="flex gap-5 border-b border-white/15 py-5 first:pt-0"><span className="font-editorial text-xl italic text-champagne">0{i+1}</span><p className="text-sm leading-6 text-white/85">{a}</p></div>)}</div></Container></section>

  <section className="bg-[#FFF2A8] py-20 sm:py-24"><Container className="grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center"><div><span className="eyebrow">Looking back</span><h2 className="section-title mt-5 text-4xl sm:text-5xl">Celebrating Education <span className="serif-italic text-[#8A6A00]">2025.</span></h2><p className="mt-5 max-w-xl text-sm leading-7 text-slatecopy">The inaugural edition brought together distinguished educators, school leaders, CSR professionals and changemakers to recognise contributions to educational leadership, life skills, emotional well-being, community engagement and innovation.</p><div className="mt-7"><PrimaryLink to="/events/celebrating-education-2025">Explore the 2025 edition</PrimaryLink></div></div><div className="grid grid-cols-2 gap-3"><img src="/images/award-educators.jpeg" alt="Educators receiving an award" loading="lazy" className="aspect-[.85] w-full object-cover"/><img src="/images/award-partners.jpeg" alt="Education partners at the awards" loading="lazy" className="mt-8 aspect-[.85] w-full object-cover"/></div></Container></section>

  <section className="bg-ivory py-20 sm:py-24"><Container><div className="grid gap-8 md:grid-cols-3"><div><span className="eyebrow">Our partners</span><h2 className="section-title mt-4 text-3xl">Working together for learners.</h2></div><div className="border-t border-[#D9BC39] pt-5"><h3 className="font-display text-lg font-semibold">Life Skills Journal</h3><p className="mt-3 text-sm leading-6 text-slatecopy">Leading the initiative to promote confidence, emotional intelligence, life skills and safety awareness among children.</p></div><div className="border-t border-[#D9BC39] pt-5"><h3 className="font-display text-lg font-semibold">Study Base & Lamp Post Trust</h3><p className="mt-3 text-sm leading-6 text-slatecopy">Study Base is an education technology partner offering school management solutions. Lamp Post Trust supports meaningful educational and social initiatives.</p></div></div></Container></section>


  <section className="bg-white py-16 sm:py-20"><Container className="grid items-center gap-8 lg:grid-cols-[.65fr_1.35fr]">
    <div className="flex min-h-[180px] items-center justify-center border border-[#E8DFAE] bg-[#FFF2A8] p-8"><div className="text-center"><p className="font-display text-4xl font-extrabold text-[#8A6A00]">ABC</p><p className="mt-2 text-xs font-bold uppercase tracking-[.15em] text-charcoal">Ai Business Challenge</p><p className="mt-2 text-xs text-slatecopy">Event sponsor</p></div></div>
    <div><span className="eyebrow">Our sponsor</span><h2 className="section-title mt-4 text-3xl sm:text-4xl">Ai Business Challenge (ABC)</h2><p className="mt-5 text-[15px] leading-7 text-slatecopy">Viplav Panghal and Gaurav Rawat are the Founders of Ai Business Challenge (ABC) which is an AI community built for students and freelancers who want to start their own AI business and get into the world of Digital marketing. It has 30,000 members from 102 countries.He is our sponsor</p></div>
  </Container></section>

  <section className="bg-ink py-16 text-white sm:py-20"><Container className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between"><div><span className="eyebrow !text-champagne">Be part of the 2026 conversation</span><h2 className="section-title mt-4 text-3xl sm:text-4xl">Help shape the future of education.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/60">For schools, educators, award nominations, panel speakers, CSR partners and sponsors.</p></div><PrimaryLink to="/contact">Contact the team</PrimaryLink></Container></section>
 </>
}
