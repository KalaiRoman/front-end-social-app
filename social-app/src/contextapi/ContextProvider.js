import { createContext, useContext } from "react";


const AppCreateContext = createContext();


const ProviderUseContext = () => {
    return useContext(AppCreateContext)
}

const AllContextDatas = {
    ProviderUseContext: ProviderUseContext,
    name: "kalasi"
}


export const AppProviderContext = ({ children }) => {
    return <AppCreateContext.Provider value={AllContextDatas}>
        {children}
    </AppCreateContext.Provider>
}