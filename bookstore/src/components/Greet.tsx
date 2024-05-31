import { IoPersonCircle } from "react-icons/io5";
import { useUser } from '../contexts/UserProvider';


function Greet() {
    const {user} = useUser();

    if(!user){
        return null;
    }

  return (
    <>
     {user.photo ? (
        <img className="w-10 h-10 rounded-full" src={user.photo} alt="User avatar" />
      ) : (
        <IoPersonCircle className="w-10 h-10 rounded-full" />
      )}
    </>
  )
}

export default Greet