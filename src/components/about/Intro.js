import { Fragment } from "react";
const Intro = () => {
  return (
    <Fragment>
      {/* IMAGE */}
      {/* <div className="top_author_image w-full h-auto clear-both float-left relative mb-[35px]">
        <img className="min-w-full" src="assets/img/slider/1.jpg" alt="image" />
      </div> */}
      <div className="about_title w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
        <h3 className="text-[22px] font-bold">Jay Lunagariya</h3>
        <span>MERN Stack Developer</span>
      </div>
      <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
        <p className="mb-[11px]">
          I am a skilled MERN stack developer with a passion for creating dynamic and responsive web applications using MongoDB, Express.js, React.js, and Node.js. Additionally, I specialize in crafting websites with WordPress and Bootstrap, offering a diverse range of development services to bring your ideas to life. My expertise spans both cutting-edge MERN stack technologies and established platforms, ensuring versatile solutions for your project.
        </p>
        <p>I excel in proactive customer engagement, ensuring a client-centric approach throughout the development lifecycle. My commitment to professionalism involves consistently exceeding customer expectations.</p>
      </div>
      <div className="tokyo_tm_short_info w-full h-auto clear-both float-left flex border-solid border-[#DFDFDF] border-b pb-[30px] mb-[40px]">
        <div className="left w-1/2 pr-[50px]">
          <div className="tokyo_tm_info w-full h-auto clear-both float-left">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Birthday:</span>
                <span>01-15-2002</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Age:</span>
                <span>22</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Address:</span>
                <span>Surat, Gujarat</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Email:</span>
                <span>
                  <a className="text-[#767676] transition-all duration-300 hover:text-black" href="mailto:jaylunagariya7@gmail.com">
                    jaylunagariya7@gmail.com
                  </a>
                </span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Phone:</span>
                <span>
                  <a className="text-[#767676] transition-all duration-300 hover:text-black" href="tel:+91 97237 42715">
                    +91 97237 42715
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right w-1/2 pl-[50px]">
          <div className="tokyo_tm_info">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Nationality:</span>
                <span>Indian</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Study:</span>
                <span>Gujarat Technological University</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Degree:</span>
                <span>Bachelor's in Computer Engineering</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Interest:</span>
                <span>Reading Books</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Freelance:</span>
                <span>Available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tokyo_tm_button" data-position="left">
        <a href="assets/img/cv/Jay_Lunagariya.pdf" download>
          <span>Download CV</span>
        </a>
      </div>
    </Fragment>
  );
};
export default Intro;


