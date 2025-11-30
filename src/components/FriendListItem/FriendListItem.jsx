import css from './Friendlistitem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <li className={css.item}>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
      {isOnline ? (
        <p className={css.statusOn}>Online</p>
      ) : (
        <p className={css.statusOff}>Offline</p>
      )}
    </li>
  </>
);

export default FriendListItem;