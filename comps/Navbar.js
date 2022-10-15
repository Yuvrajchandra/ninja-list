import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png"

const Navbar = () => {
    return (  
        <nav>
            <div className="logo">
                <Image src={logo} width={128} height={77} alt="" />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="about"><a>About</a></Link>
            <Link href="ninjas"><a>Ninja Listing</a></Link>
        </nav>
    );
}
 
export default Navbar;