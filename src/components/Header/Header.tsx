import { ChevronRightIcon } from '../../icons';
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './Header.css';
import { getAssetUrl } from '../../utils/getAssetUrl';

const Header: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] =
    useState<string>(currentPath);
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Início', path: '/' },
    { label: 'Sobre nós', path: '/sobre-nos' },
    { label: 'Serviços', path: '/servicos' },
    { label: 'Contato', path: '/contato' },
  ];

  const handleNavigate = (path: string) => {
    setIsMenuOpen(false);
    setSelectedMenuItem(path);
    navigate(path);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Navbar
      isBordered
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      shouldHideOnScroll
      className="header--navbar"
    >
      {!isMenuOpen && (
        <NavbarContent>
          <NavbarBrand>
            <Link href={getAssetUrl('/')} className="header--logo-link">
              <img
                src={getAssetUrl('logo.svg')}
                alt="Severino App logo"
                className="header--logo"
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>
      )}
      <NavbarContent className="header--menu-large" justify="end">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.label}-${index}`}>
            <Link
              type="button"
              onClick={() => handleNavigate(item.path)}
              className={`header--menu-large-item-link ${item.path === selectedMenuItem ? 'header--menu-large-item-link-selected' : ''}`}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="header--menu-icon" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        />
      </NavbarContent>
      <NavbarMenu className="header--menu">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              type="button"
              onClick={() => handleNavigate(item.path)}
              className="header--menu-item-link"
            >
              {item.label}
              <ChevronRightIcon
                size={16}
                className="header--menu-item-chevron"
              />
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
