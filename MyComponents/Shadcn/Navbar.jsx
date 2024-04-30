"use client";

import { useState } from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TextAlignJustifyIcon } from "@radix-ui/react-icons";

function Navbar() {
	const [showMenu, setShowMenu] = useState(false);
	const pathname = usePathname();
	const NavLinks = [
		{ id: 1, name: "Home", path: "/" },
		{ id: 2, name: "About", path: "/about" },
		{ id: 3, name: "Blogs", path: "/blogs" },
		{ id: 4, name: "Contact", path: "/contact" },
	];
	return (
		<>
			<div className="backdrop-blur-md w-[71vw] h-16 fixed top-0 z-50 my-3 rounded-3xl">
				<div className="hidden lg:flex opacity-90 bg-background dark:bg-background text-black dark:text-white w-[71vw] h-16 fixed top-0 z-50 dark:border-border border-2 border-border items-center justify-between px-4 sm:px-8 transition-all duration-300 ease-in-out shadow-md rounded-3xl">
					<div className="flex items-center space-x-4 w-1/3 text-start">
						<h1 className="font-bold text-2xl text-black dark:text-white">
							Navbar
						</h1>
					</div>
					<div className="flex items-center space-x-8">
						{NavLinks.map((link) => {
							return (
								<Link
									key={link.id}
									href={link.path}
									className={`text-md ${
										pathname === link.path
											? "text-black dark:text-white font-bold"
											: "text-gray-600 dark:text-gray-400 font-semibold"
									} hover:text-gray-900 dark:hover:text-gray-200 transition-all duration-150 ease`}
								>
									{link.name}
								</Link>
							);
						})}
					</div>
					<div className=" w-1/3 text-end">
						<DarkModeToggle />
					</div>
				</div>
			</div>
			<div className="lg:hidden flex bg-background dark:bg-background dark:text-white dark:border-border border-b-2 border-border w-full h-16 fixed top-0 z-50 items-center justify-between px-4 sm:px-8 lg:px-16 xl:px-24 shadow-md">
				<div className="space-x-4">
					<h1 className="font-bold text-2xl">Cubesic</h1>
				</div>
				<div className="flex items-center space-x-4">
					<DarkModeToggle />
					<button
						className="text-lg font-semibold"
						onClick={() => setShowMenu(!showMenu)}
					>
						<TextAlignJustifyIcon className="w-6 h-6" />
					</button>
				</div>

				{showMenu && (
					<div className="absolute top-16 left-0 w-full bg-background dark:bg-background dark:text-white dark:border-border border-b-2 border-border p-4 shadow-md origin-top animate-open-menu">
						{NavLinks.map((link) => {
							return (
								<Link
									key={link.id}
									href={link.path}
									className={`block font-semibold ${
										pathname === link.path
											? "text-black dark:text-white"
											: "text-gray-600 dark:text-gray-400"
									} text-lg py-2 text-center`}
								>
									{link.name}
								</Link>
							);
						})}
					</div>
				)}
			</div>
		</>
	);
}

export default Navbar;
