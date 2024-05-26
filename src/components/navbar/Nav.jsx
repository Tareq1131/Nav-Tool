// import img from '../../assets/For Website.png'
import './navstyle.css'
function Nav() {
  return (
    <div className="navbar bg-base-100 shadow-md dark:border-b-[1px] dark:rounded-md w-full fixed z-[40] top-0 left-0 navCss">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">daisyUI</a>
     
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><a>Home</a></li>
        <li><a>Project</a></li>
        <li><a>Service</a></li>
        <li><a>Products</a></li>
        <li><a>About</a></li>
      
      </ul>
    </div>

    
  </div>
  )
}

export default Nav
