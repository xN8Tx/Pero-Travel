import React, {useState} from 'react';
import './CatalogSidebarGroupBtn.css'

interface ICatalogSidebarGroupBtn {
    children: React.ReactNode;
    status: boolean;
    data?: any;
}

const CatalogSidebarGroupBtn = ({children, status, data, ...props}: ICatalogSidebarGroupBtn) => {
    const [active, setActive] = useState(status) 
    return (
        <button className={active ? 'CatalogSidebarGroupBtn active' : 'CatalogSidebarGroupBtn'}
            onClick={() => {
                setActive(!active)
            }} 
            {...props}
        >
            {children}
        </button>
    );
};

export default CatalogSidebarGroupBtn;