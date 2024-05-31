import { IoPersonCircle } from "react-icons/io5";
import { useUser } from '../contexts/UserProvider';



function Greet() {
    const {user} = useUser();

    if(!user){
        return null;
    }

  return (
    <div className="flex items-center">
      {user.photo ? (
        <img className="w-10 h-10 rounded-full" src={user.photo} alt="User avatar" />
      ) : (
        <IoPersonCircle className="w-10 h-10 rounded-full" />
      )}
      {user.name && <span className="ml-2">{user.name}</span>}
    </div>
  );
}

export default Greet