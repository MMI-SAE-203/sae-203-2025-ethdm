import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_pyiVo5FK.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_ODxdrUo4.mjs';
import { e as getOneInviteById, p as pb } from '../../chunks/backend_IUuohMDK.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const invite = await getOneInviteById(id);
  const img_url = await pb.files.getURL(invite, invite.photo_inv);
  console.log(invite);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-[375px] mx-auto bg-[#212121] text-white p-6 text-center"> ${invite ? renderTemplate`<img${addAttribute(img_url, "src")} class="w-full  mb-4">
          <h1 class="text-[28px] font-bold">${invite.prenom_inv} ${invite.nom_inv}</h1>
          <p class="text-[20px] text-gray-300 mb-2">${invite.role_inv}</p>
          <p class="text-[16px] text-gray-400 leading-[1.6]">${invite.bio}</p>` : renderTemplate`<p class="text-center text-gray-400">Invité non trouvé.</p>`} </section> ` })}`;
}, "C:/Users/mmi/Documents/MMI/MMI1/SAE/SAE-203/sae-203-2025-ethdm/src/pages/invite/[id].astro", void 0);

const $$file = "C:/Users/mmi/Documents/MMI/MMI1/SAE/SAE-203/sae-203-2025-ethdm/src/pages/invite/[id].astro";
const $$url = "/invite/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
