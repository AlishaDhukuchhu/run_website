export default function CreateAccount() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<!-- Left Column: Branding & Atmosphere -->
<div class="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-surface-container-lowest">

<div class="relative z-10 p-xl flex flex-col justify-between w-full h-full">
<div class="flex items-center gap-sm">
<span class="material-symbols-outlined text-primary text-4xl" style="font-variation-settings: 'FILL' 1;">radar</span>
<span class="font-display-lg text-display-lg font-extrabold text-primary tracking-tighter">RunRadar</span>
</div>
<div class="max-w-md">
<h1 class="font-headline-lg text-headline-lg mb-md text-on-surface leading-tight">
                    Your performance, <span class="text-secondary">redefined</span> in real-time.
                </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant">
                    Join an elite community of data-driven athletes. Synchronize your biometrics, track your spatial intelligence, and conquer your goals with high-fidelity analytics.
                </p>
<!-- Micro-stats card -->
<div class="mt-xl glass-panel p-lg rounded-2xl flex gap-lg">
<div>
<p class="font-label-bold text-label-bold text-secondary mb-xs uppercase">Precision</p>
<p class="font-stats-numeric text-stats-numeric text-on-surface">99.8%</p>
</div>
<div class="w-px bg-outline-variant"></div>
<div>
<p class="font-label-bold text-label-bold text-secondary mb-xs uppercase">Active Users</p>
<p class="font-stats-numeric text-stats-numeric text-on-surface">124k</p>
</div>
</div>
</div>
<div class="flex items-center gap-md text-on-surface-variant font-body-md text-body-md">
<span class="material-symbols-outlined">verified_user</span>
<span>Military-grade data encryption &amp; privacy.</span>
</div>
</div>
<!-- Decorative background image -->
<div class="absolute bottom-0 right-0 w-3/4 h-3/4 -mb-32 -mr-32 opacity-20 pointer-events-none">
<div class="w-full h-full bg-cover bg-center rounded-full border-4 border-primary/20" data-alt="A dynamic high-angle shot of a high-tech running track at night with neon lane markers glowing in electric blue and neon green. The atmosphere is sleek, futuristic, and corporate-modern, emphasizing speed and data-driven performance. The lighting is low-key with sharp highlights on the synthetic surface." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6kPeObgjPteqUAuZZVvuJzNeLJsMh-tLAQjJ_lKk2Dr2xZx-aqKjW-ChpRnl1iqxfO4C_yfax8NzzlFT2wlBf6XpRgaCKaVrMnVyNoLj1Jlk9qwFIKu1PSIXsNqpOksck-GzzpCvsfa6_8124YwvbRBlyv1xodycAXx_9ZP-fAB9_Y6PXqpLWl_FmAKxy3e-T3lNcj893lC4XU9_GBlKsc8L4vKcWBXbL0dvctIzIto-f93U6Sja6GEuwv8BXZEqt4BEK-zCiY7g')"></div>
</div>
</div>
<!-- Right Column: Sign Up Form -->
<main class="w-full lg:w-1/2 flex items-center justify-center p-md sm:p-xl relative">
<!-- Mobile Logo -->
<div class="absolute top-md left-md lg:hidden flex items-center gap-xs">
<span class="material-symbols-outlined text-primary text-2xl" style="font-variation-settings: 'FILL' 1;">radar</span>
<span class="font-headline-md text-headline-md font-extrabold text-primary tracking-tighter">RunRadar</span>
</div>
<div class="w-full max-w-md space-y-xl">
<header>
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-sm">Create Account</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Enter your details to start your journey.</p>
</header>
<form action="#" class="space-y-lg" onsubmit="event.preventDefault();">
<div class="space-y-md">
<!-- Full Name -->
<div class="space-y-xs">
<label class="font-label-bold text-label-bold text-on-surface-variant px-1" for="full-name">FULL NAME</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">person</span>
<input class="form-input w-full pl-xl pr-md py-md rounded-2xl text-on-surface placeholder:text-outline neon-glow" id="full-name" placeholder="John Doe" type="text"/>
</div>
</div>
<!-- Email Address -->
<div class="space-y-xs">
<label class="font-label-bold text-label-bold text-on-surface-variant px-1" for="email">EMAIL ADDRESS</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">mail</span>
<input class="form-input w-full pl-xl pr-md py-md rounded-2xl text-on-surface placeholder:text-outline neon-glow" id="email" placeholder="runner@example.com" type="email"/>
</div>
</div>
<!-- Password -->
<div class="space-y-xs">
<label class="font-label-bold text-label-bold text-on-surface-variant px-1" for="password">PASSWORD</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">lock</span>
<input class="form-input w-full pl-xl pr-md py-md rounded-2xl text-on-surface placeholder:text-outline neon-glow" id="password" placeholder="••••••••" type="password"/>
</div>
</div>
<!-- Experience Level Dropdown -->
<div class="space-y-xs">
<label class="font-label-bold text-label-bold text-on-surface-variant px-1" for="experience">EXPERIENCE LEVEL</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">insights</span>
<select class="form-input w-full pl-xl pr-md py-md rounded-2xl text-on-surface appearance-none focus:ring-0 neon-glow" id="experience">
<option disabled="" selected="" value="">Select level</option>
<option class="bg-surface-container" value="beginner">Beginner (0-2 years)</option>
<option class="bg-surface-container" value="intermediate">Intermediate (2-5 years)</option>
<option class="bg-surface-container" value="pro">Pro (Elite Athlete)</option>
</select>
<span class="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
</div>
</div>
</div>
<div class="pt-sm">
<button class="w-full bg-primary-container text-on-primary-container font-headline-md text-headline-md py-md rounded-2xl shadow-lg hover:shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-sm" type="submit">
                        Create Account
                        <span class="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</form>
<footer class="space-y-lg text-center">
<p class="font-body-md text-body-md text-on-surface-variant">
                    Already have an account? 
                    <a class="text-primary font-bold hover:underline" href="/sign-in">Sign In</a>
</p>
<div class="flex items-center justify-center gap-sm text-[12px] text-outline font-body-md">
<span>By signing up, you agree to our</span>
<a class="underline hover:text-on-surface transition-colors" href="#">Terms of Service</a>
<span>&amp;</span>
<a class="underline hover:text-on-surface transition-colors" href="#">Privacy Policy</a>
</div>
</footer>
</div>
<!-- Progress ring decoration for success feedback (hidden by default) -->
<div class="hidden absolute inset-0 bg-surface-container/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center p-xl" id="success-state">
<div class="relative w-32 h-32 mb-lg">
<svg class="w-full h-full rotate-[-90deg]">
<circle class="text-outline-variant" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" stroke-width="8"></circle>
<circle class="text-secondary transition-all duration-1000" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" stroke-dasharray="364.4" stroke-dashoffset="0" stroke-width="8"></circle>
</svg>
<div class="absolute inset-0 flex items-center justify-center">
<span class="material-symbols-outlined text-secondary text-5xl" style="font-variation-settings: 'FILL' 1;">check_circle</span>
</div>
</div>
<h3 class="font-headline-lg text-headline-lg text-on-surface">Registration Complete</h3>
<p class="text-on-surface-variant font-body-md text-body-md text-center max-w-xs mt-sm">
                Welcome to the radar. We're finalizing your dashboard...
            </p>
</div>
</main>

` }} />
  );
}
