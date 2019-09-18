import React from "react";
import { Form, Input, Button } from "antd";

class ModifyPassword extends React.Component {
    
    state = {
        confirmDirty: false
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
    }

    handleConfirmBlur = e => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(["confirm"], { force: true });
        }
        callback();
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue("password")) {
            callback("两次密码不一致");
        } else {
            callback();
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item label="新密码" hasFeedback>
                    {getFieldDecorator("password", {
                        rules: [
                            {
                                required: true,
                                message: "密码不能为空"
                            },
                            {
                                validator: this.validateToNextPassword
                            }
                        ]
                    })(<Input type="password" />)}
                </Form.Item>
                <Form.Item label="确认密码" hasFeedback>
                    {getFieldDecorator("confirm", {
                        rules: [
                            {
                                required: true,
                                message: "请确认密码"
                            },
                            {
                                validator: this.compareToFirstPassword
                            }
                        ]
                    })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">提交</Button>
                </Form.Item>
            </Form>
        );
    }
}


export default Form.create({ name: "modify" })(ModifyPassword);