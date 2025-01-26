import { IoLocationOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="grid xl:grid-cols-5 lg:grid-cols-3 gap-[24px] md:grid-cols-3 w-full">
      <div className="col-span-1 flex flex-col gap-[20px]">
        <h5 className="text-text">Company Info</h5>
        <div className="flex flex-col gap-[10px]">
          <h6 className="text-secondText">About Us</h6>
          <h6 className="text-secondText">Carrier</h6>
          <h6 className="text-secondText">We are hiring</h6>
          <h6 className="text-secondText">Blog</h6>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-[20px]">
        <h5 className="text-text">Legal</h5>
        <div className="flex flex-col gap-[10px]">
          <h6 className="text-secondText">About Us</h6>
          <h6 className="text-secondText">Carrier</h6>
          <h6 className="text-secondText">We are hiring</h6>
          <h6 className="text-secondText">Blog</h6>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-[20px]">
        <h5 className="text-text">Features</h5>
        <div className="flex flex-col gap-[10px]">
          <h6 className="text-secondText">Business Marketing</h6>
          <h6 className="text-secondText">User Analytic</h6>
          <h6 className="text-secondText">Live Chat</h6>
          <h6 className="text-secondText">Unlimited Support</h6>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-[20px]">
        <h5 className="text-text">Resources</h5>
        <div className="flex flex-col gap-[10px]">
          <h6 className="text-secondText">IOS & Android</h6>
          <h6 className="text-secondText">Watch a Demo</h6>
          <h6 className="text-secondText">Customers</h6>
          <h6 className="text-secondText">API</h6>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-[20px]">
        <h5 className="text-text">Get In Touch</h5>
        <div className="flex flex-col gap-[10px]">
          <span className="flex items-center gap-2">
            <FiPhone className="text-primary text-[24px]" />
            <h6 className="text-secondText">(480) 555-0103</h6>
          </span>
          <span className="flex items-center gap-2">
            <IoLocationOutline className="text-primary text-[32px]" />
            <h6 className="text-secondText">
              4517 Washington Ave. Manchester, Kentucky 39495
            </h6>
          </span>
          <span className="flex items-center gap-2">
            <IoIosMail className="text-primary text-[24px]" />
            <h6 className="text-secondText">debra.holt@example.com</h6>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
