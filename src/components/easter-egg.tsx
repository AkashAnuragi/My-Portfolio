"use client";
import { useKonamiCode } from '@/hooks/use-konami-code';
import { useToast } from "@/hooks/use-toast";

export default function EasterEgg() {
  const { toast } = useToast();
  
  useKonamiCode(() => {
    document.body.classList.add('animate-barrel-roll');
    toast({
      title: 'Yeehaw!',
      description: 'You found the Konami code!',
    });
    setTimeout(() => {
      document.body.classList.remove('animate-barrel-roll');
    }, 2000);
  });

  return null;
}
