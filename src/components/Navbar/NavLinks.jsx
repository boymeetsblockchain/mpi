import React from 'react'

function NavLinks() {
    const links =[
        {name:'About',submenu:true, sublink:[{name:'Meet MPI Unlimited'},{
            name:"meet the founders"
        }]},
        {name:'What is MPI?',submenu:true, sublink:[{name:' Intro to MPI'},{
            name:"MPI Video Series"
        },{name:"MPI Books"}]},
        {name:'FAQs',submenu:true, sublink:[
            {name:"Frequently asked Question"},
            {name:"Side By Side Comparisons"},
            {name:"MPI Plan Options"}
        ]},
    ]
  return (
    <>
    {
        links.map(link=>(
            <div>
                <div className='px-3 text-left md:cursor-pointer group'>
                    <h1 className='py-7 text-semibold'>{link.name}</h1>
                    {
                     link.submenu && (
                        <div className='absolute top-10 hidden group-hover:block hover:block hover:md:block'>
                            <div className="py-3">
                                <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                            </div>
                            <div className='bg-white p-3.5'>
                                <div>
                                   {link.sublink.map((mysublinks)=>(
                                    <div className='bg-gray-100 text-center flex flex-col px-3'>
                                        <h1 className='text-sm hover:text-yellow-500 my-2.5'>{mysublinks.name}</h1>
                                        <hr />
                                    </div>
                                   ))}
                                </div>
                            </div>
                        </div>
                     )
                    }
                </div>
            </div>
        ))
    }
    </>
  )
}

export default NavLinks