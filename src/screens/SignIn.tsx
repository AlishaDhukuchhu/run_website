export default function SignIn() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<main class="flex min-h-screen flex-col md:flex-row">
<!-- Visual Section: Runner in Neon City -->
<section class="relative w-full md:w-1/2 min-h-[300px] md:min-h-screen overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10 hidden md:block"></div>
<div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10 md:hidden"></div>
<div class="w-full h-full bg-cover bg-center" data-alt="A cinematic, low-angle shot of a high-performance athlete sprinting through a futuristic metropolitan street at night. The scene is illuminated by vibrant neon signs in electric blue and cyber lime green, reflecting off wet pavement. The runner wears sleek, dark athletic gear with glowing accents that mirror the city lights. The overall mood is high-intensity, technical, and ultra-modern, with a shallow depth of field focusing on the runner's determined expression." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2VZGka3SLAUyLRTGSPiYKCucP7wGCP_R-MZqG7a6D-wGMbn4dx-95ss93uoNMWostvmK08XPO4bgMrOmwYu1V8ezJcAfQLJZi6V9s6EInbHTHjudG25WjeD8SoLCXhe1iowWyi6Df0pJ6wspc7Yl-hjVGrnmvyufRe8eY9yPh446x3tLCSh9PgVTHZJGHHRDNaxbqHNpbHOQkF_uDD660ZXjbSCkCFGXotuU7SKw1GP8aIJJuUjTlpgLwdgHt0whUDNMzCGLWtRc')">
</div>
<!-- Brand Overlay -->
<div class="absolute top-lg left-container-margin z-20">
<span class="font-display-lg text-display-lg font-extrabold text-primary tracking-tighter">RunRadar</span>
</div>
<!-- Atmospheric Hint -->
<div class="absolute bottom-xl left-container-margin z-20 max-w-sm hidden md:block">
<h2 class="font-headline-lg text-headline-lg text-white mb-sm">Unleash Your Potential</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Real-time spatial intelligence for elite performance tracking.</p>
</div>
</section>
<!-- Form Section -->
<section class="w-full md:w-1/2 flex items-center justify-center p-container-margin md:p-xl relative">
<!-- Background Decoration -->
<div class="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-container/10 rounded-full blur-[100px] pointer-events-none"></div>
<div class="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
<div class="w-full max-w-md z-10">
<div class="glass-card p-lg md:p-xl rounded-24px">
<header class="mb-xl text-center md:text-left">
<h1 class="font-headline-lg text-headline-lg text-on-surface mb-xs">Welcome Back, Athlete</h1>
<p class="font-body-md text-body-md text-on-surface-variant">Access your data dashboard and start your session.</p>
</header>
<form action="#" class="space-y-lg" method="POST">
<!-- Email Field -->
<div class="space-y-xs">
<label class="font-label-bold text-label-bold text-on-surface-variant ml-1 uppercase" for="email">Email Address</label>
<div class="relative group">
<span class="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">mail</span>
<input class="w-full pl-[52px] pr-md py-md bg-surface-container-high border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-xl text-on-surface placeholder:text-outline transition-all" id="email" name="email" placeholder="athlete@runradar.io" required="" type="email"/>
</div>
</div>
<!-- Password Field -->
<div class="space-y-xs">
<div class="flex justify-between items-center px-1">
<label class="font-label-bold text-label-bold text-on-surface-variant uppercase" for="password">Password</label>
<a class="font-label-bold text-[12px] text-primary hover:text-secondary transition-colors" href="#">Forgot Password?</a>
</div>
<div class="relative group">
<span class="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">lock</span>
<input class="w-full pl-[52px] pr-md py-md bg-surface-container-high border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-xl text-on-surface placeholder:text-outline transition-all" id="password" name="password" placeholder="••••••••••••" required="" type="password"/>
</div>
</div>
<!-- Sign In Button -->
<button class="w-full py-md px-lg bg-primary-container text-on-primary-container font-headline-md text-headline-md rounded-xl glow-button active:scale-[0.98] transition-all flex items-center justify-center gap-sm" type="submit">
                            Sign In
                            <span class="material-symbols-outlined">arrow_forward</span>
</button>
</form>
<div class="mt-xl">
<div class="relative flex items-center mb-lg">
<div class="flex-grow border-t border-outline-variant"></div>
<span class="mx-md text-outline font-label-bold text-[12px] uppercase">Or continue with</span>
<div class="flex-grow border-t border-outline-variant"></div>
</div>
<div class="grid grid-cols-2 gap-md">
<button class="flex items-center justify-center gap-sm py-md px-md bg-surface-container-highest border border-outline-variant rounded-xl font-label-bold text-on-surface hover:bg-surface-bright transition-colors">
<svg class="w-5 h-5" viewbox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
                                Google
                            </button>
<button class="flex items-center justify-center gap-sm py-md px-md bg-surface-container-highest border border-outline-variant rounded-xl font-label-bold text-on-surface hover:bg-surface-bright transition-colors">
<svg class="w-5 h-5" viewbox="0 0 24 24">
<path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.88-3.12 1.87-2.39 5.92.7 7.16-.61 1.54-1.34 3.02-2.75 3.97zM12.03 7.25c-.02-2.23 1.84-4.22 4.08-4.25.2 2.58-2.34 4.54-4.08 4.25z" fill="currentColor"></path>
</svg>
                                Apple
                            </button>
</div>
</div>
<footer class="mt-xl text-center">
<p class="font-body-md text-body-md text-on-surface-variant">
                            New to RunRadar? 
                            <a class="text-secondary font-label-bold ml-xs hover:underline decoration-secondary transition-all" href="#">Join the Elite</a>
</p>
</footer>
</div>
</div>
</section>
</main>
<!-- Footer from Shared Components -->
<footer class="bg-surface-container-lowest w-full py-xl border-t border-outline-variant">
<div class="max-w-7xl mx-auto px-lg flex flex-col md:flex-row justify-between items-center gap-md">
<div class="flex items-center gap-md">
<span class="font-headline-md text-headline-md text-on-surface">RunRadar</span>
<span class="font-body-md text-body-md text-on-surface-variant">© 2024 RunRadar Intelligence. All rights reserved.</span>
</div>
<nav class="flex gap-lg">
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors underline" href="#">Privacy Policy</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors underline" href="#">Terms of Service</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors underline" href="#">System Status</a>
</nav>
</div>
</footer>

` }} />
  );
}
