import './ThemeSelector.css'
import modeIcon from '../asset/brightness_6_black_24dp.svg'
import { useTheme } from '../hooks/useTheme';
const themeColors = ['#58249c','#ffffff']

export default function ThemeSelector() {
    const {changeMode,mode, changeColor } = useTheme();
    
    const toggleMode = () =>{
        changeMode(mode === 'dark' ? 'light':'dark');
        console.log(mode);
    }
    
    return (
        <div className="theme-selector">
            <div className="mode-toggle">
                <img
                alt=""
                src={modeIcon}
                onClick={toggleMode}
                style={{filter:mode==='dark' ? 'invert(100%)':'invert(20%)'}}
                />

            </div>
            <div className="theme-buttons">
                {themeColors.map(color =>(
                    <div 
                    style={{backgroundColor: color}}
                    key={color} 
                    onClick={()=>changeColor(color)}/>

                ))}
            </div>

        </div>
    )
}