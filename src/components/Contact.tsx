import { Mail, Phone, User } from "lucide-react";

export default function Contact() {
	return (
		<section
			id="contact"
			className="pt-16 lg:pt-28 px-[7%] pb-6">
			<h2 className="text-2xl lg:text-4xl font-bold text-center mb-8">
				<span className="text-primary">Kontak</span> Kami
			</h2>
			<p className="text-center max-w-lg mx-auto font-extralight text-sm lg:text-base leading-6">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Aliquid, nulla totam porro neque quas earum?
			</p>
			<div className="flex flex-wrap lg:flex-nowrap mt-10 bg-[#222222]">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126715.79662625238!2d110.33449163099552!3d-7.0247225777009055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4d3f0d024d%3A0x1e0432b9da5cb9f2!2sKota%20Semarang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1720673791796!5m2!1sid!2sid"
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					className="border-0 shrink grow basis-[45rem] w-full object-cover h-96 lg:h-auto"></iframe>
				<form
					action=""
					className="shrink grow basis-[45rem] py-10 lg:py-20 px-8 text-center">
					<div className="flex w-full bg-background items-center mt-8 pl-8 border border-[#eeeeee]">
						<User />
						<input
							type="text"
							placeholder="nama"
							className="w-full p-2 sm:p-3 lg:p-4 bg-background border-none focus:outline-none text-lg lg:text-xl"
						/>
					</div>
					<div className="flex w-full bg-background items-center mt-8 pl-8 border border-[#eeeeee]">
						<Mail />
						<input
							type="text"
							placeholder="email"
							className="w-full p-2 sm:p-3 lg:p-4 bg-background border-none focus:outline-none text-lg lg:text-xl"
						/>
					</div>
					<div className="flex w-full bg-background items-center mt-8 pl-8 border border-[#eeeeee]">
						<Phone />
						<input
							type="text"
							placeholder="no hp"
							className="w-full p-2 sm:p-3 lg:p-4 bg-background border-none focus:outline-none text-lg lg:text-xl"
						/>
					</div>
					<button
						type="submit"
						className="px-8 py-2 bg-primary mt-8 hover:bg-opacity-80 transition">
						kirim pesan
					</button>
				</form>
			</div>
		</section>
	);
}
