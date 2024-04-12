// import React from "react";
import { Input, Dropdown, DropdownTrigger } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import NavbarDropdown from "./NavbarDropdown";
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
					<li>
						<Dropdown radius="none" containerPadding={10} classNames={{
							content: "font-serif"
						}}>
							<DropdownTrigger>
								Women
							</DropdownTrigger>
							<NavbarDropdown />
						</Dropdown>
					</li>
					<li>
						<Dropdown radius="none" containerPadding={10} classNames={{
							content: "font-serif"
						}}>
							<DropdownTrigger>
								Men
							</DropdownTrigger>
							<NavbarDropdown />
						</Dropdown></li>
					<li>
						<Dropdown radius="none" containerPadding={10} classNames={{
							content: "font-serif"
						}}>
							<DropdownTrigger>
								Kids
							</DropdownTrigger>
							<NavbarDropdown />
						</Dropdown>
					</li>
					<li>
						<Dropdown radius="none" containerPadding={10} classNames={{
							content: "font-serif"
						}}>
							<DropdownTrigger>
								Plus Size
							</DropdownTrigger>
							<NavbarDropdown />
						</Dropdown>
					</li>
					<li>
						<Dropdown radius="none" containerPadding={10} classNames={{
							content: "font-serif"
						}}>
							<DropdownTrigger>
								Accessories
							</DropdownTrigger>
							<NavbarDropdown />
						</Dropdown>
					</li>
					<li>
						<Dropdown radius="none" containerPadding={10} classNames={{
							content: "font-serif"
						}}>
							<DropdownTrigger>
								Occassion
							</DropdownTrigger>
							<NavbarDropdown />
						</Dropdown>
					</li>
					<li>
						<Dropdown radius="none" containerPadding={10} classNames={{
							content: "font-serif"
						}}>
							<DropdownTrigger>
								Trending
							</DropdownTrigger>
							<NavbarDropdown />
						</Dropdown>
					</li>
					<li>
						<Dropdown radius="none" containerPadding={10} classNames={{
							content: "font-serif"
						}}>
							<DropdownTrigger>
								Sale
							</DropdownTrigger>
							<NavbarDropdown />
						</Dropdown>
					</li>
					<li>
						<Dropdown radius="none" containerPadding={10} classNames={{
							content: "font-serif"
						}}>
							<DropdownTrigger>
								More
							</DropdownTrigger>
							<NavbarDropdown />
						</Dropdown>
					</li>
				</ul>
			</nav>
		</>
	)
}