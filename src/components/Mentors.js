import React from 'react'
import person from '../images/person.png'
const Mentors = () => {
    const mentors = [{
        name: "Shubham Sharma",
        college: "Cambridge University",
        image: ""
    },
    {
        name: "Sahil Kumar",
        college: "Harvard University",
        image: ""
    },
    {
        name: "Rohit Singh",
        college: "University of California",
        image: ""
    },
    {
        name: "Matthew Johnson",
        college: "University of Edinburgh",
        image: ""
    },
    {
        name: "Angelina John",
        college: "John Hopkins",
        image: ""
    },
    {
        name: "Amelia Knight",
        college: "University of Illinois",
        image: ""
    },
    {
        name: "Alice Capsey",
        college: "Trinity College, Dublin",
        image: ""
    },
    {
        name: "Adam Rose",
        college: "Kwantlen Technical University",
        image: ""
    }
    ]

    const advisors = [
        {
            name: "Dr. Ashley Kim",
            desc: "Principal Project Scientist",
            college: "Harvard University"
        },
        {
            name: "Dr. Onkar",
            desc: "Technical Research Head",
            college: "Indian Institute of Technology, Madras"
        },
        {
            name: "Dr. Akhil Tripathi",
            desc: "Professor",
            college: "Indian Institute of Technology, Kanpur"
        }
    ]
    return (
        <>
            <div className="container-fluid text-center">
                <h1 className='Heading'>Meet your Mentors!</h1>
                <div className="mentorCardSection">
                    {mentors.map((men, index) => {
                        return (
                            <>
                                <div className="mentorCards" key={index}>
                                    <img src={person} className="card-img-top" alt="..." />
                                    <div className="card-body pt-4">
                                        <h5 className="card-title">{men.name}</h5>
                                        <p className="card-text">{men.college}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
                <h1 className='Heading'>Mentors & Advisors!</h1>
                <div className="advisorCardSection">
                    {advisors.map((adv, index) => {
                        return (
                            <>
                                <div className="mentorCards" key={index}>
                                    <img src={person} className="card-img-top" alt="..." />
                                    <div className="card-body pt-4">
                                        <h4 className="card-title">{adv.name}</h4>
                                        <p className="card-text">{adv.desc}</p>
                                        <p className="card-text">{adv.college}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Mentors
