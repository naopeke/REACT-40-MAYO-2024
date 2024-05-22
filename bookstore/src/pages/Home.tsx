import './Home.css';

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

        <div className="home__container">
        
            <h1 className="home__title">Home</h1>

            <div className="home__message--1">
                "The only way to learn is to live"
            </div>
            <div className="home__message--2">
                Matt Haig - The Midnight Library
            </div>
        </div>
    )
}

export default Home;