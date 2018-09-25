import Alert from './Alert'
var plugin = {}
plugin.install = function (Vue) {
    Vue.prototype.$alert = function (option) {
        if (Object.prototype.toString.call(option) !== '[object Object]') {
            throw new Error("type error")
        }else{
            const AlertConstructor = Vue.extend(Alert);
            const instance = new AlertConstructor();

            const div = document.createElement("div");
            instance.$mount(div);
            document.body.appendChild(instance.$el);
        }
    }
}
export default plugin