import { ChevronDown, ChevronRight, Crosshair } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './lib/utils';
import { forwardRef, type ButtonHTMLAttributes } from 'react';

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        hero: "bg-primary text-primary-foreground rounded-full px-6 py-3 text-base font-medium hover:bg-primary/90",
        heroSecondary: "liquid-glass text-foreground rounded-full px-6 py-3 text-base font-normal hover:bg-white/5",
        nav: "bg-primary text-primary-foreground rounded-xl px-4 py-2 text-sm font-medium hover:bg-primary/90",
      },
    },
    defaultVariants: {
      variant: "hero",
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

function App() {
  const brands = ["Aether", "Helios", "Zenith", "Stratus", "Novus", "Atlas"];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground flex flex-col font-sans antialiased">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://assets.framerate.space/templates/Rotating%20Earth/hf_20260309_042944_4a2205b7-b061-490a-852b-92d9e9955ce9.mp4" type="video/mp4" />
      </video>

      {/* Overlay for additional contrast if needed */}
      <div className="absolute inset-0 bg-background/30 pointer-events-none" />

      <div className="relative z-10 flex flex-col flex-1 h-full">
        {/* Navbar */}
        <header className="w-full flex justify-center mt-6 px-4">
          <nav className="liquid-glass w-full max-w-[850px] rounded-3xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                <Crosshair className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-semibold tracking-wide">NEXUS</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-base text-foreground/90 hover:text-foreground flex items-center gap-1 transition-colors">
                Infrastructure <ChevronDown className="w-4 h-4 opacity-50" />
              </a>
              <a href="#" className="text-base text-foreground/90 hover:text-foreground transition-colors">
                Edge Network
              </a>
              <a href="#" className="text-base text-foreground/90 hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="#" className="text-base text-foreground/90 hover:text-foreground flex items-center gap-1 transition-colors">
                Developers <ChevronDown className="w-4 h-4 opacity-50" />
              </a>
            </div>

            <div className="flex items-center">
              <Button variant="nav">Sign Up</Button>
            </div>
          </nav>
        </header>

        {/* Hero Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 mt-16 mb-20">
          <div className="liquid-glass rounded-full p-1 pl-4 pr-1 flex items-center gap-3 mb-8">
            <span className="text-sm font-medium">Edge Network Expanded</span>
            <div className="bg-white/5 rounded-full px-3 py-1 flex items-center gap-1 cursor-pointer hover:bg-white/10 transition-colors">
              <span className="text-sm">View Map</span>
              <ChevronRight className="w-3 h-3 opacity-70" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] max-w-5xl text-center text-hero-heading mb-6">
            Planetary Scale<br />Infrastructure
          </h1>

          <p className="text-lg text-hero-sub opacity-80 max-w-md text-center mb-10">
            Deploy your applications globally with ultra-low latency, real-time synchronization, and resilient edge computing.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button variant="hero">Deploy for Free</Button>
            <Button variant="heroSecondary">Talk to Engineering</Button>
          </div>
        </main>

        {/* Social Proof Marquee */}
        <div className="w-full mt-auto mb-8 overflow-hidden flex items-center">
          <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row items-center gap-8 px-8">
            <p className="text-sm text-foreground/50 whitespace-nowrap shrink-0">
              Powering global applications for innovative teams
            </p>
            
            {/* Marquee container */}
            <div className="flex-1 overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                {/* 2 Sets of items for seamless loop */}
                {[0, 1].map((set) => (
                  <div key={set} className="flex gap-12 pr-12">
                    {brands.map((brand, i) => (
                      <div key={`${set}-${i}`} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg liquid-glass flex items-center justify-center">
                          <span className="font-semibold text-sm">{brand[0]}</span>
                        </div>
                        <span className="text-base font-semibold text-foreground/90">{brand}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
