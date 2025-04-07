import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getByCode, save } from 'Frontend/generated/ResultMessageEndpoint';
import type ResultMessage from 'Frontend/generated/com/example/application/data/ResultMessage';
import { TextField, Button, VerticalLayout } from '@vaadin/react-components';

export default function ResultMessageEdit() {
    const { code } = useParams();
    const navigate = useNavigate();
    const [message, setMessage] = useState<ResultMessage | null>(null);

    useEffect(() => {
        if (code) {
            getByCode(code).then(setMessage);
        }
    }, [code]);

    const handleSave = async () => {
        if (message) {
            await save(message);
            navigate('/result-message-list');
        }
    };

    if (!message) return <div>Yükleniyor...</div>;

    return (
        <VerticalLayout className="p-m">
            <h2>Mesaj Düzenle (Edit)</h2>
            <TextField label="Code" value={message.code} onChange={(e) => setMessage({ ...message, code: e.target.value })} />
            <TextField label="Squad" value={message.squad} onChange={(e) => setMessage({ ...message, squad: e.target.value })} />
            <TextField label="Layer" value={message.layer} onChange={(e) => setMessage({ ...message, layer: e.target.value })} />
            <TextField label="Error Level" value={message.errorLevel} onChange={(e) => setMessage({ ...message, errorLevel: e.target.value })} />
            <TextField label="Created By" value={message.createdBy} onChange={(e) => setMessage({ ...message, createdBy: e.target.value })} />
            <TextField label="Message" value={message.message} onChange={(e) => setMessage({ ...message, message: e.target.value })} />
            <Button onClick={handleSave}>Kaydet</Button>
        </VerticalLayout>
    );
}
