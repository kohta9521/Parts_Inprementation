import React from 'react';
import { useTranslation } from 'react-i18next';

export const TestComponent = () => {
  const { t } = useTranslation();
  return <div>{t('test.message')}</div>;
}