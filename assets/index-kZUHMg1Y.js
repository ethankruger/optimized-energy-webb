(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function h(){const a=document.getElementById("app-nav");if(!a)return;a.innerHTML=`
<header class="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
  <div class="section py-3 flex items-center gap-4">
    <a href="/index.html" class="flex items-center gap-2">
      <img src="/img/logo-mark.png" alt="OE" class="h-8 w-auto">
      <img src="/img/logo-text.png" alt="Optimized Entry" class="h-5 w-auto hidden sm:block">
    </a>
    <nav class="ml-auto hidden md:flex items-center gap-6 text-slate-700">
      <a href="/index.html" class="hover:text-brand-orange">Home</a>
      <a href="/index.html#what-we-do" class="hover:text-brand-orange">What We Do</a>
      <a href="/testimonials.html" class="hover:text-brand-orange">Testimonials</a>
      <a href="/contact.html" class="hover:text-brand-orange">Contact Us</a>
      <a href="/download.html" class="btn-primary">Download</a>
    </nav>
    <button id="mnav" class="md:hidden ml-auto p-2 rounded-xl border">Menu</button>
  </div>
  <div id="mobile" class="md:hidden hidden border-t">
    <div class="px-4 py-3 flex flex-col gap-3">
      <a href="/index.html">Home</a>
      <a href="/index.html#what-we-do">What We Do</a>
      <a href="/testimonials.html">Testimonials</a>
      <a href="/contact.html">Contact Us</a>
      <a href="/download.html" class="btn-primary justify-center">Download</a>
    </div>
  </div>
</header>`;const n=document.getElementById("mnav"),r=document.getElementById("mobile");n&&r&&(n.onclick=()=>r.classList.toggle("hidden"))}h();function d(a){return encodeURIComponent(a).replace(/%20/g,"+")}const o=document.getElementById("lead-form"),f=document.getElementById("lead-msg");o&&o.addEventListener("submit",async a=>{a.preventDefault();const n=o.name.value.trim(),r=o.email.value.trim(),s=o.phone.value.trim(),e=o.biz.value.trim(),t=[...o.querySelectorAll('input[name="need"]:checked')].map(c=>c.value).join(", "),i=o.notes.value.trim(),m=`Demo request — ${e||"Business"}`,l=`Name: ${n}
Email: ${r}
Phone: ${s}
Business: ${e}
Needs: ${t}
Notes: ${i}

Source: Optimized Entry website`,u=`mailto:hello@optimizedentry.com?subject=${d(m)}&body=${d(l)}`;try{await navigator.clipboard?.writeText(l),f.textContent="Details copied. Opening your email client…"}catch{}window.location.href=u});
