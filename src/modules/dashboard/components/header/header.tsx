import style from "./header.module.css"

export default function Header(){
    return (
        <div>
            <div className={style.header}>
                <h1> Open Weather API</h1>
            </div>
        </div>
    )
}