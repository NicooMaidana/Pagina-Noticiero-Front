import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { TiLocation } from 'react-icons/ti';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-black pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-center lg:text-left">
                    <div className="w-full lg:w-4/12 px-4">
                        <span className="block uppercase text-white text-md font-semibold mb-2">INFORMACION</span>
                        <ul className="list-unstyled">
                            <li className="flex items-center mb-2 justify-center lg:justify-start text-white hover:text-slate-500">
                                <TiLocation className="mr-2" />
                                <a className="font-semibold text-sm" href="https://www.google.com/maps/place/Canal+50+CoopMorteros/@-30.714292,-62.0203647,19.62z/data=!4m6!3m5!1s0x943503fb9a8bf663:0xb7b9f18cb37de841!8m2!3d-30.7140903!4d-62.0199394!16s%2Fg%2F11gm9r65d2?entry=tts" target='_blank'>Fleming esq. Eva Perón, Morteros-Cba</a>
                            </li>
                            <li className="flex items-center mb-2 justify-center lg:justify-start text-white hover:text-slate-500">
                                <FaPhoneAlt className="mr-2" />
                                <span className="font-semibold text-sm">03562 - 15411929</span>
                            </li>
                            <li className="flex items-center mb-2 justify-center lg:justify-start text-white hover:text-slate-500">
                                <MdEmail className="mr-2" />
                                <a className="font-semibold text-sm" href="mailto:prensa@coopmorteros.coop">prensa@coopmorteros.coop</a>
                            </li>
                        </ul>
                        <div className="mt-6 lg:mb-0 mb-6 flex justify-center lg:justify-start sm:text-center">
                            <a href="https://www.facebook.com/C50Morteros/" className="text-white hover:text-slate-500 transition-transform duration-300 hover:scale-125 mx-2" target='_blank'>
                                <FaFacebook size="1.5em" />
                            </a>
                            <a href="https://www.linkedin.com/company/coopmorteros/?originalSubdomain=es" className="text-white hover:text-slate-500 transition-transform duration-300 hover:scale-125 mx-2" target='_blank'>
                                <FaLinkedin size="1.5em" />
                            </a>
                            <a href="https://www.instagram.com/c50morteros/" className="text-white hover:text-slate-500 transition-transform duration-300 hover:scale-125 mx-2" target='_blank'>
                                <FaInstagram size="1.5em" />
                            </a>
                            <a href="https://api.whatsapp.com/send/?phone=5403562411929&text&type=phone_number&app_absent=0" className="text-white hover:text-slate-500 transition-transform duration-300 hover:scale-125 mx-2" target='_blank'>
                                <FaWhatsapp size="1.5em" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCL8QBS3tBoD-bgWuxDph2eQ" className="text-white hover:text-slate-500 transition-transform duration-300 hover:scale-125 mx-2" target='_blank'>
                                <FaYoutube size="1.5em" />
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-8/12 px-4 text-center lg:text-right">
                        <div className="flex flex-wrap items-top mb-6 justify-center lg:justify-end">
                            <div className="w-full lg:w-3/5 px-4 hidden md:block text-center">
                                <span className="block uppercase text-white text-md font-semibold mb-2">LO MÁS BUSCADO</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link
                                            className="text-white hover:text-slate-500 font-semibold block pb-2 text-sm transition-transform duration-300 hover:scale-105"
                                            to="/Sociales"
                                        >
                                            Sociales
                                        </Link>
                                    </li>
                                    <li>
                                    <Link
                                            className="text-white hover:text-slate-500 font-semibold block pb-2 text-sm transition-transform duration-300 hover:scale-105"
                                            to="/Policiales"
                                        >
                                            Policiales
                                        </Link>
                                    </li>
                                    <li>
                                    <Link
                                            className="text-white hover:text-slate-500 font-semibold block pb-2 text-sm transition-transform duration-300 hover:scale-105"
                                            to="/Deportes"
                                        >
                                            Deportes
                                        </Link>
                                    </li>
                                    <li>
                                    <Link
                                            className="text-white hover:text-slate-500 font-semibold block pb-2 text-sm transition-transform duration-300 hover:scale-105"
                                            to="/Salud"
                                        >
                                            Salud
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-white text-md font-semibold mb-2 text-center">SITIOS</span>
                                <ul className="flex space-x-4 justify-center lg:justify-end">
                                    <li>
                                        <a href="https://www.coopmorteros.com/" target="_blank">
                                            <img src="src/assets/img/logocoop.png" alt="logo coop" className="h-28 w-28 sm:h-20 sm:w-20 object-contain transition-transform duration-300 hover:scale-110" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://app.coopmorteros.coop/" target="_blank">
                                            <img src="src/assets/img/logooficinavirtual.png" alt="logo oficina virtual" className="h-28 w-28 sm:h-20 sm:w-20 object-contain transition-transform duration-300 hover:scale-110" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://sabores.coopmorteros.coop/" target="_blank">
                                            <img src="src/assets/img/logosabores.png" alt="logo sabores" className="h-28 w-28 sm:h-20 sm:w-20 object-contain transition-transform duration-300 hover:scale-110" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                        <div className="text-xs text-white py-1">
                            Todos los Derechos Reservados Copyright © IT & Development - <a href="https://www.coopmorteros.com/" className="text-white hover:text-slate-500">COOPMORTEROS 2023</a>.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

