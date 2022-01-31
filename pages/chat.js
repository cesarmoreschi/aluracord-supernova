import appConfig from '../config.json'
import { Box } from "@skynexui/components"

export default function PaginaDoChat(){
    return(
        <>
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.neutrals['000'],
                backgroundImage: 'url(https://images-assets.nasa.gov/image/PIA17563/PIA17563~medium.jpg)',
                backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', backgroundBlendMode: 'multiply',
            }}
        >

        </Box>
        </>
    )
}
