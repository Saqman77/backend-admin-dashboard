import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd"
import Header from "./header"
import Logo from "../../../public/favicon.ico"
import { Children } from "react"


const Layout = ({children}: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
        Header={Header}
        Title={(titleProps) => <ThemedTitleV2 {...titleProps}icon={<img src={Logo} alt="Logo" style={{ height: '100%' }} />}text= "Dashboard" />}
    >
        {children}
    </ThemedLayoutV2>
  )
}

export default Layout