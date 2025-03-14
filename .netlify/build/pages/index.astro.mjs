import { e as createComponent, m as maybeRenderHead, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_pyiVo5FK.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_ODxdrUo4.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Carrousel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Carrousel -->${maybeRenderHead()}<section class=" mx-auto bg-[#212121] p-6 mt-6 text-white text-center"> <div class="w-auto overflow-hidden relative mx-auto"> <div class="flex gap-4 overflow-x-scroll scroll-smooth snap-x justify-center" id="carrousel"> <div class="flex-none w-full snap-center"> <img src="/src/assets/img/projection.jpg" alt="Projection" class="w-full rounded-lg"> </div> <div class="flex-none w-full snap-center"> <img src="/src/assets/img/projection.jpg" alt="Projection" class="w-full rounded-lg"> </div> <div class="flex-none w-full snap-center"> <img src="/src/assets/img/projection.jpg" alt="Projection" class="w-full rounded-lg"> </div> <div class="flex-none w-full snap-center"> <img src="/src/assets/img/confdepresse.jpg" alt="Conférence de Presse" class="w-full rounded-lg"> </div> <div class="flex-none w-full snap-center"> <img src="/src/assets/img/défilé.jpg" alt="Défilé" class="w-full rounded-lg"> </div> </div> <button class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2" onclick="document.getElementById('carrousel').scrollBy({left: -600, behavior: 'smooth'})">
&lt;
</button> <button class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2" onclick="document.getElementById('carrousel').scrollBy({left: 600, behavior: 'smooth'})">
&gt;
</button> </div> <div class="mt-4 text-right"></div></section>`;
}, "C:/Users/mmi/Documents/MMI/MMI1/SAE/SAE-203/sae-203-2025-ethdm/src/components/carrousel.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<img src="/src/assets/img/imghome.jpg" class="block lg:hidden" alt="VHS"> <img src="/src/assets/img/vhs.jpg" class="hidden lg:block" alt="VHS"> <section class=" mx-auto bg-[#212121] p-6 mt-6 text-white text-center"> <h1 class="text-[36px] font-bold uppercase font-alegreya">Présentation du Festival</h1> <div class="text-start"> <p class="font-ad mt-2 text-[16px] text-[#ccc] leading-[1.5]">Le festival Festiv'Halloween, qui se déroulera à Montbéliard pendant la période d'Halloween, est une initiative novatrice dédiée aux films d'horreur et d'épouvante.</p> <p class="font-ad mt-2 text-[16px] text-[#ccc] leading-[1.5]">Avec une programmation variée projetée toute la nuit, cet événement vise à combler un vide en Franche-Comté, où les festivals de ce genre sont inexistants. Le public cible inclut principalement les jeunes, grands amateurs de sensations fortes, ainsi que les passionnés de thrillers et de films gore.</p> <p class="font-ad mt-2 text-[16px] text-[#ccc] leading-[1.5]">En choisissant Montbéliard, une ville dynamique avec une forte population étudiante et peu d'événements culturels majeurs, le festival aspire à attirer un large public tout en dynamisant l'attractivité locale.</p> <p class="font-ad mt-2 text-[16px] text-[#ccc] leading-[1.5]">Festiv'Halloween promet ainsi de devenir un rendez-vous incontournable pour les amateurs de cinéma d'horreur, tout en mettant en avant le cinéma Le Colisée et en offrant une plateforme aux créateurs du genre.</p> </div> <div class="mt-4 text-right"> <a href="#details" class="font-Lilita inline-block font-[Lilita One] text-[22px] px-4 py-2 border-2 border-[#FF1717] text-[#FF1717] bg-[#212121] hover:bg-[#FF1717] hover:text-white transition">En savoir plus</a> </div> </section> <section class=" mx-auto bg-[#212121] p-6 mt-6 text-white text-center"> <h2 class="text-[36px] font-bold uppercase font-alegreya">Où et Quand ?</h2> <p class="text-start font-ad mt-2 text-[16px] text-[#ccc] leading-[1.5]">Retrouvez nous le soir d’Halloween (31/09/2024) au cinéma du Colisée au centre de Montbéliard pour découvrir la sélection de film choisi et qui seront diffusé durant toute la nuit.</p> </section> ${renderComponent($$result2, "Carrousel", $$Carrousel, {})} <section class=" mx-auto bg-[#282828] text-white text-center p-6"> <div class="bouton2 flex justify-center my-4"> <a href="#billeterie" class="font-Lilita inline-block font-[Lilita One] text-[22px] px-6 py-2 border-2 border-[#FF1717] text-[#FF1717] bg-[#212121] hover:bg-[#FF1717] hover:text-white transition">Accès à la billetterie</a> </div> </section> <section class=" mx-auto bg-[#212121] text-white text-center p-6"> <h2 class="text-[36px] font-alegreya text-white mb-4">Nos partenaires</h2> <div class="flex flex-wrap justify-center gap-4"> <img src="/src/assets/img/pma.jpg" alt="Pays de Montbéliard Agglomération" class="w-[120px]"> <img src="/src/assets/img/cnc.jpg" alt="CNC - Centre National du Cinéma et de l'Image Animée" class="w-[120px]"> <img src="/src/assets/img/doubs.jpg" alt="Doubs - Le Département" class="w-[120px]"> </div> </section>  <div class="w-full bg-[#282828] h-[2px] my-6"></div> ` })}`;
}, "C:/Users/mmi/Documents/MMI/MMI1/SAE/SAE-203/sae-203-2025-ethdm/src/pages/index.astro", void 0);

const $$file = "C:/Users/mmi/Documents/MMI/MMI1/SAE/SAE-203/sae-203-2025-ethdm/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
