import Image from "next/image";

export default function Menu() {
	return (
		<section
			id="menu"
			className="pt-16 lg:pt-28 px-[7%] pb-6">
			<h2 className="text-2xl lg:text-4xl font-bold text-center mb-8">
				<span className="text-primary">Menu</span> Kami
			</h2>
			<p className="text-center max-w-lg mx-auto font-extralight text-sm lg:text-base leading-6">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Aliquid, nulla totam porro neque quas earum?
			</p>
			<div className="flex flex-wrap mt-14 justify-center">
				<div className="p-4 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-5">
					<div className="rounded-full overflow-hidden">
						<Image
							src={"/img/menu.jpg"}
							width={500}
							height={500}
							alt="Menu"
						/>
					</div>
					<h3 className="text-lg font-bold mt-5">- Espresso -</h3>
					<p className="font-extralight mt-3">IDR 15K</p>
				</div>
				<div className="p-4 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-5">
					<div className="rounded-full overflow-hidden">
						<Image
							src={"/img/menu.jpg"}
							width={500}
							height={500}
							alt="Menu"
						/>
					</div>
					<h3 className="text-lg font-bold mt-5">- Espresso -</h3>
					<p className="font-extralight mt-3">IDR 15K</p>
				</div>
				<div className="p-4 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-5">
					<div className="rounded-full overflow-hidden">
						<Image
							src={"/img/menu.jpg"}
							width={500}
							height={500}
							alt="Menu"
						/>
					</div>
					<h3 className="text-lg font-bold mt-5">- Espresso -</h3>
					<p className="font-extralight mt-3">IDR 15K</p>
				</div>
				<div className="p-4 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-5">
					<div className="rounded-full overflow-hidden">
						<Image
							src={"/img/menu.jpg"}
							width={500}
							height={500}
							alt="Menu"
						/>
					</div>
					<h3 className="text-lg font-bold mt-5">- Espresso -</h3>
					<p className="font-extralight mt-3">IDR 15K</p>
				</div>
				<div className="p-4 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-5">
					<div className="rounded-full overflow-hidden">
						<Image
							src={"/img/menu.jpg"}
							width={500}
							height={500}
							alt="Menu"
						/>
					</div>
					<h3 className="text-lg font-bold mt-5">- Espresso -</h3>
					<p className="font-extralight mt-3">IDR 15K</p>
				</div>
				<div className="p-4 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-5">
					<div className="rounded-full overflow-hidden">
						<Image
							src={"/img/menu.jpg"}
							width={500}
							height={500}
							alt="Menu"
						/>
					</div>
					<h3 className="text-lg font-bold mt-5">- Espresso -</h3>
					<p className="font-extralight mt-3">IDR 15K</p>
				</div>
			</div>
		</section>
	);
}
