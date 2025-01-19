import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import styles from "./cardtimelineedu.module.css";
import { Education } from "@/models/education";

interface CardTimeLineProps {
    education: Education;
}

const formatDate = (date: string): string => {
    const parsedDate = new Date(date); // Converte a string para um objeto Date
    const month = parsedDate.getMonth() + 1; // O mês é zero-indexado (0 a 11), por isso somamos 1
    const year = parsedDate.getFullYear();

    if (year > new Date().getFullYear()) return "Present"!

    // Retorna no formato "mm/yyyy"
    return `${month.toString().padStart(2, '0')}/${year}`;
};


export default function CardTimeLineEdu({ education }: CardTimeLineProps) {
    return (
        <div className={styles.timeline_container}>
            <div className={styles.timeline}>
                <div className={styles.timeline_event}>
                    <p className={styles.pmargin}>{formatDate(education.dateEnd)}</p>
                </div>
                <div className={styles.timeline_event}>
                    <p className={styles.pmarginbottom}>{formatDate(education.dateStart)}</p>
                </div>
            </div>
            <div className={styles.card}>
                <h2 className={styles.card_title}>
                    {education.title} { " | " + education.type} <FaGraduationCap />

                </h2>
                <p className={styles.company}>
                {education.institute} <FaUniversity /></p>
                <p className={styles.card_content}>
                    {education.description}
                </p>
                <div className={styles.divMiniCard}>
                    {education.technologies.map((item, index) => (
                        <div key={index} className={styles.miniCard}>
                            {item}
                        </div>
                    ))}
                </div>


                {education.academic.map((extraItem, index) => (
                    <div key={index} className={styles.subTimeline_container}>
                        <div className={styles.subTimeline}>
                            <p className={styles.subPmargin}>{formatDate(extraItem.dataFim)}</p>
                            <p className={styles.subPmarginbottom}>{formatDate(extraItem.dataInicio)}</p>
                        </div>
                        <div className={styles.subCard}>
                            <p className={styles.subCard_title}>
                                {extraItem.title}
                            </p>
                            <p className={styles.company}>{extraItem.type}</p>
                            <p className={styles.card_content}>
                                {extraItem.description}
                            </p>

                        </div>
                    </div>
                ))}

            </div>
        </div>

    );
}
