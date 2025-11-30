import Profile  from "./components/Profile/Profile";
import FriendList from "./components/FriendList/Friendlist";
import TransactHistory from "./components/TransactionHistory/Trasactionhistory";
import userData from './userData.json';
import friends from './friends.json'
import transactions from './transactions.json'

export const App = () => {
  return (
    <>
      <Profile
        username={ userData.username }
        tag={ userData.tag }
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats} 
         />
      <FriendList friends={friends} />
      <TransactHistory items={transactions} />
    </>
  );
};

export default App
