(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();var l=new Date("07/21/2023 10:1 AM"),u=1e3,f=u*60,c=f*60,s=c*24,d;function m(){var a=new Date,t=l-a;if(t<0){clearInterval(d),document.getElementById("countdown").innerHTML="EXPIRED!";return}var o=Math.floor(t/s),r=Math.floor(t%s/c);document.getElementById("countdown").innerHTML="<span>"+o+"</span> dni ",document.getElementById("countdown").innerHTML+="<span>"+r+"</span> godzin "}d=setInterval(m,1e3);
