import GetCookie from "@/hooks/cookies/getCookie";
import axios from "axios";

export const GetProfile = async () => {
  const val = GetCookie('userId');
  const userId = parseInt(val != '' ? val : '0');
  const res = await axios.post('https://flickthebean.onrender.com/profile', {
    userId: userId,
  })
  //console.log("Profile res: ", res)
  return res
}