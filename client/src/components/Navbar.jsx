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
        <div className="fixed top-0 left-0 z-50">
            <div onClick={handleCollapseSidebar} className={`${collapsed ? "visible" : "hidden"} text-amber-700 p-4 sm:p-8 sm:pl-10`}>
                <MenuOutlinedIcon sx={{ fontSize: 38 }} />
            </div>

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
                                <MenuItem>Deals</MenuItem>
                                <MenuItem>Breakfast</MenuItem>
                                <MenuItem>Lunch</MenuItem>
                            </SubMenu>
                            <SubMenu label="About">
                                <Link to="/aboutus"><MenuItem>About Us</MenuItem></Link>
                                <MenuItem>Gallery</MenuItem>
                            </SubMenu>
                            <Link to="/location"><MenuItem>Hours + Location</MenuItem></Link>
                            <Link to="/reserve"><MenuItem className="mt-6 text-center font-medium">Reserve</MenuItem></Link>
                            <MenuItem className="text-center font-medium">Order</MenuItem>
                        </>
                    )}
                </Menu>
            </Sidebar>
        </div>
    )
}

export default Navbar