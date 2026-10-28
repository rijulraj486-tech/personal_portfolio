import Link from "next/link";
import { profile } from "@/lib/profile";

export function ContactCta() {
  return <section className="contact-cta" id="contact-callout" aria-labelledby="contact-cta-heading"><p className="eyebrow">Make something useful</p><h2 id="contact-cta-heading">Have an ambitious problem?</h2><p>Whether it&apos;s a web product, a research question, or a thoughtful collaboration, I&apos;d like to hear the shape of it.</p>{profile.email ? <a className="button button-primary" href={`mailto:${profile.email}`}>Send an email <span aria-hidden="true">↗</span></a> : <Link className="button button-primary" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>}</section>;
}
