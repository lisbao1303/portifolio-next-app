
import CardTimeLine from "./cardtimeline/cardtimeline";
import styles from "./about.module.css";
import React from 'react';
import { userPublicDataService } from '../../services/userPublicDataService';
import { UserPublicData } from '../../models/userPublicData';
import SideAbout from "../sideabout/sideabout";
import { experienceService } from "@/services/experienceService";
import { Experience } from "@/models/experience";
import { Education } from "@/models/education";
import { educationService } from "@/services/educationService";
import CardTimeLineEdu from "./cardtimelineedu/cardtimelineedu";

const initializeUserPublicData = (): UserPublicData => ({
    name: "",
    title: "",
    about: "",
    birth: "",
    birthPlace: "",
    email: "",
    phone: "",
    address: "",
    github: "",
    linkedin: "",
    principalTech: "",
    skills: [],
    additionalInfo: ""
});

export default async function About() {

    const userPublicData: UserPublicData[] = await userPublicDataService.getAll();
    const experience: Experience[] = await experienceService.getAll();
    const education: Education[] = await educationService.getAll();

    return (
        <div id="cvAbout" className={styles.aboutContainer}>

            <SideAbout publicData={userPublicData[0]} />

            <div className={styles.fullscreen}>
                <div className={styles.card}>
                    <h2 className={styles.card_title}>About me.</h2>
                    <p className={styles.card_content} dangerouslySetInnerHTML={{ __html: userPublicData[0].about }}></p>
                </div>
                <p className={"destak " + styles.wordsize}> Education</p>
                {education.map((item, index) => (
                    <CardTimeLineEdu key={index} education={item} />
                ))}
                <p className={"destak " + styles.wordsize}> Experience</p>

                {experience.map((item, index) => (
                    <CardTimeLine key={index} experience={item} />
                ))}
            </div>
        </div>

    );
}