import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import NewsCenter from '@/components/news-center/news-center'
import NewsCenterDetails from '@/components/news-center-details/news-center-details'
import Recruitment from '@/components/recruitment/recruitment'
import RecruitmentDetails from '@/components/recruitment-details/recruitment-details'
import Introduce from '@/components/introduce/introduce'
import ManagementTeam from '@/components/management-team/management-team'
import DevelopmentCatalogue from '@/components/development-catalogue/development-catalogue'
import QualificationHonor from '@/components/qualification-Honor/qualification-Honor'
import ContactUs from '@/components/contact-us/contact-us'
import SuccessCase from '@/components/success-case/success-case'
import Product from '@/components/product/product'
import ProductDetails from '@/components/product-details/product-details'
import Culture from '@/components/Culture/Culture'

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      const position = {}
      if (to.hash) {
        position.selector = to.hash
      }
      if (to.matched.some(m => m.meta.scrollToTop)) {
        position.x = 0
        position.y = 0
      }
      return position
    }
  },
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/newsCenter',
      component: NewsCenter,
      children: [
        {
          path: ':id',
          component: NewsCenterDetails,
        }
      ]
    },
    {
      path: '/recruitment',
      component: Recruitment,
      children: [
        {
          path: ':id',
          component: RecruitmentDetails
        }
      ]
    },
    {
      path: '/introduce',
      component: Introduce
    },
    {
      path: '/managementTeam',
      component: ManagementTeam
    },
    {
      path: '/developmentCatalogue',
      component: DevelopmentCatalogue
    },
    {
      path: '/qualificationHonor',
      component: QualificationHonor
    },
    {
      path: '/contactUs',
      component: ContactUs
    },
    {
      path: '/successCase',
      component: SuccessCase
    },
    {
      path: '/product',
      component: Product,
      children: [
        {
          path: ':id',
          component: ProductDetails
        }
      ]
    },
    {
      path: '/culture',
      component: Culture
    }
  ]
})
