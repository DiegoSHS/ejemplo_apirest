import { ChartData } from "@/components/chart"
import { TableData } from "@/components/table"
import { Container } from "semantic-ui-react"

const Index = ({ data }) => {

    return (
        <Container>
            <TableData data={data} />
            <ChartData data={data} />
        </Container>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api')
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}


export default Index
