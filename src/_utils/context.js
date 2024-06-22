import {PROJECTS} from '@/_components/AppData';
import {createContext} from 'react';

const AppContext = createContext();
export const ProjectsContext = createContext(PROJECTS);

export default AppContext;
