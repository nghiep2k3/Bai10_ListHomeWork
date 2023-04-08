import style from "./styles.module.css";

export default function Th1(){
    return(
        <div>
            <div className={style.container}>
                <div className={style.left}>Left</div>
                <div className={style.right}>Right</div>
            </div>
        </div>
    )
}