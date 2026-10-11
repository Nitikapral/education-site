import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ContactForm() {
  const [state, setState] = useState('idle')
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()
  const submit = async data => {
    // Frontend demonstration only. Connect this function to your API/email service before launch.
    setState('success')
    reset()
  }
  const fieldError = name => errors[name] && <p className="mt-1 text-xs text-red-600">{errors[name].message || 'This field is required.'}</p>
  if (state === 'success') return <div role="status" className="border border-emerald-200 bg-emerald-50 p-7"><CheckCircle2 className="text-emerald-700" size={28}/><h3 className="mt-4 font-display text-xl font-semibold text-charcoal">Demo form completed</h3><p className="mt-2 text-sm leading-6 text-slatecopy">Your details were validated in this frontend demo. No email was sent or information stored. Connect a backend to receive real enquiries.</p><button onClick={()=>setState('idle')} className="mt-5 text-sm font-bold underline underline-offset-4">Send another enquiry</button></div>
  return <form onSubmit={handleSubmit(submit)} className="space-y-5" noValidate>
    <div className="grid gap-5 sm:grid-cols-2">
      <div><label className="mb-2 block text-xs font-bold text-charcoal" htmlFor="fullName">Full name *</label><input id="fullName" className="form-field" placeholder="Your full name" {...register('fullName',{required:'Please enter your name.'})}/>{fieldError('fullName')}</div>
      <div><label className="mb-2 block text-xs font-bold text-charcoal" htmlFor="email">Work email *</label><input id="email" type="email" className="form-field" placeholder="you@company.com" {...register('email',{required:'Please enter your email.',pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:'Enter a valid email address.'}})}/>{fieldError('email')}</div>
      <div><label className="mb-2 block text-xs font-bold text-charcoal" htmlFor="phone">Phone number</label><input id="phone" className="form-field" placeholder="+91" {...register('phone')}/></div>
      <div><label className="mb-2 block text-xs font-bold text-charcoal" htmlFor="company">Company</label><input id="company" className="form-field" placeholder="Company name" {...register('company')}/></div>
    </div>
    <div><label className="mb-2 block text-xs font-bold text-charcoal" htmlFor="inquiry">Inquiry type *</label><select id="inquiry" className="form-field" defaultValue="" {...register('inquiry',{required:'Please select an inquiry type.'})}><option value="" disabled>Select a topic</option>{['Event inquiry','Partnership','Sponsorship','Speaking opportunity','General inquiry','Other'].map(x=><option key={x}>{x}</option>)}</select>{fieldError('inquiry')}</div>
    <div><label className="mb-2 block text-xs font-bold text-charcoal" htmlFor="subject">Subject *</label><input id="subject" className="form-field" placeholder="How can we help?" {...register('subject',{required:'Please add a subject.'})}/>{fieldError('subject')}</div>
    <div><label className="mb-2 block text-xs font-bold text-charcoal" htmlFor="message">Message *</label><textarea id="message" rows="5" className="form-field resize-y" placeholder="Tell us a little about your plans..." {...register('message',{required:'Please add a message.',minLength:{value:10,message:'Please provide a little more detail (at least 10 characters).'}})}/>{fieldError('message')}</div>
    <p className="text-xs leading-5 text-slatecopy">This demonstration form does not send or store your details. A backend integration is required for live enquiries.</p>
    <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60">{isSubmitting?'Submitting…':'Send enquiry'} <ArrowRight size={15}/></button>
  </form>
}
