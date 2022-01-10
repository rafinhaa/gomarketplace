import axios from "axios";
import Config from 'react-native-config';

export const api = axios.create({
    baseURL: Config.JSON_SERVER_URL,
});