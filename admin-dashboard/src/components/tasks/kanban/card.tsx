import { Text } from "@/components/text"
import { User } from "@/graphql/schema.types"
import { Card, ConfigProvider, theme } from "antd"

type ProjectCardProps = {
    id: string,
    title: string,
    updatedAt: string,
    dueDate?: string,
    users?: {
        id: string,
        name: string,
        avatarUrl?: User['avatarUrl']
    }[]
}

const ProjectCard = ({id, title, dueDate, users}: ProjectCardProps) => {

    const { token } = theme.useToken()

    const edit = () => {}

  return (
    <ConfigProvider 
    theme={{
        components: {
            Tag: {
                colorText: token.colorTextSecondary
            },
            Card: {
                headerBg: 'transparent'
            }
        }
    }}
    >
        <Card 
            size="small"
            title={<Text ellipsis={{ tooltip: title}}>{title}</Text>}
        >

        </Card>
    </ConfigProvider>
  )
}

export default ProjectCard