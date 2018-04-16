import React from 'react';
import { Panel } from 'react-bootstrap';

const panelWithHeader = ({title, children}) => {
	return (
		<div>
            <Panel bsStyle="info">
                <Panel.Heading>
                  <Panel.Title componentClass="h3">{title}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    {children}
                </Panel.Body>
            </Panel>            
        </div>
	)
}

export default panelWithHeader;