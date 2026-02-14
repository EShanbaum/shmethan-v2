import bpImg from '../assets/bp_athletics.png'
import cellAuto from '../assets/cell_auto.png'
import tePapa from '../assets/te_papa.jpg'
import softEng from '../assets/soft_eng.png'
import laap from '../assets/laap.png'
import plataforma from '../assets/plataforma.png'
import minefolio from '../assets/minefolio.png'
import {  Link } from 'react-router-dom'

type IndividualProjectProps = {
    title: string
    tags: string
    description: string
    imgPath: string
    link?: string
}

export const IndividualProject = ({ title, tags, description, imgPath, link }: IndividualProjectProps) => {
    return (
        <div className="project">
            <div className="project-image">
                {link ? (
                    <a href={link} target='_blank'>
                        <img src={imgPath} alt={title} />
                    </a>
                ) : (
                    <img src={imgPath} alt={title} />
                )}
            </div>
            <div className="project-content">
                {link ? (
                    <a href={link} target='_blank'>
                        <h2>{title}</h2>
                    </a>
                ) : (
                    <h2>{title}</h2>
                )}
                <h5>{tags}</h5>
                <p>{description}</p>
            </div>
        </div>
    )
}

export const Projects = () => {
    return (
        <div>
            <Link to="/">← back</Link>
            <IndividualProject
                title='Minefolio'
                tags='2025-Present, Mosaiq Work'
                description='Contributing to bug fixing and feature development on Minefolio, an online hub for sharing Minecraft builds. Focusing on both back-end Postgres DB work and front-end React refinements.'
                imgPath={minefolio}
                link='https://minefol.io/'
            />
            <hr />
            <IndividualProject
                title='Plataforma Comunitaria Website'
                tags='2025-2026, Global Labs Work'
                description='Led development of the responsive website for Plataforma Comunitaria, a group in Puerto Rico focused on community sustainability and resources. Integrated custom translation functionality. Implemented event and contact management systems. Done in collaboration with the Puerto Rico Project Center'
                imgPath={plataforma}
                link='https://wp.wpi.edu/plataforma-comunitaria/'
            />
            <hr />
            <IndividualProject
                title='LAAP: Log Anomaly Analytics Platform'
                tags='2025, Research Project'
                description='Colaborated with research students to develop React app to display information about system log files developed from previous research. Created Log Anomaly Detection page and Sequence Tree with d3 to display thousands of individual log sequences and pinpoint anomalous areas. Accepted to the MIT URTC 2025 conference.'
                imgPath={laap}
                link='https://laapdemo.vercel.app/sequence-tree'
            />
            <hr />
            <IndividualProject
                title="Brigham and Women's Hospital App"
                tags='2025, School Project'
                description="Developed a PERN web app in Software Engineering class in partnership with Brigham and Women's Hospital to manage service requests and routing throughout the hospital. Led the back-end development of Postgres database and PRISMA schema for service requests and online forum. Managed AWS deployment and performance."
                imgPath={softEng}
            />
            <hr />
            <IndividualProject
                title='Te Papa AI Recommendations'
                tags='2024-2025, School Project'
                description='Collaborated with the National Museum of New Zealand to provide recommendations on how to use AI to enhance the storytelling experience at the museum. Gathered surveys from museum visitors and interviewed experts for insights. Researched social factors affecting perceptions of AI in New Zealand.'
                imgPath={tePapa}
                link='https://digital.wpi.edu/concern/student_works/h989r7879?locale=en'
            />
            <hr />
            <IndividualProject 
                title='Cellular Automata Simulator'
                tags='2024, Personal Project'
                description='Developed online tool for creating cellular automata simulations in SvelteKit. Added custom states and rulesets, as well as simulation controls. Implemented import and export buttons to save simulations.'
                imgPath={cellAuto}
                link='https://www.cellularautomata.online/'
            />
            <hr />
            <IndividualProject
                title="Bay Path Website Redesign"
                tags="2021-2022, School Project"
                description="Worked on redeveloping high school website in Ruby on Rails. Focused on front-end design of Athletics-related pages. Overhauled back-end data management system to provide easier navigation."
                imgPath={bpImg}
                link='http://baypath.net/web/athletics/index'
            />
            <Link to="/">← back</Link>
        </div>
    )
}