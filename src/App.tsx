import { useRoutes } from 'react-router-dom';
import * as React from 'react';
import routes from './routes';

const App: React.FC = () => {
  const element = useRoutes(routes);
  return element;
};

export default React.memo(App);
