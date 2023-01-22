import React, { PureComponent } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import { asynRouter } from '@/router/router'

class Side extends PureComponent {
  constructor(props) {
    super()
    this.state = {
      selectKeys: [props.location.pathname || '/'],
      openKeys: [],
      menuItem: '',
    }
  }
  componentDidMount() {
    const { history, location } = this.props
    let openKeys = this.getOpenkeys(location.pathname || '/')
    this.setState({
      openKeys: openKeys,
    })

    history.listen((item) => {
      console.log('change')
      let openKeys = this.getOpenkeys(item.pathname || '/')
      this.setState({
        selectKeys: [item.pathname || '/'],
        openKeys: openKeys,
      })
      document.scrollingElement.scrollIntoView({
        behavior: 'smooth',
      })
    })
    this.setState({ menuItem: this.renderSubMenu(asynRouter, '/') })
  }
  getOpenkeys = (key) => {
    let openKeys = key.split('/').map((item, index, arr) => {
      return arr.slice(0, index + 1).join('/')
    })
    openKeys.shift()
    return openKeys
  }
  openChange = (openKeys) => {
    this.setState({
      openKeys: openKeys,
    })
  }
  renderSubMenu = (route, parentRoute) => {
    return route.map((item) => {
      if (item.path === '*') {
        return null
      }
      let newPath
      newPath = `${item.path}`
      newPath = newPath.replace(/\/+/g, '/')
      if (item.children) {
        return (
          <Menu.SubMenu
            path={newPath}
            key={newPath}
            title={
              <span>
                <MailOutlined />
                <span>{item.meta.title}</span>
              </span>
            }
          >
            {item.children && this.renderSubMenu(item.children, newPath)}
          </Menu.SubMenu>
        )
      } else {
        return (
          <Menu.Item path={newPath} key={newPath}>
            <Link to={newPath}>
              <MailOutlined />
              <span>{item.meta.title}</span>
            </Link>
          </Menu.Item>
        )
      }
    })
  }

  render() {
    // console.log(this.props);
    const { collapsed } = this.props
    const { openKeys, selectKeys, menuItem } = this.state
    const defaultProps = collapsed ? {} : { openKeys }
    return (
      <Menu theme="dark" mode="inline" onOpenChange={this.openChange} selectedKeys={selectKeys} {...defaultProps}>
        {menuItem}
      </Menu>
    )
  }
}

export default withRouter(Side)
