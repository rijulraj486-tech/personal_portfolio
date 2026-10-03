import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Providers } from "@/components/providers";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
export const metadata: Metadata = { title: { default: "Rijul Raj | Software Developer", template: "%s | Rijul Raj" }, description: "The portfolio of Rijul Raj, a software developer working across web development, AI, and research.", openGraph: { title: "Rijul Raj | Software Developer", description: "Portfolio for Rijul Raj — software developer, web developer, and AI enthusiast.", type: "website" } };
export default function RootLayout({ children }: LayoutProps<"/">) { return <html lang="en"><body className={geist.variable}><Providers><div className="site-shell"><SiteHeader /><main className="site-main">{children}</main><SiteFooter /></div></Providers></body></html>; }
