export default function Hero() {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center bg-[url('/img/header-bg.jpg')] bg-cover bg-no-repeat bg-center relative after:content-[''] after:block after:absolute after:w-full after:h-1/6 after:bottom-0 after:bg-gradient-to-t after:from-[#010101] after:from-50% after:to-white/0">
			<main className="py-6 px-[7%] w-full sm:max-w-lg md:max-w-xl lg:max-w-3xl">
				<h1 className="capitalize text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md">
					Mari nikmati secangkir{" "}
					<span className="text-primary capitalize">kopi</span>
				</h1>
				<p className="text-sm sm:text-base lg:text-lg my-4 font-extralight mix-blend-difference">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Cumque, officiis!
				</p>
				<a
					href="#"
					className="text-lg bg-primary inline-block px-6 py-3 rounded-md shadow-lg shadow-black/30 hover:bg-opacity-90 backdrop-blur transition">
					Beli Sekarang
				</a>
			</main>
		</section>
	);
}
