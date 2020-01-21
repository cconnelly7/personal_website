import React from 'react';
import './css/ContentPanel.css';

class ContentPanel extends React.Component {

    render () {
     
        return (
            <div className='column'>
                {this.props.children}
            </div>
        )
    }
}

export default ContentPanel;