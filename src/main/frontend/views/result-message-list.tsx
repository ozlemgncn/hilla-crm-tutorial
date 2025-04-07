import {
    Grid,
    GridColumn,
    TextField,
    Select,
    Button,
    HorizontalLayout,
    VerticalLayout,
    Icon
} from '@vaadin/react-components';
import { useEffect, useState } from 'react';
import { getAllMessages } from 'Frontend/generated/ResultMessageEndpoint';
import type ResultMessage from 'Frontend/generated/com/example/application/data/ResultMessage';

import '@vaadin/icons';

export default function ResultMessageList() {
    const [messages, setMessages] = useState<ResultMessage[]>([]);
    const [filtered, setFiltered] = useState<ResultMessage[]>([]);
    const [filters, setFilters] = useState({
        environment: '',
        codeStart: '',
        codeEnd: '',
        squad: '',
        layer: '',
        level: '',
        createdBy: '',
        message: '',
    });

    useEffect(() => {
        getAllMessages().then(data => {
            setMessages(data);
            setFiltered(data);
        });
    }, []);

    const handleFilter = () => {
        setFiltered(
            messages.filter((msg) =>
                (!filters.codeStart || msg.code.toLowerCase().includes(filters.codeStart.toLowerCase())) &&
                (!filters.squad || msg.squad.toLowerCase().includes(filters.squad.toLowerCase())) &&
                (!filters.message || msg.message.toLowerCase().includes(filters.message.toLowerCase()))
            )
        );
    };

    return (
        <VerticalLayout style={{ gap: '1rem', padding: '1rem' }}>
            <h2>Search</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(300px, 1fr))',
                gap: '1rem',
                backgroundColor: '#fff',
                padding: '1rem',
                borderRadius: '8px',
                boxShadow: '0 0 6px rgba(0,0,0,0.05)'
            }}>
                <Select label="Environment" value={filters.environment} onValueChanged={e => setFilters({ ...filters, environment: e.detail.value })}>
                    <option>Option 1</option>
                </Select>
                <TextField label="Code Start" value={filters.codeStart} onValueChanged={e => setFilters({ ...filters, codeStart: e.detail.value })} />
                <TextField label="Code End" value={filters.codeEnd} onValueChanged={e => setFilters({ ...filters, codeEnd: e.detail.value })} />
                <TextField label="Squad Name" value={filters.squad} onValueChanged={e => setFilters({ ...filters, squad: e.detail.value })} />
                <Select label="Layer" value={filters.layer} onValueChanged={e => setFilters({ ...filters, layer: e.detail.value })}>
                    <option>Option 1</option>
                </Select>
                <TextField label="Created By" value={filters.createdBy} onValueChanged={e => setFilters({ ...filters, createdBy: e.detail.value })} />
                <Select label="Level" value={filters.level} onValueChanged={e => setFilters({ ...filters, level: e.detail.value })}>
                    <option>Option 1</option>
                </Select>
                <TextField label="Filter By Message" value={filters.message} onValueChanged={e => setFilters({ ...filters, message: e.detail.value })} />
            </div>

            <Button theme="primary" onClick={handleFilter}>List</Button>

            <h3>Result Message List</h3>
            <Grid items={filtered} theme="row-stripes column-borders wrap-cell-content" style={{ backgroundColor: '#fff' }}>
                <GridColumn path="code" header="Code" />
                <GridColumn path="squad" header="Squad" />
                <GridColumn path="layer" header="Layer" />
                <GridColumn path="errorLevel" header="Error Level" />
                <GridColumn path="createdBy" header="Created By" />
                <GridColumn path="createdDate" header="Create Date" />
                <GridColumn path="message" header="Result Message Content(s)" />
                <GridColumn header="Actions">
                    {({ item }) => (
                        <HorizontalLayout theme="spacing" style={{ justifyContent: 'center' }}>
                            <Button theme="primary" onClick={() => alert(`Viewing ${item.code}`)}>
                                <Icon icon="vaadin:eye" />
                            </Button>
                            <Button theme="success" onClick={() => alert(`Editing ${item.code}`)}>
                                <Icon icon="vaadin:pencil" />
                            </Button>
                            <Button theme="error" onClick={() => alert(`Deleting ${item.code}`)}>
                                <Icon icon="vaadin:trash" />
                            </Button>
                        </HorizontalLayout>
                    )}
                </GridColumn>
            </Grid>
        </VerticalLayout>
    );
}
