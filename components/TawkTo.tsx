"use client";

import Script from "next/script";

interface TawkToProps {
  autoOpen?: boolean;
}

export default function TawkTo({ autoOpen = false }: TawkToProps) {
  return (
    <Script
      id="tawkto"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          ${autoOpen ? "Tawk_API.onLoad = function(){ Tawk_API.maximize(); };" : ""}
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/6a03ad848acb811c3685583f/1jof5rje8';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        `,
      }}
    />
  );
}
