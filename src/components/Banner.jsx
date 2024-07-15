const ProfileImg = "https://i.postimg.cc/TP5dJzJN/myimgsmall.jpg";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <img
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src={ProfileImg}
          width={100}
          height={100}
          alt="ProfileImg"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start    gap-2">
        <h1 className="text-5xl font-bold text-white">Abdi Megersa</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          Web Developer
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
        I'm a passionate web developer specializing in front-end development. 
        I bring websites and applications to life using JavaScript and a keen eye for user experience.
        </p>
      </div>
    </div>
  );
};

export default Banner;
