import React , {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constant/constants'
import { logo , menu , close  } from '../assets'
const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle,setToggle]=useState(false)
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0.0);
          }}
        >
          <img
            src={logo}
            alt="Tamjid Logo"
            className="h-9 w-9 object-contain"
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 ">
          {navLinks.map((link, index) => {
            return (
              <li
                key={index}
                className={`${
                  active == link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer transition-all duration-500 ease-linear`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}> {link.title}</a>
              </li>
            );
          })}
        </ul>
        <div className=" sm:hidden flex flex-1 justify-end items-center ">
          <img
            src={toggle ? menu : close}
            alt="menu-icon"
            className={`w-[28px] h-[28px] object-contain cursor-pointer transition-all duration-500 ease-in-out ${
              toggle ? "transform rotate-180" : ""
            }`}
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`  p-6 black-gradient absolute top-20 right-2 mx-4 my-2 min-w-[180px] z-10 rounded-xl transition-all duration-500 ease-in-out ${
              toggle
                ? "animate__animated animate__fadeOutRight animate__faster"
                : "animate__animated animate__fadeInRight animate__faster"
            }`}
          >
            <ul className="list-none flex flex-col gap-10 ">
              {navLinks.map((link, index) => {
                return (
                  <li
                    key={index}
                    className={`${
                      active == link.title ? "text-white" : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer transition-all duration-500 ease-linear text-center `}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle)
                    }}
                  >
                    <a href={`#${link.id}`}> {link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar