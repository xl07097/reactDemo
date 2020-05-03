import { asynRouter } from "@/router/router";

let BreadMap = new Map();

function dealRouter(router, path) {
    router.forEach(element => {
        // let key = "";
        // if (element.path) {
        //     // key = `${path}/${element.path}`;
        //     // key = key.replace(/\/+/, "/");
        //     BreadMap.set(element.path, element.meta.title);
        // }
        BreadMap.set(element.path, element.meta.title);
        let children = element.children || [];
        dealRouter(children);
    });
}

dealRouter(asynRouter);

export default BreadMap;
