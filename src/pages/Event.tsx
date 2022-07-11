import { Sidebar } from "../componentes/Sidebar"
import { Header } from "../componentes/Header"
import { Video } from "../componentes/Video"
import { useParams } from "react-router-dom"
import { ArrowRight } from "phosphor-react"

export function Event () {

    const { slug } = useParams<{ slug:string }>()
    

    return (

        <div className="flex flex-col min-h-screen">
            
            <Header />

            <main className="flex flex-1">
               
                {slug ? 
                    <Video lessonSlug={slug} />
                     : <div className="flex-1  text-2xl text-zinc-200 text-opacity-30   hover:mix-blend-hard-light font-bold flex 
                     gap-2 items-center justify-center " >Clique em uma aula <ArrowRight size={32}/></div>  }               
                

                <Sidebar /> 
                
            </main>
                       
        </div>    
    )        
}