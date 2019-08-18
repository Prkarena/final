import React from 'react'
import CMS from 'netlify-cms'
import './cms-utils'

import { HomePageTemplate } from '../templates/HomePage'
import { ProductsPageTemplate } from '../templates/ProductsPage'
import { QualitiesPageTemplate } from '../templates/QualitiesPage'
import { ContactPageTemplate } from '../templates/ContactPage'
import { AboutPageTemplate } from '../templates/AboutPage'
import { CareersPageTemplate } from '../templates/CareersPage'

if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  CMS.registerPreviewStyle(
    window.localStorage.getItem('netlifySiteURL') + '/styles.css'
  )
} else {
  CMS.registerPreviewStyle('/styles.css')
}

CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <HomePageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('products-page', ({ entry }) => (
  <ProductsPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('qualities-page', ({ entry }) => (
  <QualitiesPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('contact-page', ({ entry }) => (
  <ContactPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('careers-page', ({ entry }) => (
  <CareersPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('about-page', ({ entry }) => (
  <AboutPageTemplate {...entry.toJS().data} />
))