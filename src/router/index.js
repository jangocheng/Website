import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import ('@/components/home/home')
const NewsCenter = () => import ('@/components/news-center/news-center')
const NewsCenterDetails = () => import ('@/components/news-center-details/news-center-details')
const Recruitment = () => import ('@/components/recruitment/recruitment')
const RecruitmentDetails = () => import ('@/components/recruitment-details/recruitment-details')
const Introduce = () => import ('@/components/introduce/introduce')
const ManagementTeam = () => import ('@/components/management-team/management-team')
const DevelopmentCatalogue = () => import ('@/components/development-catalogue/development-catalogue')
const QualificationHonor = () => import ('@/components/qualification-Honor/qualification-Honor')
const ContactUs = () => import ('@/components/contact-us/contact-us')
const SuccessCase = () => import ('@/components/success-case/success-case')
const Product = () => import ('@/components/product/product')
const ProductDetails = () => import ('@/components/product-details/product-details')
const Culture = () => import ('@/components/Culture/Culture')
const PageNotFound = () => import ('@/components/page-not-found/page-not-found')

Vue.use(Router)

export default new Router({
  mode: 'hash',
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
      if(to.query.y > 0) {
        position.x = 0
        position.y = to.query.y
      }
      return position
    }
  },
  routes: [
    {
      path: '/',
      component: Home,
      redirect:'/index'
    },
    {
      path: '/index',
      component: Home
    },
    {
      path: '/newsCenter',
      component: NewsCenter,
      children: [
        {
          path: 'newsDetails',
          component: NewsCenterDetails,
        }
      ]
    },
    {
      path: '/recruitment',
      component: Recruitment,
      children: [
        {
          path: 'recruitmentDetails',
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
          path: 'productDetails',
          component: ProductDetails,
          meta:{
            isKeepAlive:true
          }
        }
      ]
    },
    {
      path: '/culture',
      component: Culture
    },
    {
      path: "*",
      component: PageNotFound
    }
  ]
})
