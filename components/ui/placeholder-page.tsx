type Props = Readonly<{ eyebrow: string; title: string }>;
export function PlaceholderPage({ eyebrow, title }: Props) { return <section className="placeholder-page" aria-labelledby="page-heading"><p className="eyebrow">{eyebrow}</p><h1 id="page-heading">{title}</h1><p>This section is being prepared. More detail will be added in the next phase of the portfolio.</p></section>; }
