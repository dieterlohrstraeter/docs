"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[1827],{7672:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var i=r(5893),s=r(1151);const t={sidebar_position:4},d="Modbus",o={id:"reference/modbus",title:"Modbus",description:"Einige Ger\xe4te, wie z.b. Z\xe4hler (meters) oder Wallboxen (chargers) werden \xfcber das Modbus-Protokoll angebunden und angesprochen.",source:"@site/docs/reference/modbus.md",sourceDirName:"reference",slug:"/reference/modbus",permalink:"/docs/reference/modbus",draft:!1,unlisted:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/modbus.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/docs/reference/plugins"},next:{title:"API",permalink:"/docs/reference/api"}},l={},c=[{value:"Physikalische Verbindung",id:"physikalische-verbindung",level:2},{value:"Serielle Verbindung (RS485)",id:"serielle-verbindung-rs485",level:3},{value:"Direkte Netzwerkverbindung",id:"direkte-netzwerkverbindung",level:3},{value:"Serielles Ger\xe4t \xfcber Netzwerkverbindung (mit Schnittstellenkonverter)",id:"serielles-ger\xe4t-\xfcber-netzwerkverbindung-mit-schnittstellenkonverter",level:3},{value:"Vordefinierte Ger\xe4te",id:"vordefinierte-ger\xe4te",level:2},{value:"Manuelle Konfiguration",id:"manuelle-konfiguration",level:2},{value:"Schreiben von Registern",id:"schreiben-von-registern",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"modbus",children:"Modbus"}),"\n",(0,i.jsxs)(n.p,{children:["Einige Ger\xe4te, wie z.b. Z\xe4hler (",(0,i.jsx)(n.a,{href:"/docs/reference/configuration/meters#modbus",children:(0,i.jsx)(n.code,{children:"meters"})}),") oder Wallboxen (",(0,i.jsx)(n.a,{href:"/docs/reference/configuration/chargers",children:(0,i.jsx)(n.code,{children:"chargers"})}),") werden \xfcber das Modbus-Protokoll angebunden und angesprochen."]}),"\n",(0,i.jsxs)(n.p,{children:["Die ",(0,i.jsx)(n.code,{children:"meter"})," Konfiguration besteht hierbei aus der Art der pysikalischen Verbindung (Schnittstelle), ggf. den technischen Schnittstellenparametern, dem verwendeten Modbus-Protokoll, der eindeutigen Modbus-ID des Ger\xe4tes auf dem Bus und der Nummer und Art des Registers welches letztendlich gelesen oder geschrieben werden soll."]}),"\n",(0,i.jsx)(n.p,{children:"Zu beachten ist, dass es drei verschiedene Modbus-Protokolle gibt: Modbus RTU, Modbus ASCII und Modbus TCP. Diese k\xf6nnen technisch auch \xfcber unterschiedliche Schnittstellentypen \xfcbertragen werden k\xf6nnen.\nDie klassische Variante ist dabei Modbus RTU \xfcber eine serielle RS485-Busschnittstelle wie sie bei den meisten Z\xe4hlern oder manchen Wallboxen genutzt wird. Ger\xe4te mit einer nativen Netzwerkschnittstelle (Ethernet/WiFi) hingegen werden typischerweise \xfcber das Modbus TCP-Protokoll angesprochen."}),"\n",(0,i.jsx)(n.p,{children:'Soll ein serielles Modbus-Ger\xe4t \xfcber einen Schnittstellenkonverter via Netzwerk (Ethernet/WiFi/PowerLAN) angebunden werden kommt dabei letztendlich ein Modbus RTU Protokoll \xfcber eine TCP/IP-Verbindung zustande.\nDas Modbus RTU Protokoll wird dabei 1:1 \xfcber das Netzwerk \xfcbertragen (sprich "getunnelt"). Auch wenn der Transportweg (TCP/IP) hierbei identisch ist handelt es sich vom Protokoll dennoch NICHT um Modbus TCP!\nHierbei muss sehr genau zwischen Protokoll und Transportweg unterschieden werden. "Modbus (RTU) over TCP" ist etwas anderes als Modbus TCP!'}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"Achtung: Es gibt auch komplexere Schnittstellenkonverter die optional das Modbus-Protokoll selbst zwischen Modbus RTU und Modbus TCP \xfcbersetzen k\xf6nnen!\nIst diese Funktion aktiv muss evcc mit dem Konverter mittels Modbus TCP kommunizieren w\xe4hrend der Konverter auf der anderen Seite mit dem seriellen Ger\xe4t via Modbus RTU kommuniziert und die beiden Protokolle bidirektional \xfcbersetzt.\nHier muss man ggf. genau auf die Ger\xe4tespezifikation und Konfiguration achten sonst ist keine Kommunikation m\xf6glich!"})}),"\n",(0,i.jsx)(n.p,{children:"Im Falle einer Konfiguration mit einem Schnittstellenkonverter wird die serielle Buskonfiguration nur am Konverter festgelegt.\nDie evcc-Konfiguration betrifft dann nur den Abschnitt zum Konverter."}),"\n",(0,i.jsx)(n.h2,{id:"physikalische-verbindung",children:"Physikalische Verbindung"}),"\n",(0,i.jsx)(n.h3,{id:"serielle-verbindung-rs485",children:"Serielle Verbindung (RS485)"}),"\n",(0,i.jsxs)(n.p,{children:["Wenn das Ger\xe4t direkt \xfcber einen RS485-Adapter verbunden ist (Modbus RTU), muss ",(0,i.jsx)(n.code,{children:"device"})," und die seriellen Kommunikationsparameter ",(0,i.jsx)(n.code,{children:"baudrate"}),", ",(0,i.jsx)(n.code,{children:"comset"})," entsprechend der Ger\xe4tekonfiguration angegeben werden.\nDazu bitte die jeweilige Betriebanleitung, Datenbl\xe4tter oder Systemeinstellungen vergleichen."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"An einem seriellen RS485-Bus lassen sich mehrere Ger\xe4te mit identischen Kommunikationsparameter betreiben wenn jedes Ger\xe4t eine eigene Modbus ID zugewiesen bekommen hat.\nLassen sich nicht alle Ger\xe4te an einem Bus auf einheitliche Kommunikationseinstellungen (aber unterschiedliche IDs) konfigurieren ist eine Aufteilung auf mehrere voneinander unabh\xe4ngige Bussysteme erforderlich."})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"Das Mischen von Ger\xe4ten mit voneinander abweichenden seriellen Kommunikationsparametern an einem Bus ist nicht m\xf6glich und f\xfchrt zu unvorhersehbaren Kommunikationsfehlern."})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'source: modbus\nid: 1\ndevice: /dev/ttyUSB0\nbaudrate: 38400\ncomset: "8E1"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"direkte-netzwerkverbindung",children:"Direkte Netzwerkverbindung"}),"\n",(0,i.jsxs)(n.p,{children:["Wenn das Ger\xe4t direkt \xfcber eine native Netzwerkverbindung (Modbus TCP) angebunden ist, muss eine ",(0,i.jsx)(n.code,{children:"uri"})," bestehend aus HOSTNAME",":PORT"," oder IP",":PORT"," angegeben werden:"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"source: modbus\nid: 1\nuri: 192.168.0.11:502\n"})}),"\n",(0,i.jsx)(n.h3,{id:"serielles-ger\xe4t-\xfcber-netzwerkverbindung-mit-schnittstellenkonverter",children:"Serielles Ger\xe4t \xfcber Netzwerkverbindung (mit Schnittstellenkonverter)"}),"\n",(0,i.jsxs)(n.p,{children:["Wird ein serielles Ger\xe4t \xfcber einen zwischengeschalteten transparenten RS485-IP-Schnittstellenkonverter (ohne Protokoll\xfcbersetzung) angeschlossen muss das Protokoll \xfcber die TCP/IP-Verbindung zus\xe4tzlich mittels ",(0,i.jsx)(n.code,{children:"rtu: true"})," auf Modbus RTU umgestellt werden."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"source: modbus\nid: 1\nuri: 192.168.0.10:502\nrtu: true # Modbus RTU over TCP\n"})}),"\n",(0,i.jsx)(n.h2,{id:"vordefinierte-ger\xe4te",children:"Vordefinierte Ger\xe4te"}),"\n",(0,i.jsxs)(n.p,{children:["Die integrierten vordefinierten Ger\xe4temodelle ",(0,i.jsx)(n.code,{children:"model"})," sind identisch zu ",(0,i.jsx)(n.a,{href:"https://github.com/volkszaehler/mbmd/blob/master/docs/mbmd_run.md#options",children:"MBMD"}),":"]}),"\n",(0,i.jsx)(n.p,{children:"ABB       ABB A/B-Series meters\nDDM       DDM18SD\nDZG       DZG Metering GmbH DVH4013 meters\nIEM3000   Schneider Electric iEM3000 series\nINEPRO    Inepro Metering Pro 380\nJANITZA   Janitza meters\nMPM       Bernecker Engineering MPM3PM meters\nORNO1P    ORNO WE-514 & WE-515\nORNO1P504 ORNO WE-504\nORNO3P    ORNO WE-516 & WE-517\nSBC       Saia Burgess Controls ALE3 meters\nSDM       Eastron SDM630/120/72DMv2\nSDM220    Eastron SDM220\nSDM230    Eastron SDM230\nSDM72     Eastron SDM72\nSEMTR     SolarEdge SE-MTR-3Y"}),"\n",(0,i.jsxs)(n.p,{children:["Alle davon abweichenden ",(0,i.jsx)(n.code,{children:"model"})," werden als Ger\xe4t vom Typ ",(0,i.jsx)(n.em,{children:"SunSpec"})," behandelt."]}),"\n",(0,i.jsxs)(n.p,{children:["Verwende ",(0,i.jsx)(n.code,{children:"value"})," um den Wert der vom Ger\xe4t gelesen werden soll zu definieren. Alle unterst\xfctzten Werte sind auf ",(0,i.jsx)(n.a,{href:"https://github.com/volkszaehler/mbmd/blob/master/meters/measurements.go#L28",children:"MBMD"})," voreingestellt."]}),"\n",(0,i.jsxs)(n.p,{children:["Im Falle eines ",(0,i.jsx)(n.em,{children:"SunSpec"}),"-kompatiblen Wechselrichters oder Z\xe4hlers werden die zu lesenden Werte in der Form ",(0,i.jsx)(n.code,{children:"model:[block:]point"})," nach der ",(0,i.jsx)(n.em,{children:"SunSpec"}),"-Definition angegeben. Zum Beispiel wird die DC-Leistung auf dem zweiten String eines dreiphasigen PV-Wechselrichters (enspricht SunSpec Model 103) wie folgt abgefragt: ",(0,i.jsx)(n.code,{children:"value: 103:2:W"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Das Ger\xe4te-",(0,i.jsx)(n.code,{children:"model"})," und die Slave ID ",(0,i.jsx)(n.code,{children:"id"})," sind immer erforderlich:"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"source: modbus\n---\nmodel: sdm\nvalue: Power\nscale: -1 # floating point factor applied to result, e.g. for kW to W conversion\n"})}),"\n",(0,i.jsx)(n.h2,{id:"manuelle-konfiguration",children:"Manuelle Konfiguration"}),"\n",(0,i.jsx)(n.p,{children:"Falls das Modbus-Ger\xe4t nicht direkt unterst\xfctzt wird oder von den vordefinierten Modellen abweichende Werte gelesen oder geschrieben werden sollen, k\xf6nnen die Modbus Register auch vollst\xe4ndig manuell konfiguriert werden:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"source: modbus\n---\nregister:\n  address: 40070\n  type: holding # holding or input\n  decode: int32 # int16|32|64, uint16|32|64, float32|64 and u|int32s + float32s\nscale: -1.0 # floating point factor applied to result, e.g. for kW to W conversion\ntimeout: 2s # timeout, without unit in ns\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Bei den ",(0,i.jsx)(n.code,{children:"int32s/uint32s"})," Dekodierungen wird die Wortreihenfolge vertauscht und sind z.B. bei E3/DC Ger\xe4ten n\xfctzlich."]}),"\n",(0,i.jsx)(n.h3,{id:"schreiben-von-registern",children:"Schreiben von Registern"}),"\n",(0,i.jsxs)(n.p,{children:["Es k\xf6nnen sowohl Holding-Register als auch Coils beschrieben werden. Dazu muss entweder ",(0,i.jsx)(n.code,{children:"type: writeholding"})," f\xfcr Holding-Register oder ",(0,i.jsx)(n.code,{children:"type: writecoil"})," f\xfcr Coils angegeben werden.\n",(0,i.jsx)(n.code,{children:"type: writeholding"})," schreibt immer ein 16Bit Register (int oder bool16). F\xfcr ",(0,i.jsx)(n.code,{children:"decode"})," muss hier daher immer ",(0,i.jsx)(n.code,{children:"uint16"})," angegeben werden.\n",(0,i.jsx)(n.code,{children:"type: writecoil"})," schreibt ein Coil. Angaben f\xfcr ",(0,i.jsx)(n.code,{children:"decode"})," werden ignoriert."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"source: modbus\n---\nregister:\n  address: 40070\n  type: writeholding # writeholding oder writecoil\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>d});var i=r(7294);const s={},t=i.createContext(s);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);