import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'
import MailIcon from '@material-ui/icons/core/Mail'

const list = [
  {
    primaryText: 'Home',
    icon: 'home'
  },
  {
    primaryText: 'Projects',
    icon: 'folder'
  },
  {
    primaryText: 'Hobbies',
    icon: 'games'
  },
  {
    primaryText: 'About',
    icon: 'info'
  },
  {
    primaryText: 'Contact',
    icon: 'contact_phone'
  }
]

function NavList () {
  return (
    <div>
      {list.map(({ primaryText, icon }, i) => (
        <ListItem key={primaryText} button>
          <ListItemIcon>
            <Icon>{icon}</Icon>
          </ListItemIcon>
          <ListItemText
            primary={primaryText}
            primaryTypographyProps={{ noWrap: true }}
          />
          <MailIcon />
        </ListItem>
      ))}
    </div>
  )
}
export default NavList
