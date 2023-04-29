/* eslint-disable i18next/no-literal-string */
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto tempora eveniet
        fugiat quae accusantium nisi exercitationem ipsam reprehenderit vitae facilis ullam
        repudiandae consequatur animi omnis, unde possimus dolor distinctio consectetur id! Quos,
        totam eos! Nesciunt cupiditate tempora ea,
        amet exercitationem rem, harum sequi doloribus minus esse omnis quo nisi fuga?
      </Modal>
    </div>
  );
};
