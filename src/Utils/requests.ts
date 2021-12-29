import axios from "axios";
import { Profile } from "Types/gitProfile";

export const getGitData = async (login: string): Promise<Profile | undefined> => {

    let user: Profile = {name: '', url: '', location: '', followers: '', avatar_url: ''}
    let hasError = false
    try {
    const { data } = await axios.get(`https://api.github.com/users/${login}`);
    user = data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            hasError = true;
        } else {
            hasError = true;
        }
    }

    return hasError ? undefined : user
}