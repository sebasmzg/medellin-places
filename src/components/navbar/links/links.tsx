import Link from "next/link"
import path from "path"

const Links = ()=> {
    const links = [
        { title: 'Home',
            path: '/'
        },
        { title: 'About',
            path: '/about'
        },
        { title: 'Contact',
            path: '/contact'
        },
        { title: 'Blog',
            path: '/blog'
        },
    ]
    return (
        <div>
            {links.map((link=>{
               return <Link href={link.path} key={link.title}>{link.title}</Link>
            }))}
        </div>
    )
}

export default Links