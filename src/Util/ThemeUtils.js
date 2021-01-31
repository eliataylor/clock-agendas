export function lightOrDark(color) {

    // Variables for red, green, blue values
    var r, g, b, hsp;

    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {

        // If HEX --> store the red, green, blue values in separate variables
        color = color.match(/rgba\(\s*(-?\d+|-?\d*\.\d+(?=%))(%?)\s*,\s*(-?\d+|-?\d*\.\d+(?=%))(\2)\s*,\s*(-?\d+|-?\d*\.\d+(?=%))(\2)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/);
        r = color[1];
        g = color[2];
        b = color[3];
    } else {

        // If RGB --> Convert it to HEX: http://gist.github.com/983661
        color = +("0x" + color.slice(1).replace(
            color.length < 5 && /./g, '$&$&'));

        r = color >> 16;
        // eslint-disable-next-line
        g = color >> 8 & 255;
        // eslint-disable-next-line
        b = color & 255;
    }

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );

    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5) {

        return 'light';
    } else {

        return 'dark';
    }
}
const drawerWidth = 240;


export const rallyStyles = theme => ({
    root: {
        width: '100%',
    },
    title : {
        fontSize:46,
        fontWeight:100
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    popPadding: {
        padding: theme.spacing(1),
    },
    actionsContainer: {
        textAlign:'left',
        marginTop: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
    stepSection: {
        paddingLeft:0, marginBottom:14, marginTop:10
    },
    stepTimeBlock : {
        fontSize:19,
    },
    stepLabel : {
        paddingLeft:20,
        display:"flex",
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    stepLabelText : {
        fontSize:19,
        fontWeight:700,
    },
    stepContent : {
        paddingLeft:45,
        paddingBottom:10,
        borderBottom:'1px solid #ccc'
    },
    topLevelLabel : {
        color:theme.palette.primary.main,
        display:'flex',
        boxShadow:'1px 1px 3px 2px #e6e6e6',
        justifyContent:'space-between',
        alignContent:'center',
        textAlign:'left',
        padding:10,
        fontSize:26,
        fontWeight:900,
        borderRadius:'0px 5px 5px 0px'
    },
    field: {
        marginBottom:theme.spacing(2)
    },
    tabsVert: {
        borderLeft: `1px solid ${theme.palette.divider}`,
        width:45,
        height:'100%'
    },
    tabsHorz : {
        width:'100%',
        borderLeft: `1px solid ${theme.palette.divider}`,
        borderTop: `1px solid ${theme.palette.divider}`,
        borderRight: `1px solid ${theme.palette.divider}`,
        borderRadius:'5px 5px 0 0',
    },
    spaceAround : {
        justifyContent:'space-around'
    },
    tabsIcon : {
        minWidth:25
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    agendaContent: {
        position:'relative',
        display:'flex',
        wrap:'nowrap',
        justifyContent:'space-between'
    },
    hide : {
        display:'none'
    },
    drawer: {
        position:'relative',
        right:0,
        top:0,
        flexShrink: 0,
    },
    drawerInner : {
        position:'relative',
        right:0,
        top:0,
    },
    vertStepper: {
        flexGrow:1,
        padding:'24px 14px 24px 14px',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    }
});
