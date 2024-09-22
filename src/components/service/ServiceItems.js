import { TokyoContext } from "@/src/Context";
import { useContext } from "react";

const services = [
  {
    id: 1,
    name: "Web Development Services",
    text: [
      "Welcome to my Web and E-commerce Development Hub! Specializing in crafting robust, user-friendly online stores using the MERN Stack, I seamlessly customize themes, integrate payment gateways, and optimize product catalogs. Explore my portfolio for successful projects, showcasing my commitment to high-quality and visually appealing solutions. As a proficient MERN stack developer, I leverage MongoDB, Express.js, React.js, and Node.js to create compelling web applications. Let's collaborate to transform your digital presence into a dynamic reality.",
      // "In content management, I bring expertise to WordPress development, tailoring websites for personal blogs, business sites, or e-commerce. Committed to delivering user-friendly and visually compelling online presence, my proficiency ensures a dynamic and customized approach. Let's collaborate for a digital space that resonates and achieves your online objectives.",
      // "That’s why more companies are not only reevaluating their website’s design but also partnering with Kryptic Hash, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
    // image: "assets/img/news/Jay.jpg",
    video: "assets/img/news/web.mp4",
  },
  {
    id: 2,
    name: "WordPress Development",
    text: [
      "Passionate WordPress developer skilled in custom theme creation, plugin development, and e-commerce solutions using WooCommerce. With a focus on responsive design and performance optimization, I bring expertise to WordPress development. Proficient in HTML, CSS, JavaScript, and SQL, I leverage the latest WordPress technologies for seamless development. Let's collaborate to transform your ideas into visually appealing and functional WordPress websites. Explore my portfolio for a glimpse into my expertise.",
      // "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      // "That’s why more companies are not only reevaluating their website’s design but also partnering with Kryptic Hash, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
    image: "assets/img/news/wordpress.png",
  },
  // {
  //   id: 3,
  //   name: "eCommerce Development",
  //   text: [
  //     "Dedicated to e-commerce development, I specialize in creating robust and user-friendly online stores using WordPress and MERN Stack. From customizing themes to integrating payment gateways. My expertise includes optimizing product catalogs, ensuring responsive design, and enhancing overall performance for a seamless shopping experience. Let's transform your e-commerce vision into reality—explore my portfolio for successful online store projects that showcase my commitment to delivering high-quality and visually appealing e-commerce solutions.",
  //     // "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
  //     // "That’s why more companies are not only reevaluating their website’s design but also partnering with Kryptic Hash, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
  //   ],
  //   image: "assets/img/news/ecom.png",
  // },
  {
    id: 3,
    name: "Graphic Design Services",
    text: [
      "With a passion for Graphic Design, I bring creativity to life with captivating visual stories that go beyond the ordinary. Specializing in affordable design solutions, I offer expertly crafted logos, eye-catching banners, professional business cards, and compelling book covers. Elevate your brand, promote with flair, and publish with visual allure—all without breaking the bank. Discover a world of designs that make a lasting impression, where affordability meets excellence in every pixel."
      // "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      // "That’s why more companies are not only reevaluating their website’s design but also partnering with Kryptic Hash, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
    image: "assets/img/news/gd.png",
  },
];
const ServiceItems = () => {
  const { setServiceModal, modalToggle, modal } = useContext(TokyoContext);
  return (
    <div className="list w-full h-auto clear-both float-left">
      <ul className="ml-[-40px] list-none flex flex-wrap">
        {services.map((service) => (
          <li className="mb-[40px] w-1/3 pl-[40px]" key={service.id}>
            <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
              <span className="number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300">
                {service.id <= 9 ? `0${service.id}` : service.id}
              </span>
              <h3 className="title font-bold text-black text-[18px] mb-[15px]">{service.name}</h3>
              <p className="text">{service.text[0].slice(0, 70)}...</p>
              <div className="tokyo_tm_read_more">
                <a
                  href="#"
                  onClick={() => {
                    modalToggle(true);
                    setServiceModal(service);
                  }}
                >
                  <span>Read More</span>
                </a>
              </div>
              <a
                className="tokyo_tm_full_link"
                href="#"
                onClick={() => {
                  modalToggle(true);
                  setServiceModal(service);
                }}
              />
              {/* Service Popup Start */}
              <img className="popup_service_image opacity-0 invisible hidden absolute z-[-111]" src={service.image} alt="image" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ServiceItems;



