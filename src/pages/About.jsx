const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              <a href="https://github.com/Gouravlalotra15/Wermins-Store">
                {" "}
                @Wermin.yu
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        At Wermin-store, I believe in the power of seamless shopping
        experiences. My mission is to simplify your online shopping journey,
        bringing you the latest trends and must-have items right to your
        fingertips. Whether you're a fashion enthusiast, a tech geek, or someone
        seeking unique home decor, we have something special just for you.
      </p>
    </>
  );
};
export default About;
