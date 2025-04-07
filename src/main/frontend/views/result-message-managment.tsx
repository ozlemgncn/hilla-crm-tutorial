import {
    AppLayout,
    DrawerToggle,
    SideNav,
    SideNavItem
} from '@vaadin/react-components';
import { useEffect, useState } from 'react';

import RegisterResultMessage from "Frontend/views/register-result-message";
import ResultMessageList from "Frontend/views/result-message-list";


export default function ResultMessageManagment() {
    const [showResultMessageMenu, setShowResultMessageMenu] = useState(false);
    const [activeTab, setActiveTab] = useState<'register' | 'list' | null>(null);

    useEffect(() => {
        document.title = 'Dashboard';
    }, []);

    return (
        <AppLayout primarySection="drawer">
            {/* Sol Menü */}
            <div slot="drawer" style={{ padding: '1rem', width: '240px' }}>
                <h3 style={{ fontWeight: 'bold' }}>Marketplace</h3>

                <SideNav location={{ pathname: '' }} onNavigate={() => {}}>
                    {/* Ana başlık (aç/kapa) */}
                    <SideNavItem
                        onClick={() => setShowResultMessageMenu(prev => !prev)}
                        style={{
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            userSelect: 'none'
                        }}
                    >
                        Result Message Registration
                    </SideNavItem>

                    {/* Alt başlıklar (sayfa yönlendirme yok!) */}
                    {showResultMessageMenu && (
                        <>
                            <SideNavItem
                                onClick={() => setActiveTab('register')}
                                style={{ paddingLeft: '2rem', cursor: 'pointer' }}
                            >
                                Register Result Message
                            </SideNavItem>
                            <SideNavItem
                                onClick={() => setActiveTab('list')}
                                style={{ paddingLeft: '2rem', cursor: 'pointer' }}
                            >
                                Result Message List
                            </SideNavItem>
                        </>
                    )}

                    {/* Diğer bağımsız başlıklar - örnek amaçlı */}
                    <SideNavItem onClick={() => setActiveTab(null)}>My Tasks</SideNavItem>
                    <SideNavItem onClick={() => setActiveTab(null)}>My Requests</SideNavItem>
                    <SideNavItem onClick={() => setActiveTab(null)}>Framework Versions</SideNavItem>
                    <SideNavItem onClick={() => setActiveTab(null)}>Application Management</SideNavItem>
                </SideNav>
            </div>

            {/* Üst Menü Başlığı */}
            <DrawerToggle slot="navbar" />
            <h2 slot="navbar">Result Message Management</h2>

            {/* İçerik */}
            <div style={{ padding: '1.5rem', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
                {activeTab === 'register' && <RegisterResultMessage />}
                {activeTab === 'list' && <ResultMessageList />}
            </div>
        </AppLayout>
    );
}
