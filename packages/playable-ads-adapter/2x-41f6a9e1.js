"use strict";var e=require("worker_threads"),r=require("./playable-adapter-core-bdddc91a.js");require("util"),require("stream"),require("path"),require("http"),require("https"),require("url"),require("fs"),require("assert"),require("zlib"),require("events");(async()=>{try{(()=>{const{log:r,info:t}=console;console.log=(...t)=>{e.parentPort?.postMessage({event:"adapter:log",msg:t.join(" ")}),r(...t)},console.info=(...r)=>{e.parentPort?.postMessage({event:"adapter:log",msg:r.join(" ")}),t(...r)}})();const{buildFolderPath:t,adapterBuildConfig:a}=e.workerData;await r.exec2xAdapter({buildFolderPath:t,adapterBuildConfig:a},{mode:"serial"}),e.parentPort?.postMessage({finished:!0,msg:"success",event:"adapter:finished"})}catch(r){e.parentPort?.postMessage({finished:!1,msg:r,event:"adapter:finished"})}})();