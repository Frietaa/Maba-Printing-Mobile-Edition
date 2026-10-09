import MaPrint from "/icons/headLogo.png";
import Brosur from "/images/brosur.png";
import Wa from "/icons/whatsapp.png";
import Ig from "/icons/instagram.png";
import Tiktok from "/icons/tiktok.png";
import Katalog from "/images/katalog.pdf";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-col">
        <img src={MaPrint} alt="Maba Printing" className="h-auto w-25" />
        <h3>Usaha yang dikelola 100% oleh mahasiswa🕺</h3>
        <img
          alt="Brosur"
          src={Brosur}
          className="lg:w-60 md:w-45 w-auto rounded-lg shadow-2xl"
        />
        <div className="grid grid-cols-1 gap-4">
          <button className="btn btn-soft w-full">
            <img src={Wa} alt="WhatsApp" className="h-6 w-6 mr-2" />
            <a
              href="https://wa.me/6281367406166"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pesan/tanya langsung di sini!
            </a>
          </button>
          <button className="btn btn-soft w-full">
            <img src={Ig} alt="Instagram" className="h-6 w-6 mr-2" />
            <a
              href="https://www.instagram.com/mabaprinting_ubb"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kepoin IG nya dulu bolehh
            </a>
          </button>
          <button className="btn btn-soft w-full">
            <img src={Tiktok} alt="Tiktok" className="h-6 w-6 mr-2" />
            <a
              href="https://www.tiktok.com/@mabaprinting.ubb"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scroll Tiktok sinii
            </a>
          </button>
          <button className="btn btn-soft w-full">
            <a href={Katalog} target="_blank" rel="noopener noreferrer">
              Katalog Harga
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
