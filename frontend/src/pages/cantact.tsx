import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

export default function Cantact() {
  return (
    <section className="Cantact">
      <div className="container">
        <div className="my-20 text-black/20">
          Home / <span className="text-black">Cantact</span>
        </div>
        <div className="content grid gap-8 max-lg:grid-cols-2 max-xl:grid-cols-3 grid-cols-4">
          <div className="col-span-1 max-lg:col-span-2 border shadow-lg mb-40 max-lg:mb-10 p-5">
            <div className="top border-b border-black pb-10">
              <div className="icon flex gap-5 items-center">
                <FiPhone className="size-12 rounded-full p-3 bg-mainColor text-white" />
                <h3 className="text-xl">Call To Us</h3>
              </div>
              <p className="my-5">We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
            <div className="bottom pb-6 pt-10">
              <div className="icon flex gap-5 items-center">
                <MdOutlineEmail className="size-12 rounded-full p-3 bg-mainColor text-white" />
                <h3 className="text-xl">Call To Us</h3>
              </div>
              <p className="my-7">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="mb-5">Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
          <div className=" col-span-3 max-xl:col-span-2 flex-col flex border shadow-lg mb-40 max-lg:mb-10 py-10 px-7">
            <div className="inputs flex gap-5 max-sm:flex-col">
              <input
                className="col-span-1 w-full bg-black/5 py-4 placeholder:text-lg px-4"
                required
                placeholder="Your Name"
                type="text"
              />
              <input
                className="col-span-1 w-full bg-black/5 py-4 placeholder:text-lg px-4"
                required
                placeholder="Your Email"
                type="email"
              />
              <input
                className="col-span-1 w-full bg-black/5 py-4 placeholder:text-lg px-4"
                required
                placeholder="Your Phone"
                type="number"
              />
            </div>
            <textarea
              className="bg-black/5 py-4 px-4 mt-5 h-[250px] w-full placeholder:text-lg"
              placeholder="Your Massage"
            ></textarea>
            <button className="py-4 h-14 max-sm:w-full w-48 self-end bg-mainColor text-white rounded-md mt-5">
              Send Massage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
