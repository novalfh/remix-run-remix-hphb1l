// import {Link}

// import { Link } from "@remix-run/react"
import contactStyles from '~/styles/contact.css'

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
        </div>
    )
}

export default Contact




//send it to replace root head link(alongside with meta tag)
//href from importing css from styles
export function links () {
    return ([{rel:'stylesheet', href:contactStyles}])

}

