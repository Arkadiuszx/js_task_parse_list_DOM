function r(r){return parseFloat(r.replace(/[^0-9]/g,""))}var e=document.querySelector("ul"),a=Array.from(document.querySelectorAll("ul li"));a.sort(function(e,a){var t=r(e.dataset.salary);return r(a.dataset.salary)-t}),e.innerHTML="",a.forEach(function(r){return e.appendChild(r)});//# sourceMappingURL=index.2b24e6f1.js.map

//# sourceMappingURL=index.2b24e6f1.js.map
