import React from "react";
import { Form, Input, Button } from "antd";

class ModifyPassword extends React.Component {
    state = {
        confirmDirty: false,
    };
    formRef = React.createRef();

    /**
     * 加载时候调用 一次
     * 初始化 state
     *
     * @param {*} props
     */
    constructor(props) {
        super();
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
        return {};
    }

    /**
     * 组件挂载之后调用
     */
    componentDidMount() {}

    /**
     * 接收新的 props 或 state 变化时调用， 加载阶段不调用
     * 返回 true 组件更新
     * 返回 false 组件不更新
     * @param {*} nextProps
     * @param {*} nextState
     */
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    /**
     * 组件更新阶段
     * 组件 渲染之前
     * 返回一个值作为 componentDidUpdate 第三个参数
     * @param {*} prevProps
     * @param {*} prevState
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        return null;
    }

    /**
     * 组件更新之后调用
     * @param {*} prevProps
     * @param {*} prevState
     * @param {*} snapshot
     */
    componentDidUpdate(prevProps, prevState, snapshot) {}

    /**
     * 卸载之前调用
     */
    componentWillUnmount() {}

    /**
     * 捕获组件错误
     * @param {*} err
     * @param {*} info
     */
    componentDidCatch(err, info) {}

    handleSubmit = (e) => {
        e.preventDefault();

       this.formRef.current
           .validateFields()
           .then((values) => {
               console.log(values);
           })
           .catch((err) => {
               console.log(err);
           });
    };

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    validateToNextPassword = (rule, value) => {
        const form = this.formRef.current;
        if (value && this.state.confirmDirty) {
            form.validateFields(["confirm"], { force: true });
        }
        return Promise.resolve();
    };

    compareToFirstPassword = (rule, value) => {
        const form = this.formRef.current;
        if (value && value !== form.getFieldValue("password")) {
            return Promise.resolve("两次密码不一致");
        } else {
            return Promise.resolve();
        }
    };

    render() {
        return (
            <Form ref={this.formRef} onFinish={this.handleSubmit}>
                <Form.Item
                    label="新密码"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "密码不能为空",
                        },
                        {
                            validator: this.validateToNextPassword,
                        },
                    ]}
                    hasFeedback
                >
                    <Input type="password" />
                </Form.Item>
                <Form.Item
                    label="确认密码"
                    name="confirm"
                    rules={[
                        {
                            required: true,
                            message: "请确认密码",
                        },
                        {
                            validator: this.compareToFirstPassword,
                        },
                    ]}
                    hasFeedback
                >
                    <Input type="password" onBlur={this.handleConfirmBlur} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                    &emsp;
                    <Button type="default" onClick={this.props.onClose}>
                        关闭
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default ModifyPassword;
