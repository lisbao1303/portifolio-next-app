import { Experience } from "@/models/experience";
import styles from "./cardtimeline.module.css";
import { FaMapMarkerAlt } from 'react-icons/fa';

interface CardTimeLineProps {
    experience: Experience;
}

const formatDate = (date: string): string => {
    const parsedDate = new Date(date); // Converte a string para um objeto Date
    const month = parsedDate.getMonth() + 1; // O mês é zero-indexado (0 a 11), por isso somamos 1
    const year = parsedDate.getFullYear();

    if (year > new Date().getFullYear()) return "Present"!

    // Retorna no formato "mm/yyyy"
    return `${month.toString().padStart(2, '0')}/${year}`;
};


export default function CardTimeLine({ experience }: CardTimeLineProps) {
    return (
        <div className={styles.timeline_container}>
            <div className={styles.timeline}>
                <div className={styles.timeline_event}>
                    <p className={styles.pmargin}>{formatDate(experience.dateEnd)}</p>
                </div>
                <div className={styles.timeline_event}>
                    <p className={styles.pmarginbottom}>{formatDate(experience.dateStart)}</p>
                </div>
            </div>
            <div className={styles.card}>
                <h2 className={styles.card_title}>
                    {experience.position}
                </h2>
                <p className={styles.company}>{experience.company + "  |"} <FaMapMarkerAlt  /> {experience.location}</p>
                <p className={styles.card_content}>
                    {experience.description}
                </p>
                <div className={styles.divMiniCard}>
                    {experience.technologies.map((item, index) => (
                        <div key={index} className={styles.miniCard}>
                            {item}
                        </div>
                    ))}
                </div>

            </div>
        </div>

    );
}
