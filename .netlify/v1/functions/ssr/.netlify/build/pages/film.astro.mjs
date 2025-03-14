import { e as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_pyiVo5FK.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_h59WDHO1.mjs';
import 'clsx';
import { c as getallfilmBydate } from '../chunks/backend_CBAZPD0T.mjs';
export { renderers } from '../renderers.mjs';

const $$CardFilms = createComponent(async ($$result, $$props, $$slots) => {
  const filmdate = await getallfilmBydate();
  function formatDateHeure(dateString) {
    const date = new Date(dateString);
    date.setHours(date.getHours() - 2);
    const heure = date.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit"
    });
    return `${heure}`;
  }
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#212121] mx-auto space-y-4 p-6 text-white"> <h1 class="font-alegreya text-[36px] text-center mb-6">Programme des Films</h1> ${filmdate.length > 0 ? renderTemplate`<div class="space-y-8"> ${["Avant premi\xE8re", "Rediffusions", "Jeunesse"].map((categorie) => renderTemplate`<div> <h2 class="font-alegreya text-[24px] text-center mb-4">${categorie}</h2> <div class="films grid grid-cols-1 md:grid-cols-2 gap-6"> ${filmdate.filter((film) => film.categorie === categorie).map((film) => renderTemplate`<div class="bg-[#282828] p-4 w-100 shadow-md mx-auto"> <a${addAttribute(`/film/${film.id}`, "href")}> <img${addAttribute(film.img, "src")}${addAttribute(film.titre, "alt")} class="movie__poster w-75 mx-auto block"> </a> <div class="film__info mt-4"> <h3 class="font-alegreya text-[20px] font-semibold">${film.titre_film} - avec ${film.acteurs_film}</h3> <p class="font-ad text-[16px] text-gray-300">À ${formatDateHeure(film.date_heure_film)} en Salle ${film.salle}</p> <p class="font-ad text-[16px] text-gray-400">Durée : ${film.duree_film || "Inconnue"} min</p> </div> <div class="mt-4 text-right"> <a${addAttribute(`/film/${film.id}`, "href")} class="font-Lilita inline-block font-[Lilita One] text-[22px] px-4 py-2 border-2 border-[#FF1717] text-[#FF1717] bg-[#212121] hover:bg-[#FF1717] hover:text-white transition">En savoir plus</a> </div> </div>`)} </div> </div>`)} </div>` : renderTemplate`<p class="font-ad text-center text-gray-400">Aucun film programmé.</p>`} </section>`;
}, "C:/Users/mmi/Documents/MMI/MMI1/SAE/SAE-203/sae-203-2025-ethdm/src/components/card_films.astro", void 0);

const $$Film = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Card_films", $$CardFilms, {})} ` })}`;
}, "C:/Users/mmi/Documents/MMI/MMI1/SAE/SAE-203/sae-203-2025-ethdm/src/pages/film.astro", void 0);

const $$file = "C:/Users/mmi/Documents/MMI/MMI1/SAE/SAE-203/sae-203-2025-ethdm/src/pages/film.astro";
const $$url = "/film";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Film,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
