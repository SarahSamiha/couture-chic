
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-12 bg-primary text-primary-content">
                <aside>
                    <p className="font-bold text-3xl">
                        CoutureChic <br />
                    </p>
                    <p>Copyright © 2023 - All right reserved</p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                    <a><FaFacebook className='text-peach text-3xl'></FaFacebook>
                </a>
                <a><FaTwitter className='text-peach text-3xl'></FaTwitter></a>
                <a><FaInstagram className='text-peach text-3xl'></FaInstagram></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;