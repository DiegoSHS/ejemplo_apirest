import { Table } from "semantic-ui-react"

export const TableData = ({data}) => {
    const first = data[0]
    const keys = Object.keys(first)
    const tablehead = keys.map((key) => <Table.Cell>{key}</Table.Cell>)
    const tablebody = data.map((item) => {
        const values = Object.values(item)
        const row = values.map((value) => <Table.Cell>{value}</Table.Cell>)
        return <Table.Row>{row}</Table.Row>
    })
    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    {tablehead}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {tablebody}
            </Table.Body>
        </Table>
    )
}