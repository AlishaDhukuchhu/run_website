export default function KnowEveryStep() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<!-- Top Navigation Bar -->
<nav class="fixed top-0 w-full z-50 bg-surface-container/80 backdrop-blur-xl border-b border-white/10 shadow-md">
<div class="flex justify-between items-center px-lg py-md max-w-7xl mx-auto">
<a href="/" class="font-headline-md text-headline-md font-bold text-primary" style="text-decoration:none;">RunRadar</a>
<div class="hidden md:flex items-center gap-xl">
<a class="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md transition-colors duration-200" href="/route-discovery">Explore</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="/dashboard">Live Map</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="/events-groups">Events</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="/route-discovery">Routes</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="/community-feed">Community</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="/analytics">Analytics</a>
</div>
<a href="/create-account" class="bg-primary-container text-on-primary-container px-lg py-sm rounded-full font-label-bold text-label-bold active:scale-95 transition-transform" style="display:inline-block;text-align:center;">Get Started</a>
</div>
</nav>
<!-- Hero Section -->
<section class="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden pt-xl">
<!-- Interactive Map Background -->
<div class="absolute inset-0 z-0">
<div class="w-full h-full grayscale opacity-40 brightness-50" data-alt="A detailed satellite view of a metropolitan city at dusk with glowing neon trails representing popular running routes in electric blue and neon green. The scene is futuristic and data-driven, featuring high-contrast map details, atmospheric depth, and a high-end technological aesthetic consistent with a sophisticated dark-mode sports dashboard." data-location="New York City" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDOnZE1TIzjyLEdBhu5eBRdSBmvzRGnfCyqMdDaD2-yvAERW1tisSXEAg7Q70hqUMTohhW-a0fsZw5qqnfXNFKQEo6KvHuNrjB_EUaQGzDenv94jw-PzIZY3D-waGYSRuoZYnJCWkj7h2pStivi5vPG0gVCRSvw3kRGl0HD6hPdY6MMurFuQE5ipQsipzt3GvBpd7W8Oj3MYrqTz6WhOP_4xbjyoFQ1am0tpCDzZxVZc6vPmRnVOsPmlNlkSNNmeyEuNLfD8SmR9K0')"></div>
<div class="absolute inset-0 map-overlay-gradient"></div>
<!-- Animated Shader Overlay for Hotspots -->

</div>
<div class="relative z-10 max-w-5xl mx-auto px-container-margin text-center">
<div class="inline-flex items-center gap-sm bg-surface-container-high/60 border border-white/10 px-md py-xs rounded-full mb-lg backdrop-blur-md">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">my_location</span>
<span class="text-label-bold font-label-bold uppercase tracking-wider text-on-surface-variant">Live Radar Active</span>
</div>
<h1 class="font-display-lg text-display-lg md:text-[64px] mb-md leading-tight text-on-surface">
                Know Every Step <br/><span class="text-primary">Before You Run</span>
</h1>
<p class="font-body-lg text-body-lg max-w-2xl mx-auto text-on-surface-variant mb-xl">
                Get real-time updates on weather, traffic, road closures, safety alerts, events, air quality, and runner activity within your chosen distance.
            </p>
<!-- Radius Selector Widget -->
<div class="glass-panel rounded-xxl p-lg mb-xl max-w-xl mx-auto glow-blue">
<div class="flex justify-between items-center mb-md">
<span class="font-label-bold text-label-bold text-on-surface-variant uppercase">Search Radius</span>
<span class="font-stats-numeric text-stats-numeric text-secondary" id="radius-val">5km</span>
</div>
<input class="w-full h-2 bg-surface-variant rounded-full appearance-none cursor-pointer accent-secondary" id="radius-slider" max="25" min="1" type="range" value="5"/>
<div class="flex justify-between mt-sm text-xs text-outline font-label-bold">
<span>1KM</span>
<span>10KM</span>
<span>25KM</span>
</div>
</div>
<div class="flex flex-col md:flex-row gap-md justify-center">
<button class="bg-primary-container text-white px-xl py-lg rounded-full font-headline-md text-headline-md flex items-center justify-center gap-sm hover:bg-primary transition-all active:scale-95">
                    Start Exploring <span class="material-symbols-outlined">rocket_launch</span>
</button>
<button class="glass-panel border border-primary/30 text-primary px-xl py-lg rounded-full font-headline-md text-headline-md flex items-center justify-center gap-sm hover:bg-primary/10 transition-all active:scale-95">
                    View Live Map <span class="material-symbols-outlined">map</span>
</button>
</div>
</div>
</section>
<!-- Features Section: Bento Grid Cards -->
<section class="py-xl max-w-7xl mx-auto px-container-margin">
<div class="mb-xl text-center">
<h2 class="font-headline-lg text-headline-lg mb-sm">Elite Intelligence Platform</h2>
<p class="text-on-surface-variant font-body-lg text-body-lg">Engineered for real-time spatial awareness.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-lg">
<!-- Feature Card 1 -->
<div class="glass-panel rounded-xxl p-xl flex flex-col gap-md group hover:border-primary/50 transition-all duration-300">
<div class="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-sm">
<span class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1;">radar</span>
</div>
<h3 class="font-headline-md text-headline-md text-on-surface">Smart Radius Intelligence</h3>
<p class="text-on-surface-variant">Dynamic proximity scanning that identifies every hazard and opportunity within your precise running zone.</p>
</div>
<!-- Feature Card 2 -->
<div class="glass-panel rounded-xxl p-xl flex flex-col gap-md group hover:border-secondary/50 transition-all duration-300">
<div class="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary mb-sm">
<span class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1;">traffic</span>
</div>
<h3 class="font-headline-md text-headline-md text-on-surface">Live Route Conditions</h3>
<p class="text-on-surface-variant">Real-time traffic flow, construction closures, and crowd density mapped directly onto your path.</p>
</div>
<!-- Feature Card 3 -->
<div class="glass-panel rounded-xxl p-xl flex flex-col gap-md group hover:border-tertiary/50 transition-all duration-300">
<div class="w-12 h-12 rounded-xl bg-tertiary/20 flex items-center justify-center text-tertiary mb-sm">
<span class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1;">air</span>
</div>
<h3 class="font-headline-md text-headline-md text-on-surface">Weather &amp; Air Quality</h3>
<p class="text-on-surface-variant">Micro-climate tracking. Know exactly where the cleanest air and best running temps are right now.</p>
</div>
<!-- Feature Card 4 (Double Wide) -->
<div class="glass-panel rounded-xxl p-xl md:col-span-2 flex flex-col md:flex-row gap-lg items-center group">
<div class="md:w-1/2 space-y-md">
<div class="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary-container mb-sm">
<span class="material-symbols-outlined text-3xl">groups</span>
</div>
<h3 class="font-headline-lg text-headline-lg text-on-surface">Runner Community Heat</h3>
<p class="text-on-surface-variant">See where the pulse of the city is. Join high-density activity zones or find your own quiet escape route.</p>
<button class="text-primary font-label-bold flex items-center gap-xs">View Active Zones <span class="material-symbols-outlined">arrow_forward</span></button>
</div>
<div class="md:w-1/2 w-full h-48 rounded-xl overflow-hidden relative border border-white/5 shadow-inner">
<div class="absolute inset-0 bg-cover bg-center" data-alt="A stylized digital heatmap showing runner density in a park. Vibrant orange and yellow pulses overlay a dark blue architectural map, with small moving dots representing individual athletes. The visual is crisp, technical, and conveys high-tech spatial data visualization." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfjyA8oQGxepUG8VlijGCSBjfOmZ2NIiXYDPb1wp2gB1ewxO8XwAuGwOo0wdjY27tWBIl1es44bS3uMM2e-ebnaXqYslX2JvOKc-bq00ujSO7dNn-v5V38eU1XDacI8vHPhoqbuZ0vIqbm6n8asEzwmlc3QEiBBEFpMzO7KEHbzkDDR7R538FgcQbFi2TSomJFQ9944vyLOU16XWsNQ-oEb8RUmIbge42oHvirM6Gosf8TQyW1t8_qrBvRNhPwBypPJx1miYKvp8w')"></div>
</div>
</div>
<!-- Feature Card 5 -->
<div class="glass-panel rounded-xxl p-xl flex flex-col gap-md">
<div class="w-12 h-12 rounded-xl bg-error/20 flex items-center justify-center text-error mb-sm">
<span class="material-symbols-outlined text-3xl">health_and_safety</span>
</div>
<h3 class="font-headline-md text-headline-md text-on-surface">Safe Running Assistant</h3>
<p class="text-on-surface-variant">Intelligent safety alerts and lighting conditions monitoring for evening and morning athletes.</p>
</div>
</div>
</section>
<!-- Community & Social Section -->
<section class="py-xl bg-surface-container-low/50">
<div class="max-w-7xl mx-auto px-container-margin">
<div class="flex flex-col md:flex-row justify-between items-end mb-xl gap-md">
<div>
<h2 class="font-headline-lg text-headline-lg text-on-surface">Community Pulse</h2>
<p class="text-on-surface-variant font-body-lg">Connect with elite runners and local challenges.</p>
</div>
<button class="bg-secondary text-on-secondary px-lg py-sm rounded-full font-label-bold hover:scale-105 transition-transform shadow-lg shadow-secondary/20">Join the Collective</button>
</div>
<div class="grid grid-cols-1 md:grid-cols-4 gap-md">
<!-- Challenge Card -->
<div class="bg-surface-container p-md rounded-xxl border border-white/5 space-y-sm">
<div class="flex justify-between items-start">
<span class="bg-secondary/10 text-secondary px-sm py-xs rounded-full text-[10px] font-label-bold uppercase">Active Challenge</span>
<span class="material-symbols-outlined text-outline">more_horiz</span>
</div>
<div class="w-full h-32 rounded-lg mb-md bg-cover bg-center" data-alt="A breathtaking view of a mountain trail at sunrise with a runner's silhouette. The lighting is golden and dramatic, with a focus on professional athletic photography. The overall style is clean, modern, and inspiring for fitness enthusiasts." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiqS2T3mqHQYJQ5dgIa9l8G9w4tAPNN2YgKWI6VmTIGtNVMmMG6QygJVdIAfF2JuuqaA4OjuuxSeTsZgGtMpCuKFREz-srlNsWeboOt34NOTXY5PV7mSK77wKIIr6z247euUK2fV2nEBzl5WqlfdNzsUnYXsfbQvVumMxcD8yjadEhpDaStsfYn2qioVcty4VIWdVtJYMpDAlsHVHuN9etcY5tw8cfokbWmutp_nE7-terwuBCfblY2x_rusZRliGoHfHLlqvKYAs')"></div>
<h4 class="font-label-bold text-on-surface">Brooklyn Peak 50K</h4>
<p class="text-xs text-on-surface-variant">2,410 runners participating this weekend.</p>
<div class="pt-sm border-t border-white/5 flex items-center gap-xs">
<div class="flex -space-x-2">
<div class="w-6 h-6 rounded-full border-2 border-surface-container bg-blue-500"></div>
<div class="w-6 h-6 rounded-full border-2 border-surface-container bg-green-500"></div>
<div class="w-6 h-6 rounded-full border-2 border-surface-container bg-red-500"></div>
</div>
<span class="text-[10px] text-outline font-label-bold">+12 Friends</span>
</div>
</div>
<!-- Statistics Widget -->
<div class="bg-surface-container p-md rounded-xxl border border-white/5 flex flex-col justify-between">
<div class="space-y-xs">
<span class="text-outline text-label-bold font-label-bold uppercase">Weekly Fleet Distance</span>
<div class="text-stats-numeric font-stats-numeric text-primary">842,019<span class="text-body-md ml-xs">km</span></div>
</div>
<div class="h-24 w-full mt-md">

</div>
</div>
<!-- Local Event -->
<div class="bg-surface-container p-md rounded-xxl border border-white/5 space-y-sm">
<span class="text-outline text-label-bold font-label-bold uppercase">Upcoming Runs</span>
<div class="space-y-md mt-md">
<div class="flex gap-md items-center group cursor-pointer">
<div class="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center font-bold text-primary">04</div>
<div>
<div class="text-label-bold text-on-surface">Central Park Social</div>
<div class="text-[10px] text-outline">06:00 AM • 8km • Pace 5:00</div>
</div>
</div>
<div class="flex gap-md items-center group cursor-pointer">
<div class="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center font-bold text-secondary">05</div>
<div>
<div class="text-label-bold text-on-surface">Night Trail Run</div>
<div class="text-[10px] text-outline">08:30 PM • 12km • Advanced</div>
</div>
</div>
</div>
</div>
<!-- Leaderboard -->
<div class="bg-surface-container p-md rounded-xxl border border-white/5">
<div class="flex justify-between items-center mb-md">
<span class="text-outline text-label-bold font-label-bold uppercase">Leaderboard</span>
<span class="text-primary text-[10px] font-label-bold uppercase cursor-pointer">All Time</span>
</div>
<div class="space-y-sm">
<div class="flex items-center justify-between">
<div class="flex items-center gap-sm">
<span class="text-xs font-bold text-outline">1</span>
<span class="text-xs font-label-bold text-on-surface">Alex R.</span>
</div>
<span class="text-xs font-stats-numeric text-secondary">152km</span>
</div>
<div class="flex items-center justify-between">
<div class="flex items-center gap-sm">
<span class="text-xs font-bold text-outline">2</span>
<span class="text-xs font-label-bold text-on-surface">Sarah J.</span>
</div>
<span class="text-xs font-stats-numeric text-secondary">148km</span>
</div>
<div class="flex items-center justify-between">
<div class="flex items-center gap-sm">
<span class="text-xs font-bold text-outline">3</span>
<span class="text-xs font-label-bold text-on-surface">Mike T.</span>
</div>
<span class="text-xs font-stats-numeric text-secondary">141km</span>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Footer -->
<footer class="w-full bg-surface-container-lowest border-t border-outline-variant">
<div class="flex flex-col md:flex-row justify-between items-center px-lg py-xl gap-md max-w-7xl mx-auto">
<div class="flex flex-col items-center md:items-start gap-sm">
<a href="/" class="font-headline-md text-headline-md text-primary font-bold" style="text-decoration:none;">RunRadar</a>
<p class="text-on-surface-variant opacity-80 text-sm">© 2024 RunRadar. Precision Tracking for Elite Athletes.</p>
</div>
<div class="flex gap-lg">
<a class="text-on-surface-variant hover:text-secondary transition-colors font-label-bold text-label-bold" href="#">About</a>
<a class="text-on-surface-variant hover:text-secondary transition-colors font-label-bold text-label-bold" href="#">Privacy</a>
<a class="text-on-surface-variant hover:text-secondary transition-colors font-label-bold text-label-bold" href="#">Support</a>
<a class="text-on-surface-variant hover:text-secondary transition-colors font-label-bold text-label-bold" href="#">API</a>
<a class="text-on-surface-variant hover:text-secondary transition-colors font-label-bold text-label-bold" href="/community-feed">Community</a>
</div>
<div class="flex gap-md">
<button class="w-10 h-10 rounded-full flex items-center justify-center bg-surface-variant hover:bg-secondary hover:text-on-secondary transition-all">
<span class="material-symbols-outlined">share</span>
</button>
<button class="w-10 h-10 rounded-full flex items-center justify-center bg-surface-variant hover:bg-secondary hover:text-on-secondary transition-all">
<span class="material-symbols-outlined">notifications</span>
</button>
</div>
</div>
</footer>

` }} />
  );
}
