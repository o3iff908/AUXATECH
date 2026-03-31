/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
{/*import banner1 from "/assets/img/banner/1.jpg";*/}
import ModalVideo from "react-modal-video";
import { useState } from "react";

interface DataType {
    navbarPlacement?: string;
    toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MainMenu = ({ navbarPlacement, toggleSubMenu }: DataType) => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
        <ul className={`nav navbar-nav ${navbarPlacement ? navbarPlacement : ""}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/services">Services</Link></li>
            {/*<li><Link to="/blog">Blog</Link></li>*/}
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="35mvh-2oII8" onClose={() => setOpen(false)} />
        </>
    );
};

export default MainMenu;