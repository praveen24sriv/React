import { useState } from "react";

const Section =({title,description,isVisible ,setIsVisible})=>{
    
    return (
        <div className="border border-black p-2 m-2">
        <h3 className="text-2xl font-bold">
            {title}
        </h3>
        {
            isVisible? 
            <button className="cursor-pointer underline" onClick={()=>{setIsVisible(false)}}>
                Hide 
                </button>
            :
            <button className="cursor-pointer underline" onClick={()=>{setIsVisible(true)}}>
                Show 
                </button>
        }
        
       
        {isVisible && <p>{description}</p>}
        </div>

    )
}




const Grocery=()=>{
    const [VisibleConfig ,setVisibleConfig] = useState("press");
    return(
        <div>
            <h1 className="text-3xl font-bold p-2 m-2 ">INSTAMART</h1>
            <Section
            
            title ={"About Instamart"}

             description={"here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}
             isVisible={VisibleConfig==="about"}
             setIsVisible={()=>{setVisibleConfig(VisibleConfig === "about" ? null : "about")}

             }/>

            <Section 

            title ={"Careers Instamart"} 

            description={"here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}
            isVisible={VisibleConfig==="careers"}
            setIsVisible={()=>setVisibleConfig(VisibleConfig==="careers"?null:"careers")

            }/>

            <Section 

            title ={"Press Instamart"} 

            description={"here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}
            isVisible={VisibleConfig==="press"}
            setIsVisible={()=>setVisibleConfig(VisibleConfig==="press"?null:"press")

            }/>
        </div>
    )
}
export default Grocery;
