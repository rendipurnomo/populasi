import { Outlet } from "react-router-dom"
import Header from "../components/header"

const Layouts = () => {
  return (
    <div>
      <Header />
      <main>
      <Outlet />
      </main>
    </div>
  )
}

export default Layouts