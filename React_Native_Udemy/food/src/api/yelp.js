import axios from "axios";
//import 'dotenv/config'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer ' + process.env.EXPO_PUBLIC_API_KEY,
    }
});