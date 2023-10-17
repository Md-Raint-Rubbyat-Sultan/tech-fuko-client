import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div data-theme="light">
          <Outlet />  
        </div>
    );
};

export default Root;