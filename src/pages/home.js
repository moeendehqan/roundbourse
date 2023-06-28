import { useEffect, useState } from "react"



const Home = () =>{
    const [imageSrc, setImageSrc] = useState()



    const handleImage = ()=>{
        const images =['hbg1.jpg','hbg2.jpg','hbg3.jpg','hbg4.jpg','hbg5.jpg','hbg6.jpg']
        const randomImageName = images[Math.floor(Math.random() * images.length)]
        setImageSrc(`${process.env.PUBLIC_URL}/image/${randomImageName}`)
    }

    useEffect(handleImage,[])

    return(
        <div className="Home">
            <div className="picture">
                <img src={imageSrc} />
            </div>
            <p>ddddd</p>


        </div>
    )
}


export default Home