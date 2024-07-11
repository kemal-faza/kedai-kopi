import {
	SiFacebook,
	SiInstagram,
	SiTiktok,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-primary text-center py-4">
			<div className="flex justify-center">
				<Link
					href="#"
					className="m-4 hover:text-background transition duration-300">
					<SiInstagram />
				</Link>
				<Link
					href="#"
					className="m-4 hover:text-background transition duration-300">
					<SiFacebook />
				</Link>
				<Link
					href="#"
					className="m-4 hover:text-background transition duration-300">
					<SiTiktok />
				</Link>
			</div>
			<div className="mb-5">
				<Link
					href="#home"
					className="px-4 py-2 hover:text-background">
					Home
				</Link>
				<Link
					href="#about"
					className="px-4 py-2 hover:text-background">
					About
				</Link>
				<Link
					href="#menu"
					className="px-4 py-2 hover:text-background">
					Menu
				</Link>
				<Link
					href="#contact"
					className="px-4 py-2 hover:text-background">
					Contact
				</Link>
			</div>
			<div className="text-sm">
				<p>
					Created by{" "}
					<Link
						href="https://github.com/kemal-faza"
						target="_blank"
						className="text-background font-bold">
						kemal-faza
					</Link>
					. | &copy; 2024.
				</p>
			</div>
		</footer>
	);
}
