import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Providers } from "@/components/providers";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
export const metadata: Metadata = { title: { default: "Rijul Raj | Software Developer", template: "%s | Rijul Raj" }, description: "The portfolio of Rijul Raj, a software developer working across web development, AI/ML, and research.", openGraph: { title: "Rijul Raj | Software Developer", description: "Portfolio for Rijul Raj — software developer working in web development, AI/ML, and research.", type: "website" } };
const themeScript = `(() => { let preference = "system"; try { const stored = localStorage.getItem("portfolio-theme"); if (stored === "light" || stored === "dark" || stored === "system") preference = stored; } catch {} try { const theme = preference === "system" && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : preference === "system" ? "light" : preference; const root = document.documentElement; root.classList.remove("light", "dark"); root.classList.add(theme); root.style.colorScheme = theme; } catch {} })();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={geist.variable}>
        <Providers>
          <div className="site-shell"><SiteHeader /><main className="site-main">{children}</main><SiteFooter /></div>
        </Providers>
      </body>
    </html>
  );
}
