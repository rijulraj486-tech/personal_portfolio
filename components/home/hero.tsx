import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="editorial-hero reference-hero" aria-labelledby="home-heading">
      <div className="hero-stage">
        <div className="reference-portrait-frame">
          <Image
            className="reference-hero-image"
            src="/image/Confident Portrait on a Warm Orange Gradient.png"
            alt="Rijul Raj"
            fill
            priority
            sizes="100vw"
          />
          <div className="reference-portrait-caption">
            <small>01 / Focus</small>
            <strong>AI / ML<br />Engineering</strong>
            <span>Sensor fusion <i aria-hidden="true" /> Radar tracking</span>
          </div>
        </div>
        <div className="reference-hero-wash" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <span className="reference-hero-wordmark" aria-hidden="true">RIJUL</span>
        <div className="reference-hero-copy">
          <p>I build intelligent systems<br />for sensor fusion, radar tracking, and full-stack web applications.</p>
          <span aria-hidden="true" />
        </div>
        <Link className="reference-work-card" href="/projects/cmsf-net">
          <span className="reference-work-visual" aria-hidden="true"><i /><i /><i /></span>
          <span className="reference-work-footer"><b>CMSF-Net · SENSOR FUSION</b><em>CAUSAL MAMBA · VEHICLE LOCALIZATION</em></span>
        </Link>
        <div className="reference-hero-name">
          <p>©2026</p>
          <h1 id="home-heading">Rijul</h1>
          <span>Raj</span>
        </div>
        <Link className="reference-contact-card" href="/contact">
          <span className="reference-contact-image" aria-hidden="true" />
          <span className="reference-contact-copy"><small>Let&apos;s talk</small><strong>Rijul Raj</strong><em>AI/ML Engineer &amp; Software Developer</em></span>
          <b aria-hidden="true">↗</b>
        </Link>
        <div className="reference-hero-footnote">AI/ML Engineering <span>·</span> Sensor Fusion <span>·</span> Radar Tracking</div>
        <Link className="hero-scroll" href="#selected-work">Scroll to explore <span aria-hidden="true">↓</span></Link>
      </div>
    </section>
  );
}
