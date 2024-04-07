import Avatar from '@mui/material/Avatar';
type UserAvatarProps = {user: User, size: number}

export default function UserAvatar(props: UserAvatarProps) {
    const URL = process.env.NEXT_PUBLIC_URL;
    return <>
        <a href={`/users/${props.user.id}`}>
            <Avatar alt={props.user.username} src={props.user.avatar} sx={{ width: props.size , height: props.size }} />
        </a>
    </>
}