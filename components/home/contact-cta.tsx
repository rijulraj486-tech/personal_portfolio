import Link from "next/link";
import { profile } from "@/lib/profile";

export function ContactCta() {
  return <section className="contact-cta" aria-labelledby="contact-cta-heading"><p className="eyebrow">Get in touch</p><h2 id="contact-cta-heading">Interested in working together?</h2><p>Explore my projects, experience, and technical interests—or reach out when contact details are available.</p>{profile.email ? <a className="button button-primary" href={`mailto:${profile.email}`}>Send an email <span aria-hidden="true">→</span></a> : <Link className="button button-primary" href="/contact">Contact details <span aria-hidden="true">→</span></Link>}</section>;
}
