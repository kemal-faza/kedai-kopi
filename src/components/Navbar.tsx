"use client";
import clsx from "clsx";
import { MenuIcon, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
	const navLinks = [
		{
			name: "Home",
			path: "/#home",
		},
		{
			name: "Tentang Kami",
			path: "/#about",
		},
		{
			name: "Menu",
			path: "/#menu",
		},
		{
			name: "Kontak",
			path: "/#contact",
		},
	];

	const navIcons = [
		{
			icon: <Search />,
			name: "Search",
			display: "desktop",
		},
		{
			icon: <ShoppingCart />,
			name: "Cart",
			display: "desktop",
		},
		{
			icon: <MenuIcon />,
			name: "Menu",
			display: "mobile",
		},
	];

	function navIconClick(name: string) {
		switch (name) {
			case "Menu":
				const navbarMenu = document.getElementById("navbar-menu");
				navbarMenu?.classList.toggle("active");
				break;
		}
	}

	return (
		<nav
			className="flex items-center justify-between px-8 py-4 fixed z-10 w-full transition-colors duration-300"
			id="navbar">
			<Link
				href=""
				className="font-bold italic lg:text-2xl text-xl">
				kenangan<span className="text-primary">senja</span>.
			</Link>
			<div
				className="absolute top-full right-0 w-1/2 h-screen bg-white p-5 lg:p-0 lg:static lg:w-fit lg:h-fit lg:bg-transparent transition"
				id="navbar-menu">
				<ul className="lg:flex text-base lg:items-center">
					{navLinks.map((link) => (
						<li
							key={link.name}
							className="mr-3">
							<Link
								href={link.path}
								className="block lg:px-4 lg:py-2 my-4 lg:my-0 font-semibold lg:font-bold text-background lg:text-white hover:text-primary transition after:content-[''] after:block after:border-b-2 after:border-primary after:mt-1 after:origin-left lg:after:origin-center after:scale-x-0 hover:after:scale-x-[0.2] lg:hover:after:scale-x-100 after:transition after:duration-300">
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div>
				<ul className="lg:flex lg:items-center">
					{navIcons.map((icon) => (
						<li
							key={icon.name}
							id={icon.name}
							className="lg:mr-3">
							<Link
								href="#"
								onClick={(e) => {
									e.preventDefault();
									navIconClick(icon.name);
								}}
								className={clsx([
									"lg:p-2 hover:text-primary transition",
									icon.display === "mobile" && "lg:hidden",
									icon.display === "desktop" &&
										"hidden lg:block",
								])}>
								{icon.icon}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
