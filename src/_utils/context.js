import {createContext} from 'react';
import {PROJECTS} from '@/_components/AppData/projects';

const AppContext = createContext();
export const ProjectsContext = createContext(PROJECTS);

export default AppContext;
