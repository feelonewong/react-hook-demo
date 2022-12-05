import { Outlet, Link } from "react-router-dom";
import "./layout.scss";
function Layout(){
  return (
    <section id="container">
        <aside>
          <h3> <Link to="/layout">首页</Link> </h3>
          <h3> <Link to="/layout/user">用户页</Link> </h3>
        </aside>
        <section>
          <header>header</header>
          <main>
            <Outlet></Outlet>
          </main>
        </section>
    </section>
  )

}

export default Layout;