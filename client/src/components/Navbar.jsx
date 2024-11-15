import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";
import {Link} from "react-router-dom";

const Navbar = () => {

    const [collapsed, setCollapsed] = useState(true);

    const handleCollapseSidebar = () => {
      setCollapsed(!collapsed)
    }

    return (
        <nav className="fixed top-0 left-0 z-50">
            <button onClick={handleCollapseSidebar}
                    className={`${collapsed ? "visible" : "hidden"} text-amber-700 p-4 sm:p-8 sm:pl-10`}
                    aria-label="Toggle Sidebar" >
                <MenuOutlinedIcon sx={{ fontSize: 38 }} />
            </button>

            <Sidebar
                collapsed={collapsed}
                className={`${collapsed ? "hidden" : "visible h-screen"} animate__animated animate__slideInLeft text-3xl bg-cyan-700 opacity-100`}
                width="70vw sm:50vw"
            >
                <Menu>
                    <MenuItem
                        icon={<CloseIcon sx={{fontSize: 38}} />}
                        onClick={handleCollapseSidebar}
                        className="bg-transparent text-black"
                    />
                    {!collapsed && (
                        <>
                            <Link to="/"><MenuItem>Home</MenuItem></Link>
                            <SubMenu label="Menu">
                                <Link to={'/menu'}><MenuItem>All Items</MenuItem></Link>
                                <Link to="/menu#deals"><MenuItem>Deals</MenuItem></Link>
                                <Link to="/menu#breakfast"><MenuItem>Breakfast</MenuItem></Link>
                                <Link to="/menu#lunch"><MenuItem>Lunch</MenuItem></Link>
                            </SubMenu>
                            <SubMenu label="About">
                                <Link to="/aboutus"><MenuItem>About Us</MenuItem></Link>
                                <Link to="/gallery"><MenuItem>Gallery</MenuItem></Link>
                            </SubMenu>
                            <Link to="/location"><MenuItem>Hours + Location</MenuItem></Link>
                            <Link to="/reserve"><MenuItem>Reserve</MenuItem></Link>
                            <h1 className="mt-10 text-center text2xl font-medium text-red-500 select-none">Admin:</h1>
                            <Link to="/reservations"><MenuItem>Reservations</MenuItem></Link>
                        </>
                    )}
                </Menu>
            </Sidebar>
        </nav>
    )
}

export default Navbar