import styles from './style.module.css';
import { AppBtn } from './style';
import meme from './asset/meme.png'
import { ReactComponent as meme2 } from './asset/meme.png';

const AppButton = () => {
    return (
        <div>
            <AppBtn>Test</AppBtn>
            {/* <img src={meme} /> */}
            <meme2/>
        </div>
        
    )
}

export default AppButton