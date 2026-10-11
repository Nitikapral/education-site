
import { Mail, MapPin, Phone } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { siteConfig } from '../data/siteConfig'
import ContactForm from '../components/forms/ContactForm'
import { Container, PageIntro } from '../components/common'
export default function Contact() {
 const [params] = useSearchParams()
 return <>
  <PageIntro eyebrow="Contact & register interest" title={<>Be part of the <span className="serif-italic text-champagne">2026 conversation.</span></>} description="Help shape an education system where academic excellence goes hand in hand with confidence, compassion and safety."/>
  <section className="bg-ivory py-14 sm:py-20"><Container className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-12">
   <aside className="bg-ink p-7 text-white sm:p-9"><span className="eyebrow !text-champagne">Life Skills Journal – PR Team</span><h2 className="mt-4 font-display text-3xl font-semibold">Start a conversation.</h2><p className="mt-4 text-sm leading-6 text-white/60">For schools, educators, award nominations, panel speakers, CSR partners and sponsors.</p><div className="mt-9 space-y-6"><div className="flex gap-4"><Phone size={18} className="text-champagne"/><div><p className="text-[10px] font-bold uppercase tracking-[.13em] text-white/45">Phone</p><a href="tel:8587899665" className="mt-1 block text-sm">8587899665</a></div></div><div className="flex gap-4"><Mail size={18} className="text-champagne"/><div><p className="text-[10px] font-bold uppercase tracking-[.13em] text-white/45">Email</p><a href="mailto:lifeskillindia1@gmail.com" className="mt-1 block text-sm">lifeskillindia1@gmail.com</a><a href="mailto:support@lamppostrust.org" className="mt-1 block text-sm">support@lamppostrust.org</a></div></div><div className="flex gap-4"><MapPin size={18} className="text-champagne"/><div><p className="text-[10px] font-bold uppercase tracking-[.13em] text-white/45">Location</p><p className="mt-1 text-sm">New Delhi, India</p></div></div></div><p className="mt-10 border-t border-white/15 pt-5 text-xs leading-5 text-white/40">2026 date, venue, speakers, nominations and award categories will be updated once officially confirmed.</p></aside>
   <div className="border border-line bg-white p-6 sm:p-9"><span className="eyebrow">Contact the team</span><h2 className="mt-4 font-display text-2xl font-semibold">Tell us how you’d like to participate.</h2><p className="mt-2 text-sm leading-6 text-slatecopy">Share your enquiry about the event, awards, speaking, partnerships or sponsorship.</p><div className="mt-7"><ContactForm/></div></div>
  </Container></section>
 </>
}
