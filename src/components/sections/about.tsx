import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Code, Database, Server, Smartphone, Wand2 } from "lucide-react";

const skills = [
  { name: "React", icon: <Code className="h-4 w-4"/> },
  { name: "Next.js", icon: <Code className="h-4 w-4"/> },
  { name: "JavaScript", icon: <Code className="h-4 w-4"/> },
  { name: "CSS & Tailwind", icon: <Wand2 className="h-4 w-4"/> },
  { name: "Node.js", icon: <Server className="h-4 w-4"/> },
  { name: "Databases", icon: <Database className="h-4 w-4"/> },
  { name: "Responsive Design", icon: <Smartphone className="h-4 w-4"/> },
];

const profileImage = PlaceHolderImages.find(p => p.id === 'profile-photo');

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="group relative flex justify-center">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                width={500}
                height={500}
                data-ai-hint={profileImage.imageHint}
                className="rounded-xl object-cover shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl"
              />
            )}
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="max-w-[600px] text-lg text-foreground/80 md:text-xl">
                I'm a passionate developer with a love for creating beautiful and intuitive user experiences. With a background in both design and development, I enjoy bringing ideas to life in the browser, crafting everything from stunning landing pages to complex web applications.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">My Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <div key={skill.name} className="group [perspective:800px]">
                     <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-card px-4 py-2 shadow-sm transition-all duration-300 group-hover:[transform:translateZ(40px)_rotateX(-15deg)] group-hover:shadow-xl group-hover:bg-primary/5">
                        {skill.icon}
                        <span className="font-medium">{skill.name}</span>
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
