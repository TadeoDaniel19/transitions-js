import Home from './Home'
import RubberBall from './components/bounceBall';
import DraggableList from './components/divMove';
import BouncingBall from './components/animationTwo';
import SwitchButton from './components/switchButton';
import SimpleTranslation from './components/transtion';
import DragWithMotionValue from './components/moveTransition';
import { Example } from './components/checkbox';
import AppleWatchDock from './components/scroll';
import Draw from './components/draw';
import Simple from './components/simpleAnimation';

const Routes = [
  {
    path: '/',
    sidebarName: 'Inicio',
    component: Home,
  },
  {
    path: '/drag-div',
    sidebarName: 'Ver/ocultar animación',
    component: DraggableList,
  },
  {
    path: '/boucing',
    sidebarName: 'Pelota Rebotando',
    component: BouncingBall,
  },
  {
    path: '/switch',
    sidebarName: 'Botón Switch',
    component: SwitchButton,
  },
  {
    path: '/transition',
    sidebarName: 'Transición 360º',
    component: SimpleTranslation,
  },
  {
    path: '/balls',
    sidebarName: 'Pelotas',
    component: RubberBall,
  },
  {
    path: '/checkboxes',
    sidebarName: 'Checkbox',
    component: Example,
  },
  {
    path: '/controller-transition',
    sidebarName: 'Transición Controlada',
    component: DragWithMotionValue,
  },
  {
    path: '/scroll-s',
    sidebarName: 'Scroll',
    component: AppleWatchDock,
  },
  {
    path: '/draw',
    sidebarName: 'Arrastrar',
    component: Draw,
  },
  {
    path: '/simple',
    sidebarName: 'Rebote',
    component: Simple,
  },
];

export default Routes;