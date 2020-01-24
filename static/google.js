{% google_tags %}

async src="https://www.googletagmanager.com/gtag/js?id={{ google.site_tag }}"

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', '{{ google.site_tag }}');