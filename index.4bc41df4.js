const e=document.querySelector(".about__moreBtn"),t=document.querySelector(".about p");e.addEventListener("click",(()=>{t.className.includes("hideText")?(t.classList.remove("hideText"),t.classList.add("showText")):(t.classList.add("hideText"),t.classList.remove("showText"))}));const o=document.querySelector(".about__btn"),s=document.querySelector("#modal"),l=document.querySelector("#modalBackDrop"),c=document.body,n=document.querySelector(".modal__close"),a=()=>{l.classList.remove("modal__backDrop-visible"),setTimeout((()=>{s.classList.remove("modal__visible"),c.style.overflowX="hidden",c.style.overflow="auto"}),1e3)};o.addEventListener("click",(()=>{s.classList.add("modal__visible"),setTimeout((()=>{l.classList.add("modal__backDrop-visible")}),100),c.style.overflow="hidden"})),n.addEventListener("click",a),l.addEventListener("click",(e=>{e.target===e.currentTarget&&a()})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&a()}));new Swiper(".swiper",{loop:!0,keyboard:{enabled:!0},slidesPerView:1,spaceBetween:40,breakpoints:{850:{slidesPerView:2,spaceBetween:0,loop:!0},1200:{slidesPerView:3,loop:!1}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar",draggable:!0}});const d=document.querySelector("#modalForm");d.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e={from_name:document.getElementById("name").value,email_id:document.getElementById("email").value,message:document.getElementById("message").value};console.log(e),emailjs.send("service_cknjun9","template_4w4291a",e).then((function(e){console.log("SUCCESS!"+e.status+e.text)}),(function(e){console.log("FAILED...",e)}))})(),d.reset(),a()}));const r=document.querySelectorAll("section");console.log(r);const i=document.querySelectorAll(".navLink");console.log(i),window.onscroll=()=>{r.forEach((e=>{let t=window.scrollY,o=e.offsetTop-300,s=e.offsetHeight,l=e.getAttribute("id");t>=o&&t<o+s&&i.forEach((e=>{e.classList.remove("active"),document.querySelector(".navLink[href*="+l+"]").classList.add("active")}))}))};
//# sourceMappingURL=index.4bc41df4.js.map