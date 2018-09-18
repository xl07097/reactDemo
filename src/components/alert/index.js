import Alert from './Alert'
var plugin = {}
let interl = null;
plugin.install = function (Vue) {
    Vue.prototype.$alert = function (option) {
        if (Object.prototype.toString.call(option) !== '[object Object]') {
            throw new Error("type error")
            return false;
        }
        const AlertConstructor = Vue.extend(Alert);
        const instance = new AlertConstructor();

        const div = document.createElement("div");
        instance.$mount(div);
        document.body.appendChild(instance.$el);

        interl = setTimeout(function () {
            document.body.removeChild(instance.$el)
        }, 3000)
    }
}
export default plugin