import MaPrint from "/icons/headLogo.png";
import Brosur from "/images/brosur.png";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={MaPrint} alt="Maba Printing" className="h-auto w-25" />
        <h3>Usaha yang dikelola 100% oleh mahasiswa🕺</h3>
        <img
          alt="Brosur"
          src={Brosur}
          className="lg:w-45 w-auto rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold text-center">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-soft bg-green-600 text-white w-full">
            <a
              href="https://wa.me/6281367406166"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp
            </a>
          </button>
          <button className="btn btn-soft bg-blue-600 text-white w-full">
            <a
              href="https://instagram.com/fr_3525?dlrf=cmVzcjFyZ2ZxNmwy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </button>
          <button className="btn btn-soft bg-red-600 text-white w-full">
            <a
              href="https://tiktok.com/@fr_3525"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tiktok
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
