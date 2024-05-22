

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
        // <div className="home__container" style={estilosHomeContainer}>

        <div className="home__container flex flex-col justify-center items-center min-h-screen">
        
            <h1 className="home__title pb-10 text-3xl">Home</h1>

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