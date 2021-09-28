import React from 'react';

class APILink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
    this.name = props.apiLinkData.name
    this.apiLink = props.apiLinkData.url
    this.updateDefinitionLink = props.updateDefinitionLink
    this.id = props.id
    this.deselectElement = props.deselectElement
    this.setSelected = this.setSelected.bind(this)
  }

  handleClick() {
    this.updateDefinitionLink(this.apiLink, this.id)
    this.deselectElement(this.id)
    this.setState({
      selected: true
    })
  }

  setSelected(val) {
    this.setState({
      selected: val
    })
  }

  render() {
    if (this.state.selected) {
      return (
        <div className="api-link selected" onClick={() => this.handleClick()}>
          {this.name}
        </div>
        )
    } else {
      return (
        <div className="api-link" onClick={() => this.handleClick()}>
          {this.name}
        </div>
        )
    }
    
  }
}

export default APILink;