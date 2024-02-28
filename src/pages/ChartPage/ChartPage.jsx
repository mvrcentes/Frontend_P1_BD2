// ChartPage.js
import ChartSquare from "../../components/ChartSquare/ChartSquare"
import styles from './ChartPage.module.css'

const ChartPage = () => {
    const charts = [
        {
            title: 'Chart 1',
            src: 'https://charts.mongodb.com/charts-project-0-qjisp/embed/charts?id=65deaec9-432f-4e0a-87fb-0d9cf0c3afa9&maxDataAge=3600&theme=light&autoRefresh=true',
        },
        {
            title: 'Chart 2',
            src: 'https://charts.mongodb.com/charts-project-0-qjisp/embed/charts?id=65deaad3-5529-42ef-8914-a5d7d80f9a80&maxDataAge=3600&theme=light&autoRefresh=true',
        },
    ]

    return (
        <div className={styles.chartsContainer}>
            <h1 className={styles.chartsTitle}>Inteligencia de Negocios</h1>
            <div className={styles.chartsWrapper}>
                {charts.map((chart, index) => (
                    <ChartSquare key={index} title={chart.title} src={chart.src} />
                ))}
            </div>
        </div>
    )
}

export default ChartPage