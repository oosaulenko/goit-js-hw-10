import"./assets/iziToast-fbe3ca69.js";/* empty css                      */import{f as b,i as u}from"./assets/vendor-77e16229.js";let l=null;const e=document.querySelector("button[data-start]"),d=document.querySelector("input#datetime-picker"),p=document.querySelector("span[data-days]"),y=document.querySelector("span[data-hours]"),f=document.querySelector("span[data-minutes]"),S=document.querySelector("span[data-seconds]");function v(t){const s=Math.floor(t/864e5),r=Math.floor(t%864e5/36e5),a=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:r,minutes:a,seconds:h}}function o(t){return String(t).padStart(2,"0")}b(d,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<new Date?(u.error({message:"Please choose a date in the future",position:"topRight",class:"error",color:"white"}),e.setAttribute("disabled","disabled")):(l=t[0],e.removeAttribute("disabled"))}});e.setAttribute("disabled","disabled");e.addEventListener("click",t=>{t.currentTarget.setAttribute("disabled","disabled"),d.setAttribute("disabled","disabled");const c=setInterval(()=>{const n=l-new Date,{days:i,hours:s,minutes:r,seconds:a}=v(n);if(n<0){clearInterval(c),u.success({message:"The countdown has ended",position:"topRight",class:"success",color:"white"}),e.removeAttribute("disabled"),d.removeAttribute("disabled");return}p.textContent=o(i),y.textContent=o(s),f.textContent=o(r),S.textContent=o(a)},1e3)});
//# sourceMappingURL=commonHelpers.js.map
