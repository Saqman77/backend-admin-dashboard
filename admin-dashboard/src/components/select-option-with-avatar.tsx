import CustomAvatar from "./custom-avatar"
import { Text } from "./text"

type Props = {
    name: string,
    avatarUrl?: string,
    shape?: 'square' | 'circle'
}

const SelectOptionWithAvatar = ({avatarUrl, name, shape}: Props) => {
  return (
    <div
    style={{
        display:'flex',
        alignItems:'center',
        gap: '8px'
    }}
    >
        <CustomAvatar name={name} shape={shape} src={avatarUrl} />
        <Text>{name}</Text>
    </div>
  )
}

export default SelectOptionWithAvatar