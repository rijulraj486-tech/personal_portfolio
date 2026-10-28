import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { githubProfileUrl } from "@/lib/github";
import { profile } from "@/lib/profile";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const contactLinks = [
    profile.email ? { label: "Email", href: `mailto:${profile.email}` } : null,
    profile.linkedInUrl ? { label: "LinkedIn", href: profile.linkedInUrl } : null,
    githubProfileUrl ? { label: "GitHub", href: githubProfileUrl } : null,
  ].filter((link): link is { label: string; href: string } => Boolean(link));

  return <main className="contact-page"><section className="contact-intro" aria-labelledby="contact-heading"><p className="eyebrow">Get in touch</p><h1 id="contact-heading">Let&apos;s start a conversation.</h1><p>Have a project, opportunity, or research collaboration in mind? I&apos;d be happy to hear from you.</p></section><div className="contact-layout"><section className="contact-form-panel" aria-labelledby="contact-form-heading"><h2 id="contact-form-heading">Send a message</h2><p>Share a little context and I&apos;ll get back to you as soon as I can.</p><ContactForm /></section>{contactLinks.length > 0 ? <aside className="contact-links" aria-labelledby="contact-links-heading"><h2 id="contact-links-heading">Elsewhere</h2><ul>{contactLinks.map((link) => <li key={link.label}><a href={link.href} target={link.label === "Email" ? undefined : "_blank"} rel={link.label === "Email" ? undefined : "noreferrer"}>{link.label}<span aria-hidden="true">{link.label === "Email" ? " →" : " ↗"}</span></a></li>)}</ul></aside> : null}</div></main>;
}
