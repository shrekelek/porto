import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/BimaSakti18", icon: Github, label: "GitHub" },
  { href: "mailto:bima37278@gmail.com", icon: Mail, label: "Email" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold text-foreground">
              <span className="text-gold">BimaSakti</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Data Scientist & Machine Learning Engineer
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="rounded-full border border-border/50 p-2.5 text-muted-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-border/30 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} BimaSakti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
