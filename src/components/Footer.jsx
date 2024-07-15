const Footer = () => {
  const date = new Date()
  return <p className="text-sm py-2 text-center my-4"> {date.getFullYear() } | <span className="text-orange-600 font-bold cursor-pointer tracking-wide">Abdi Megersa</span></p>;
};

export default Footer;
