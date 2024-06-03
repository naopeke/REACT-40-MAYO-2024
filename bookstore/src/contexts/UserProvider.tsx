import { createContext, useState, ReactNode, useContext } from 'react';
import { User } from '../config/types'

// UserContextの型定義
type UserContextType = {
    user: User | null;
    logIn: (user: User) => void;
    logOut: () => void;
};

// UserProviderのプロパティの型定義
type UserProviderProps = {
    children: ReactNode;
};


// UserContextを作成
const UserContext = createContext<UserContextType>({} as UserContextType);

function UserProvider(props: UserProviderProps) {
    
    const { children } = props;

    const [user, setUser] = useState<User | null>(() => {
        const userLocalStorage = localStorage.getItem('user');
        return userLocalStorage ? JSON.parse(userLocalStorage) : null;
    });

    function logIn(user: User) {
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
    }

    function logOut() {
        setUser(null);
        localStorage.removeItem('user');
    }

    return (
        <UserContext.Provider value={{ user, logIn, logOut }}>
            {children}
        </UserContext.Provider>
    );
}

// カスタムフックを定義してUserContextを利用
//UserContext は、UserProvider コンポーネントで提供されるコンテキストです。
//useUser を使用することで、コンポーネント内でユーザー情報にアクセスしたり、
//ログイン状態を確認したり、ログアウト機能を呼び出したりすることができます。
//これにより、コンポーネントが必要なときにユーザー情報を簡単に取得できます。

const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export default UserProvider;
export { UserContext, useUser };
