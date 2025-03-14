import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as Fragment } from '../../chunks/astro/server_pyiVo5FK.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_h59WDHO1.mjs';
import { g as getActiviteWithInvite, a as getAllguestByname } from '../../chunks/backend_CBAZPD0T.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const activite = await getActiviteWithInvite(id);
  const invite = await getAllguestByname();
  function formatDateHeure(dateString) {
    const date = new Date(dateString);
    date.setHours(date.getHours() - 2);
    const heure = date.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit"
    });
    return `${heure}`;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center"> <img src="/src/assets/img/conf.jpg" alt="Conférence de presse"> </div> <section class="w-[375px] mx-auto bg-[#212121] text-white p-6 text-center"> ${activite ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <h2 class="text-[24px] uppercase mb-6 font-alegreya">${activite.titre_act}</h2> <p class="text-[16px] text-gray-300 mb-3 font-ad">${activite.desc_act}</p> <p class="text-[24px] text-gray-300 mb-3 font-alegreya">${formatDateHeure(activite.date_act)}</p> ${activite.invites.length > 0 ? renderTemplate`<div class="mt-6"> <h2 class="font-alegreya text-[24px] font-semibold text-[#E6010D]">Invité(s) :</h2> <ul class="mt-3 space-y-2"> ${activite.invites.map((invite2) => renderTemplate`<li${addAttribute(invite2.nom, "key")} class="text-[18px]"> ${invite2.prenom} ${invite2.nom} </li>`)} </ul> </div>` : renderTemplate`<p class="text-gray-400 mt-4">Aucun invité spécifié.</p>`}` })}` : renderTemplate`<p class="text-center text-gray-400">Activité non trouvée.</p>`} <div class="mt-4 text-center"> <a${addAttribute(`/invite/${invite.id}`, "href")} class="font-Lilita inline-block font-[Lilita One] text-[22px] px-4 py-2 border-2 border-[#FF1717] text-[#FF1717] bg-[#212121] hover:bg-[#FF1717] hover:text-white transition">En savoir plus</a> </div> </section> ` })}`;
}, "C:/Users/mmi/Documents/MMI/MMI1/SAE/SAE-203/sae-203-2025-ethdm/src/pages/activite/[id].astro", void 0);

const $$file = "C:/Users/mmi/Documents/MMI/MMI1/SAE/SAE-203/sae-203-2025-ethdm/src/pages/activite/[id].astro";
const $$url = "/activite/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
