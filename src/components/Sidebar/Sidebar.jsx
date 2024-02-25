import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';

const menu = [
    {
        name: 'Estudiantes',
        link: '/estudiantes'
    },
    {
        name: 'Profesores',
        link: '/profesores'
    },
    {
        name: 'Personal',
        link: '/personal'
    },
    {
        name: 'Cursos',
        link: '/cursos'
    },
    {
        name: 'Material de Cursos',
        link: '/material-cursos'
    },
]

const Sidebar = () => {
    const location = useLocation()

    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>Logo</div>
            <ul className={styles.navList}>
                {menu.map((item, index) => (
                    <Link key={index} to={item.link}>
                        <li className={`${styles.navItem} ${location.pathname === item.link ? styles.navItem_active : ''}`}>{item.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
