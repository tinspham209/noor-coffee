import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logoImg from "../../assets/img/logo-web-white.png";
import { FaTimes, FaBars } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const isDesktop = useMediaQuery({ minDeviceWidth: 1000 });
	const handleClick = () => {
		setToggleMenu(!toggleMenu);
	};
	const closeMobileMenu = () => {
		setToggleMenu(false);
	};

	return (
		<>
			<nav className="nav">
				<div className="container">
					<nav className="navbar">
						<Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
							<img src={logoImg} alt="logo" />
						</Link>
						<div className="navbar__menu-icon" onClick={handleClick}>
							<span onClick={handleClick}>
								{toggleMenu ? <FaTimes /> : <FaBars />}
							</span>
						</div>

						<ul
							className="navbar__list"
							style={
								isDesktop
									? { opacity: "1" }
									: {
											opacity: toggleMenu ? "1" : "0",
											transform: toggleMenu ? "scale(1)" : "scale(0)",
									  }
							}
						>
							<li className="navbar__item">
								<Link to="/" className="navbar__link" onClick={closeMobileMenu}>
									Trang Chủ
								</Link>
							</li>
							<li className="navbar__item">
								<Link
									to="/products"
									className="navbar__link"
									onClick={closeMobileMenu}
								>
									Sản Phẩm
								</Link>
							</li>
							<li className="navbar__item">
								<Link
									to="/blog"
									className="navbar__link"
									onClick={closeMobileMenu}
								>
									Tin tức
								</Link>
							</li>
							<li className="navbar__item">
								<Link
									to="/stores"
									className="navbar__link"
									onClick={closeMobileMenu}
								>
									Cửa hàng
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
