// import type { MetaFunction } from "@remix-run/node";

// export const meta: MetaFunction = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

// export default function Index() {
//   return (
//     <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
//       <h1>Welcome to Remix</h1>
//       <ul>
//         <li>
//           <a
//             target="_blank"
//             href="https://remix.run/tutorials/blog"
//             rel="noreferrer"
//           >
//             15m Quickstart Blog Tutorial
//           </a>
//         </li>
//         <li>
//           <a
//             target="_blank"
//             href="https://remix.run/tutorials/jokes"
//             rel="noreferrer"
//           >
//             Deep Dive Jokes App Tutorial
//           </a>
//         </li>
//         <li>
//           <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
//             Remix Docsss
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }

import { Link } from "@remix-run/react"



const Index = () => {
  return (
    <>
      <Link to='/contact'>go to contact</Link>
      <br></br>
      <a href="/shop">shop</a>
      <h1>HelloWorld</h1>
    </>
  )
}


export default Index