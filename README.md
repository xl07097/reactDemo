# react

## 生命周期

```javascript
    /**
     * 加载时候调用 一次
     * 初始化 state
     *
     * @param {*} props
     */
    constructor(props) {
        super(props);
    }

    /**
     * render 之后，组建 虚拟 dom 之后，实际挂载之前，获取新的 props 或 state；
     * 接收新的 props 之后
     *
     * 返回一个对象作为新的 state
     * 返回 null 不更新 state
     *
     * @param {*} props
     * @param {*} state
     */
    static getDerivedStateFromProps(props, state) {

    }

    /**
     * 组件挂载之后调用
     */
    componentDidMount() {

    }

    /**
     * 接收新的 props 或 state 变化时调用， 加载阶段不调用
     * 返回 true 组件更新
     * 返回 false 组件不更新
     * @param {*} nextProps
     * @param {*} nextState
     */
    shouldComponentUpdate(nextProps, nextState) {

    }

    /**
     * 组件更新阶段
     * 组件 渲染之前
     * 返回一个值作为 componentDidUpdate 第三个参数
     * @param {*} prevProps
     * @param {*} prevState
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {

    }

    /**
     * 组件更新之后调用
     * @param {*} prevProps
     * @param {*} prevState
     * @param {*} snapshot
     *
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    /**
     * 卸载之前调用
     */
    componentWillMount() {

    }

    /**
     * 捕获组件错误
     * @param {*} err
     * @param {*} info
     */
    componentDidCatch(err, info) {

    }
```
