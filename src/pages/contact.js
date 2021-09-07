import * as React from "react"
// import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
// import Seo from "../components/seo"
import contact_info from "../../site/settings/contact_info.json"

const Contact=()=>{
    return(
        <>
 
        <h2>Phone Number:{contact_info.phone}</h2>
     
        </>
    )
}
export default Contact