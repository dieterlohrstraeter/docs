"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[3609],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||a;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6646:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),l=["components"],o={sidebar_position:12},s="messaging",p={unversionedId:"reference/configuration/messaging",id:"reference/configuration/messaging",title:"messaging",description:"evcc unterst\xfctzt die \xdcbermittlung von Status-Informationen \xfcber Telegram, PushOver und viele weitere Dienste \xfcber das System shoutrrr. Die Konfiguration erm\xf6glich es eigene Nachrichten f\xfcr bestimmte Ereignisse und Systeme zu definieren.",source:"@site/docs/reference/configuration/messaging.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/messaging",permalink:"/docs/reference/configuration/messaging",editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/configuration/messaging.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"tariffs",permalink:"/docs/reference/configuration/tariffs"},next:{title:"eebus",permalink:"/docs/reference/configuration/eebus"}},d=[{value:"<code>events</code>",id:"events",children:[{value:"<code>title</code>",id:"title",children:[],level:3},{value:"<code>msg</code>",id:"msg",children:[],level:3}],level:2},{value:"<code>services</code>",id:"services",children:[{value:"<code>type</code>",id:"type",children:[],level:3}],level:2},{value:"Unterst\xfctzte Dienste",id:"unterst\xfctzte-dienste",children:[{value:"<code>pushover</code>",id:"pushover",children:[],level:3},{value:"<code>telegram</code>",id:"telegram",children:[],level:3},{value:"<code>email</code>",id:"email",children:[],level:3},{value:"<code>shout</code>",id:"shout",children:[],level:3}],level:2}],m={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"messaging"},(0,a.kt)("inlineCode",{parentName:"h1"},"messaging")),(0,a.kt)("p",null,"evcc unterst\xfctzt die \xdcbermittlung von Status-Informationen \xfcber ",(0,a.kt)("a",{parentName:"p",href:"https://telegram.org"},"Telegram"),", ",(0,a.kt)("a",{parentName:"p",href:"https://pushover.net"},"PushOver")," und viele weitere Dienste \xfcber das System ",(0,a.kt)("a",{parentName:"p",href:"https://containrrr.dev/shoutrrr/"},"shoutrrr"),". Die Konfiguration erm\xf6glich es eigene Nachrichten f\xfcr bestimmte Ereignisse und Systeme zu definieren."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"messging")," definiert in Subelementen was und wie es verschickt wird. Unter ",(0,a.kt)("inlineCode",{parentName:"p"},"events")," m\xfcssen die Ereignisse definiert werden, f\xfcr welche Nachrichten verschickt werden sollen. Und unter ",(0,a.kt)("inlineCode",{parentName:"p"},"services")," die Dienste \xfcber welche die Nachrichten verschickt werden sollen."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"messaging:\n  events:\n    ...\n  services:\n    ...\n")),(0,a.kt)("h2",{id:"events"},(0,a.kt)("inlineCode",{parentName:"h2"},"events")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"events")," definiert f\xfcr verschiedene vordefinierte Ereignisse, den Nachrichteninhalt."),(0,a.kt)("p",null,"Die verf\xfcgbaren Ereignisse sind:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"start"),": Laden hat begonnen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stop"),": Laden wurde beendet"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"connect"),": Fahrzeug angeschlossen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"disconnect"),": Fahrzeug entfernt")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'    start: # charge start event\n      title: Charge started\n      msg: Started charging in "${mode}" mode\n')),(0,a.kt)("h3",{id:"title"},(0,a.kt)("inlineCode",{parentName:"h3"},"title")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"title")," definiert den Text f\xfcr den Nachrichtentitel"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"      title: Charge started\n")),(0,a.kt)("h3",{id:"msg"},(0,a.kt)("inlineCode",{parentName:"h3"},"msg")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"msg")," definiert den Text f\xfcr den Nachrichteninhalt. Im Text k\xf6nnen verschiedene Variablen f\xfcr evcc Informationen verwendet werden."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"M\xf6gliche Variablen"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"${title}"),": Text mit dem Wert von ",(0,a.kt)("a",{parentName:"li",href:"loadpoints#title"},(0,a.kt)("inlineCode",{parentName:"a"},"title"))," des ",(0,a.kt)("a",{parentName:"li",href:"loadpoints"},(0,a.kt)("inlineCode",{parentName:"a"},"loadpoints"))," (Ladepunkt)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"${loadpoint}"),": Nummer des ",(0,a.kt)("a",{parentName:"li",href:"loadpoints"},(0,a.kt)("inlineCode",{parentName:"a"},"loadpoints"))," (Ladepunkt) 1,2..."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"${mode}"),": Text mit dem aktiven Lademodus"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"${energy:%.1f}"),": Geladene Energiemenge in kWh"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"${duration}"),": Dauer der Ladezeit")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'      msg: Started "${title}" charging in "${mode}" mode\n')),(0,a.kt)("h2",{id:"services"},(0,a.kt)("inlineCode",{parentName:"h2"},"services")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"services")," definiert eine Liste von zu verwendeten Nachrichtendienste."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  services:\n  - type: pushover\n    app: 12345\n    recipients:\n    - 234567\n")),(0,a.kt)("p",null,"Im folgenden werden nun alle erforderlichen Parameter erkl\xe4rt."),(0,a.kt)("h3",{id:"type"},(0,a.kt)("inlineCode",{parentName:"h3"},"type")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"type")," definiert den Nachrichtendienst der verwendet werden soll"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pushover"),": ",(0,a.kt)("a",{parentName:"li",href:"https://pushover.net/"},"Pushover"),". Siehe ",(0,a.kt)("a",{parentName:"li",href:"#pushover"},(0,a.kt)("inlineCode",{parentName:"a"},"pushover"))," Definition"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"telegram"),": ",(0,a.kt)("a",{parentName:"li",href:"https://telegram.org/"},"Telegram Messenger"),". Siehe ",(0,a.kt)("a",{parentName:"li",href:"#telegram"},(0,a.kt)("inlineCode",{parentName:"a"},"telegram"))," Definition"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"email"),": Email.  Siehe ",(0,a.kt)("a",{parentName:"li",href:"#email"},(0,a.kt)("inlineCode",{parentName:"a"},"email"))," Definition"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shout"),": ",(0,a.kt)("a",{parentName:"li",href:"https://containrrr.dev/shoutrrr"},"shoutrrr"),". Siehe ",(0,a.kt)("a",{parentName:"li",href:"#shout"},(0,a.kt)("inlineCode",{parentName:"a"},"shout"))," Definition")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  services:\n  - type: pushover\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"unterst\xfctzte-dienste"},"Unterst\xfctzte Dienste"),(0,a.kt)("h3",{id:"pushover"},(0,a.kt)("inlineCode",{parentName:"h3"},"pushover")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pushover")," verwendet den Dienst ",(0,a.kt)("a",{parentName:"p",href:"https://pushover.net/"},"Pushover")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: pushover\n  app: # app id\n  recipients:\n  - # list of recipient ids\n")),(0,a.kt)("h3",{id:"telegram"},(0,a.kt)("inlineCode",{parentName:"h3"},"telegram")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"telegram")," verwendet den Dienst ",(0,a.kt)("a",{parentName:"p",href:"https://telegram.org/"},"Telegram Messenger")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: telegram\n  token: # bot id : jede laufende Instanz von evcc ben\xf6tigt eine eigene bot id\n  chats:\n  - # Liste von Chat oder Group IDs. Jeder Eintrag ben\xf6tigt ein - Zeichen am Anfang und muss in einer eigenen Zeile sein.\n  - -GroupID #Achtung Group IDs in Telegram haben ein -Zeichen \n  - ChatID\n")),(0,a.kt)("h3",{id:"email"},(0,a.kt)("inlineCode",{parentName:"h3"},"email")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"email")," verwendet den Dienst ",(0,a.kt)("a",{parentName:"p",href:"https://containrrr.dev/shoutrrr"},"shoutrrr")),(0,a.kt)("p",null,"Hier wird der Parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"uri")," mit dem Wert ",(0,a.kt)("inlineCode",{parentName:"p"},"smtp://<user>:<password>@<host>:<port>/?fromAddress=<from>&toAddresses=<to>")," erwartet. Die Platzhalter sind wie folgt zu ersetzen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<host>"),": Adresse (hostname oder IP Adresse) des Email Servers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<port>"),": Port Adresse des Email Servers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<user>"),": Benutzername f\xfcr den Email Server"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<password>"),": Passwort des Benutzers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<from>"),": Email Adresse des Absenders"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<to>"),": Email Adresse des Empf\xe4ngers")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: email\n  uri: smtp://benutzername:passwort@emailserver.dom\xe4ne:1234/?fromAddress=absender@mail.com&toAddresses=empf\xe4nger@mail.com\n")),(0,a.kt)("h3",{id:"shout"},(0,a.kt)("inlineCode",{parentName:"h3"},"shout")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"shout")," verwendet den Dienst ",(0,a.kt)("a",{parentName:"p",href:"https://containrrr.dev/shoutrrr"},"shoutrrr")," unter unterst\xfctz alle seine Dienste."),(0,a.kt)("p",null,"Die Konfiguration wird im folgenden Beispiel anhand von ",(0,a.kt)("a",{parentName:"p",href:"https://gotify.net/"},"Gotify")," gezeigt und funktioniert bei den anderen M\xf6glichkeiten \xfcber den gleichen Weg."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  - type: shout\n    uri: gotify://gotify.example.com:443/AzyoeNS.D4iJLVa/?priority=1\n")),(0,a.kt)("p",null,"Weitere Informationen sind in der ",(0,a.kt)("a",{parentName:"p",href:"https://containrrr.dev/shoutrrr"},"shoutrrr")," Dokumentation zu den ",(0,a.kt)("a",{parentName:"p",href:"https://containrrr.dev/shoutrrr/v0.5/services/overview/"},"unterst\xfctzten Diensten")," zu finden."))}u.isMDXComponent=!0}}]);