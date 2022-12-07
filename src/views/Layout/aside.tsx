
import {useState} from "react"
import { Menu, MenuProps } from 'antd';
import { useNavigate } from "react-router-dom";
import {routerItems} from "../../router/index"

// 选中的key
const storageSelectKeys = sessionStorage.getItem("setSelectKeys") || '';
// 展开的key
const defaultOpenKeys = JSON.parse(sessionStorage.getItem("setOpenKeys")||'[]') || []; //默认是[]数组

function Aside() {
  // 路由
  const [router] = useState(routerItems)
  // 选择的菜单
  const [selectKeys, setSelectKeys] = useState<string>(storageSelectKeys);
  // 展开的菜单
  const [openKeys, setOpenKeys] = useState<[]>(defaultOpenKeys);
  // react-router-dom跳转的api
  const navigate = useNavigate();

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    const keyPath = e.keyPath    
    // 存储选中菜单的key
    const copyKeyPath = JSON.parse(JSON.stringify(keyPath))
    setOpenKeys(copyKeyPath.slice(1))
    sessionStorage.setItem("setOpenKeys", JSON.stringify(copyKeyPath.slice(1)));

    let link = keyPath.reverse().join("/")
    const router = "/" + link
    navigate(router);

    // 存储选中菜单的key
    sessionStorage.setItem("setSelectKeys", e.key)
    setSelectKeys(e.key);
  }
  return (
    <div>
      <Menu
        mode="inline"
        theme="dark"
        defaultOpenKeys={openKeys}
        defaultSelectedKeys={selectKeys}
        onClick={handleMenuClick}
        items={router}
      ></Menu>
    </div>
  );
}


export default Aside;