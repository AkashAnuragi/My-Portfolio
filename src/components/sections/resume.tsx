import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

const timelineData = [
    { type: "Work", icon: <Briefcase />, date: "2021 - Present", title: "Senior Frontend Developer", subtitle: "Tech Solutions Inc.", description: "Leading the development of user-facing features for our flagship product, mentoring junior developers, and improving our codebase." },
    { type: "Work", icon: <Briefcase />, date: "2019 - 2021", title: "Frontend Developer", subtitle: "WebCrafters LLC", description: "Developed and maintained responsive websites for various clients, focusing on performance and modern UI/UX principles." },
    { type: "Education", icon: <GraduationCap />, date: "2015 - 2019", title: "B.S. in Computer Science", subtitle: "University of Technology", description: "Graduated with honors, focusing on web development and human-computer interaction." }
];

export default function ResumeSection() {
    return (
        <section id="resume" className="w-full py-24 sm:py-32 bg-secondary/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Journey</h2>
                    <p className="mt-4 mx-auto max-w-[700px] text-lg text-foreground/80 md:text-xl">A timeline of my professional and academic milestones.</p>
                </div>
                
                <div className="relative max-w-3xl mx-auto">
                    <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />
                    <div className="space-y-12">
                        {timelineData.map((item, index) => (
                            <div key={index} className="relative md:flex md:items-center"
                                style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
                                <div className="absolute left-4 top-1 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2">
                                    {item.icon}
                                </div>
                                <div className="pl-12 w-full md:w-1/2 md:pl-8 md:pr-8">
                                    <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                                        <CardHeader>
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                <CardTitle>{item.title}</CardTitle>
                                                <p className="text-sm font-medium text-muted-foreground">{item.date}</p>
                                            </div>
                                            <p className="font-semibold text-primary">{item.subtitle}</p>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">{item.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="hidden md:block w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <Button asChild size="lg">
                        <Link href="https://drive.google.com/uc?export=download&id=12YvrQVfFaXF2wYEQOX_3VYzj-oGYifW1" target="_blank" download>
                            <Download className="mr-2 h-5 w-5" />
                            Download Resume
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
