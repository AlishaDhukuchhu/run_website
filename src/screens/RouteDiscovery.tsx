export default function RouteDiscovery() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<!-- TopNavBar (Shared Component) -->
<nav class="fixed top-0 w-full z-50 flex justify-between items-center px-lg py-md max-w-full bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-primary/10">
<div class="text-headline-md font-headline-md font-black text-primary tracking-tighter">
            RUN_INTELLIGENCE
        </div>
<div class="hidden md:flex items-center gap-lg">
<a class="text-on-surface-variant font-body-md hover:text-on-surface transition-colors" href="/route-discovery">Explore</a>
<a class="text-on-surface-variant font-body-md hover:text-on-surface transition-colors" href="/dashboard">Live Map</a>
<a class="text-on-surface-variant font-body-md hover:text-on-surface transition-colors" href="/events-groups">Events</a>
<a class="text-primary font-label-bold border-b-2 border-primary pb-1" href="/route-discovery">Routes</a>
<a class="text-on-surface-variant font-body-md hover:text-on-surface transition-colors" href="/community-feed">Community</a>
<a class="text-on-surface-variant font-body-md hover:text-on-surface transition-colors" href="/analytics">Analytics</a>
</div>
<div class="flex items-center gap-md">
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all active:scale-95">search</button>
<a href="/create-account" class="bg-primary-container text-on-primary-container px-lg py-sm rounded-lg font-label-bold active:scale-95 transition-transform" style="display:inline-block;text-align:center;">Get Started</a>
</div>
</nav>
<!-- Main Content: Split Screen Layout -->
<main class="flex-1 mt-[72px] flex flex-col md:flex-row overflow-hidden relative">
<!-- Left: Interactive Map Layer -->
<section class="flex-1 relative bg-surface-container-lowest overflow-hidden">
<!-- Map Placeholder with data-location -->
<div class="absolute inset-0 w-full h-full grayscale opacity-40 brightness-75 bg-[url('placeholder')]" data-alt="A sophisticated dark-themed digital map showing San Francisco with glowing neon blue and green route lines. The aesthetic is technical and futuristic, like a satellite telemetry interface. The map features high-contrast street data, translucent data overlays, and a pulsing green marker indicating a runner's position near the Embarcadero. The lighting is low-key with vibrant electronic glow." data-location="San Francisco" style=""></div>
<!-- Map Overlays -->
<div class="absolute top-md left-md flex flex-col gap-sm">
<div class="glass-panel p-sm rounded-xl flex items-center gap-sm">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">location_on</span>
<span class="font-label-bold text-xs">NORTH BEACH, SF</span>
</div>
</div>
<!-- AI Floating Action Notification -->
<div class="absolute bottom-lg left-1/2 -translate-x-1/2 w-[90%] md:w-[400px]">
<div class="glass-panel p-md rounded-2xl border-primary/30 flex items-center gap-md shadow-2xl shadow-primary/20">
<div class="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center animate-pulse">
<span class="material-symbols-outlined text-on-primary-container">psychology</span>
</div>
<div>
<p class="font-label-bold text-primary text-xs uppercase tracking-widest">AI Suggestion</p>
<p class="font-body-md text-sm text-on-surface">"Try the Embarcadero Loop for a flat, scenic 5K."</p>
</div>
<button class="ml-auto material-symbols-outlined text-on-surface-variant">close</button>
</div>
</div>
</section>
<!-- Right: Discovery Interface -->
<aside class="w-full md:w-[480px] bg-surface flex flex-col border-l border-outline-variant z-10">
<!-- Discovery Header & Search -->
<div class="p-lg space-y-md border-b border-outline-variant bg-surface-container-low">
<h1 class="font-headline-lg text-headline-lg text-on-surface">Discover Routes</h1>
<!-- AI Assistant Interface -->
<div class="relative">
<div class="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none">
<span class="material-symbols-outlined text-primary">auto_awesome</span>
</div>
<input class="w-full bg-surface-container-highest border border-outline-variant rounded-xl py-md pl-xl pr-md text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body-md outline-none" placeholder="Ask AI: '5 mile safe route with ocean views'" type="text"/>
</div>
<!-- Filters Bento -->
<div class="grid grid-cols-2 gap-sm">
<button class="flex items-center justify-between px-md py-sm rounded-lg border border-outline-variant hover:border-primary transition-colors">
<div class="flex items-center gap-xs">
<span class="material-symbols-outlined text-sm text-secondary">distance</span>
<span class="font-label-bold text-xs uppercase">Distance</span>
</div>
<span class="text-xs font-bold text-on-surface-variant">Any</span>
</button>
<button class="flex items-center justify-between px-md py-sm rounded-lg border border-outline-variant hover:border-primary transition-colors">
<div class="flex items-center gap-xs">
<span class="material-symbols-outlined text-sm text-primary">safety_check</span>
<span class="font-label-bold text-xs uppercase">Safety</span>
</div>
<span class="text-xs font-bold text-on-surface-variant">High</span>
</button>
</div>
</div>
<!-- Route Results List -->
<div class="flex-1 overflow-y-auto custom-scrollbar p-lg space-y-lg">
<!-- Route Card 1 -->
<div class="glass-panel p-md rounded-2xl hover:border-primary/50 transition-all cursor-pointer group active-route-card">
<div class="flex justify-between items-start mb-md">
<div>
<div class="flex items-center gap-sm mb-xs">
<span class="bg-secondary-container text-on-secondary-container text-[10px] font-black px-2 py-0.5 rounded-full uppercase">Top Rated</span>
<span class="text-on-surface-variant text-xs font-label-bold uppercase">4.2 Miles</span>
</div>
<h3 class="font-headline-md text-on-surface group-hover:text-primary transition-colors">Embarcadero Coastal Run</h3>
</div>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary">bookmark</button>
</div>
<!-- Visual Route Metrics -->
<div class="grid grid-cols-4 gap-xs mb-md">
<div class="text-center p-xs bg-surface-container-highest rounded-lg">
<p class="text-[10px] text-on-surface-variant uppercase font-label-bold">Safety</p>
<p class="text-secondary font-stats-numeric text-lg">9.8</p>
</div>
<div class="text-center p-xs bg-surface-container-highest rounded-lg">
<p class="text-[10px] text-on-surface-variant uppercase font-label-bold">Scenic</p>
<p class="text-primary font-stats-numeric text-lg">10</p>
</div>
<div class="text-center p-xs bg-surface-container-highest rounded-lg">
<p class="text-[10px] text-on-surface-variant uppercase font-label-bold">Traffic</p>
<p class="text-error font-stats-numeric text-lg">Low</p>
</div>
<div class="text-center p-xs bg-surface-container-highest rounded-lg">
<p class="text-[10px] text-on-surface-variant uppercase font-label-bold">Diff</p>
<p class="text-tertiary font-stats-numeric text-lg">2/5</p>
</div>
</div>
<!-- Elevation Preview (SVG Sparkline style) -->
<div class="h-16 w-full bg-surface-container-lowest rounded-lg mb-md flex items-end p-xs relative overflow-hidden">
<div class="absolute top-2 left-2 flex items-center gap-xs">
<span class="material-symbols-outlined text-[12px] text-primary">terrain</span>
<span class="text-[10px] font-label-bold text-on-surface-variant uppercase">Elevation Preview</span>
</div>
<svg class="w-full h-full text-primary/30" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 40 L10 38 L20 35 L30 39 L40 32 L50 34 L60 28 L70 30 L80 15 L90 20 L100 5 L100 40 Z" fill="currentColor"></path>
<path d="M0 40 L10 38 L20 35 L30 39 L40 32 L50 34 L60 28 L70 30 L80 15 L90 20 L100 5" fill="none" stroke="#b4c5ff" stroke-width="1"></path>
</svg>
</div>
<div class="flex items-center gap-md">
<div class="w-12 h-12 rounded-lg bg-cover bg-center border border-white/10" data-alt="A close-up action photograph of professional running shoes hitting asphalt with cinematic lighting. The runner's motion is captured with a high-speed blur, emphasizing speed and performance. The background shows a modern urban waterfront at dusk with electric blue and emerald green ambient lighting." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCocd0c2ci9W_OTTll_UmvHJNBTjVj5qFCuRvAlq6mk4jDm8oSw_ToSPEX3P7zDHeEKT4ARzX86roB3bn_t3Q0KgDDmyxoTVQFra6ErYfYf9SoiBjoU3WP-C2olD8VNzZaASML9sQRtXZUX1K61z0ec7bcft_oi7ETvgdxIeyqEWi3YT_vYv7u1YPhumVfIvWqHwKm-8HQhcPSLbmI-3Sw1EosW9Fc4rEha7Q5N3CtJY7-HbY03ouPzx1HpFF709xlaIe8IWrjEUnk')"></div>
<p class="text-xs text-on-surface-variant leading-tight">Recommended for your <span class="text-primary font-bold">Base Endurance</span> goal.</p>
<button class="ml-auto bg-primary text-on-primary font-label-bold text-xs py-2 px-4 rounded-full active:scale-95 transition-transform">Start Route</button>
</div>
</div>
<!-- Route Card 2 -->
<div class="glass-panel p-md rounded-2xl hover:border-primary/50 transition-all cursor-pointer group opacity-70 hover:opacity-100">
<div class="flex justify-between items-start mb-md">
<div>
<div class="flex items-center gap-sm mb-xs">
<span class="bg-surface-container-highest text-on-surface-variant text-[10px] font-black px-2 py-0.5 rounded-full uppercase">Steep Hills</span>
<span class="text-on-surface-variant text-xs font-label-bold uppercase">6.8 Miles</span>
</div>
<h3 class="font-headline-md text-on-surface group-hover:text-primary transition-colors">Presidio Ridge Trail</h3>
</div>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary">bookmark</button>
</div>
<div class="grid grid-cols-4 gap-xs mb-md">
<div class="text-center p-xs bg-surface-container-highest rounded-lg">
<p class="text-[10px] text-on-surface-variant uppercase font-label-bold">Safety</p>
<p class="text-secondary font-stats-numeric text-lg">8.2</p>
</div>
<div class="text-center p-xs bg-surface-container-highest rounded-lg">
<p class="text-[10px] text-on-surface-variant uppercase font-label-bold">Scenic</p>
<p class="text-primary font-stats-numeric text-lg">9.5</p>
</div>
<div class="text-center p-xs bg-surface-container-highest rounded-lg">
<p class="text-[10px] text-on-surface-variant uppercase font-label-bold">Traffic</p>
<p class="text-secondary font-stats-numeric text-lg">Zero</p>
</div>
<div class="text-center p-xs bg-surface-container-highest rounded-lg">
<p class="text-[10px] text-on-surface-variant uppercase font-label-bold">Diff</p>
<p class="text-error font-stats-numeric text-lg">5/5</p>
</div>
</div>
<div class="h-16 w-full bg-surface-container-lowest rounded-lg flex items-end p-xs relative overflow-hidden">
<svg class="w-full h-full text-error/20" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 40 L10 40 L20 30 L30 20 L40 10 L50 30 L60 25 L70 5 L80 15 L90 5 L100 10 L100 40 Z" fill="currentColor"></path>
<path d="M0 40 L10 40 L20 30 L30 20 L40 10 L50 30 L60 25 L70 5 L80 15 L90 5 L100 10" fill="none" stroke="#ffb4ab" stroke-width="1"></path>
</svg>
</div>
</div>
<!-- Route Card 3 -->
<div class="glass-panel p-md rounded-2xl hover:border-primary/50 transition-all cursor-pointer group opacity-70 hover:opacity-100">
<div class="flex justify-between items-start mb-md">
<div>
<div class="flex items-center gap-sm mb-xs">
<span class="bg-surface-container-highest text-on-surface-variant text-[10px] font-black px-2 py-0.5 rounded-full uppercase">Well Lit</span>
<span class="text-on-surface-variant text-xs font-label-bold uppercase">3.1 Miles</span>
</div>
<h3 class="font-headline-md text-on-surface group-hover:text-primary transition-colors">Mission Night Sprint</h3>
</div>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary">bookmark</button>
</div>
<div class="grid grid-cols-4 gap-xs mb-md">
<div class="text-center p-xs bg-surface-container-highest rounded-lg">
<p class="text-[10px] text-on-surface-variant uppercase font-label-bold">Safety</p>
<p class="text-secondary font-stats-numeric text-lg">9.1</p>
</div>
<div class="text-center p-xs bg-surface-container-highest rounded-lg">
<p class="text-[10px] text-on-surface-variant uppercase font-label-bold">Scenic</p>
<p class="text-on-surface-variant font-stats-numeric text-lg">6.5</p>
</div>
<div class="text-center p-xs bg-surface-container-highest rounded-lg">
<p class="text-[10px] text-on-surface-variant uppercase font-label-bold">Traffic</p>
<p class="text-tertiary font-stats-numeric text-lg">Med</p>
</div>
<div class="text-center p-xs bg-surface-container-highest rounded-lg">
<p class="text-[10px] text-on-surface-variant uppercase font-label-bold">Diff</p>
<p class="text-secondary font-stats-numeric text-lg">1/5</p>
</div>
</div>
</div>
</div>
</aside>
</main>
<!-- Footer (Shared Component) -->
<footer class="w-full px-xl py-xl grid grid-cols-1 md:grid-cols-4 gap-lg bg-surface-container-lowest border-t border-outline-variant relative z-20">
<div class="space-y-md">
<div class="text-headline-md font-headline-md font-black text-primary">RUN_INTELLIGENCE</div>
<p class="text-on-surface-variant font-body-md">Precision Performance Tracking.</p>
<p class="text-on-surface-variant font-body-md text-xs">© 2024 RUN_INTELLIGENCE.</p>
</div>
<div class="flex flex-col gap-sm">
<h4 class="font-label-bold text-on-surface uppercase text-xs tracking-widest">Product</h4>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-sm" href="/route-discovery">Explore</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-sm" href="#">API Docs</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-sm" href="#">Support</a>
</div>
<div class="flex flex-col gap-sm">
<h4 class="font-label-bold text-on-surface uppercase text-xs tracking-widest">Legal</h4>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-sm" href="#">Privacy Policy</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-sm" href="#">Terms of Service</a>
<a class="text-on-surface-variant hover:text-primary transition-colors font-body-md text-sm" href="#">Cookie Settings</a>
</div>
<div class="flex flex-col gap-sm">
<h4 class="font-label-bold text-on-surface uppercase text-xs tracking-widest">Connect</h4>
<div class="flex gap-md">
<span class="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">public</span>
<span class="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">share</span>
<span class="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">alternate_email</span>
</div>
</div>
</footer>

` }} />
  );
}
