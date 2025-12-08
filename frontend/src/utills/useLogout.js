import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../reduxToolKit/authSlice";
import { toast } from "react-toastify";

const useLogout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
        toast.success("Logout Successful");
        navigate("/login");
    };

    return handleLogout;
};

export default useLogout;
