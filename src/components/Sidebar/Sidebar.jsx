import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';

const mainMenu = [
  {
    name: 'Estudiantes',
    link: '/estudiantes',
  },
  {
    name: 'Personal',
    link: '/personal',
  },
  {
    name: 'Cursos',
    link: '/cursos',
  },
  {
    name: 'Asistencias',
    link: '/asistencias',
  },
  {
    name: 'Materiales',
    link: '/materiales',
  },
  {
    name: 'Top Estudiantes',
    link: '/top-estudiantes',
  },
  {
    name: 'Charts',
    link: '/charts',
  },
];

const editMenu = [
  {
    name: 'Notas',
    link: '/notas',
  },
  {
    name: 'Agregar Estudiante',
    link: '/agregar-estudiante',
  },
  {
    name: 'Despedir Personal',
    link: '/despedir-personal',
  },
  {
    name: 'Agregar Materiales',
    link: '/agregar-materiales',
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [showEdit, setShowEdit] = useState(false);

  const toggleEdit = () => {
    setShowEdit((prevShowEdit) => !prevShowEdit);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.toggleContainer}>
        <button onClick={toggleEdit} className={styles.toggleButton}>
          {showEdit ? 'View' : 'Edit'}
        </button>
      </div>
      {showEdit ? (
        <div>
          <ul className={styles.navList}>
            {editMenu.map((item, index) => (
              <Link key={index} to={item.link}>
                <li className={`${styles.navItem} ${location.pathname === item.link ? styles.navItem_active : ''}`}>
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      ) : (
        <ul className={styles.navList}>
          {mainMenu.map((item, index) => (
            <Link key={index} to={item.link}>
              <li className={`${styles.navItem} ${location.pathname === item.link ? styles.navItem_active : ''}`}>
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;