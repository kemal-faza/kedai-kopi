import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import {
	SiFacebook,
	SiInstagram,
	SiTiktok,
} from "@icons-pack/react-simple-icons";
import { Mail, Phone, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Hero />

			<About />

			<Menu />

			<Contact />

			<Footer />
		</>
	);
}
