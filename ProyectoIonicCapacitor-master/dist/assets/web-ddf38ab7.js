import{W as t}from"./index-53098002.js";class a extends t{async getCurrentPosition(e){return new Promise((o,n)=>{navigator.geolocation.getCurrentPosition(i=>{o(i)},i=>{n(i)},Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},e))})}async watchPosition(e,o){return`${navigator.geolocation.watchPosition(i=>{o(i)},i=>{o(null,i)},Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},e))}`}async clearWatch(e){window.navigator.geolocation.clearWatch(parseInt(e.id,10))}async checkPermissions(){if(typeof navigator>"u"||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");const e=await window.navigator.permissions.query({name:"geolocation"});return{location:e.state,coarseLocation:e.state}}async requestPermissions(){throw this.unimplemented("Not implemented on web.")}}const c=new a;export{c as Geolocation,a as GeolocationWeb};
