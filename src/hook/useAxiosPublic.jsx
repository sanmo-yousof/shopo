import axios from 'axios';

const axiosPublic = axios.create({
    baseURL:'baseURL'
})
const userAxiosPublic = () => {
    return axiosPublic;
};

export default userAxiosPublic;