import { useEffect, useState } from "react"

export const useResize = (value) => {
   const [isPhone, setIsPhone] = useState(
      window.innerWidth < value ? true : false
   )

   const handleResize = () => {
      if (window.innerWidth < value) setIsPhone(true)
      else setIsPhone(false)
   }

   useEffect(() => {
      handleResize()
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
   }, [])

   return { isPhone }
}