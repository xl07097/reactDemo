import { asynRouter } from "@/router/router";

let BreadMap = new Map();

function dealRouter(router, path) {
    router.forEach(element => {
        let key = "";
        if (element.path) {
            key = `${path}/${element.path}`;
            key = key.replace(/\/+/, "/");
            BreadMap.set(key, element.meta.title);
        }
        let children = element.children || [];
        dealRouter(children, key);
    });
}

dealRouter(asynRouter, "");

export default BreadMap;
