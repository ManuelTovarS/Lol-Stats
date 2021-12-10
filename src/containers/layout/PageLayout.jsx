import React, { Fragment } from 'react'
import Header from '../../components/Header/Header';

const PageLayout = ({children}) => {
    return (
        <Fragment>
            <Header/>
            {children}
        </Fragment>
    )
}

export default PageLayout;
