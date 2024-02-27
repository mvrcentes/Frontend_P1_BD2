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
];

const editMenu = [
  {
    name: 'Notas',
    link: '/notas',
  },
  {
    name: 'Edit Tab 2',
    link: '/edit-tab-2',
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