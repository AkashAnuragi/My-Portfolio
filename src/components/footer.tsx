import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const socialLinks = [
    { icon: <Github />, href: "#", name: "GitHub" },
    { icon: <Linkedin />, href: "#", name: "LinkedIn" },
    { icon: <Twitter />, href: "#", name: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <p className="text-sm text-foreground/60">&copy; {new Date().getFullYear()} Visiofolio 3D. All rights reserved.</p>
        <div className="flex space-x-2">
            {socialLinks.map((social) => (
                <Button key={social.name} asChild variant="ghost" size="icon">
                    <Link href={social.href} target="_blank">
                        {social.icon}
                        <span className="sr-only">{social.name}</span>
                    </Link>
                </Button>
            ))}
        </div>
      </div>
    </footer>
  );
}
