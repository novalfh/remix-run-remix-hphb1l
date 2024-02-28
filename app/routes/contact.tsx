// import {Link}

// import { Link } from "@remix-run/react"
import contactStyles from '~/styles/contact.css'

let count = 0;

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <h2>my count is {count}</h2>
            <button onClick={() => {
                console.log(count)
                count += 1
            }}>add</button>
        </div>
    )
}

export default Contact;




//send it to inject root head link(alongside with meta tag)
//href from importing css from styles
export function links () {
    return ([{rel:'stylesheet', href:contactStyles}])

}

