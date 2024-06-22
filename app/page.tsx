import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import {navItems} from '@/data'

export default function Home() {
  return (
  <main className="relative flex items-center justify-center flex-col sm:px-10 px-5 bg-black-100 overflow-hidden">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
      <Hero/>
      <Grid />
    </div>
  </main>
  );
}
