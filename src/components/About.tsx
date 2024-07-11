import Image from "next/image";

export default function About() {
	return (
		<section
			id="about"
			className="pt-16 lg:pt-28 px-[7%] pb-6">
			<h2 className="text-2xl lg:text-4xl font-bold text-center mb-10">
				<span className="text-primary">Tentang</span> Kami
			</h2>
			<div className="flex flex-wrap lg:flex-nowrap">
				<div className="relative w-full shrink grow basis-[45rem]">
					<Image
						src={"/img/tentang-kami.jpg"}
						width={1000}
						height={1000}
						alt="Tentang Kami"
						// fill={true}
						// sizes="100vw"
						className="object-cover object-center"
					/>
				</div>
				<div className="shrink grow basis-[35rem] px-0 lg:px-4 text-justify mt-10 lg:mt-0">
					<h3 className="text-lg lg:text-2xl font-bold mb-4">
						Kenapa memilih kopi kami?
					</h3>
					<p className="mb-3 font-extralight text-sm lg:text-base leading-6">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Expedita sunt veritatis minima quo recusandae
						sequi quaerat corrupti ut blanditiis reprehenderit!
						Doloremque, quis? Nostrum aspernatur quam unde iste!
						Nulla, obcaecati non?
					</p>
					<p className="mb-3 font-extralight text-sm lg:text-base leading-6">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Expedita sunt veritatis minima quo recusandae
						sequi quaerat corrupti ut blanditiis reprehenderit!
						Doloremque, quis? Nostrum aspernatur quam unde iste!
						Nulla, obcaecati non?
					</p>
				</div>
			</div>
		</section>
	);
}
