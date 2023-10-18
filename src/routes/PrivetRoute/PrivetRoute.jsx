import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../../providers/AuthProvider";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div>loading...</div>
    }
    if (user) return children;
    return <Navigate to={'/'} state={location?.pathname} />
};

PrivetRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivetRoute;