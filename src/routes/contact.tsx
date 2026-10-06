import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Your Name" },
      { name: "description", content: "Get in touch for data science consulting, collaborations, or job opportunities." },
      { property: "og:title", content: "Contact — Your Name" },
      { property: "og:description", content: "Get in touch for data science consulting, collaborations, or job opportunities." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Replace with your form handler (e.g. Formspree, server function, etc.)
    setSubmitted(true);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.25fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-gold">
            Contact
          </p>
          <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            Let’s work together
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind or want to discuss an opportunity? Send me a
            message and I’ll get back to you as soon as possible.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-gold/10 p-3 text-gold">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href="mailto:bima37278@gmail.com"
                  className="font-medium text-foreground hover:text-gold"
                >
                  bima37278@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-gold/10 p-3 text-gold">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium text-foreground">
                  Surakarta, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-gold/10 p-4 text-gold">
                <Send className="h-8 w-8" />
              </div>
              <h2 className="mt-6 font-display text-2xl font-medium text-card-foreground">
                Message sent!
              </h2>
              <p className="mt-2 text-muted-foreground">
                Thank you for reaching out. I’ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="border-border bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="abcd@example.com"
                    required
                    className="border-border bg-background"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project inquiry"
                  required
                  className="border-border bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="border-border bg-background resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
