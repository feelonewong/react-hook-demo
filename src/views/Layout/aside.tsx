
import {useState} from "react"
import { Menu } from 'antd';
import { useNavigate } from "react-router-dom";
import {routerItems} from "../../router/index"

function Aside () {
  const [router] = useState(routerItems)
  const storageSelectKeys = sessionStorage.getItem("setSelectKeys")
  const [selectKeys, setSelectKeys] = useState(storageSelectKeys)
  const navigate = useNavigate()
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    const keyPath = e.keyPath.reverse().join("/")
    let link = `/`+keyPath
    navigate(link)

    // 存储选中菜单的key
    sessionStorage.setItem("setSelectKeys", e.key)
    setSelectKeys(e.key)
  }
  return (
    <div>
      <Menu
        mode="inline"
        theme="dark"
        defaultOpenKeys={['layout']}
        defaultSelectedKeys={selectKeys}
        onClick={handleMenuClick}
        items={router}
      >
      </Menu>
    </div>
  )
}


export default Aside;