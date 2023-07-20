import "./header.scss";
import { NavLink } from "react-router-dom";
import { Link } from "@material-ui/core";
import Logo from "src/assets/images/logo.svg";
import classNames from "classnames";
import { useCallback, useState } from "react";

function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);

    const checkPage = useCallback((location: any, page: string): boolean => {
        const currentPath = location.pathname.replace("/", "");
        if (currentPath.indexOf("our-strengths") >= 0 && page === "our-strengths") {
            return true;
        }
        if (currentPath.indexOf("faqs") >= 0 && page === "faqs") {
            return true;
        }
        if (currentPath.indexOf("rules") >= 0 && page === "rules") {
            return true;
        }
        return false;
    }, []);

    const toggleMobileMenu = useCallback(
        (type?: string) => {
            if (window.innerWidth < 1060) {
                if (type === "close") {
                    setMobileMenu(false);
                } else {
                    setMobileMenu(!mobileMenu);
                    let html = document.getElementsByTagName("html")[0];
                    if (mobileMenu) {
                        html.style.overflowY = "hidden";
                    } else {
                        //@ts-ignore
                        html.style.overflowY = null;
                    }
                }
            }
            return false;
        },
        [window, mobileMenu],
    );

    return (
        <div className="header">
            <Link className="logo" href="/">
                <img className="logoImage" onClick={() => toggleMobileMenu("close")} src={Logo} alt="logo" />
            </Link>
            <div className={classNames("nav-wrap", { "nav-mobile": mobileMenu })}>
                <div className="nav">
                    <a
                        className="nav-link"
                        href="https://app.theminoritygame.com"  // Use the 'href' attribute to set the desired URL
                        style={{ color: 'inherit', textDecoration: 'none' }} // Apply styles as needed
                    >
                        <span onClick={() => toggleMobileMenu()}>Play</span>
                    </a>
                    <Link
                        component={NavLink}
                        className="nav-link"
                        color="inherit"
                        to="rules"
                        underline="none"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "rules");
                        }}
                    >
                        <span onClick={() => toggleMobileMenu()}>How It Works</span>
                    </Link>
                    {false && (
                    <Link
                        component={NavLink}
                        className="nav-link"
                        color="inherit"
                        to="our-strengths"
                        underline="none"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "our-strengths");
                        }}
                    >
                        <span onClick={() => toggleMobileMenu()}>Our Strengths</span>
                    </Link>)}
                    <Link color="inherit" underline="none" className="nav-link" href="https://docs.theminoritygame.com" target="_blank">
                        <span>White Paper</span>
                    </Link>
                    <Link
                        component={NavLink}
                        className="nav-link"
                        color="inherit"
                        to="faqs"
                        underline="none"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "faqs");
                        }}
                    >
                        <span onClick={() => toggleMobileMenu()}>FAQs</span>
                    </Link>
                </div>
            </div>

            <div onClick={() => toggleMobileMenu()} className={classNames("burger", { "burger-active": mobileMenu })}>
                <span className="burger__line" />
            </div>
        </div>
    );
}

export default Header;
