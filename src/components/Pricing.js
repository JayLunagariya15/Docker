const Pricing = () => {

  return (
    <div className="tokyo_tm_pricing w-full h-auto clear-both float-left px-[0px] pt-[100px] pb-[60px] bg-white"  >
      <div className="container">
        <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
          <h3 className="text-[20px] font-bold">Pricing</h3>
        </div>
        <div className="list w-full h-auto clear-both float-left">
          <ul className="ml-[-40px]">
            <li className="mb-[40px] pl-[40px] w-1/3 float-left">
              <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border px-[40px] pt-[27px] pb-[45px]">
                <div className="price w-full float-left">
                  <h3 className="text-[40px] font-semibold">
                    {/* <span>
                      0<span className="currency">$</span>
                    </span> */}
                  </h3>
                </div>
                <div className="plan w-full float-left">
                  <h3 className="font-semibold text-[20px] border-solid border-[rgba(0,0,0,.1)] border-b mb-[20px] pb-[20px]">
                    Basic
                  </h3>
                </div>
                <ul className="item list-none">
                  <li className="active">
                    <span className="bullet"></span>
                    <p> &#8226; Up to 5 Pages (Home, About, Services, Contact, Blog)</p>
                  </li>
                  <li className="active">
                    <p>&#8226; Responsive Design with mobile optimization</p>
                  </li>
                  <li className="active">
                    <p>&#8226; Photo gallery</p>
                  </li>
                  <li className="active">
                    <p>&#8226; Video gallery</p>
                  </li>
                  <li className="active">
                    <p>&#8226; Basic SEO Setup</p>
                  </li>
                </ul>
                <div className="tokyo_tm_button" data-position="left">
                  <a href="https://wa.me/919723742715" target="_blank" rel="noopener noreferrer">
                    <span>Purchase</span>
                  </a>
                </div>
              </div>
            </li>
            <li className="mb-[40px] pl-[40px] w-1/3 float-left">
              <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border px-[40px] pt-[27px] pb-[45px]">
                <div className="price w-full float-left">
                  <h3 className="text-[40px] font-semibold">
                    {/* <span>
                      30<span className="currency">$</span>
                    </span> */}
                  </h3>
                </div>
                <div className="plan w-full float-left">
                  <h3 className="font-semibold text-[20px] border-solid border-[rgba(0,0,0,.1)] border-b mb-[20px] pb-[20px]">
                    Standard
                  </h3>
                </div>
                <ul className="item list-none">
                  <li className="active">
                    <p>&#8226; Everything in the Basic Package</p>
                  </li>
                  <li className="active">
                    <span className="bullet"></span>
                    <p> &#8226; Up To 7-12 Pages</p>
                  </li>
                  <li className="active">
                    <p>&#8226; Social Media Integration</p>
                  </li>
                  <li className="active">
                    <p>&#8226; Custom Theme Development</p>
                  </li>
                  <li className="active">
                    <p>&#8226; E-commerce Setup (up to 10 products)</p>
                  </li>
                </ul>
                <div className="tokyo_tm_button" data-position="left">
                  <a href="https://wa.me/919723742715" target="_blank" rel="noopener noreferrer">
                    <span>Purchase</span>
                  </a>
                </div>
                <span className="popular absolute inline-block bg-black text-white text-[13px] px-[20px] pb-[3px] pt-0 top-[-17px] right-[10px]">
                  Popular
                </span>
              </div>
            </li>
            <li className="mb-[40px] pl-[40px] w-1/3 float-left">
              <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border px-[40px] pt-[27px] pb-[45px]">
                <div className="price w-full float-left">
                  <h3 className="text-[40px] font-semibold">
                    {/* <span>
                      70<span className="currency">$</span>
                    </span> */}
                  </h3>
                </div>
                <div className="plan w-full float-left">
                  <h3 className="font-semibold text-[20px] border-solid border-[rgba(0,0,0,.1)] border-b mb-[20px] pb-[20px]">
                    Premium
                  </h3>
                </div>
                <ul className="item list-none">
                  <li className="active">
                    <p>&#8226; Everything in the Standard Package</p>
                  </li>
                  <li className="active">
                    <p>&#8226; Advanced Custom Theme Development</p>
                  </li>
                  <li className="active">
                    <p>&#8226; Blog Setup with Customized Layout</p>
                  </li>
                  <li className="active">
                    <p>&#8226; Priority Support for 3 Months After Launch</p>
                  </li>
                </ul>
                <div className="tokyo_tm_button" data-position="left">
                  <a href="https://wa.me/919723742715" target="_blank" rel="noopener noreferrer">
                    <span>Purchase</span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Pricing;