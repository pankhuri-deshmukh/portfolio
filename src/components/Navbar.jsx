import React from 'react'
import {Link} from 'react-scroll'

const Navbar = () => {

  return (
    <>
    <header className="navbar h-[100px] px-[25px] md:px-[40px] lg:px-[50px] flex justify-between items-center text-theme-lightest-slate font-sfMonoRegular z-[100]">
			<nav className="w-full  flex flex-row justify-between items-center">
				<div className="my-auto cursor-pointer min-w-[43px]  ">
					<Link to="hero" spy={true} smooth={true} offset={0} duration={500} className="my-auto cursor-pointer min-w-[43px]  ">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
							<text fill="#64FFDA" fontFamily="Calibre-Medium, Calibre" fontSize="50" fontWeight="400" letterSpacing="4.167" opacity="1" transform="translate(36 33)">
								<tspan x="0.142" y="33">
									S
								</tspan>
							</text>
							<path
								initial="initial"
								animate="end"
								stroke="#64FFDA"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="5"
								d="M50 5L11 27v45l39 23 39-22V28z"></path>
						</svg>
					</Link>
				</div>
				<div className="hidden sm:flex flex-row text-[13px] " initial="initial" animate="end" >
					<div className="p-[10px]" >
						<Link to="about" spy={true} smooth={true} offset={0} duration={500} className="  font-poppins mx-1 cursor-pointer hover:text-theme-green">
							About
						</Link>
					</div>
					<div className="p-[10px]" >
						<Link to="skills" spy={true} smooth={true} offset={0} duration={500} className="  font-poppins mx-1 cursor-pointer hover:text-theme-green">
							Skills
						</Link>
					</div>
					<div className="p-[10px]" >
						<Link to="projects" spy={true} smooth={true} offset={0} duration={500} className="  font-poppins mx-1 cursor-pointer hover:text-theme-green">
							Projects
						</Link>
					</div>
					<div className="p-[10px]" >
						<Link to="contact" spy={true} smooth={true} offset={0} duration={500} className="  font-poppins mx-1 cursor-pointer hover:text-theme-green">
							Contact
						</Link>
					</div>
					<div className="resume ml-4  border border-theme-green hover:bg-theme-green/10 cursor-pointer rounded flex items-center text-theme-green" >
						<a target="_blank" href="#" rel="noreferrer" className="px-[16px] py-[12px] line">
							Resume
						</a>
					</div>
				</div>

				
				<button className="menuBtn sm:hidden">
					<div className="ham-box">
						<div className="ham-box-inner"></div>
					</div>
				</button>

				<aside>
					<div className="flex-row text-[16px] ">
						<Link
							to="about"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							className="p-[10px] flex flex-col justify-center  items-center font-poppins mx-1 cursor-pointer hover:text-theme-green">
							<div className="mb-2 mt-1">About</div>
						</Link>
						<Link
							to="skills"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							className="p-[10px] flex flex-col justify-center  items-center  font-poppins mx-1 cursor-pointer hover:text-theme-green">
							<div className="mb-2 mt-1">Skills</div>
						</Link>
						<Link
							to="projects"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							className="p-[10px] flex flex-col justify-center  items-center  font-poppins mx-1 cursor-pointer hover:text-theme-green">
							<div className="mb-2 mt-1">Projects</div>
						</Link>
						<Link
							to="contact"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							className="p-[10px] flex flex-col justify-center  items-center  font-poppins mx-1 cursor-pointer hover:text-theme-green">
							<div className="mb-2 mt-1">Contact</div>
						</Link>
						<div className="  mt-9 border border-theme-green rounded flex  items-center text-theme-green">
							<a target="_blank" href="#" rel="noreferrer" className="px-[50px] py-[18px] line">
								Resume
							</a>
						</div>
					</div>
				</aside>
			</nav>
		</header>
        </>
	);
}

export default Navbar