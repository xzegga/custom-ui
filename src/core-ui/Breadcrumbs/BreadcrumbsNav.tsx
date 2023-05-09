import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import BreadcrumbItem from './BreadcrumbItem'

const BreadcrumbsNav = () => {
  return (
    <Breadcrumbs>
        <BreadcrumbItem >Dashboard</BreadcrumbItem>
        <BreadcrumbItem >Management Dashboard</BreadcrumbItem>
    </Breadcrumbs>
  )
}

export default BreadcrumbsNav