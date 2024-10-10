import mainImg from "../assets/image/codingImg2.webp";

const size = {
	mobile: "720px",
	tablet: "1023px",
	laptop: "1280px",
};

const config = {
	mainColor: "#ffb400",

	mobile: `(max-width: ${size.mobile})`,
	tablet: `(max-width: ${size.tablet})`,
	laptop: `(max-width: ${size.laptop})`,

	mainImg: mainImg,
};

export default config;