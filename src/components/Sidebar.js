import React from 'react';
import APILink from './APILink';

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.organizationConfig = props.organizationConfig
        this.apiLinks = []
        this.apiLinksRefs = []
        this.deselectElement = this.deselectElement.bind(this)

        for (let i = 0; i < props.links.length; i++) {
            this.apiLinks.push(
                <APILink
                    ref={(node) => {this.apiLinksRefs.push(node)}}
                    key={i}
                    id={i}
                    apiLinkData={props.links[i]}
                    updateDefinitionLink={props.updateDefinitionLink}
                    deselectElement={this.deselectElement}
                />
            )
        }
        this.selectedElement = 0
    }

    deselectElement(id) {
        console.log(this.apiLinksRefs)
        this.apiLinksRefs[this.selectedElement].setSelected(false)
        this.selectedElement = id
    }

    componentDidMount() {
        this.apiLinksRefs[this.selectedElement].setSelected(true)
    }

    render() {
        return (
            <div className="side-bar">
                <div className="side-bar-header">
                    <h1>{this.organizationConfig.displayName}</h1>
                </div>
                <div className="side-bar-body">
                    <h3>API DOCS</h3>
                    {this.apiLinks}
                </div>
            </div>
        )
    }
}

export default Sidebar;