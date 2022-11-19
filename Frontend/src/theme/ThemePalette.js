import colors from '../assets/scss/_variables.scss';

function ThemePalette() {
    const color=colors
    return {
        primary:{
            main:color.primaryMain,
            contrastText:color.primaryLight,

        }
    }
}

export default ThemePalette;