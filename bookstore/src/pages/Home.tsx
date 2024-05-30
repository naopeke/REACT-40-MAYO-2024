import Heading from "../components/ui/Heading";


function Home (){
//     const estilosHomeContainer = {
//         display: flex,
//         flex-direction: column,
//         justify-content: center,
//         align-items: center,
//         height: 100vh,
//         width: 100%;
//     }

    
    return (

        <div className="home__container flex flex-col justify-center items-center min-h-screen">
        
        <Heading className="text-center" title="Home"/>
{/* <Heading></Heading> */}
            <div className="home__message--1 text-lg">
                "The only way to learn is to live"
            </div>
            <div className="home__message--2 italic">
                Matt Haig - The Midnight Library
            </div>
        </div>
    )
}

export default Home;