import { FaFacebook, FaLinkedin,  FaInstagramSquare } from "react-icons/fa";

function Footer() {
  console.log("Footer works");

  // const anchoIcono = 30;



  return (
    <footer className="footer w-full fixed bottom-0 flex justify-center items-center space-x-4 p-4 bg-gray-200">
        {/* <img src="/img/social1.png" alt="linkedin" width={anchoIcono} />
        <img src="/img/social2.png" alt="facebook" width={anchoIcono} />
        <img src="/img/social3.png" alt="instagram" width={anchoIcono} /> */}
        <a href="https://www.linkedin.com/">
          <FaLinkedin size={25}/>
        </a>
        <a href="https://www.facebook.com/?locale=es_ES">
          <FaFacebook size={25}/>
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagramSquare size={25}/>
        </a>
    </footer>
);
}

export default Footer;
