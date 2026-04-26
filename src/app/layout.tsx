import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-jakarta",
});

export const metadata: Metadata = {
    title: "CloudMatrix | AI-Forward Managed Services for Canadian Business",
    description:
          "Compliance-native, bilingual IT solutions. Microsoft-aligned managed services, security, and AI for Canadian SMBs, SMCs, and Enterprises. Law 25 & PIPEDA ready.",
    keywords: [
          "managed services Canada",
          "Microsoft partner Quebec",
          "Law 25 compliance",
          "PIPEDA",
          "IT security Canada",
          "cloud services Montreal",
          "SecurePulse",
          "AI solutions",
        ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
          >html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      >body className="font-sans min-h-screen flex flex-col">
          >header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[var(--border-light)]">
            >nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              >a href="/" className="flex items-center gap-2">
                >span className="text-2xl font-display font-bold gradient-text">
                  CloudMatrix
              >/span>
            >/a>
            >div className="hidden md:flex items-center gap-8">
                >a href="/solutions" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Solutions>/a>
              >a href="/services" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Services>/a>
              >a href="/securepulse" className="text-sm font-medium text-teal hover:text-[var(--text-primary)] transition-colors">SecurePulse>/a>
              >a href="/partners" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Partners>/a>
              >a href="/resources" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Resources>/a>
              >a href="/about" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">About>/a>
              >a href="/contact" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Contact>/a>
            >/div>
            >div className="flex items-center gap-4">
                >button className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]">EN | FR>/button>
              >a href="/securepulse/assessment" className="btn-primary text-sm">Free Assessment>/a>
            >/div>
          >/nav>
        >/header>
        >main className="flex-1">{children}>/main>
        >footer className="bg-midnight text-white">
            >div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              >div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                >div>
                  >span className="text-xl font-display font-bold">CloudMatrix>/span>
                >p className="mt-2 text-sm text-cloud-layer">AI-Forward. Compliance-Native. Canadian-Built.>/p>
              >/div>
              >div>
                  >h4 className="font-semibold mb-3">Solutions>/h4>
                >ul className="space-y-2 text-sm text-cloud-layer">
                    >li>>a href="/solutions/smb" className="hover:text-white transition-colors">SMB>/a>>/li>
                    >li>>a href="/solutions/smc" className="hover:text-white transition-colors">SMC>/a>>/li>
                    >li>>a href="/solutions/enterprise" className="hover:text-white transition-colors">Enterprise>/a>>/li>
                    >li>>a href="/solutions/education" className="hover:text-white transition-colors">Education>/a>>/li>
                  >/ul>
              >/div>
              >div>
                  >h4 className="font-semibold mb-3">Services>/h4>
                >ul className="space-y-2 text-sm text-cloud-layer">
                    >li>>a href="/services/modern-work" className="hover:text-white transition-colors">Modern Work>/a>>/li>
                    >li>>a href="/services/security" className="hover:text-white transition-colors">Security>/a>>/li>
                    >li>>a href="/services/compliance" className="hover:text-white transition-colors">Compliance>/a>>/li>
                    >li>>a href="/services/ai-solutions" className="hover:text-white transition-colors">AI Solutions>/a>>/li>
                  >/ul>
              >/div>
              >div>
                  >h4 className="font-semibold mb-3">Company>/h4>
                >ul className="space-y-2 text-sm text-cloud-layer">
                    >li>>a href="/about" className="hover:text-white transition-colors">About>/a>>/li>
                    >li>>a href="/partners" className="hover:text-white transition-colors">Partners>/a>>/li>
                    >li>>a href="/contact" className="hover:text-white transition-colors">Contact>/a>>/li>
                    >li>>a href="/privacy" className="hover:text-white transition-colors">Privacy Policy>/a>>/li>
                  >/ul>
              >/div>
            >/div>
            >div className="mt-8 pt-8 border-t border-white/10 text-sm text-cloud-layer">
                >p>&copy; 2026 CloudMatrix. All rights reserved. | Data hosted in Canada>/p>
            >/div>
          >/div>
        >/footer>
      >/body>
    >/html>
  );
}
