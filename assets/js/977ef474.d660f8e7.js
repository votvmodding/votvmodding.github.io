"use strict";(self.webpackChunkvotv_modding_wiki=self.webpackChunkvotv_modding_wiki||[]).push([[644],{6066:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>t,metadata:()=>r,toc:()=>a});var s=i(4848),o=i(8453);const t={sidebar_position:3,sidebar_label:"Manual Installation",id:"install-manual",title:"Installing Mods (Manually)",tags:["Getting started"]},d=void 0,r={id:"installing-mods/install-manual",title:"Installing Mods (Manually)",description:"It is HIGHLY advised that you turn back now.",source:"@site/docs/installing-mods/install-manual.md",sourceDirName:"installing-mods",slug:"/installing-mods/install-manual",permalink:"/docs/installing-mods/install-manual",draft:!1,unlisted:!1,tags:[{label:"Getting started",permalink:"/docs/tags/getting-started"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Manual Installation",id:"install-manual",title:"Installing Mods (Manually)",tags:["Getting started"]},sidebar:"docsSidebar",previous:{title:"Thunderstore/R2ModManager",permalink:"/docs/installing-mods/install-modman"},next:{title:"OLD Tutorial Video (v1.x.x)",permalink:"/docs/tutorials/voidmod-fusion/old-video"}},l={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setting Up UE4SS/Shimloader",id:"setting-up-ue4ssshimloader",level:2},{value:"Installing Mods",id:"installing-mods",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.admonition,{type:"danger",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{children:(0,s.jsx)(n.strong,{children:"Cognitohazard Warning!"})}),(0,s.jsx)(n.p,{children:"It is HIGHLY advised that you turn back now."}),(0,s.jsxs)(n.p,{children:["Manual installations are advised against, and the community will be less likely to assist those with issues. You can possibly ruin your game installation. If you want to modify your game, I would prefer that you follow the ",(0,s.jsx)(n.a,{href:"/docs/installing-mods/install-modman",children:"Thunderstore/R2ModManager Installation Tutorial"})]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Proceed at your own risk."})})]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Before we start, make sure you have:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://mrdrnose.itch.io/votv",children:"A Clean, Unmodified Install of Voices of the Void"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://thunderstore.io/c/voices-of-the-void/p/Thunderstore/unreal_shimloader/",children:"Unreal Shimloader (By Thunderstore)"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"or, for Developers, I recommend using the direct equivalent of Shimloader:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/UE4SS-RE/RE-UE4SS/releases/latest",children:"RE-UE4SS (UE4SS_v#.#.#.zip)"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Voices of the Void mods are mostly tested on Windows. Other platforms have varying levels of support."}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-ue4ssshimloader",children:"Setting Up UE4SS/Shimloader"}),"\n",(0,s.jsxs)(n.p,{children:["After you have installed the game, download the Latest ",(0,s.jsx)(n.a,{href:"https://github.com/UE4SS-RE/RE-UE4SS/releases/latest",children:"RE-UE4SS"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Extract the Contents of the ",(0,s.jsx)(n.code,{children:"Thunderstore-unreal_shimloader-#.#.#.zip"})," or ",(0,s.jsx)(n.code,{children:"UE4SS_v#.#.#.zip"})," into ",(0,s.jsx)(n.code,{children:"VotVDirectory/VotV/Binaries/Win64"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Before Extracting:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Example Before Extracting UE4SS",src:i(7e3).A+"",width:"222",height:"130"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"After Extracting (UE4SS Example, Shimloader is similar):"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Example After Extracting UE4SS",src:i(1447).A+"",width:"228",height:"376"})}),"\n",(0,s.jsxs)(n.p,{children:["After extracting the files, open the ",(0,s.jsx)(n.code,{children:"/UE4SS/Mods/"})," folder (or just ",(0,s.jsx)(n.code,{children:"/Mods/"})," if you use UE4SS directly). Open the file ",(0,s.jsx)(n.code,{children:"mods.txt"}),". You'll be presented with something like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"CheatManagerEnablerMod : 1\r\nActorDumperMod : 0\r\nConsoleCommandsMod : 1\r\nConsoleEnablerMod : 1\r\nSplitScreenMod : 0\r\nLineTraceMod : 0\r\nBPModLoaderMod : 1\r\nBPML_GenericFunctions : 1\r\njsbLuaProfilerMod : 0\r\n\r\n\r\n\r\n\r\n; Built-in keybinds, do not move up!\r\nKeybinds : 1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Ensure that ",(0,s.jsx)(n.code,{children:"BPModLoaderMod"})," is set to ",(0,s.jsx)(n.code,{children:"1"}),", just like in the above example."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"IF YOUR GAME DOES NOT START UP PROPERLY NOW"})}),"\n",(0,s.jsxs)(n.p,{children:["Simply, instead of running the ",(0,s.jsx)(n.code,{children:"VotV.exe"})," you are used to, run the ",(0,s.jsx)(n.code,{children:"VotV-Win64-Shipping.exe"})," in ",(0,s.jsx)(n.code,{children:"/VotV/Binaries/Win64/"}),". This should fix any errors with launching the game, mainly present on older versions of Shimloader."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installing-mods",children:"Installing Mods"}),"\n",(0,s.jsx)(n.p,{children:"Voices of the Void Modding generally requires Two Mods to function properly:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://thunderstore.io/c/voices-of-the-void/p/Thunderstore/unreal_shimloader/",children:"Unreal Shimloader (By Thunderstore)"}),' : This mod is a specialized version of "',(0,s.jsx)(n.a,{href:"https://github.com/UE4SS-RE/RE-UE4SS",children:"RE-UE4SS"}),'" meant to allow Mod Managers to load mods for Unreal Engine Games. ',(0,s.jsx)(n.strong,{children:"By this point, you've already installed Shimloader/UE4SS."})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://thunderstore.io/c/voices-of-the-void/p/Gatohost/VoidMod/",children:"VoidMod (By Gato)"})," : This mod is the generally standardized framework for Voices of the Void modding, with useful functions, features and configuration control. It is ",(0,s.jsx)(n.em,{children:"HIGHLY RECOMMENDED"})," as most mods require it as a dependency. The VotV Modding Wiki uses VoidMod in its modding tutorials."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To install a Mod, go to ",(0,s.jsx)(n.a,{href:"https://thunderstore.io/c/voices-of-the-void/",children:"Thunderstore's Website, Specificaly the Voices of the Void Category"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Find any mod you want to download and open it in a new tab. You'll be presented with a page similar to this:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Example VoidMod Page",src:i(5528).A+"",width:"1412",height:"807"})}),"\n",(0,s.jsx)(n.p,{children:'Simply click on "Manual Download", which should download a ZIP archive containing the mod\'s contents.'}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Some mods depend on other mods!"})})}),"\n",(0,s.jsxs)(n.p,{children:["Make sure you install Dependencies, which are listed below the Download buttons. If your game crashes whilst loading, chances are you are missing a dependency or have outdated mods! (Unless you get the generic ",(0,s.jsx)(n.code,{children:"Fatal Error!"}),", which is an odd bug with modding)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Example VoidMod Page",src:i(2034).A+"",width:"1397",height:"212"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u180e"}),"\n",(0,s.jsx)(n.p,{children:"Once you've downloaded your mods, you will be greeted with a ton of archive files to be extracted."}),"\n",(0,s.jsxs)(n.p,{children:["Mods created after ",(0,s.jsx)(n.code,{children:"February 28th, 2024"}),", downloaded from Thunderstore, most likely use the following new format:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\ud83d\udcc1 MOD_AUTHOR-MOD_NAME-#.#.#.zip\r\n    \ud83d\udcc4 manifest.json\r\n    \ud83d\udcc4 README.md\r\n    \ud83d\uddbc\ufe0f icon.png\r\n    \ud83d\udcc1 mod\r\n        \ud83d\udcc4 enabled.txt\r\n        \ud83d\udcc1 scripts\r\n            \ud83d\udcc4 main.lua\r\n        \ud83d\udcc1 dll\r\n            \ud83d\udcc4 main.dll\r\n    \ud83d\udcc1 pak\r\n        \ud83d\udcc4 MOD_NAME.pak\r\n    \ud83d\udcc1 cfg\r\n        \ud83d\udcc4 MOD_AUTHOR-MOD_NAME-cfg.json\n"})}),"\n",(0,s.jsx)(n.p,{children:"To install this type of mod:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Put ",(0,s.jsx)(n.code,{children:".pak"})," Files from ",(0,s.jsx)(n.code,{children:"/pak/"})," into ",(0,s.jsx)(n.code,{children:"/Game/VotV/Content/Paks/LogicMods/"})]}),"\n",(0,s.jsxs)(n.li,{children:["Put the ",(0,s.jsx)(n.code,{children:"mod"})," Directory into ",(0,s.jsx)(n.code,{children:"/Game/VotV/Binaries/Win64/Mods/"}),". Rename it to the name of the mod."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Editor's Note",type:"note",children:(0,s.jsxs)(n.p,{children:["VotV modding is primarily Blueprint based, so I have not experimented with the ",(0,s.jsx)(n.code,{children:"mod"})," directory. Please correct me through Discord (creepycats) if you believe I have messed up."]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Installing Older Mods"})}),"\n",(0,s.jsxs)(n.p,{children:["Out of Date Mods will instead generally come with a ",(0,s.jsx)(n.code,{children:"VotV"})," folder in the zip. These mods are not compatible with Mod Managers."]}),"\n",(0,s.jsxs)(n.p,{children:["To install the old format mods (",(0,s.jsx)(n.em,{children:"HIGHLY"})," Recommended you do not install these):"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Drag the ",(0,s.jsx)(n.code,{children:"VotV"})," Directory into your ",(0,s.jsx)(n.code,{children:"/Game/"})," path. This should place the needed mod files where they need to go, combining with the already existing ",(0,s.jsx)(n.code,{children:"/Game/VotV/"})," path."]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1447:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/manual-after-28cb42c0fb886257057a2101ac6a48ad.png"},7e3:(e,n,i)=>{i.d(n,{A:()=>s});const s="data:image/png;base64,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"},2034:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/manual-dependencies-b0f476fc5dc19af7c55edb26d54e0ba3.png"},5528:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/manual-modpage-a10c80fdfe42ffde641e7c916fba8f77.png"},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>r});var s=i(6540);const o={},t=s.createContext(o);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);