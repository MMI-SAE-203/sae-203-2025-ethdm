import { e as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_pyiVo5FK.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_h59WDHO1.mjs';
import 'clsx';
import { a as getAllguestByname } from '../chunks/backend_CBAZPD0T.mjs';
export { renderers } from '../renderers.mjs';

const $$CardInvite = createComponent(async ($$result, $$props, $$slots) => {
  const invite = await getAllguestByname();
  console.log(invite);
  return renderTemplate`${maybeRenderHead()}<section class=" mx-auto bg-[#212121] text-white p-6 text-center"> <h2 class="text-[34px] font-bold uppercase font-alegreya mb-4 text-white">Nos Invités</h2> ${invite.length > 0 ? renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${invite.map((invite2) => renderTemplate`<div${addAttribute(invite2.id, "key")} class="bg-[#282828] p-4"> <img${addAttribute(invite2.imgUrl, "src")} class="w-180 h-120 object-cover mb-3 mx-auto"> <h3 class="text-[20px] font-semibold text-white font-alegreya">${invite2.prenom_inv} ${invite2.nom_inv}</h3> <p class="text-[16px] text-gray-300 font-ad">${invite2.role_inv}</p> <div class="mt-4 text-center"> <a${addAttribute(`/invite/${invite2.id}`, "href")} class="font-Lilita inline-block font-[Lilita One] text-[22px] px-4 py-2 border-2 border-[#FF1717] text-[#FF1717] bg-[#212121] hover:bg-[#FF1717] hover:text-white transition">En savoir plus</a> </div> </div>`)} </div>` : renderTemplate`<p class="text-center text-gray-400 font-[Ad]">Aucun invité disponible.</p>`} </section>`;
}, "C:/Users/mmi/Documents/MMI/MMI1/SAE/SAE-203/sae-203-2025-ethdm/src/components/card_invite.astro", void 0);

const $$Invite = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Card_invite", $$CardInvite, {})} ` })}`;
}, "C:/Users/mmi/Documents/MMI/MMI1/SAE/SAE-203/sae-203-2025-ethdm/src/pages/invite.astro", void 0);

const $$file = "C:/Users/mmi/Documents/MMI/MMI1/SAE/SAE-203/sae-203-2025-ethdm/src/pages/invite.astro";
const $$url = "/invite";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Invite,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
