import { e as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_pyiVo5FK.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_h59WDHO1.mjs';
import 'clsx';
import { e as getallactiviteBydate } from '../chunks/backend_CBAZPD0T.mjs';
export { renderers } from '../renderers.mjs';

const $$CardAct = createComponent(async ($$result, $$props, $$slots) => {
  const activite = await getallactiviteBydate();
  function formatDateHeure(dateString) {
    const date = new Date(dateString);
    date.setHours(date.getHours() - 2);
    const heure = date.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit"
    });
    return `${heure}`;
  }
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#212121] mx-auto space-y-4 p-6 text-white"> <h1 class="font-alegreya text-[36px] font-bold text-center mb-6">Liste des Activités</h1> ${activite.length > 0 ? renderTemplate`<ul> ${activite.map((activite2) => renderTemplate`<li${addAttribute(activite2.id, "key")} class="bg-[#282828] p-4"> <h2 class="font-alegreya pt-3 text-[24px] font-comfortaa text-white-100">${formatDateHeure(activite2.date_act)} ${activite2.titre_act}</h2> <p class="font-ad font-[16px] mt-2">${activite2.desc_act}</p> <div class="mt-4 text-right"> <a${addAttribute(`/activite/${activite2.id}`, "href")} class="font-Lilita inline-block font-[Lilita One] text-[22px] px-4 py-2 border-2 border-[#FF1717] text-[#FF1717] bg-[#212121] hover:bg-[#FF1717] hover:text-white transition">En savoir plus</a> </div> </li>`)} </ul>` : renderTemplate`<p class="text-center text-gray-400">Aucune activité trouvée.</p>`} </section>`;
}, "C:/Users/mmi/Documents/MMI/MMI1/SAE/SAE-203/sae-203-2025-ethdm/src/components/card_act.astro", void 0);

const $$Prog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class=" mx-auto bg-[#282828] text-white p-6"> <div class="bg-[#212121] program-item mb-6"> <a href="/prog.html" class="block"> <img src="/src/assets/img/projection.jpg" alt="Projection" class="w-220 mx-auto"> <h2 class="font-alegreya text-[24px]  text-center mt-2">Projection</h2> </a> <p class="font-ad text-[16px] text-[#ccc] leading-[1.5] m-3">
La programmation du festival Festiv'Halloween propose une série variée de projections des films d'horreur. Les festivaliers peuvent plonger dans l'atmosphère avec la projection d'un court métrage d'introduction.
</p> </div> <div class="bg-[#212121] program-item mb-6 mt-6 ml-3"> <a href="/film.html" class="block"> <img src="/src/assets/img/progfilms.jpg" alt="Programmation Partie Films" class="w-220 mx-auto"> <h2 class="font-alegreya text-[24px]  text-center mt-2">Programmation Partie Films</h2> </a> <p class=" font-ad text-[16px] text-[#ccc] leading-[1.5] m-3">
Retrouvez et choisissez la liste des films projetés tout au long de la journée. Une diversité de genres pour satisfaire tous les amateurs du frisson !
</p> </div> <div class="bg-[#212121] program-item mb-6 mt-6 ml-3"> <img src="/src/assets/img/confdepresse.jpg" alt="Conférence de Presse" class="w-220 mx-auto"> <h2 class="font-alegreya text-[24px] text-center mt-2">Conférence de Presse</h2> <p class="font-ad text-[16px] text-[#ccc] leading-[1.5] m-3">
Des projections suivies d'entretiens et discussions avec les réalisateurs et créateurs d'œuvres emblématiques.
</p> </div> </section> <section class="bg-[#212121]  mx-auto text-white p-6 pb-0"> <p class="bg-[#282828] font-alegreya text-[16px] text-[#ccc] leading-[1.5] p-4">
Le festival Festiv'Halloween propose une journée riche en conférences et projections autour du cinéma d'horreur. Voici le programme détaillé :
</p> </section> ${renderComponent($$result2, "Card", $$CardAct, {})} <section class=" mx-auto bg-[#212121] text-white p-6 space-y-6"> <div class="defile-header text-center"> <img src="/src/assets/img/défilé.jpg" alt="Défilé Halloween" class="w-220 mx-auto"> </div> <div class="defile-description "> <p class="font-ad text-[16px] text-gray-300 leading-[1.6]">
Le défilé de déguisement du festival Festiv'halloween est un moment phare de la soirée, où les participants
        peuvent exprimer leur créativité et leur passion pour l'univers de l'horreur. Le défilé débutera à 23h, avec une première parade des participants qui défileront sur une scène dédiée, accompagnés de musique d'ambiance effrayante.
        Chaque participant aura l'occasion de présenter son costume devant le public et un jury composé de professionnels du cinéma et de la mode.
</p> </div> <div class="defile-rules"> <h3 class="text-[34px] font-alegreya font-semibold text-white">Règles du défilé</h3> <ol class="font-ad list-decimal list-inside space-y-2 text-gray-300 text-[16px]"> <li><strong class="font-alegreya">Inscription préalable :</strong> Tous les participants doivent s'inscrire à l'avance via notre site web pour garantir leur place dans le défilé.</li> <li><strong class="font-alegreya">Originalité :</strong> Les costumes doivent être originaux et inspirés par l'univers de l'horreur. Les participants sont encouragés à faire preuve de créativité et à éviter les costumes stéréotypés.</li> <li><strong class="font-alegreya">Sécurité :</strong> Les accessoires utilisés dans les costumes doivent être sécurisés et ne pas présenter de danger pour les autres participants ou le public. Les objets pointus ou dangereux sont strictement interdits.</li> <li><strong class="font-alegreya">Respect des horaires :</strong> Les participants doivent se présenter sur scène à l'heure indiquée pour assurer le bon déroulement du défilé.</li> <li><strong class="font-alegreya">Jugement :</strong> Le jury évaluera les costumes sur des critères tels que l'originalité, la créativité et l'exécution. Des prix seront remis aux meilleurs déguisements à la fin du défilé.</li> </ol> <p class="font-ad mt-4 text-[16px]">
Ce défilé promet d'être un moment festif et mémorable, où chacun pourra célébrer Halloween dans une ambiance conviviale et effrayante !
</p> </div> </section> ` })}`;
}, "C:/Users/mmi/Documents/MMI/MMI1/SAE/SAE-203/sae-203-2025-ethdm/src/pages/prog.astro", void 0);

const $$file = "C:/Users/mmi/Documents/MMI/MMI1/SAE/SAE-203/sae-203-2025-ethdm/src/pages/prog.astro";
const $$url = "/prog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Prog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
