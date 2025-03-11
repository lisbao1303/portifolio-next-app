"use client"
import CardTimeLine from "./cardtimeline/cardtimeline";
import styles from "./about.module.css";
import React, { useEffect, useState } from 'react';
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

const About = () => {
    // State para armazenar os dados carregados
    const [userPublicData, setUserPublicData] = useState<UserPublicData>(initializeUserPublicData());
    const [experience, setExperience] = useState<Experience[]>([]);
    const [education, setEducation] = useState<Education[]>([]);

    // Carregar os dados em tempo de execução
    useEffect(() => {
        // Função para buscar os dados da API
        const loadData = async () => {
            const userData = await userPublicDataService.getAll();
            const experienceData = await experienceService.getAll();
            const educationData = await educationService.getAll();

            setUserPublicData(userData[0]); // Assume que você sempre tem pelo menos 1 dado
            setExperience(experienceData);
            setEducation(educationData);
        };

        loadData();
    }, []); // O array vazio faz o efeito rodar uma vez na montagem do componente

    return (
        <div id="cvAbout" className={styles.aboutContainer}>
            <SideAbout publicData={userPublicData} />
            <div className={styles.fullscreen}>
                <div className={styles.card}>
                    <h2 className={styles.card_title}>About me.</h2>
                    <p className={styles.card_content} dangerouslySetInnerHTML={{ __html: userPublicData.about }}></p>
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
};

export default About;
