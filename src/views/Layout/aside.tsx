
import {useState} from "react"
import { Menu } from 'antd';
import { useNavigate } from "react-router-dom";
import {routerItems} from "../../router/index"

function Aside() {
  const [router] = useState(routerItems)
  const storageSelectKeys = sessionStorage.getItem("setSelectKeys")
  const [selectKeys, setSelectKeys] = useState(storageSelectKeys)

  const defaultOpenKeys = JSON.parse(sessionStorage.getItem('setOpenKeys'))
  const [openKeys, setOpenKeys] = useState(defaultOpenKeys);
  const navigate = useNavigate()
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