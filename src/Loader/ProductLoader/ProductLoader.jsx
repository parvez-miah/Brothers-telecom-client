import { Container } from 'react-bootstrap'
import ContentLoader from 'react-content-loader'

const ProductLoader = props => (
    <div style={{display:'flex' , alignItems:'center' , justifyContent:'center' }} >
        <Container>
            <ContentLoader
                viewBox="0 0 400 160"
                height={160}
                width={400}
                backgroundColor="transparent"
                {...props}
            >
                <circle cx="150" cy="86" r="8" />
                <circle cx="194" cy="86" r="8" />
                <circle cx="238" cy="86" r="8" />
            </ContentLoader>
        </Container>
    </div>
)



export default ProductLoader