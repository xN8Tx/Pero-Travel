import React, {useState} from 'react';
import HeadingThree from '../../../../ui/headings/HeadingThree/HeadingThree';
import './CatalogSidebarFilter.css';

interface ICatalogSidebarFilter {
    children: React.ReactNode;
    title: string;
}

const CatalogSidebarFilter = ({children, title}: ICatalogSidebarFilter) => {
    const [open, setOpen] = useState<boolean>(true)
    return (
        <div className='CatalogSidebarFilter'>
            <div className='CatalogSidebarFilterTitle' onClick={() => setOpen(!open)}>
                <HeadingThree>{title}</HeadingThree>
                <div className={open ? 'CatalogSidebarFilterButton' : 'CatalogSidebarFilterButton active'}>
                    <span></span>
                </div>
            </div>
            <div className={open ? 'CatalogSidebarFilterContent' : 'CatalogSidebarFilterContent active'}>
                {children}
            </div>
        </div>
    );
};

export default CatalogSidebarFilter;