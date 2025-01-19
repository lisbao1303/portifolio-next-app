'use client'

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

export default function About() {
    // Estado para armazenar os dados e o estado de carregamento
    const [userPublicData, setUserPublicData] = useState<UserPublicData>(initializeUserPublicData);
    const [education, setEducation] = useState<Education[]>([]);
    const [experience, setExperience] = useState<Experience[]>([]);

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);;

    // Usando useEffect para buscar os dados ao montar o componente
    useEffect(() => {
        const fetchUserPublicData = async () => {
            try {
                const data = await userPublicDataService.getAll();
                setUserPublicData(data[0]); // Atualizando o estado com os dados
            } catch (err) {
                setError('Error fetching user public data'); // Tratando erro
            } finally {
                setLoading(false); // Finalizando o estado de carregamento
            }
        };

        const fetchExperiences = async () => {
            try {
                const data = await experienceService.getAll();
                setExperience(data); // Atualizando o estado com os dados
            } catch (err) {
                setError('Error fetching experiences'); // Tratando erro
            } finally {
                setLoading(false); // Finalizando o estado de carregamento
            }
        };

        const fetchEducation = async () => {
            try {
                const data = await educationService.getAll();
                setEducation(data); // Atualizando o estado com os dados
            } catch (err) {
                setError('Error fetching experiences'); // Tratando erro
            } finally {
                setLoading(false); // Finalizando o estado de carregamento
            }
        };

        fetchUserPublicData();
        fetchEducation();
        fetchExperiences();
    }, []); // O array vazio garante que a requisição aconteça apenas uma vez quando o componente for montado

    return (
        <div>

            <SideAbout publicData={userPublicData}/>

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
}
