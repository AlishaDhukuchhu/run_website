export default function Analytics() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<!-- Top Navigation Bar -->
<nav class="fixed top-0 w-full z-50 bg-surface-container/80 backdrop-blur-xl border-b border-white/10 shadow-md">
<div class="flex justify-between items-center px-lg py-md max-w-7xl mx-auto">
<a href="/" class="font-headline-md text-headline-md font-bold text-primary" style="text-decoration:none;">RunRadar</a>
<div class="hidden md:flex items-center gap-xl">
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="/route-discovery">Explore</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="/dashboard">Live Map</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="/events-groups">Events</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="/route-discovery">Routes</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="/community-feed">Community</a>
<a class="font-body-md text-body-md text-primary font-bold border-b-2 border-primary pb-1" href="/analytics">Analytics</a>
</div>
<a href="/create-account" class="bg-primary-container text-on-primary-container px-lg py-sm rounded-xl font-label-bold text-label-bold active:scale-95 transition-transform" style="display:inline-block;text-align:center;">Get Started</a>
</div>
</nav>
<main class="pt-24 pb-20 px-container-margin max-w-7xl mx-auto space-y-lg">
<!-- Header Section -->
<header class="flex flex-col md:flex-row justify-between items-end gap-md mb-xl">
<div class="space-y-xs">
<h1 class="font-headline-lg text-headline-lg">Elite Performance Hub</h1>
<p class="text-on-surface-variant font-body-md text-body-md max-w-xl">
                    Real-time spatial intelligence and biological telemetry sync. Track your progression with precision.
                </p>
</div>
<div class="flex gap-sm">
<div class="bg-surface-container-high px-md py-sm rounded-lg border border-outline-variant flex items-center gap-sm">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">calendar_today</span>
<span class="font-label-bold text-label-bold">Last 30 Days</span>
</div>
<div class="bg-primary text-on-primary px-md py-sm rounded-lg border border-primary/20 flex items-center gap-sm cursor-pointer hover:bg-primary-fixed-dim transition-colors">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">download</span>
<span class="font-label-bold text-label-bold">Export Report</span>
</div>
</div>
</header>
<!-- Bento Grid Analytics -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-lg">
<!-- Weekly Activity Chart (Large) -->
<div class="md:col-span-8 glass-panel p-lg rounded-xl relative overflow-hidden">
<div class="flex justify-between items-start mb-xl relative z-10">
<div>
<h3 class="font-headline-md text-headline-md text-primary">Weekly Running Volume</h3>
<p class="text-on-surface-variant font-body-md text-body-md">Distance tracking over the current cycle</p>
</div>
<div class="text-right">
<p class="font-stats-numeric text-stats-numeric text-secondary">42.8 <span class="text-body-lg">km</span></p>
<p class="text-secondary font-label-bold text-label-bold">+12% vs last week</p>
</div>
</div>
<!-- Mock Chart Visualization -->
<div class="h-64 flex items-end justify-between gap-base relative z-10 px-sm">
<div class="flex flex-col items-center flex-1">
<div class="w-full bg-primary/20 rounded-t-lg transition-all hover:bg-primary h-[40%] group relative">
<div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface-container-highest px-sm py-xs rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">5.2km</div>
</div>
<span class="mt-sm font-label-bold text-label-bold text-on-surface-variant">MON</span>
</div>
<div class="flex flex-col items-center flex-1">
<div class="w-full bg-primary/20 rounded-t-lg transition-all hover:bg-primary h-[65%] group relative">
<div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface-container-highest px-sm py-xs rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">8.4km</div>
</div>
<span class="mt-sm font-label-bold text-label-bold text-on-surface-variant">TUE</span>
</div>
<div class="flex flex-col items-center flex-1">
<div class="w-full bg-primary/40 rounded-t-lg transition-all hover:bg-primary h-[35%] group relative border-b-4 border-secondary">
<div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface-container-highest px-sm py-xs rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">4.1km</div>
</div>
<span class="mt-sm font-label-bold text-label-bold text-on-surface-variant">WED</span>
</div>
<div class="flex flex-col items-center flex-1">
<div class="w-full bg-primary/20 rounded-t-lg transition-all hover:bg-primary h-[85%] group relative">
<div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface-container-highest px-sm py-xs rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">12.2km</div>
</div>
<span class="mt-sm font-label-bold text-label-bold text-on-surface-variant">THU</span>
</div>
<div class="flex flex-col items-center flex-1">
<div class="w-full bg-primary/20 rounded-t-lg transition-all hover:bg-primary h-[50%] group relative">
<div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface-container-highest px-sm py-xs rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">6.8km</div>
</div>
<span class="mt-sm font-label-bold text-label-bold text-on-surface-variant">FRI</span>
</div>
<div class="flex flex-col items-center flex-1">
<div class="w-full bg-secondary rounded-t-lg transition-all h-[95%] group relative shadow-[0_0_15px_rgba(74,225,118,0.3)]">
<div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface-container-highest px-sm py-xs rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">15.0km</div>
</div>
<span class="mt-sm font-label-bold text-label-bold text-primary">SAT</span>
</div>
<div class="flex flex-col items-center flex-1">
<div class="w-full bg-primary/10 rounded-t-lg transition-all hover:bg-primary h-[20%] group relative">
<div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface-container-highest px-sm py-xs rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">2.1km</div>
</div>
<span class="mt-sm font-label-bold text-label-bold text-on-surface-variant">SUN</span>
</div>
</div>
<!-- Background Decoration -->

</div>
<!-- Route Difficulty (Square) -->
<div class="md:col-span-4 glass-panel p-lg rounded-xl flex flex-col justify-between overflow-hidden relative group">
<div>
<h3 class="font-headline-md text-headline-md text-on-surface mb-xs">Route Difficulty</h3>
<p class="text-on-surface-variant font-body-md text-body-md">Terrain and Elevation Intensity</p>
</div>
<div class="relative py-xl flex justify-center">
<!-- Donut Chart -->
<div class="w-40 h-40 rounded-full border-[12px] border-surface-container-high relative flex items-center justify-center">
<svg class="absolute inset-0 w-full h-full -rotate-90">
<circle class="fill-none stroke-secondary" cx="50%" cy="50%" r="74" stroke-dasharray="465" stroke-dashoffset="120" stroke-linecap="round" stroke-width="12"></circle>
</svg>
<div class="text-center">
<span class="font-stats-numeric text-stats-numeric">74%</span>
<p class="font-label-bold text-label-bold text-secondary">TECHNICAL</p>
</div>
</div>
</div>
<div class="flex justify-between items-center bg-surface-container-highest/50 p-md rounded-lg mt-md">
<div class="text-center">
<p class="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest mb-1">Elevation</p>
<p class="font-body-md font-bold text-primary">+342m</p>
</div>
<div class="h-8 w-px bg-outline-variant"></div>
<div class="text-center">
<p class="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest mb-1">Peak Grade</p>
<p class="font-body-md font-bold text-secondary">12.5%</p>
</div>
</div>
</div>
<!-- Most Active Areas Map -->
<div class="md:col-span-6 lg:col-span-5 glass-panel rounded-xl overflow-hidden min-h-[400px] flex flex-col">
<div class="p-lg bg-surface-container-low/50 border-b border-white/5">
<div class="flex items-center gap-sm">
<span class="material-symbols-outlined text-primary">location_on</span>
<h3 class="font-headline-md text-headline-md">Heatmap Activity</h3>
</div>
<p class="text-on-surface-variant font-body-md text-body-md">Popular zones based on community density</p>
</div>
<div class="flex-grow relative group cursor-crosshair">
<div class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A sophisticated digital satellite map visualization of a dense urban environment with glowing neon heat traces in electric blue and vibrant green, highlighting popular running routes across city streets, parks, and bridges. The aesthetic is tech-focused and data-rich, resembling a high-performance athletic dashboard with dark mode styling and translucent interface overlays." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPmTah6rM1cGV621fSxos0uWap_9_FuGSrSU3IzIxLOKuLXqUAQV86mfLAxtv6Mao6vfxrpC6Jsw224nWscJKhc93mwRtx6rKwjYiJfX_FAoCyE1GYHVpPGSPk_HyLeWxSNlMe6rm2M2R5xTO3QVKMkZcwwqX2cXzx7TNMmegpAbd5wXA_LWGSnd92mM5On8mAm_qszR5DokNvtuIH69F95VNMpoatk9JU9T8Dl5_7bCMTVHsjDycW0iB3NDqUCXvBnVU0gEMh2oQ')"></div>
<!-- Overlay Heatmap UI -->
<div class="absolute top-md right-md flex flex-col gap-sm">
<div class="bg-background/80 backdrop-blur-md px-md py-sm rounded-lg border border-outline-variant text-xs">
<div class="flex items-center gap-sm mb-xs">
<div class="w-3 h-3 rounded-full bg-secondary shadow-[0_0_8px_#4ae176]"></div>
<span class="font-bold">Riverside Park</span>
</div>
<p class="text-on-surface-variant">Peak usage: 06:30 - 08:00</p>
</div>
</div>
<div class="absolute bottom-md left-md bg-background/90 backdrop-blur-xl p-md rounded-xl border border-primary/20 shadow-xl max-w-[200px]">
<p class="text-[10px] uppercase font-bold tracking-tighter text-on-surface-variant mb-2">Live Density</p>
<div class="space-y-sm">
<div class="flex justify-between items-center">
<span class="text-xs">Downtown Loop</span>
<span class="text-secondary text-xs font-bold">High</span>
</div>
<div class="w-full bg-surface-variant h-1 rounded-full overflow-hidden">
<div class="bg-secondary h-full w-[85%]"></div>
</div>
</div>
</div>
</div>
</div>
<!-- Crowd Patterns & Safety (Wide) -->
<div class="md:col-span-6 lg:col-span-7 glass-panel p-lg rounded-xl flex flex-col">
<div class="mb-lg">
<h3 class="font-headline-md text-headline-md">Crowd &amp; Safety Insights</h3>
<p class="text-on-surface-variant font-body-md text-body-md">Optimized timing for safe, open-path runs</p>
</div>
<div class="flex-grow grid grid-cols-1 md:grid-cols-2 gap-lg">
<div class="space-y-lg">
<div class="bg-surface-container-high/50 p-md rounded-xl border border-outline-variant">
<div class="flex items-center justify-between mb-sm">
<div class="flex items-center gap-sm">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">verified_user</span>
<span class="font-label-bold text-label-bold">Safety Score</span>
</div>
<span class="text-secondary font-stats-numeric text-2xl">9.8</span>
</div>
<p class="text-xs text-on-surface-variant">Based on lighting, foot traffic, and pavement quality.</p>
</div>
<div class="bg-surface-container-high/50 p-md rounded-xl border border-outline-variant">
<div class="flex items-center justify-between mb-sm">
<div class="flex items-center gap-sm">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">groups</span>
<span class="font-label-bold text-label-bold">Optimal Time</span>
</div>
<span class="text-primary font-body-md font-bold">5:45 AM</span>
</div>
<p class="text-xs text-on-surface-variant">Lowest congestion predicted for your favorite loop.</p>
</div>
</div>
<div class="flex flex-col justify-between">
<div class="space-y-sm">
<div class="flex justify-between text-xs font-bold uppercase tracking-widest text-on-surface-variant">
<span>Density Over Time</span>
<span>12h Trend</span>
</div>
<!-- Mock Mini Line Chart -->
<div class="h-32 w-full relative">
<svg class="w-full h-full overflow-visible" viewbox="0 0 100 40">
<path class="stroke-primary" d="M0 35 Q 10 35, 20 25 T 40 30 T 60 10 T 80 15 T 100 5" fill="none" stroke-width="2"></path>
<path class="fill-primary/10" d="M0 35 Q 10 35, 20 25 T 40 30 T 60 10 T 80 15 T 100 5 V 40 H 0 Z"></path>
<circle class="fill-secondary shadow-lg" cx="60" cy="10" r="3"></circle>
</svg>
<div class="absolute top-1 left-[60%] -translate-x-1/2 bg-secondary text-on-secondary px-xs py-0.5 rounded text-[10px] font-bold">PEAK</div>
</div>
</div>
<button class="w-full py-md bg-surface-container-highest rounded-lg font-label-bold text-label-bold border border-outline hover:border-primary hover:text-primary transition-all">
                            View Historical Trends
                        </button>
</div>
</div>
</div>
<!-- Popular Routes Table -->
<div class="md:col-span-12 glass-panel rounded-xl overflow-hidden">
<div class="p-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-md">
<div>
<h3 class="font-headline-md text-headline-md">Personal Popular Routes</h3>
<p class="text-on-surface-variant font-body-md text-body-md">Performance metrics for your top 5 paths</p>
</div>
<div class="flex bg-surface-container-low p-1 rounded-lg">
<button class="bg-surface-container-high text-primary px-md py-sm rounded-md font-label-bold text-label-bold">Personal</button>
<button class="text-on-surface-variant px-md py-sm rounded-md font-label-bold text-label-bold hover:text-on-surface transition-colors">Global</button>
</div>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left">
<thead>
<tr class="bg-surface-container-low/50">
<th class="px-lg py-md font-label-bold text-label-bold text-on-surface-variant border-b border-outline-variant">Route Name</th>
<th class="px-lg py-md font-label-bold text-label-bold text-on-surface-variant border-b border-outline-variant">Distance</th>
<th class="px-lg py-md font-label-bold text-label-bold text-on-surface-variant border-b border-outline-variant">Avg Pace</th>
<th class="px-lg py-md font-label-bold text-label-bold text-on-surface-variant border-b border-outline-variant">Difficulty</th>
<th class="px-lg py-md font-label-bold text-label-bold text-on-surface-variant border-b border-outline-variant">Latest PB</th>
<th class="px-lg py-md font-label-bold text-label-bold text-on-surface-variant border-b border-outline-variant text-right">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant/30">
<tr class="hover:bg-primary/5 transition-colors group">
<td class="px-lg py-lg">
<div class="flex items-center gap-md">
<div class="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
<span class="material-symbols-outlined text-primary">route</span>
</div>
<div>
<p class="font-body-md font-bold">Harbor Bridge Run</p>
<p class="text-xs text-on-surface-variant">Urban Terrain • High Visibility</p>
</div>
</div>
</td>
<td class="px-lg py-lg font-stats-numeric text-lg">10.2<span class="text-xs ml-1">km</span></td>
<td class="px-lg py-lg font-stats-numeric text-lg">4'32<span class="text-xs ml-1">/km</span></td>
<td class="px-lg py-lg">
<span class="bg-secondary/10 text-secondary border border-secondary/20 px-sm py-1 rounded text-xs font-bold">MODERATE</span>
</td>
<td class="px-lg py-lg">
<p class="text-secondary font-bold">46:12</p>
<p class="text-[10px] text-on-surface-variant">2 days ago</p>
</td>
<td class="px-lg py-lg text-right">
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">chevron_right</button>
</td>
</tr>
<tr class="hover:bg-primary/5 transition-colors group">
<td class="px-lg py-lg">
<div class="flex items-center gap-md">
<div class="w-10 h-10 rounded-lg bg-tertiary/20 flex items-center justify-center">
<span class="material-symbols-outlined text-tertiary">terrain</span>
</div>
<div>
<p class="font-body-md font-bold">Skyline Ridge Trail</p>
<p class="text-xs text-on-surface-variant">Off-road • Technical Gradient</p>
</div>
</div>
</td>
<td class="px-lg py-lg font-stats-numeric text-lg">15.5<span class="text-xs ml-1">km</span></td>
<td class="px-lg py-lg font-stats-numeric text-lg">5'45<span class="text-xs ml-1">/km</span></td>
<td class="px-lg py-lg">
<span class="bg-error/10 text-error border border-error/20 px-sm py-1 rounded text-xs font-bold">EXPERT</span>
</td>
<td class="px-lg py-lg">
<p class="text-on-surface-variant font-bold">1:29:40</p>
<p class="text-[10px] text-on-surface-variant">1 week ago</p>
</td>
<td class="px-lg py-lg text-right">
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">chevron_right</button>
</td>
</tr>
<tr class="hover:bg-primary/5 transition-colors group">
<td class="px-lg py-lg">
<div class="flex items-center gap-md">
<div class="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
<span class="material-symbols-outlined text-secondary">eco</span>
</div>
<div>
<p class="font-body-md font-bold">Riverside Greenway</p>
<p class="text-xs text-on-surface-variant">Parkland • Low Crowd</p>
</div>
</div>
</td>
<td class="px-lg py-lg font-stats-numeric text-lg">5.0<span class="text-xs ml-1">km</span></td>
<td class="px-lg py-lg font-stats-numeric text-lg">4'15<span class="text-xs ml-1">/km</span></td>
<td class="px-lg py-lg">
<span class="bg-primary/10 text-primary border border-primary/20 px-sm py-1 rounded text-xs font-bold">EASY</span>
</td>
<td class="px-lg py-lg">
<p class="text-secondary font-bold">21:15</p>
<p class="text-[10px] text-on-surface-variant">Yesterday</p>
</td>
<td class="px-lg py-lg text-right">
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">chevron_right</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="bg-surface-container-lowest border-t border-outline-variant w-full mt-xl">
<div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-lg py-xl gap-md">
<div class="flex flex-col items-center md:items-start gap-xs">
<a href="/" class="font-headline-md text-headline-md text-primary font-bold" style="text-decoration:none;">RunRadar</a>
<p class="text-on-surface-variant font-body-md text-body-md opacity-80">Precision Tracking for Elite Athletes.</p>
</div>
<div class="flex gap-lg">
<a class="font-label-bold text-label-bold text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#">About</a>
<a class="font-label-bold text-label-bold text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#">Privacy</a>
<a class="font-label-bold text-label-bold text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#">Support</a>
<a class="font-label-bold text-label-bold text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#">API</a>
<a class="font-label-bold text-label-bold text-on-surface-variant hover:text-secondary transition-colors duration-200" href="/community-feed">Community</a>
</div>
<p class="font-label-bold text-label-bold text-secondary text-center md:text-right">
                © 2024 RunRadar. Precision Tracking for Elite Athletes.
            </p>
</div>
</footer>
<!-- FAB for Contextual Action -->
<div class="fixed bottom-lg right-lg z-40">
<button class="bg-primary text-on-primary w-14 h-14 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:scale-110 active:scale-95 transition-all group">
<span class="material-symbols-outlined text-3xl group-hover:rotate-90 transition-transform">add</span>
</button>
</div>

` }} />
  );
}
