const Header = () => {
  return (
    <header className="flex justify-between pt-8 px-5 md:px-50 shadow">
      <div className="flex items-center gap-7">
        <img src="/images/logo.svg" alt="logo" className="pb-7" />
        {/* nalinks */}
        <nav>
          <ul className="hidden md:flex items-end gap-3">
            {["Collections", "Men", "Women", "About", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="block min-w-20 text-center font-semibold text-base tracking-wider border-b-[3px] border-transparent hover:border-(--primary) pb-5 text-(--grayish-blue) hover:text-(--dark-blue) capitalize transition-all duration-200 ease-in-out"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* <!-- cart and profile --> */}
      <div className="flex items-center gap-5 md:gap-10 pb-7">
        <img
          src="/images/icon-cart.svg"
          alt=""
          className="cursor-pointer"
          loading="lazy"
        />

        <div className="">
          <img
            src="/images/image-avatar.png"
            alt="avatar"
            className="w-12 h-12 border-2 border-transparent hover:border-(--primary) cursor-pointer rounded-full transition-all duration-100 ease-in"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
