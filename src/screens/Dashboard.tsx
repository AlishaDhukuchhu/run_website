export default function Dashboard() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<!-- Top Navigation Bar -->
<nav class="fixed top-0 w-full z-50 bg-surface-container/80 backdrop-blur-xl border-b border-white/10 shadow-md">
<div class="max-w-7xl mx-auto flex justify-between items-center px-lg py-md">
<div class="flex items-center gap-md">
<span class="font-headline-md text-headline-md font-bold text-primary">RunRadar</span>
<div class="hidden md:flex gap-lg ml-xl">
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="/route-discovery">Explore</a>
<a class="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md" href="/dashboard">Live Map</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="/events-groups">Events</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="/route-discovery">Routes</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="/community-feed">Community</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="/analytics">Analytics</a>
</div>
</div>
<div class="flex items-center gap-md">
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary">notifications</button>
<div class="h-8 w-8 rounded-full border border-primary/20 overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Close-up portrait of a serious endurance athlete with sweat on their brow, styled with a high-contrast dark-mode aesthetic. The lighting is dramatic, highlighting the contours of the athlete's face with neon blue and green rim lighting. The background is a blurred high-tech interface with data points and glowing metrics, reflecting the premium command center design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLKw4iDlSBYWFDn5kmggqTj5ze--0w-ZqZmsjTh3_Wd6-4cSUrgRrjnBxK1MxgVb9kJYii4qJZnDCr0W9WWx7ogONugrFJUB9gi2SZTe3BklI0dGs_xN5xaVCXG4l1NT_wKZwErAZaLSDr5OXOXJva_ofx53wUD4cy4ytJDcKF7IcyIJdklj3zIaFm4L4fagAdOBrR9OaLzS6bCalSrlXoo-FAwQtvaEUncRLLnSj5pRnBPPo3Y5jyupuAAIH6jizdQXnYvROC16A"/>
</div>
<a href="/create-account" class="bg-primary-container text-on-primary-container px-md py-xs rounded-lg font-label-bold text-label-bold active:scale-95 transition-transform" style="display:inline-block;text-align:center;">Get Started</a>
</div>
</div>
</nav>
<!-- Main Command Center Layout -->
<main class="h-screen w-full pt-16 flex overflow-hidden">
<!-- Center Section: Expansive Map Canvas -->
<section class="flex-grow relative bg-surface-container-lowest">
<!-- Map Placeholder Background -->
<div class="absolute inset-0 z-0">
<div class="w-full h-full" data-alt="A highly detailed satellite-style map of a metropolitan city center at night. The map features intricate street grids glowing with neon blue polylines representing popular running routes. Semi-transparent heat map layers in vibrant orange and red indicate high athlete density, while subtle green glowing circles highlight safety zones and water stations. The overall style is technical, dark, and sleek, mimicking a high-end GPS navigation system." data-location="Berlin Mitte" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCCnhoh4EeHmWk5gy-VqTqDeyL7YNaWIHGIFG3qrd4mlxTmP5nphFzPHOlywCzWuFCay48o61_kT5xbM_pKoCDiFL9QFlKW-rV58WuIDcaOwgJEsMYBfI38iiIr7_uOy3GCwxFYOcwBvVCbOLpaSo7eIdq9VVRKYGWGtaWMp4Be0PfAu7bDCJH1uQsjR-Dw2vmyl-MopwD94NQsb4YIE9uW1GAHrrRg8-ur8xXRjIQNmn3tT4dHRFS1TE8NJ53QyTRPSa03HF6_L04')"></div>
</div>
<!-- Map Controls - Floating Glass Panels -->
<div class="absolute top-lg left-lg z-10 space-y-md w-72">
<div class="glass-panel p-md rounded-xl map-overlay-shadow">
<h3 class="font-label-bold text-label-bold text-primary mb-sm">ACTIVE RADIUS</h3>
<div class="flex items-center gap-sm">
<input class="w-full h-1 bg-surface-variant rounded-full appearance-none accent-primary cursor-pointer" type="range"/>
<span class="font-stats-numeric text-stats-numeric text-[20px] text-on-surface w-12">5k</span>
</div>
</div>
<div class="glass-panel p-md rounded-xl map-overlay-shadow">
<h3 class="font-label-bold text-label-bold text-primary mb-sm">MAP LAYERS</h3>
<div class="space-y-sm">
<label class="flex items-center justify-between cursor-pointer">
<span class="font-body-md text-body-md text-on-surface-variant">Live Heatmap</span>
<input checked="" class="form-checkbox bg-surface-variant border-none rounded text-secondary focus:ring-secondary" type="checkbox"/>
</label>
<label class="flex items-center justify-between cursor-pointer">
<span class="font-body-md text-body-md text-on-surface-variant">Safety Zones</span>
<input checked="" class="form-checkbox bg-surface-variant border-none rounded text-secondary focus:ring-secondary" type="checkbox"/>
</label>
<label class="flex items-center justify-between cursor-pointer">
<span class="font-body-md text-body-md text-on-surface-variant">Water Stations</span>
<input class="form-checkbox bg-surface-variant border-none rounded text-secondary focus:ring-secondary" type="checkbox"/>
</label>
</div>
</div>
</div>
<!-- Bottom Floating Status Bar -->
<div class="absolute bottom-lg left-1/2 -translate-x-1/2 z-10 w-auto">
<div class="glass-panel px-lg py-md rounded-full flex items-center gap-xl map-overlay-shadow border border-primary/20">
<div class="flex items-center gap-sm">
<span class="w-3 h-3 rounded-full bg-secondary animate-status-pulse"></span>
<span class="font-label-bold text-label-bold text-on-surface uppercase tracking-widest">Live Updates: On</span>
</div>
<div class="h-6 w-px bg-outline-variant"></div>
<div class="flex gap-lg">
<div class="text-center">
<p class="font-label-bold text-[10px] text-on-surface-variant uppercase">Current Pace</p>
<p class="font-stats-numeric text-[18px] text-on-surface">4:25/km</p>
</div>
<div class="text-center">
<p class="font-label-bold text-[10px] text-on-surface-variant uppercase">Active Runners</p>
<p class="font-stats-numeric text-[18px] text-on-surface">1,242</p>
</div>
<div class="text-center">
<p class="font-label-bold text-[10px] text-on-surface-variant uppercase">Route Safety</p>
<p class="font-stats-numeric text-[18px] text-secondary">98%</p>
</div>
</div>
</div>
</div>
<!-- Interactive Map Markers (Sample) -->
<div class="absolute top-1/2 left-1/3 z-10 -translate-x-1/2 -translate-y-1/2">
<div class="relative group cursor-pointer">
<div class="w-10 h-10 bg-primary/20 border-2 border-primary rounded-full flex items-center justify-center animate-pulse">
<span class="material-symbols-outlined text-primary text-[20px]" style="font-variation-settings: 'FILL' 1;">person</span>
</div>
<div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 glass-panel p-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
<p class="font-label-bold text-[10px] text-primary">YOU ARE HERE</p>
<p class="font-body-md text-xs text-on-surface">Tiergarten Park</p>
</div>
</div>
</div>
</section>
<!-- Sidebar Section: Real-time Activity Feed -->
<aside class="w-96 h-full glass-panel border-l border-white/10 flex flex-col z-20">
<div class="p-lg border-b border-outline-variant">
<h2 class="font-headline-md text-headline-md text-on-surface">Command Feed</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Real-time status alerts for your radius.</p>
</div>
<div class="flex-grow overflow-y-auto p-md space-y-md">
<!-- Feed Card: Construction -->
<div class="p-md rounded-xl bg-surface-container-high border border-outline-variant hover:border-primary/50 transition-all cursor-pointer group">
<div class="flex justify-between items-start mb-sm">
<span class="px-sm py-1 rounded bg-tertiary-container text-on-tertiary-container font-label-bold text-[10px] uppercase">Caution</span>
<span class="font-body-md text-xs text-on-surface-variant">2m ago</span>
</div>
<div class="flex gap-md">
<div class="p-sm bg-surface-variant rounded-lg">
<span class="material-symbols-outlined text-tertiary">construction</span>
</div>
<div>
<h4 class="font-label-bold text-label-bold text-on-surface">Road Closure: Main St</h4>
<p class="font-body-md text-xs text-on-surface-variant mt-1">Utility repairs starting at 09:00. Sidewalk obstructed.</p>
</div>
</div>
<div class="mt-md pt-md border-t border-outline-variant flex justify-between items-center">
<div class="flex gap-md">
<div class="text-center">
<p class="text-[10px] text-on-surface-variant uppercase font-label-bold">Dist</p>
<p class="text-xs font-stats-numeric text-on-surface">0.4km</p>
</div>
<div class="text-center">
<p class="text-[10px] text-on-surface-variant uppercase font-label-bold">Severity</p>
<p class="text-xs font-stats-numeric text-tertiary">Med</p>
</div>
</div>
<button class="text-primary font-label-bold text-[12px] group-hover:underline flex items-center gap-1">
                            Reroute <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</div>
</div>
<!-- Feed Card: Weather -->
<div class="p-md rounded-xl bg-surface-container-high border border-outline-variant hover:border-primary/50 transition-all cursor-pointer group">
<div class="flex justify-between items-start mb-sm">
<span class="px-sm py-1 rounded bg-secondary-container text-on-secondary-container font-label-bold text-[10px] uppercase">Optimal</span>
<span class="font-body-md text-xs text-on-surface-variant">15m ago</span>
</div>
<div class="flex gap-md">
<div class="p-sm bg-surface-variant rounded-lg">
<span class="material-symbols-outlined text-secondary">cloudy_snowing</span>
</div>
<div>
<h4 class="font-label-bold text-label-bold text-on-surface">Weather: Temp Drop</h4>
<p class="font-body-md text-xs text-on-surface-variant mt-1">Incoming cold front. Temps falling to 2°C in 30 mins.</p>
</div>
</div>
<div class="mt-md pt-md border-t border-outline-variant flex justify-between items-center">
<div class="flex gap-md">
<div class="text-center">
<p class="text-[10px] text-on-surface-variant uppercase font-label-bold">Trend</p>
<p class="text-xs font-stats-numeric text-secondary">-4°C</p>
</div>
<div class="text-center">
<p class="text-[10px] text-on-surface-variant uppercase font-label-bold">Action</p>
<p class="text-xs font-label-bold text-on-surface">Layer Up</p>
</div>
</div>
<span class="material-symbols-outlined text-on-surface-variant opacity-50">thermostat</span>
</div>
</div>
<!-- Feed Card: Event -->
<div class="p-md rounded-xl bg-surface-container-high border border-outline-variant hover:border-primary/50 transition-all cursor-pointer group">
<div class="flex justify-between items-start mb-sm">
<span class="px-sm py-1 rounded bg-primary-container text-on-primary-container font-label-bold text-[10px] uppercase">Event</span>
<span class="font-body-md text-xs text-on-surface-variant">1h ago</span>
</div>
<div class="flex gap-md">
<div class="p-sm bg-surface-variant rounded-lg">
<span class="material-symbols-outlined text-primary">groups</span>
</div>
<div>
<h4 class="font-label-bold text-label-bold text-on-surface">Run Club Meeting</h4>
<p class="font-body-md text-xs text-on-surface-variant mt-1">45 runners gathered at Station A. High social density.</p>
</div>
</div>
<div class="mt-md pt-md border-t border-outline-variant flex justify-between items-center">
<div class="flex gap-md">
<div class="text-center">
<p class="text-[10px] text-on-surface-variant uppercase font-label-bold">Dist</p>
<p class="text-xs font-stats-numeric text-on-surface">1.2km</p>
</div>
<div class="text-center">
<p class="text-[10px] text-on-surface-variant uppercase font-label-bold">Time</p>
<p class="text-xs font-stats-numeric text-on-surface">18:00</p>
</div>
</div>
<button class="bg-primary text-on-primary px-sm py-1 rounded font-label-bold text-[10px] active:scale-95 transition-transform">JOIN SESSION</button>
</div>
</div>
<!-- Feed Card: Traffic -->
<div class="p-md rounded-xl bg-error-container/20 border border-error/30 hover:border-error/60 transition-all cursor-pointer group">
<div class="flex justify-between items-start mb-sm">
<span class="px-sm py-1 rounded bg-error-container text-on-error-container font-label-bold text-[10px] uppercase">Critical</span>
<span class="font-body-md text-xs text-on-surface-variant">Now</span>
</div>
<div class="flex gap-md">
<div class="p-sm bg-error-container/40 rounded-lg">
<span class="material-symbols-outlined text-error">traffic</span>
</div>
<div>
<h4 class="font-label-bold text-label-bold text-error">Traffic: High Congestion</h4>
<p class="font-body-md text-xs text-on-surface-variant mt-1">Accident at 4th & Pike. Significant pedestrian overflow.</p>
</div>
</div>
<div class="mt-md pt-md border-t border-outline-variant flex justify-between items-center">
<div class="flex gap-md">
<div class="text-center">
<p class="text-[10px] text-on-surface-variant uppercase font-label-bold">Dist</p>
<p class="text-xs font-stats-numeric text-on-surface">0.2km</p>
</div>
<div class="text-center">
<p class="text-[10px] text-on-surface-variant uppercase font-label-bold">Wait</p>
<p class="text-xs font-stats-numeric text-error">12min</p>
</div>
</div>
<button class="text-error font-label-bold text-[12px] group-hover:underline">Avoid Area</button>
</div>
</div>
</div>
<!-- Aside Footer Status -->
<div class="p-md bg-surface-container-low border-t border-outline-variant flex items-center justify-between">
<div class="flex items-center gap-sm">
<span class="material-symbols-outlined text-secondary text-sm">bolt</span>
<span class="font-label-bold text-[10px] text-on-surface-variant uppercase">Core Engine: 12ms Latency</span>
</div>
<span class="font-label-bold text-[10px] text-on-surface-variant">v4.2.1-stable</span>
</div>
</aside>
</main>
<!-- FAB for Quick Actions (Suppressed on details, but relevant for Map View) -->
<button class="fixed bottom-lg right-[400px] z-30 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
<span class="material-symbols-outlined text-[28px]" style="font-variation-settings: 'FILL' 1;">add</span>
</button>
<!-- Global Visual Overlay Effects (Atmospheric) -->
<div class="pointer-events-none fixed inset-0 z-[100] opacity-10">
<div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(180,197,255,0.1),transparent_70%)]"></div>
</div>

` }} />
  );
}
