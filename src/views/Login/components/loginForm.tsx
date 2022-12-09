import React from "react";
import { useNavigate } from "react-router-dom"
import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
function LoginForm() {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    /**
     * 1.token用户的唯一标识
     * 2.登录时后端生产的token字符串返回给前端
     * 3.前端将token存储到cookie中
     * */
    navigate("/layout/home")
    // 模拟跳转成功:存下token
    localStorage.setItem("token", "sdfdsfdfd45sdf51ds23f1sdf");
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "请输入用户名!" }]}
        >
          <Input placeholder="请输入用户名" prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input.Password placeholder="请输入密码" prefix={<LockOutlined />} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default LoginForm;
