import{a as p,S as i}from"./assets/vendor-Cwhm5W_A.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const f="33957392-15c8dcee5be6fcb8a0c7e759b",y="https://pixabay.com/api/",d=async(e,o=1)=>{try{return(await p.get(y,{params:{key:f,q:e,page:o,per_page:15,image_type:"photo",orientation:"horizontal"}})).data}catch(n){throw console.error("Error fetching images:",n),n}},u=e=>{const o=document.querySelector(".gallery"),n=e.map(s=>`
        <div class="photo-card">
            <a href="${s.largeImageURL}">
                <img src="${s.webformatURL}" alt="${s.tags}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item"><b>Likes</b> ${s.likes}</p>
                <p class="info-item"><b>Views</b> ${s.views}</p>
                <p class="info-item"><b>Comments</b> ${s.comments}</p>
                <p class="info-item"><b>Downloads</b> ${s.downloads}</p>
            </div>
        </div>
    `).join("");o.insertAdjacentHTML("beforeend",n)},h=()=>{const e=document.querySelector(".gallery");e.innerHTML=""},g=()=>{const e=document.querySelector(".load-more");e.style.display="block"},m=()=>{const e=document.querySelector(".load-more");e.style.display="none"},b=()=>{const e=document.createElement("p");e.textContent="We're sorry, but you've reached the end of search results.",e.classList.add("end-message"),document.querySelector(".gallery").insertAdjacentElement("afterend",e)};let a=1,c="";const L=document.querySelector(".search-form"),w=document.querySelector(".load-more");L.addEventListener("submit",async e=>{if(e.preventDefault(),c=e.target.elements.query.value.trim(),a=1,h(),m(),c)try{const o=await d(c,a);u(o.hits),o.totalHits>15&&g(),new i(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}catch(o){console.error("Error:",o)}});w.addEventListener("click",async()=>{a+=1;try{const e=await d(c,a);u(e.hits);const o=document.querySelector(".photo-card").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"}),(e.hits.length<15||a*15>=e.totalHits)&&(m(),b()),new i(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}catch(e){console.error("Error:",e)}});
//# sourceMappingURL=index.js.map
