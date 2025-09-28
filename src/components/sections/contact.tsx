"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const socialLinks = [
    { icon: <Github />, href: "https://github.com/AkashAnuragi", name: "GitHub" },
    { icon: <Linkedin />, href: "https://www.linkedin.com/in/akash-anuragi/", name: "LinkedIn" },
];

export default function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Here you would typically send the data to a server
    console.log(values);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    toast({
      title: "Message Sent! ✨",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
            <p className="max-w-[600px] text-lg text-foreground/80 md:text-xl">
              Have a project in mind, or just want to say hi? Feel free to send me a message. My email is akashanuragi543@gmail.com
            </p>
            <div className="flex space-x-4">
                {socialLinks.map((social) => (
                    <Button key={social.name} asChild variant="outline" size="icon" className="h-12 w-12 transition-transform hover:scale-110 hover:bg-accent hover:text-accent-foreground">
                        <Link href={social.href} target="_blank">
                            {social.icon}
                            <span className="sr-only">{social.name}</span>
                        </Link>
                    </Button>
                ))}
            </div>
          </div>
          <div className="group [perspective:800px]">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 rounded-lg border bg-card p-8 shadow-sm transition-transform duration-500 group-hover:[transform:rotateX(5deg)]">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl><Input placeholder="Your Name" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl><Input type="email" placeholder="your@email.com" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl><Textarea placeholder="Your message..." {...field} className="min-h-[120px]" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <Button type="submit" size="lg" className="w-full" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
