import React from "react";
import { Form, Input, Button } from "antd";

class ModifyPassword extends React.Component {
    state = {
        confirmDirty: false,
    };

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

        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
    };

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(["confirm"], { force: true });
        }
        callback();
    };

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue("password")) {
            callback("两次密码不一致");
        } else {
            callback();
        }
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item label="新密码" hasFeedback>
                    {getFieldDecorator("password", {
                        rules: [
                            {
                                required: true,
                                message: "密码不能为空",
                            },
                            {
                                validator: this.validateToNextPassword,
                            },
                        ],
                    })(<Input type="password" />)}
                </Form.Item>
                <Form.Item label="确认密码" hasFeedback>
                    {getFieldDecorator("confirm", {
                        rules: [
                            {
                                required: true,
                                message: "请确认密码",
                            },
                            {
                                validator: this.compareToFirstPassword,
                            },
                        ],
                    })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create()(ModifyPassword);
