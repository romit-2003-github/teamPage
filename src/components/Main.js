import React from 'react'
import Cambridge from '../images/Cambridge.jpeg';
const Main = () => {

    const cardDetails = [
        {
            id: 1,
            name: "Cambridge University",
            photo: ""
        },
        {
            id: 2,
            name: "Harvard University",
            photo: ""
        },
        {
            id: 3,
            name: "University of California",
            photo: ""
        },
        {
            id: 4,
            name: "ETH Zurich",
            photo: ""
        },
        {
            id: 5,
            name: "Max Planck",
            photo: ""
        },
        {
            id: 6,
            name: "University of Edinburgh",
            photo: ""
        }
    ]

    return (
        <>
            <div className="container-fluid main text-center">
                <h1 className='Heading' style={{paddingTop:"15%"}}>Learn from Scientists, Research Scholars from the top Institutes in the world!</h1>
                <section className="cardSection">
                    {cardDetails.map((card, index) => {
                        return (
                            <>
                                <div className="CollegeCard" key={index}>
                                    <img src={Cambridge} className="card-img-top" alt="..."/>
                                        <div className="card-body p-5">
                                            <h5 className="card-title">{card.name}</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="/" className="btn btn-light">Click Here &rarr;</a>
                                        </div>
                                </div>
                            </>
                        )
                    })}
                </section>
            </div>
        </>
    )
}

export default Main
