import { createClient } from 'contentful'
import { useEffect, useState } from 'react'

const client = createClient({
   space: 'fh8jsk760dsd',
   accessToken: import.meta.env.VITE_API_KEY,
})

const useFetchProjects = () => {
   const [loading, isLoading] = useState(true)
   const [projects, setProjects] = useState([])

   const getProjects = async () => {
      try {
         const response = await client.getEntries({ content_type: 'projects' })
         const data = response.items.map((item) => {
            const { sys, fields } = item
            return {
               id: sys.id,
               title: fields.title,
               url: fields.url,
               image: fields.image.fields.file.url,
            }
         })
         setProjects(data)
         isLoading(false)
      } catch (error) {
         console.log(error)
         isLoading(false)
      }
   }

   useEffect(() => {
      getProjects()
   }, [])

   return { loading, projects }
}

export default useFetchProjects
