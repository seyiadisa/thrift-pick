// import React from "react";
import { Input } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import "./Navbar.css";

export default function NavbarThriftPick() {
	// const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	// const menuItems = ["hello world"];

	return (
		<>
			<nav id="lg-navbar" className="hidden lg:block">
				<div className="flex flex-row justify-between items-center w-screen px-32 py-4">
					<ul className="flex flex-row gap-x-14 text-xl font-semibold">
						<li>Shop</li>
						<li>Services</li>
					</ul>
					<div>
						<span className="brand text-3xl">ThriftPick</span>
					</div>
					<div className="flex flex-row items-center gap-x-6">
						<Input variant="bordered" className="w-52" startContent={
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						} classNames={{
							inputWrapper: ["border-1 border-black rounded-full"]
						}} />
						<FontAwesomeIcon icon={faShoppingBag} className="fa-xl" />
						<FontAwesomeIcon icon={faUser} className="fa-xl" />
					</div>
				</div>

				<ul className="sub-nav flex flex-row justify-between w-screen px-32 py-4 border-y-1 border-y-black text-lg">
					<li>Women</li>
					<li>Men</li>
					<li>Kids</li>
					<li>Plus Size</li>
					<li>Accessories</li>
					<li>Occassion</li>
					<li>Trending</li>
					<li>Sale</li>
					<li>More</li>
				</ul>
			</nav>
		</>
	)
}