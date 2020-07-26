/**
 * Created by Administrator on 2017/8/3.
 */
import Loadable from 'react-loadable'


const loadComponent = (component) => {
	return Loadable({
		loader: () => import(`../containers/${component}/index.js`),
		loading: () => null
	})
}

const routes = [
	{
		path: '/search',
		component: loadComponent('Search'),
		exact: true,
		title: '登录'
	}
]

export default routes