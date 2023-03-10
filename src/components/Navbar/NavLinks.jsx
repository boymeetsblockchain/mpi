import React, { useEffect, useState } from 'react'

function NavLinks() {
    const [clickedLink, setClickedLink] = useState(null);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const links = [
        {
            name: 'About',
            submenu: true,
            sublink: [
                { name: 'Meet MPI Unlimited',link:'/meetmpiunlimited' },
                { name: 'meet the founders',link:'/meetthefounder' },
            ],
        },
        {
            name: 'What is MPI?',
            submenu: true,
            sublink: [
                { name: ' Intro to MPI',link:'/introtompi' },
                { name: ' MPI Calculator', link: '/mpicalculator'},
                { name: 'MPI Video Series' },
                { name: 'MPI Books',link:'/mpibook' },
            ],
        },
        {
            name: 'FAQs',
            submenu: true,
            sublink: [
                { name: 'Frequently asked Question' },
                { name: 'Side By Side Comparisons' },
                { name: 'MPI Plan Options' },
            ],
        },
    ];

    const handleLinkClick = (link) => {
        if (clickedLink === link.name){
            setClickedLink(null)
        }
        else {
            setClickedLink(link.name)
        }
    }

  return (
    <>
    {
        links.map(link=>(
                <div className='px-3 text-left md:cursor-pointer group' key={link.name}>
                <h1 className='py-7 text-semibold cursor-pointer' onClick={() => handleLinkClick(link)}>{link.name}</h1>
                    <div className='hidden md:block'>
                    {link.submenu && (
                        <div className='absolute top-10 group-hover:block hover:block hover:md:block hidden'>
                            <div className="py-3">
                                <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                            </div>
                            <div className='bg-white p-3.5'>
                                <div className='' onClick={() => link.submenu = false}>
                                    {link.sublink.map((mysublinks) => (
                                        <div className='bg-gray-100 hover:bg-gray-200 text-center flex flex-col px-3' key={mysublinks.name}>
                                            <h1 className='text-sm hover:text-yellow-500 my-2.5' on><a href={mysublinks.link}>{mysublinks.name}</a></h1>
                                            
                                            <hr />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                    <div className='md:hidden '>
                    {clickedLink === link.name && link.submenu && (
                        <div className="bg-white p-3.5">
                            {link.sublink.map((mysublinks) => (
                                <div className="bg-gray-100 hover:bg-gray-200 text-center flex flex-col px-3 cursor-pointer" key={mysublinks.name}>
                                    <h1 className="text-sm hover:text-yellow-500 my-2.5"><a href={mysublinks.link}>{mysublinks.name}</a></h1>
                                    <hr />
                                </div>
                            ))}
                        </div>
                    )}
                    </div>
                </div>
        ))

    }
   {
    
   }
    </>
  )
}

export default NavLinks