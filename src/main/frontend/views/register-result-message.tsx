import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { save } from 'Frontend/generated/ResultMessageEndpoint';
import type ResultMessage from 'Frontend/generated/com/example/application/data/ResultMessage';
import {
    TextField,
    Button,
    VerticalLayout,
    Notification
} from '@vaadin/react-components';

export const config = {
    layout: 'result-message-layout',
    menu: { title: 'Register Result Message' }
};

export default function RegisterResultMessage() {
    const navigate = useNavigate();

    const [message, setMessage] = useState<ResultMessage>({
        code: '',
        squad: '',
        layer: '',
        errorLevel: '',
        createdBy: '',
        createdDate: new Date().toISOString().split('T')[0],
        message: ''
    });

    const handleSave = async () => {
        try {
            await save(message);
            Notification.show('Mesaj başarıyla kaydedildi!', { position: 'top-end' });
            navigate('/result-message-list');
        } catch (error) {
            Notification.show('Kayıt sırasında hata oluştu.', { position: 'top-end', theme: 'error' });
        }
    };

    return (
        <VerticalLayout className="p-m" style={{ maxWidth: '600px', margin: 'auto' }}>
            <h2>Yeni Result Message Oluştur</h2>
            <TextField label="Code" value={message.code} onValueChanged={e => setMessage({ ...message, code: e.detail.value })} />
            <TextField label="Squad" value={message.squad} onValueChanged={e => setMessage({ ...message, squad: e.detail.value })} />
            <TextField label="Layer" value={message.layer} onValueChanged={e => setMessage({ ...message, layer: e.detail.value })} />
            <TextField label="Error Level" value={message.errorLevel} onValueChanged={e => setMessage({ ...message, errorLevel: e.detail.value })} />
            <TextField label="Created By" value={message.createdBy} onValueChanged={e => setMessage({ ...message, createdBy: e.detail.value })} />
            <TextField label="Message" value={message.message} onValueChanged={e => setMessage({ ...message, message: e.detail.value })} />
            <Button theme="primary" onClick={handleSave}>Kaydet</Button>
        </VerticalLayout>
    );
}
