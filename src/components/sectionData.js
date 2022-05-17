import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel, faFilePdf, faFileZipper, faCirclePlay, faClone, faFileLines } from '@fortawesome/free-solid-svg-icons';

export const sectionData = [
    {
        icon: <FontAwesomeIcon icon={faFilePdf} color={'#E53E3E'} />,
        sectionName: 'Course Material 1',
        date: 'April 1, 2021',
        maxViews: 800,
        views: 660,
        openOrClose: true,
    },
    {
        icon: <FontAwesomeIcon icon={faFileExcel} color={'#68D391'} />,
        sectionName: 'Course Material 2',
        date: 'April 1, 2021',
        maxViews: 800,
        views: 0,
        openOrClose: false,
    },
    {
        icon: <FontAwesomeIcon icon={faFileZipper} color={'#ECC94B'} />,
        sectionName: 'Course Material 3',
        date: 'April 1, 2021',
        maxViews: 800,
        views: 0,
        openOrClose: false,
    },
    {
        icon: <FontAwesomeIcon icon={faCirclePlay} color={'#3182CE'} />,
        sectionName: 'Video 1',
        date: 'April 1, 2021',
        maxViews: 800,
        views: 700,
        openOrClose: true,
    },
    {
        icon: <FontAwesomeIcon icon={faCirclePlay} color={'#3182CE'} />,
        sectionName: 'Video 1',
        date: 'April 1, 2021',
        maxViews: 800,
        views: 720,
        openOrClose: true,
    },
    {
        icon: <FontAwesomeIcon icon={faClone} color={'#CBD5E0'} />,
        sectionName: 'Assignment 1',
        date: '',
        maxViews: 800,
        views: 600,
        openOrClose: false,
    },
    {
        icon: <FontAwesomeIcon icon={faClone} color={'#CBD5E0'} />,
        sectionName: 'Assignment 1',
        date: '',
        maxViews: 800,
        views: 600,
        openOrClose: false,
    },
    {
        icon: <FontAwesomeIcon icon={faFileLines} color={'#CBD5E0'} />,
        sectionName: 'Quiz 1',
        date: '',
        maxViews: 800,
        views: 600,
        openOrClose: false,
    },
    {
        icon: <FontAwesomeIcon icon={faFileLines} color={'#CBD5E0'} />,
        sectionName: 'Quiz 1',
        date: '',
        maxViews: 800,
        views: 600,
        openOrClose: false,
    },
]