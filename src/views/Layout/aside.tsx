import {routerItems} from "../../router/index"
import {useState} from "react"
function Aside () {
  const [router] = useState(routerItems)
  return (
    <div>
      {
        router.map(item => {
          return(
            <span key={item.path}>{item.label}</span>
          )
        })
      }
    </div>
  )
}


export default Aside;