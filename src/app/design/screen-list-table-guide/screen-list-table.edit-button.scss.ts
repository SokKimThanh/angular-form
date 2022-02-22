const MATMENU = {
    padding: '0',
    margin: '5px 4px',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'space-around',
    'background-color': '#168FC4',
    'border-radius': '10px',
};
const minHeight = 40;
const minWidth = 40;
const MATMENUITEM = {
    display: 'flex',
    'flex-flow': 'column',
    'justify-content': 'center',
    'align-items': 'center',
    'box-sizing': 'border-box',
    'min-width': `${minHeight}px`,
    'min-height': `${minWidth}px`,
    color: '#168FC4',
    'font-family': 'Roboto',
    'font-style': 'normal',
    'font-weight': '300',
    'font-size': '1rem',
    'line-height': '21px',
    transform: 'translateY(0)',
    'box-shadow': '0px 0 0 black',
    transition: 'all 0.1s ease-in-out',
    background: '#FFB65E',
    outline: 0,
    border: '1px solid #168FC4',
    'border-radius': '50%',
    cursor: 'pointer',
};
const MATMENUITEMMATICON = {
    margin: 0,
    color: '#fff',
    'border-radius': '50%'
};
export {
    MATMENU as matMenu,
    MATMENUITEM as matMenuItem,
    MATMENUITEMMATICON as matMenuItemMatIcon
};
