import { e as createComponent, f as createAstro, m as maybeRenderHead, k as renderScript, r as renderTemplate, h as addAttribute, l as renderHead, i as renderComponent, n as renderSlot } from './astro/server_pyiVo5FK.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                        */
import 'clsx';

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="bg-[#282828] flex items-center justify-between px-4 gap-8 border-b-2 "> <a href="/" class="font-alegreya text-white text-[30px] mb-[15px] mt-[15px] flex items-center gap-2"> <img src="/src/assets/logo/logo.svg" alt="Logo" class="h-10 w-10"> <h1>Festiv’Halloween</h1> </a> <button id="menu-btn" class="group relative z-10 flex h-3 w-6 flex-col justify-between lg:hidden *:block *:ease *:h-0.5 *:w-full *:transform *:rounded-full *:bg-white *:transition *:duration-300" aria-label="Menu" aria-controls="menu" aria-expanded="false"> <span class="group-aria-expanded:translate-y-[5px] group-aria-expanded:rotate-45"></span> <span class="group-aria-expanded:opacity-0 mt-0.5"></span> <span class="group-aria-expanded:-translate-y-[5px] group-aria-expanded:-rotate-45 mt-0.5"></span> </button> <nav id="menu" class="bg-[#282828] flex-1 px-6 py-12 flex justify-between mt-20 flex-col fixed z-10 inset-0 opacity-100 max-lg:aria-hidden:invisible max-lg:aria-hidden:opacity-0 lg:mt-0 lg:flex-row lg:static lg:bg-transparent lg:py-6 lg:visible lg:opacity-100" aria-hidden="true"> <ul class="font-alegreya text-[24px] flex flex-col gap-4 lg:flex-row"> <li> <a class="block p-4 rounded-lg text-white" href="/prog.html">Programmation Activité</a> </li> <li> <a class="block p-4 rounded-lg text-white" href="/film.html">Programmation Film</a> </li> <li> <a class="block p-4 rounded-lg text-white" href="/invite.html">Invité</a> </li> <li> <a class="block p-4 rounded-lg text-white" href="/infopratique.html">Infos pratiques</a> </li> <li> <a class="block p-4 rounded-lg text-white" href="/manage">Billeterie</a> </li> <li> <a class="block p-4 rounded-lg text-white" href="/apropos.html">Qui somme nous ?</a> </li> <li> <a class="block p-4 rounded-lg text-white" href="/contact.html">Nous contacter</a> </li> </ul> </nav> </header> ${renderScript($$result, "C:/Users/mmi/Documents/MMI/MMI1/SAE/SAE-203/sae-203-2025-ethdm/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/mmi/Documents/MMI/MMI1/SAE/SAE-203/sae-203-2025-ethdm/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Footer -->${maybeRenderHead()}<footer class=" mx-auto bg-[#212121] text-white text-center"> <div class="ftr bg-[#282828]"> <h2 class="font-alegreya text-[36px] text-[#e60000] mb-[15px]">Qui sommes nous ?</h2> <div class="bg-[#282828] logo-footer flex justify-center mb-[10px]"> <img src="/src/assets/logo/logo.svg" alt="Logo Festiv'Halloween" class="h-[50px] rounded-[45px]"> </div> </div> <div class=" social-icons flex justify-center gap-[20px] my-[15px]"> <a href="https://instagram.com" target="_blank" aria-label="Instagram" class="text-[24px] text-[#ff1717] transition-transform duration-300 hover:scale-110"> <img src="/src/assets/logo/instagram.svg" alt="Logo instagram"> </a> <a href="https://facebook.com" target="_blank" aria-label="Facebook" class="text-[24px] text-[#ff1717] transition-transform duration-300 hover:scale-110"> <img src="/src/assets/logo/facebook.svg" alt="Logo fb"> </a> <a href="https://youtube.com" target="_blank" aria-label="YouTube" class="text-[24px] text-[#ff1717] transition-transform duration-300 hover:scale-110"> <img src="/src/assets/logo/youtube.svg" alt="Logo ytb"> </a> <a href="https://x.com" target="_blank" aria-label="X" class="text-[24px] text-[#ff1717] transition-transform duration-300 hover:scale-110"> <img src="/src/assets/logo/x.svg" alt="Logo x"> </a> </div> <div class="footer-links flex flex-wrap justify-center gap-[30px] border-t border-[#ff1717] pt-[20px]"> <a href="/apropos.html" class="font-ad text-[16px] text-[#ffffff] transition-colors duration-300 hover:text-[#ff1717]">À Propos</a> <a href="/prog.html" class="font-ad text-[16px] text-[#ffffff] transition-colors duration-300 hover:text-[#ff1717]">Programmation</a> <a href="/contact.html" class="font-ad text-[16px] text-[#ffffff] transition-colors duration-300 hover:text-[#ff1717]">Contact</a> <a href="#billeterie" class="font-ad text-[16px] text-[#ffffff] transition-colors duration-300 hover:text-[#ff1717]">Billetterie</a> <a href="#legal" class="font-ad text-[16px] text-[#ffffff] transition-colors duration-300 hover:text-[#ff1717]">Mentions légales</a> <a href="#inscriptions" class="font-ad text-[16px] text-[#ffffff] transition-colors duration-300 hover:text-[#ff1717]">Inscription</a> </div> </footer>`;
}, "C:/Users/mmi/Documents/MMI/MMI1/SAE/SAE-203/sae-203-2025-ethdm/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} <body class="bg-[#282828]" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "C:/Users/mmi/Documents/MMI/MMI1/SAE/SAE-203/sae-203-2025-ethdm/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
