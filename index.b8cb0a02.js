!function(){var e=document.querySelector(".about__moreBtn"),t=document.querySelector(".about p");e.addEventListener("click",(function(){t.className.includes("hideText")?(t.classList.remove("hideText"),t.classList.add("showText")):(t.classList.add("hideText"),t.classList.remove("showText"))}));var o=document.querySelector(".about__btn"),c=document.querySelector("#modal"),s=document.querySelector("#modalBackDrop"),d=document.body,i=document.querySelector(".modal__close"),n=function(){s.classList.remove("modal__backDrop-visible"),setTimeout((function(){c.classList.remove("modal__visible"),d.style.overflow="auto"}),1e3)};o.addEventListener("click",(function(){c.classList.add("modal__visible"),setTimeout((function(){s.classList.add("modal__backDrop-visible")}),100),d.style.overflow="hidden"})),i.addEventListener("click",n),s.addEventListener("click",(function(e){e.target===e.currentTarget&&n()})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&n()}))}();
//# sourceMappingURL=index.b8cb0a02.js.map
