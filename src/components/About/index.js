import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AnimatedLetters from "../AnimatedLetters"
import {faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons'
import './index.scss'
import Loader from "react-loaders"
const About = ()=>{
    return(
        <>
            <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}/>
                </h1>
                <p>I'm nineteen years old, who study software engineer
                    in National University of Mongolia and second year
                    studens.</p>
                <p>Well, I’ve been working on mobile app development for four years now,
                     while still studying at college. Had my own projects, coded mostly 
                     in Java and Python, but my account on the play store got suspended, 
                     for reasons I still fail to understand. But I learned a lot, both at 
                     school and while working on the apps. Now I am looking to get a job 
                     with an innovative game studio, and am glad to be interviewing with 
                     you here. Apart from coding, I enjoy reading a good book, or a nice 
                     evening out with friends. That would do for a short introduction, 
                     please tell me if you’d like me 
                    to elaborate on anything from my education, or experience with apps.</p>
                <p></p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/> 
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/> 
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/> 
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/> 
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/> 
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/> 
                    </div>
                </div>
            </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}
export default About