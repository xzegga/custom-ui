import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import BreadcrumbItem from './BreadcrumbItem';

interface BreadcrumbsProps {
  items: page[];
}
interface page {
  label: string;
  link: string;
}

const BreadcrumbsNav: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <Breadcrumbs>
      {items.map((item, key) => {
        return (
          <BreadcrumbItem onClick={() => alert(item.link)} key={key}>
            {item.label}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumbsNav;
