import React, { useState } from 'react'
import Link from 'next/link'

import { HeaderLogOutData } from './HeaderData'
import { SidebarData } from './SidebarData'

import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons'

import {
  Container,
  Wrapper,
  SearchHeaderForm,
  NavItem,
  Sidebar,
  SearchSidebar,
  SearchSidebarForm,
  SidebarOverlay,
} from './styles'

interface Props {
  showLogOut?: boolean
}

const HeaderLogOut: React.FC<Props> = ({ showLogOut = false }) => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <IconContext.Provider value={{ color: '#f5f5f5' }}>
      <Container>
        <Wrapper>
          <div className="left">
            <Link href="#">
              <a>
                <FaIcons.FaBars onClick={showSidebar} />
              </a>
            </Link>

            <Link href="/">
              <a className="logo">Estudai</a>
            </Link>
            <SearchHeaderForm>
              <input placeholder="Pesquisar"></input>
            </SearchHeaderForm>
          </div>

          <div className="right">
            <nav>
              <ul>
                {HeaderLogOutData.map((item, index) => {
                  if (index === 2) {
                    if (showLogOut) {
                      return (
                        <NavItem key={index}>
                          <Link
                            href={item.location}
                            // title={item.name}
                            // onClick={item.click}
                          >
                            <a>{item.icon}</a>
                          </Link>
                        </NavItem>
                      )
                    } else {
                      return null
                    }
                  }
                  return (
                    <NavItem key={index}>
                      <Link href={item.location} /* title={item.name} */>
                        <a>{item.icon}</a>
                      </Link>
                    </NavItem>
                  )
                })}
              </ul>
            </nav>
          </div>

          <Sidebar className={sidebar ? 'active' : ''}>
            <SearchSidebar>
              <li>
                <SearchSidebarForm>
                  <input placeholder="Pesquisar" />
                </SearchSidebarForm>
              </li>
            </SearchSidebar>
            <ul>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.liClass}>
                    <Link href={item.path}>
                      <a>
                        {item.icon}
                        <span>{item.title}</span>
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Sidebar>

          <SidebarOverlay
            className={sidebar ? 'active' : ''}
            onClick={showSidebar}
          ></SidebarOverlay>
        </Wrapper>
      </Container>
    </IconContext.Provider>
  )
}
export default HeaderLogOut
