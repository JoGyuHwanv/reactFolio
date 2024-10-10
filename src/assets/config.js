const size = {
	mobile: "720px",
	tablet: "1024px",
	laptop: "1280px",
	pc: "1300px",
};

const config = {
	mainColor: "#ffb400",

	mobile: `(max-width: ${size.mobile})`,
	tablet: `(max-width: ${size.tablet})`,
	laptop: `(max-width: ${size.laptop})`,
	pc: `(min-width: ${size.pc})`,
};

export default config;