import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Real-Time Chat Application",
    description: "Developed a real-time chat application supporting over 500 concurrent users with seamless message delivery and minimal latency.",
    image: PlaceHolderImages.find(p => p.id === 'project-chat'),
    tags: ["React.js", "Node.js", "Socket.IO", "MongoDB"],
    liveUrl: "https://fantastic-churros-1cd5d2.netlify.app/",
    githubUrl: "https://github.com/AkashAnuragi/The-Web-Chat-App",
  },
  {
    title: "Weather Webpage",
    description: "Developed a real-time weather app with a fully responsive UI, integrating OpenWeatherMap API for data from over 250,000 cities.",
    image: PlaceHolderImages.find(p => p.id === 'project-weather'),
    tags: ["HTML", "CSS", "JavaScript", "API"],
    liveUrl: "https://akashanuragi.github.io/Weather-App/",
    githubUrl: "https://github.com/AkashAnuragi/Weather-App",
  },
  {
    title: "Tic-Tac-Toe",
    description: "A classic Tic-Tac-Toe game built with vanilla JavaScript, HTML, and CSS.",
    image: PlaceHolderImages.find(p => p.id === 'project-tic-tac-toe'),
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://akashanuragi.github.io/Tic-Tac-Toe/",
    githubUrl: "https://github.com/AkashAnuragi/Tic-Tac-Toe",
  },
  {
    title: "Password Generator",
    description: "A simple and effective password generator to create strong, random passwords.",
    image: PlaceHolderImages.find(p => p.id === 'project-password-generator'),
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://akashanuragi.github.io/Password-Generator/",
    githubUrl: "https://github.com/AkashAnuragi/Password-Generator",
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
          <p className="mx-auto max-w-[700px] text-lg text-foreground/80 md:text-xl">
            Here are a few projects I've worked on recently.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="group [perspective:1000px]">
              <Card className="relative h-full overflow-hidden bg-card transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(10deg)_rotateX(5deg)] group-hover:shadow-2xl">
                <CardHeader className="p-0">
                  {project.image && (
                     <Image
                        src={project.image.imageUrl}
                        alt={project.image.description}
                        width={600}
                        height={400}
                        data-ai-hint={project.image.imageHint}
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                  )}
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                  <p className="text-foreground/80">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-end gap-2">
                   <Button asChild variant="ghost" size="icon" className="transition-transform hover:scale-110">
                     <Link href={project.githubUrl} target="_blank"><Github /><span className="sr-only">GitHub</span></Link>
                   </Button>
                   <Button asChild variant="ghost" size="icon" className="transition-transform hover:scale-110">
                     <Link href={project.liveUrl} target="_blank"><ExternalLink /><span className="sr-only">Live Demo</span></Link>
                   </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
