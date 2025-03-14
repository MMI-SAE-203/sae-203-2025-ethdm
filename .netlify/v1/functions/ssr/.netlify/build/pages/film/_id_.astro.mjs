import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, j as Fragment, h as addAttribute } from '../../chunks/astro/server_pyiVo5FK.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_DMBjFD4y.mjs';
import { b as getFilmById, p as pb } from '../../chunks/backend_CBAZPD0T.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const film = await getFilmById(id);
  const img_film = film.affiche_film;
  const img_url = await pb.files.getURL(film, img_film);
  function formatDateHeure(dateString) {
    const date = new Date(dateString);
    date.setHours(date.getHours() - 2);
    const heure = date.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit"
    });
    return `${heure}`;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-[375px] mx-auto bg-[#212121] font-ad text-white p-6 text-center"> ${film ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <img${addAttribute(img_url, "src")}${addAttribute(film.titre_film, "alt")} class="w-60 mb-6 mx-auto"> <h2 class="font-alegreya text-[34px] font-semibold">${film.titre_film}</h2> <p class="font-alegreya text-[24px] text-gray-300 mb-2 font-bold">${formatDateHeure(film.date_heure_film)}</p> <p class="text-[24px] text-white mb-2">${film.salle_diff}</p> ${film.bandeannonce && renderTemplate`<div class="mt-6 p-4 rounded-lg"> <iframe class="mt-4 rounded-lg shadow-md w-full h-64 lg:h-50"${addAttribute(film.bandeannonce.replace("watch?v=", "embed/"), "src")} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div>`}<p class="text-[16px] text-white mb-2">Durée : ${film.duree_film || "Inconnue"} min</p> <p class="text-[16px] text-white leading-[1.6] mt-4">${film.synopsis_film}</p> <p class="text-[12px] text-white leading-[1.6] mt-4">${film.langue_film}</p> <p class="text-[16px] text-white leading-[1.6] mt-4">${film.acteurs_film}</p> ` })}` : renderTemplate`<p class="text-center text-gray-400">Film non trouvé.</p>`} </section> ` })}`;
}, "C:/Users/mmi/Documents/MMI/MMI1/SAE/SAE-203/sae-203-2025-ethdm/src/pages/film/[id].astro", void 0);

const $$file = "C:/Users/mmi/Documents/MMI/MMI1/SAE/SAE-203/sae-203-2025-ethdm/src/pages/film/[id].astro";
const $$url = "/film/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
