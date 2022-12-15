
import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const ShowContext = createContext()
function ShowContextProvider({children}) {

    const [show, setShow] = useState(false)
    const [isAuth,setIsAuth]=useState(false)

    const [formValue1,setFormValue1] =useState( {email:"",city:"",fullname:"",contact:"",option1:"",option2:"",date:"",image1:"",duration:"",cost:"",place:""});
    const [formValue2,setFormValue2] =useState( {image:"",duration:"",cost:"",place:""});


    const fillForm1=(form)=>{
      setFormValue1({
       email:form.email,
       city:form.city,
       fullname:form.fullname,
       contact:form.contact,
       option1:form.option1,
       option2:form.option2,
       date:form.date,
      })
     }
     const fillForm2=(form)=>{
       setFormValue2({
           image:form.img,
        days:form.days,
        cost:form.cost,
        place:form.days
       })
      }

  return (
    <ShowContext.Provider value={{show,setShow,formValue1,fillForm1,formValue2,fillForm2,isAuth,setIsAuth}}>

        {children}
    </ShowContext.Provider>
  )
}

export default ShowContextProvider

