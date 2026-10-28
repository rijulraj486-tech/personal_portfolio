import Link from "next/link";
import { githubProfileUrl } from "@/lib/github";
import { profile } from "@/lib/profile";

export function Hero() {
  const socialLinks = [
    githubProfileUrl ? { href: githubProfileUrl, label: "GitHub", external: true } : null,
    profile.linkedInUrl ? { href: profile.linkedInUrl, label: "LinkedIn", external: true } : null,
    profile.email ? { href: `mailto:${profile.email}`, label: "Email", external: false } : null,
  ].filter(Boolean) as { href: string; label: string; external: boolean }[];

  return (
    <section className="hero" aria-labelledby="home-heading">
      <div className="hero-content">
        <p className="eyebrow">Rijul Raj</p>
        <h1 id="home-heading">Software Developer</h1>
        <p className="hero-copy">I build modern web applications and explore AI/ML-driven software and research projects.</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/projects">View my projects <span aria-hidden="true">→</span></Link>
          {profile.resumeUrl ? (
            <a className="button button-secondary" href={profile.resumeUrl} download>Download resume <span aria-hidden="true">↓</span></a>
          ) : (
            <button className="button button-secondary" type="button" disabled title="A resume download will be available soon">Download resume <span aria-hidden="true">↓</span></button>
          )}
        </div>
        {socialLinks.length > 0 ? <ul className="hero-social-links" aria-label="Professional links">
          {socialLinks.map(({ href, label, external }) => <li key={label}><a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{label}{external ? <span aria-hidden="true"> ↗</span> : null}</a></li>)}
        </ul> : null}
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="hero-visual-grid" />
        <div className="hero-code-card"><span className="code-label">CURRENT FOCUS</span><div className="code-line"><span>const</span> focus = [</div><div className="code-line code-indent">&quot;web&quot;,</div><div className="code-line code-indent">&quot;ai/ml&quot;,</div><div className="code-line code-indent">&quot;research&quot;</div><div className="code-line">];</div></div>
        <div className="hero-orbit hero-orbit-one" /><div className="hero-orbit hero-orbit-two" />
      </div>
    </section>
  );
}
