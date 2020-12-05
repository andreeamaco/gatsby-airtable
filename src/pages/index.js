import React from "react"
import AirtableForm from './Form'
import FormFetch from './FormFetch'
import FormAxios from './FormAxios'


export default function Home() {
  return <div>
     <AirtableForm 
      formName="Gated content - TEST"
      redirectPage=" "
      buttonText="Download for free"
      buttonLink=" "
      checkboxText="By checking this box, you agree to be contacted by us when we publish similar content." 
    />
    <FormFetch
      formName="Gated content - TEST"
      redirectPage=" "
      buttonText="Download for free"
      buttonLink=" "
      checkboxText="By checking this box, you agree to be contacted by us when we publish similar content." 
    />
    <FormAxios
      formName="Gated content - TEST"
      redirectPage=" "
      buttonText="Download for free"
      buttonLink=" "
      checkboxText="By checking this box, you agree to be contacted by us when we publish similar content." 
    />
  </div>
}
