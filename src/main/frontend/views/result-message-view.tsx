// src/main/frontend/views/result-message-view.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getByCode } from 'Frontend/generated/ResultMessageEndpoint';
import type ResultMessage from 'Frontend/generated/com/example/application/data/ResultMessage';
import { TextField } from '@vaadin/react-components';

export default function ResultMessageView() {
    const { code } = useParams();
    const [message, setMessage] = useState<ResultMessage | null>(null);

    useEffect(() => {
        if (code) {
            getByCode(code).then(setMessage);
        }
    }, [code]);

    if (!message) return <div>Yükleniyor...</div>;

    return (
        <div className="p-m">
            <h2>Mesaj Detayı (View)</h2>
            <TextField label="Code" value={message.code} readonly />
            <TextField label="Squad" value={message.squad} readonly />
            <TextField label="Layer" value={message.layer} readonly />
            <TextField label="Error Level" value={message.errorLevel} readonly />
            <TextField label="Created By" value={message.createdBy} readonly />
            <TextField label="Message" value={message.message} readonly />
        </div>
    );
}
