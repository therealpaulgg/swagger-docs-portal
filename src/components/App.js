import React from 'react'
import '../App.sass';
import SwaggerUI from 'swagger-ui'
import "../../node_modules/swagger-ui/dist/swagger-ui.css"
import OrgConfig from "../config//organization_config.json"
import DocConfig from "../config/documents.json"
import Sidebar from "./Sidebar"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      // Default link for when the page is immediately loaded.
      definitionLink: DocConfig.items[0].url
    }
    // bind so other components know that it is THIS component
    this.updateDefinitionLink = this.updateDefinitionLink.bind(this)
  }

  updateDefinitionLink(newLink) {
    // Do not refresh document if the link currently selected is clicked.
    if (this.state.definitionLink !== newLink) {
      this.setState({
        definitionLink: newLink
      })
    }
    
  }

  componentDidMount() {
    SwaggerUI({
      domNode: document.getElementById("api-data"),
      url: this.state.definitionLink
    })
  }

  componentDidUpdate() {
    SwaggerUI({
      domNode: document.getElementById("api-data"),
      url: this.state.definitionLink
    })
  }

  // componentDidUnmount??

  componentWillMount() {
    this.setState({
      organizationConfig: OrgConfig.orgData,
      documentConfig: DocConfig.items
    })
  }

  render() {
    return (
      <div className="App">
        <Sidebar
          organizationConfig={this.state.organizationConfig}
          definitionLink={this.state.definitionLink}
          updateDefinitionLink={this.updateDefinitionLink}
          links={this.state.documentConfig}
        />
        <div id="api-data"></div>
      </div>
    );
  }
}

export default App;
